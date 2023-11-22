import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Topic } from './topics/topic.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './users/user.module';
import { TopicModule } from './topics/topic.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profiles/profile.module';
import { CommentModule } from './comments/comment.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'adminadmin',
      signOptions: {expiresIn: '24h'} 
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '#User-0147',
      database: 'prm_2023',
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    TopicModule,
    AuthModule,
    ProfileModule,
    CommentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { HttpCode } from '@nestjs/common';
import { Body, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './../services/auth.service';
import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly service: AuthService,
        private readonly jwtService: JwtService
    ){}

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() credential: Record<string, string>) {

        const found = await this.service.validateCredential(credential.username, credential.password);

        if(!found){
            throw new UnauthorizedException();
        }

        const payload = {userId: found.id, userName: found.username}
        const token = await this.jwtService.signAsync(payload);

        return {
            accesToken: token
        };

    }

}
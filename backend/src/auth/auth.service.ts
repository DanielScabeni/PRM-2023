import { ApplicationException } from '../@exceptions/index';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}

    async validateCredential(username: string, password: string): Promise<User> {
        const found: User = await this.repository.findOneBy({username: username});

        if (!found) {
            throw new ApplicationException('Invalid user', 401)
        }

        if (found.password !== password) {
            throw new ApplicationException('Invalid password', 401)
        }

        return found;
    }

}
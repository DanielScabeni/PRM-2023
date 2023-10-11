import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from '@nestjs/jwt';
import { UserService } from "src/services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
       private readonly jwtService: JwtService,
       private readonly userService: UserService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        //verifico se o token existe
        if(!token) {
            throw new UnauthorizedException('Token inexistente')
        }

        //verifico se o token é válidio
        let username = '';

        try {
            const payload = await this.jwtService.verifyAsync(token)
            username = payload.userName;

            console.log('Buuuu: ', payload)
        } catch {
            throw new UnauthorizedException('Token Inválido')
        }

        //To-do: verificar se o usuário do payload está cadastrado
        const found = await this.userService.findByUsername(username);

        if (!found) {
            throw new UnauthorizedException('Usuário não encontrado');
            
        }

        return true;
    }

    extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type == 'Bearer' ? token : undefined;


    }
}
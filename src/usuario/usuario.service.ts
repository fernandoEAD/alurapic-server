/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Usuario } from './usuario.entity';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioService {
    private usuarios: Array<Usuario> = [{
        id: 1,
        nomeDeUsuario: 'gabriel',
        email: 'gabriel.leite@alura.com.br',
        senha: '123456',
        nomeCompleto: 'Gabriel Leite',
        dataDeEntrada: new Date()
    }];

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario = nomeDeUsuario);
    }
}
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

    //private usuarioService = new UsuarioService
    constructor(private usuarioService: UsuarioService) {}

    // /users/gabriel
    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {

        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuario;
    }
}
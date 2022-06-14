/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Module } from "@nestjs/common";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule {}
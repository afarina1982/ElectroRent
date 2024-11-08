import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arriendo } from './entity/arriendo.entity';
import { Cliente } from './entity/cliente.entity';
import { Categoria } from './entity/categoria.entity';
import { Dispositivo } from './entity/dispositivo.entity';
import { In } from 'typeorm';
import { Inventario } from './entity/inventario.entity';
import { ArriendoDispositivo } from './entity/arriendo_dispositivo.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [
                Arriendo,
                Cliente,
                Categoria,
                Dispositivo,
                Inventario,
                ArriendoDispositivo,
            ],
        })
    ],
})
export class OrmModule { }

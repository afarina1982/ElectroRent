import { Module } from '@nestjs/common';
import { ArriendosService } from './arriendos.service';
import { ArriendosController } from './arriendos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arriendo } from 'src/orm/entity/arriendo.entity';
import { Dispositivo } from 'src/orm/entity/dispositivo.entity';
import { ArriendoDispositivo } from 'src/orm/entity/arriendo_dispositivo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Arriendo,Dispositivo,ArriendoDispositivo]),
  ],
  controllers: [ArriendosController],
  providers: [ArriendosService],
})
export class ArriendosModule {}

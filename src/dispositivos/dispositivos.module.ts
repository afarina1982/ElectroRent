import { Module } from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { DispositivosController } from './dispositivos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispositivo } from 'src/orm/entity/dispositivo.entity';
import { Inventario } from 'src/orm/entity/inventario.entity';
import { ArriendoDispositivo } from 'src/orm/entity/arriendo_dispositivo.entity';
import { Arriendo } from 'src/orm/entity/arriendo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Dispositivo, Inventario, ArriendoDispositivo, Arriendo
    ]),
  ],
  controllers: [DispositivosController],
  providers: [DispositivosService],
})
export class DispositivosModule {}

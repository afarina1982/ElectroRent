import { Module } from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { DispositivosController } from './dispositivos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispositivo } from 'src/orm/entity/dispositivo.entity';
import { Inventario } from 'src/orm/entity/inventario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Dispositivo, Inventario
    ]),
  ],
  controllers: [DispositivosController],
  providers: [DispositivosService],
})
export class DispositivosModule {}

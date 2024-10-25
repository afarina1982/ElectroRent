import { Module } from '@nestjs/common';
import { ArriendoDispositivosService } from './arriendo_dispositivos.service';
import { ArriendoDispositivosController } from './arriendo_dispositivos.controller';

@Module({
  controllers: [ArriendoDispositivosController],
  providers: [ArriendoDispositivosService],
})
export class ArriendoDispositivosModule {}

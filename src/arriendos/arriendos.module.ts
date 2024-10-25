import { Module } from '@nestjs/common';
import { ArriendosService } from './arriendos.service';
import { ArriendosController } from './arriendos.controller';

@Module({
  controllers: [ArriendosController],
  providers: [ArriendosService],
})
export class ArriendosModule {}

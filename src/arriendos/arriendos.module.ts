import { Module } from '@nestjs/common';
import { ArriendosService } from './arriendos.service';
import { ArriendosController } from './arriendos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arriendo } from 'src/orm/entity/arriendo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Arriendo]),
  ],
  controllers: [ArriendosController],
  providers: [ArriendosService],
})
export class ArriendosModule {}

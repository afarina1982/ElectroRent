import { Injectable } from '@nestjs/common';
import { CreateArriendoDispositivoDto } from './dto/create-arriendo_dispositivo.dto';
import { UpdateArriendoDispositivoDto } from './dto/update-arriendo_dispositivo.dto';

@Injectable()
export class ArriendoDispositivosService {
  create(createArriendoDispositivoDto: CreateArriendoDispositivoDto) {
    return 'This action adds a new arriendoDispositivo';
  }

  findAll() {
    return `This action returns all arriendoDispositivos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arriendoDispositivo`;
  }

  update(id: number, updateArriendoDispositivoDto: UpdateArriendoDispositivoDto) {
    return `This action updates a #${id} arriendoDispositivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} arriendoDispositivo`;
  }
}

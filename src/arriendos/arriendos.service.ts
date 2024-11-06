import { Injectable } from '@nestjs/common';
import { CreateArriendoDto } from './dto/create-arriendo.dto';
import { UpdateArriendoDto } from './dto/update-arriendo.dto';
import { Arriendo } from '../orm/entity/arriendo.entity';


@Injectable()
export class ArriendosService {
arriendo: Arriendo[] = [];

constructor() {
  this.arriendo.push(new Arriendo("1", "12345678-9", new Date(), new Date(), 10000));
  this.arriendo.push(new Arriendo("2", "12345678-9", new Date(), new Date(), 10000));
  this.arriendo.push(new Arriendo("3", "12345678-9", new Date(), new Date(), 10000));
}

  create(createArriendoDto: CreateArriendoDto) {
    return 'This action adds a new arriendo';
  }

  findAll() {
    return `This action returns all arriendos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arriendo`;
  }

  update(id: number, updateArriendoDto: UpdateArriendoDto) {
    return `This action updates a #${id} arriendo`;
  }

  remove(id: number) {
    return `This action removes a #${id} arriendo`;
  }
}

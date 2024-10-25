import { Injectable } from '@nestjs/common';
import { CreateArriendoDto } from './dto/create-arriendo.dto';
import { UpdateArriendoDto } from './dto/update-arriendo.dto';

@Injectable()
export class ArriendosService {
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

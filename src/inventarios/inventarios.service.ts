import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Injectable()
export class InventariosService {
 

  findOne(id: number) {
    return `This action returns a #${id} inventario`;
  }

}

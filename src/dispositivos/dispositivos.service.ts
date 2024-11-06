import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { Dispositivo } from '../orm/entity/dispositivo.entity';

@Injectable()
export class DispositivosService {

dispositivo: Dispositivo[] = [];  

constructor() {
  this.dispositivo.push(new Dispositivo('94211476-8d5c-4c23-a0f5-0e4d23d84cee', 'NOT-01', 'Samsung', 'Modelo1', 'NUEVO', 1));
  this.dispositivo.push(new Dispositivo('0f749b14-4340-49fe-9320-a511a7e5e0ce', 'SMA-06', 'Acer', 'Modelo6', 'FUERA_DE_SERVICIO', 2));
}

  create(createDispositivoDto: CreateDispositivoDto): string {
    this.dispositivo.push(new Dispositivo(createDispositivoDto.id, createDispositivoDto.codigo, createDispositivoDto.marca, createDispositivoDto.modelo, createDispositivoDto.estado, createDispositivoDto.id_categoria));
    return 'Dispositivo creado con éxito';
  }

  findAll(): Dispositivo[] {
    return this.dispositivo;
  }

}

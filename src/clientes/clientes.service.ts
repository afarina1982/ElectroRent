import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  private clientes: Cliente[] = [];

  constructor() {
    this.clientes.push(new Cliente('17.669.435-4', 'Cliente 4', 'cliente4@gmail.com', 'Calle 4 Nº607'));
    this.clientes.push(new Cliente('11.632.388-5', 'Cliente 5', 'cliente5@gmail.com', 'Calle 5 Nº321'));
    this.clientes.push(new Cliente('19.784.104-7', 'Cliente 7', 'cliente7@gmail.com', 'Calle 7 Nº564'));
  }

  create(createClienteDto: CreateClienteDto): string {
    this.clientes.push(new Cliente(createClienteDto.rut, createClienteDto.nombre, createClienteDto.correo, createClienteDto.direccion));
    return 'Cliente created successfully';
  }

  findAll():Cliente[] {
    return this.clientes;
  }

}

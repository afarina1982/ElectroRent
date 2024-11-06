import { Inject, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from '../orm/entity/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteMapper } from './mapper/cliente.mapper'; 
import { GetClienteDto } from './dto/get-create-cliente.dto';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>,
  )
   {}

  async create(createClienteDto: CreateClienteDto) : Promise<GetClienteDto> {
    const cliente : Cliente = ClienteMapper.dtoToEntity(createClienteDto);
    const clienteGuardado = await this.clienteRepository.save(cliente);
    return ClienteMapper.entityToDto(clienteGuardado);
  }
  

  /*findAll():Cliente[] {
    return this.clientes;
  }*/

}


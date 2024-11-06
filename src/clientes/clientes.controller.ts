import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { GetClienteDto } from './dto/get-create-cliente.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('clientes')
export class ClientesController {

  constructor(private readonly clientesService: ClientesService) {}

@ApiResponse({status: 201, type: GetClienteDto, description: 'El cliente ha sido creado correctamente'})
  
  @Post()
  async create(@Body() createClienteDto: CreateClienteDto): Promise<GetClienteDto> {
    return await this.clientesService.create(createClienteDto);
  }

 /* @Get()
  findAll() {
    return this.clientesService.findAll();
  }*/


}


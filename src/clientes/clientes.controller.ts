import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { GetClienteDto } from './dto/get-create-cliente.dto';
import { ApiResponse } from '@nestjs/swagger';
import { ValidacionClienteNuevoPipe } from 'src/commons/validacion-cliente-nuevo.pipe';




@Controller('clientes')
export class ClientesController {

  constructor(private readonly clientesService: ClientesService) { }

  @ApiResponse({ status: 201, type: GetClienteDto, description: 'El cliente ha sido creado correctamente' })
  @Post()
  async create(@Body(ValidacionClienteNuevoPipe) createClienteDto: CreateClienteDto): Promise<GetClienteDto> {
    return await this.clientesService.create(createClienteDto);
  }

  @Get()
  async findAll(getClienteDto: GetClienteDto): Promise<GetClienteDto[]> {
    return await this.clientesService.findAll();
  } 

}


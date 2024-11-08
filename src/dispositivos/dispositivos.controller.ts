import { Controller, Get, Post, Body, Query, Put } from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetDispositivoDto } from './dto/get-dispositivo.dto';
import { Dispositivo } from 'src/orm/entity/dispositivo.entity';
import { ApiQuery } from '@nestjs/swagger';




@Controller('dispositivos')
export class DispositivosController {
  constructor(private readonly dispositivosService: DispositivosService) { }

  @ApiResponse({ status: 201, type: CreateDispositivoDto, description: 'El dispositivo ha sido creado correctamente' })
  @Post()
  async create(@Body() createDispositivoDto: CreateDispositivoDto): Promise<GetDispositivoDto> {
    return await this.dispositivosService.create(createDispositivoDto);
  }

  @ApiResponse({ status: 200, type: [Dispositivo], description: 'Se han encontrado los dispositivos' })
  @Get('disponibles')
  @ApiOperation({ summary: 'Obtiene Dispositivos de acuerdo al estadod el inventario' })
  @ApiQuery({ name: 'categoria', required: false, description: 'Filtrar por categoría del dispositivo' })
  @ApiQuery({ name: 'estado', required: false, description: 'Filtrar por estado del dispositivo' })
  @ApiQuery({ name: 'estado_inventario', required: false, description: 'Filtrar por estado en inventario (DISPONIBLE, ARRENDADO, EN_MANTENCION)' })
  async findDisponibles(
    @Query() filters: { categoria?: string; estado?: string; estado_inventario?: string },
  ): Promise<Dispositivo[]> {
    return this.dispositivosService.findDisponibles(filters);
  }
  @ApiResponse({ status: 200, type: [Dispositivo], description: 'Se han encontrado los dispositivos' }) 
  @Get('arrendados')  
  @ApiOperation({ summary: 'Obtiene Dispositivos Arrendados de acuerdo a fecha de termino del arriendo' })
  async getArrendados(): Promise<Dispositivo[]> {
    return this.dispositivosService.findArrendados();
  }
}









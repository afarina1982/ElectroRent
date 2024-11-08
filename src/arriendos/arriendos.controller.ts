import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ArriendosService } from './arriendos.service';
import { CreateArriendoDto } from './dto/create-arriendo.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Arriendo } from 'src/orm/entity/arriendo.entity';


@Controller('arriendos')
export class ArriendosController {
  constructor(private readonly arriendosService: ArriendosService) { }

  @ApiResponse({ status: 201, type: CreateArriendoDto, description: 'El arriendo ha sido creado correctamente' })
  @Post()
  async crearArriendo(@Body() crearArriendoDto: CreateArriendoDto) {
    const { rut_cliente, fecha_inicio, fecha_fin, costo_total, dispositivos } = crearArriendoDto;
    return await this.arriendosService.crearArriendo(rut_cliente, fecha_inicio, fecha_fin, costo_total, dispositivos);
  }

  //@ApiResponse({ status: 200, type: [Arriendo], description: 'Se han encontrado los arriendos activos' })
  //@Get('cliente/:rut')
  //@ApiResponse({ status: 200, type: [Arriendo], description: 'Se han encontrado los arriendos del cliente' })
  //async obtenerArriendosActivos(@Param('rut') rut: string): Promise<Arriendo[]> {
  //  return await this.arriendosService.obtenerArriendosActivos(rut);
  //}

  @Get('cliente/:rut')  // Ruta específica para obtener los dispositivos arrendados de un cliente usando su rut
  async getArrendadosPorCliente(@Param('rut') rut_cliente: string): Promise<any[]> {
    return this.arriendosService.findByClienteId(rut_cliente);
  }


  //@Put(':id/devolver')
  //async devolverArriendo(@Param('id') id: string) {
  //  return await this.arriendosService.devolverArriendo(id);
  //}

  //@Get()  // Ruta GET con parámetros de consulta
  //async obtenerArriendosPorFecha(
  //  @Query('fecha_inicio') fechaInicio: string,
  //  @Query('fecha_fin') fechaFin: string
  // ) {
  //  console.log(`Obteniendo arriendos desde ${fechaInicio} hasta ${fechaFin}`);
  //  return { message: `Arriendos entre ${fechaInicio} y ${fechaFin}` }; 

}



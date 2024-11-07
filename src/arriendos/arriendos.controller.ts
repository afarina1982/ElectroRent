import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArriendosService } from './arriendos.service';
import { CreateArriendoDto } from './dto/create-arriendo.dto';
import { ApiResponse } from '@nestjs/swagger';
import { GetArriendoDto } from './dto/get-arriendo.dto';
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
@ApiResponse({ status: 200, type: [Arriendo], description: 'Se han encontrado los arriendos activos' })
@Get ('cliente/:rut')
@ApiResponse({ status: 200, type: [Arriendo], description: 'Se han encontrado los arriendos del cliente' })
async obtenerArriendosActivos(@Param('rut') rut: string): Promise<Arriendo[]> {
  return await this.arriendosService.obtenerArriendosActivos(rut);
}

}
/*@Get()
findAll() {
  return this.arriendosService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string) {
  return this.arriendosService.findOne(+id);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateArriendoDto: UpdateArriendoDto) {
  return this.arriendosService.update(+id, updateArriendoDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.arriendosService.remove(+id);
}*/


import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventariosService: InventariosService) {}

 
 
  //@Get('dispositivo/:id') 
  //async obtenerDispositivo(@Param('id') id: string) {
  //  return { message: `Dispositivo con ID ${id}` };  

}

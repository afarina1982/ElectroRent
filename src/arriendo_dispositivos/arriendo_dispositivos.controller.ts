import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArriendoDispositivosService } from './arriendo_dispositivos.service';
import { CreateArriendoDispositivoDto } from './dto/create-arriendo_dispositivo.dto';
import { UpdateArriendoDispositivoDto } from './dto/update-arriendo_dispositivo.dto';

@Controller('arriendo-dispositivos')
export class ArriendoDispositivosController {
  constructor(private readonly arriendoDispositivosService: ArriendoDispositivosService) {}

  @Post()
  create(@Body() createArriendoDispositivoDto: CreateArriendoDispositivoDto) {
    return this.arriendoDispositivosService.create(createArriendoDispositivoDto);
  }

  @Get()
  findAll() {
    return this.arriendoDispositivosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arriendoDispositivosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArriendoDispositivoDto: UpdateArriendoDispositivoDto) {
    return this.arriendoDispositivosService.update(+id, updateArriendoDispositivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arriendoDispositivosService.remove(+id);
  }
}

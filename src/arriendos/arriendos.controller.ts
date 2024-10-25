import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArriendosService } from './arriendos.service';
import { CreateArriendoDto } from './dto/create-arriendo.dto';
import { UpdateArriendoDto } from './dto/update-arriendo.dto';

@Controller('arriendos')
export class ArriendosController {
  constructor(private readonly arriendosService: ArriendosService) {}

  @Post()
  create(@Body() createArriendoDto: CreateArriendoDto) {
    return this.arriendosService.create(createArriendoDto);
  }

  @Get()
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
  }
}

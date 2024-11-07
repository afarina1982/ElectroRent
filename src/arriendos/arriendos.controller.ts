import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArriendosService } from './arriendos.service';
import { CreateArriendoDto } from './dto/create-arriendo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Arriendo } from 'src/orm/entity/arriendo.entity';
import { Repository } from 'typeorm';
import { ApiResponse } from '@nestjs/swagger';
import { GetArriendoDto } from './dto/get-arriendo.dto';



@Controller('arriendos')
export class ArriendosController {
  constructor(private readonly arriendosService: ArriendosService) {}

  @ApiResponse({ status: 201, type: CreateArriendoDto, description: 'El arriendo ha sido creado correctamente' })
  @Post()
  async create(@Body() createArriendoDto: CreateArriendoDto): Promise<GetArriendoDto> {
    return await this.arriendosService.create(createArriendoDto);
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
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { ApiResponse } from '@nestjs/swagger';
import { GetCategoriaDto } from './dto/get-create-categoria';


@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @ApiResponse({ status: 201, type: GetCategoriaDto, description: 'La categoria ha sido creada correctamente' })
  @Post()
  async create(@Body() createCategoriaDto: CreateCategoriaDto): Promise<GetCategoriaDto> {
    return await this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  async findAll(getCategoriaDto: GetCategoriaDto): Promise<GetCategoriaDto[]> {
    return await this.categoriasService.findAll();
  }


}

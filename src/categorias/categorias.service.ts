import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../orm/entity/categoria.entity';
import { GetCategoriaDto } from './dto/get-create-categoria';
import { CategoriaMapper } from './mapper/categoria.mapper';

@Injectable()
export class CategoriasService {

constructor(
  @InjectRepository(Categoria) private readonly categoriaRepository: Repository<Categoria>,
)
 {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<GetCategoriaDto> {
    const categoria: Categoria = CategoriaMapper.dtoToEntity(createCategoriaDto);
    const categoriaGuardada = await this.categoriaRepository.save(categoria);
    return CategoriaMapper.entityToDto(categoriaGuardada);
  }

  async findAll(): Promise<GetCategoriaDto[]> {
    const categoriasGuardadas = await this.categoriaRepository.find();
    return categoriasGuardadas.map(categoria => CategoriaMapper.entityToDto(categoria));
  }

}


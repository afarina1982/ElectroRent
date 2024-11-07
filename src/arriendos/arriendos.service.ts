import { Injectable } from '@nestjs/common';
import { CreateArriendoDto } from './dto/create-arriendo.dto';
import { GetArriendoDto } from './dto/get-arriendo.dto';
import { Arriendo } from '../orm/entity/arriendo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArriendoMapper } from './mapper/arriendo.mapper';


@Injectable()
export class ArriendosService {

constructor(@InjectRepository(Arriendo) private arriendoRepository: Repository<Arriendo>) {
  
}

  async create(createArriendoDto: CreateArriendoDto): Promise<GetArriendoDto> {
    const arriendo: Arriendo = ArriendoMapper.dtoToEntity(createArriendoDto);
    const arriendoGuardado = await this.arriendoRepository.save(arriendo);
    return ArriendoMapper.entityToDto(arriendoGuardado);
  }

  
}

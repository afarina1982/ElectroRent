import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { Dispositivo } from '../orm/entity/dispositivo.entity';
import { Inventario } from '../orm/entity/inventario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetDispositivoDto } from './dto/get-dispositivo.dto';
import { DispositivoMapper } from './mapper/dipositivo.mapper';


@Injectable()
export class DispositivosService {

  constructor(
    @InjectRepository(Dispositivo) private readonly dispositivoRepository: Repository<Dispositivo>,
    @InjectRepository(Inventario) private readonly inventarioRepository: Repository<Inventario>,
  ) { }

  async create(createDispositivoDto: CreateDispositivoDto): Promise<GetDispositivoDto> {
    const dispositivo: Dispositivo = DispositivoMapper.dtoToEntity(createDispositivoDto);
    const dispositivoGuardado = await this.dispositivoRepository.save(dispositivo);
    return DispositivoMapper.entityToDto(dispositivoGuardado);
  }

  async findAll(): Promise<GetDispositivoDto[]> {
    const dispositivosGuardados = await this.dispositivoRepository.find();
    return dispositivosGuardados.map(dispositivo => DispositivoMapper.entityToDto(dispositivo));
  }

  async findDisponibles(filters: { categoria?: string; estado?: string; estado_inventario?: string }): Promise<Dispositivo[]> {
    const query = this.dispositivoRepository.createQueryBuilder('dispositivo')
      .leftJoinAndSelect('dispositivo.inventario', 'inventario') 
      .where('inventario.estado_inventario = :estado_inventario', { estado_inventario: filters.estado_inventario || 'DISPONIBLE' });

   
    if (filters.categoria) {
      query.andWhere('dispositivo.id_categoria = :categoria', { categoria: filters.categoria });
    }


    if (filters.estado) {
      query.andWhere('dispositivo.estado = :estado', { estado: filters.estado });
    }

    return query.getMany();
  }
}

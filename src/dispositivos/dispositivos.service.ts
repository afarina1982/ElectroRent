import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { Dispositivo } from '../orm/entity/dispositivo.entity';
import { Inventario } from '../orm/entity/inventario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetDispositivoDto } from './dto/get-dispositivo.dto';
import { DispositivoMapper } from './mapper/dipositivo.mapper';
import { Arriendo } from 'src/orm/entity/arriendo.entity';
import { ArriendoDispositivo } from 'src/orm/entity/arriendo_dispositivo.entity';


@Injectable()
export class DispositivosService {

  constructor(
    @InjectRepository(Dispositivo) private readonly dispositivoRepository: Repository<Dispositivo>,
    @InjectRepository(Inventario) private readonly inventarioRepository: Repository<Inventario>,
    @InjectRepository(Arriendo) private readonly arriendoRepository: Repository<Arriendo>,
    @InjectRepository(ArriendoDispositivo) private readonly arriendoDispositivoRepository: Repository<ArriendoDispositivo>
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

  async findArrendados(): Promise<any[]> {
    // Paso 1: Obtener los dispositivos arrendados
    const dispositivosArrendados = await this.dispositivoRepository.createQueryBuilder('dispositivo')
      .leftJoinAndSelect('dispositivo.inventario', 'inventario')
      .where('inventario.estado_inventario = :estado_inventario', { estado_inventario: 'ARRENDADO' })
      .getMany();

    // Paso 2: Obtener los id_dispositivo de los dispositivos arrendados
    const idDispositivosArrendados = dispositivosArrendados.map(dispositivo => dispositivo.id);

    // Paso 3: Buscar las relaciones en la tabla Arriendo_Dispositivo usando los id_dispositivo
    const arriendosDispositivos = await this.arriendoDispositivoRepository.createQueryBuilder('arriendoDispositivo')
      .where('arriendoDispositivo.id_dispositivo IN (:...idDispositivos)', { idDispositivos: idDispositivosArrendados })
      .getMany();

    // Paso 4: Obtener los id_arriendo de las relaciones encontradas
    const idArriendos = arriendosDispositivos.map(arriendoDispositivo => arriendoDispositivo.id_arriendo);

    // Paso 5: Obtener los rut_cliente de la tabla Arriendo usando los id_arriendo
    const arriendos = await this.arriendoRepository.createQueryBuilder('arriendo')
      .where('arriendo.id IN (:...idArriendos)', { idArriendos })
      .getMany();

    // Paso 6: Devolver los dispositivos arrendados con sus rut_cliente correspondientes
    const resultado = dispositivosArrendados.map(dispositivo => {
      const arriendoDispositivo = arriendosDispositivos.find(ad => ad.id_dispositivo === dispositivo.id);
      const arriendo = arriendos.find(a => a.id === arriendoDispositivo.id_arriendo);
      return {
        dispositivo,
        rut_cliente: arriendo ? arriendo.rut_cliente : null,  // Retorna el rut_cliente, o null si no se encuentra
      };
    });

    return resultado;
  }
  



}


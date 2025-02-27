import { Injectable } from '@nestjs/common';
import { Arriendo } from '../orm/entity/arriendo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { ArriendoDispositivo } from 'src/orm/entity/arriendo_dispositivo.entity';
import { Dispositivo } from 'src/orm/entity/dispositivo.entity';


@Injectable()
export class ArriendosService {

  constructor(@InjectRepository(Arriendo) private arriendoRepository: Repository<Arriendo>,
    @InjectRepository(ArriendoDispositivo) private arriendoDispositivoRepository: Repository<ArriendoDispositivo>,
    @InjectRepository(Dispositivo) private dispositivoRepository: Repository<Dispositivo>
  ) { }

  async crearArriendo(
    rut_cliente: string,
    fecha_inicio: string,
    fecha_fin: string,
    costo_total: number,
    dispositivos: string[]
  ): Promise<Arriendo> {
    const arriendo = this.arriendoRepository.create({
      rut_cliente,
      fecha_inicio,
      fecha_fin,
      costo_total,
    });
    await this.arriendoRepository.save(arriendo);

    for (const dispositivoId of dispositivos) {
      const arriendoDispositivo = this.arriendoDispositivoRepository.create({
        id_arriendo: arriendo.id,
        id_dispositivo: dispositivoId,
      });
      await this.arriendoDispositivoRepository.save(arriendoDispositivo);
    }

    return arriendo;
}

async obtenerArriendosActivos(rut: string): Promise<Arriendo[]> {
  const fechaActual = new Date().toISOString().split('T')[0];
  return await this.arriendoRepository.find({
    where:{
      rut_cliente: rut,
      fecha_fin: MoreThanOrEqual(fechaActual),
    }

});
}
async findByClienteId(clienteId: string): Promise<any[]> {
  
  const arriendos = await this.arriendoRepository.createQueryBuilder('arriendo')
    .where('arriendo.rut_cliente = :clienteId', { clienteId })
    .getMany();

  
  const idArriendos = arriendos.map(arriendo => arriendo.id);

  
  const arriendosDispositivos = await this.arriendoDispositivoRepository.createQueryBuilder('arriendoDispositivo')
    .where('arriendoDispositivo.id_arriendo IN (:...idArriendos)', { idArriendos })
    .getMany();

 
  const idDispositivosArrendados = arriendosDispositivos.map(ad => ad.id_dispositivo);

 
  const dispositivos = await this.dispositivoRepository.createQueryBuilder('dispositivo')
    .where('dispositivo.id IN (:...idDispositivosArrendados)', { idDispositivosArrendados })
    .getMany();

  
  return dispositivos;
}


}

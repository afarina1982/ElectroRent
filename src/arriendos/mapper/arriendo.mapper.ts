import { Arriendo } from 'src/orm/entity/arriendo.entity';
import { CreateArriendoDto } from '../dto/create-arriendo.dto';
import { GetArriendoDto } from '../dto/get-arriendo.dto';

export class ArriendoMapper {
    static dtoToEntity(dto: CreateArriendoDto): Arriendo {
        const entity = new Arriendo();
        entity.rut_cliente = dto.rut_cliente;
        entity.fecha_inicio = dto.fecha_inicio;
        entity.fecha_fin = dto.fecha_fin;
        entity.costo_total = dto.costo_total;
        return entity;
    }
    static entityToDto(entity: Arriendo): GetArriendoDto {
        const dto = new GetArriendoDto();
        dto.id = entity.id;
        dto.rut_cliente = entity.rut_cliente;
        dto.fecha_inicio = entity.fecha_inicio;
        dto.fecha_fin = entity.fecha_fin;
        dto.costo_total = entity.costo_total;
        return dto;
    }
}
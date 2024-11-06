import { Dispositivo } from "src/orm/entity/dispositivo.entity";
import { CreateDispositivoDto } from "../dto/create-dispositivo.dto";
import { GetDispositivoDto } from "src/dispositivos/dto/get-dispositivo.dto";

export class DispositivoMapper {
    static dtoToEntity(dto:CreateDispositivoDto): Dispositivo {
        const entity = new Dispositivo();
        entity.id = dto.id;
        entity.codigo = dto.codigo;
        entity.marca = dto.marca;
        entity.modelo = dto.modelo;
        entity.estado = dto.estado;
        entity.id_categoria = dto.id_categoria;
        return entity;
    }
    static entityToDto(entity: Dispositivo): GetDispositivoDto {
        const dto = new GetDispositivoDto();
        dto.id = entity.id;
        dto.codigo = entity.codigo;
        dto.marca = entity.marca;
        dto.modelo = entity.modelo;
        dto.estado = entity.estado;
        dto.id_categoria = entity.id_categoria;
        return dto;
    }
}

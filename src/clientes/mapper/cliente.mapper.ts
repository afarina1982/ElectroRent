import { CreateClienteDto } from '../dto/create-cliente.dto';
import { Cliente } from "src/orm/entity/cliente.entity";
import { GetClienteDto } from '../dto/get-create-cliente.dto';

export class ClienteMapper {

    static dtoToEntity(dto: CreateClienteDto): Cliente {
        const entity = new Cliente();
        entity.rut = dto.rut;
        entity.nombre = dto.nombre;
        entity.correo = dto.correo;
        entity.direccion = dto.direccion;
        return entity;
    }

    static entityToDto(entity: Cliente): GetClienteDto {
        const dto = new GetClienteDto();
        dto.rut = entity.rut;
        dto.nombre = entity.nombre;
        dto.correo = entity.correo;
        dto.direccion = entity.direccion;
        return dto;
    }
}

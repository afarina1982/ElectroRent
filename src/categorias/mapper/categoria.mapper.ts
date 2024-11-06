import { CreateCategoriaDto } from "../dto/create-categoria.dto";
import { Categoria } from "src/orm/entity/categoria.entity";
import { GetCategoriaDto } from "../dto/get-create-categoria";

export class CategoriaMapper {
    static dtoToEntity(dto: CreateCategoriaDto): Categoria {
        const entity = new Categoria();
        entity.nombre = dto.nombre;
        return entity;
    }
    static entityToDto(entity: Categoria): GetCategoriaDto {
        const dto = new GetCategoriaDto();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        return dto;
    }
}
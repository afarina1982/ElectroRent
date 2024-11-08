import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class GetCategoriaDto {
    @IsUUID(4, { message: 'El id debe ser un UUID válido' })
    @ApiProperty({default:'123e4567-e89b-12d3-a456-426614174000' ,description: 'Identificador de la categoria', type: String})
    public id: number;
    
    @IsString({message: 'El nombre debe ser un string'})
    @ApiProperty({default:'Notbooks' ,description: 'Nombre de la categoria', type: String})
    public nombre: string;
}


import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateCategoriaDto {
    
    @IsString({message: 'El nombre debe ser un string'})
    @ApiProperty({default:'Notbooks' ,description: 'Nombre de la categoria', type: String})
    public nombre: string;
}


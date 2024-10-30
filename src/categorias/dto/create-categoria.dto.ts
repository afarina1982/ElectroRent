import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateCategoriaDto {
    @IsUUID(4, { message: 'El id debe ser un UUID válido' })
    @ApiProperty()
    public id: number;
    
    @IsString()
    @ApiProperty()
    public nombre: string;
}

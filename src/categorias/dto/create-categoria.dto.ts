import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateCategoriaDto {
    
    @IsString()
    @ApiProperty()
    public nombre: string;
}


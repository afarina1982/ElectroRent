import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
    @IsUUID(4, { message: 'El id debe ser un UUID válido' })
    @ApiProperty()
    public id: number;
    
    @IsString()
    @ApiProperty()
    public nombre: string;
}

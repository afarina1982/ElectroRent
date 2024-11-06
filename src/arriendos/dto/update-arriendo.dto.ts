import { PartialType } from '@nestjs/mapped-types';
import { CreateArriendoDto } from './create-arriendo.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateArriendoDto extends PartialType(CreateArriendoDto) {
    @IsNumber({},{message: 'El id del arriendo debe ser un número generado automáticamente'})
    @ApiProperty()
    id: number;

    @IsString({message: 'El rut del cliente debe ser un string'})
    @ApiProperty()
    rut_cliente: string;

    @IsDate({message: 'La fecha de inicio debe ser una fecha en formato AAAA-MM-DD'})
    @ApiProperty()
    fecha_inicio: Date;

    @IsDate({message: 'La fecha de fin debe ser una fecha en formato AAAA-MM-DD'})
    @ApiProperty()
    fecha_fin: Date;

    @IsNumber({},{message: 'El valor del arriendo debe ser un número'})
    @ApiProperty()
    valor: number;

    @IsNumber({},{message: 'El costo total del arriendo debe ser un número'})
    @ApiProperty()
    costo_total: number;
}

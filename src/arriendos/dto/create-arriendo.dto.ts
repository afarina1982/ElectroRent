import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateArriendoDto {

    @IsString({message: 'El rut del cliente debe ser un string'})
    @ApiProperty({description: 'Rut del cliente',default: '12.345.678-9'})
    rut_cliente: string;

    @IsDateString({},{message: 'La fecha de inicio debe ser una fecha en formato AAAA-MM-DD'})
    @ApiProperty({description: 'Fecha de inicio del arriendo',default: '2024-11-10'})
    fecha_inicio: string;

    @IsDateString({},{message: 'La fecha de inicio debe ser una fecha en formato AAAA-MM-DD'})
    @ApiProperty({description: 'Fecha de fin del arriendo',default: '2024-11-20'})
    fecha_fin: string;

    @IsNumber({},{message: 'El costo total del arriendo debe ser un número'})
    @ApiProperty({description: 'Costo total del arriendo',default: 10000})
    costo_total: number;
}


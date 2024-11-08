import { PartialType } from '@nestjs/mapped-types';
import { CreateArriendoDto } from './create-arriendo.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString, IsUUID } from 'class-validator';

export class GetArriendoDto extends PartialType(CreateArriendoDto) {
    @IsUUID(4, { message: 'El id del arriendo debe ser un UUID' })
    @ApiProperty({ description: 'Id del arriendo en formato UUID 4', default: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;

    @IsString({ message: 'El rut del cliente debe ser un string en formato xx.xxx.xxx-x' })
    @ApiProperty({ description: 'Rut del cliente', default: '13.452.258-7' })
    rut_cliente: string;

    @IsDateString({}, { message: 'La fecha de inicio debe ser una fecha en formato AAAA-MM-DD' })
    @ApiProperty({ description: 'Fecha de inicio del arriendo', default: '2024-11-10' })
    fecha_inicio: string;

    @IsDateString({}, { message: 'La fecha de inicio debe ser una fecha en formato AAAA-MM-DD' })
    @ApiProperty({ description: 'Fecha de fin del arriendo', default: '2024-11-20' })
    fecha_fin: string;

    @IsNumber({}, { message: 'El costo total del arriendo debe ser un número' })
    @ApiProperty({ description: 'Costo total del arriendo', default: 10000 })
    costo_total: number;

    @ApiProperty({description: 'codigo del dispositivo',default:['0475b5ca-0728-4db3-bc94-d46f26047259','0f79a24e-e126-4741-bcfb-c7cedf8ff40b']})
    dispositivo: string[];
}

import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { Dispositivo } from "src/orm/entity/dispositivo.entity";

export class CreateArriendoDto {
    @IsString({ message: 'El rut del cliente debe ser un string' })
    @ApiProperty({ description: 'Rut del cliente', default: '13.452.258-7' })
    rut_cliente: string;

    @IsDateString({}, { message: 'La fecha de inicio debe ser una fecha en formato AAAA-MM-DD' })
    @ApiProperty({ description: 'Fecha de inicio del arriendo', default: '2024-11-10' })
    fecha_inicio: string;

    @IsDateString({}, { message: 'La fecha de fin debe ser una fecha en formato AAAA-MM-DD' })
    @ApiProperty({ description: 'Fecha de fin del arriendo', default: '2024-11-20' })
    fecha_fin: string;

    @IsNumber({}, { message: 'El costo total del arriendo debe ser un número' })
    @ApiProperty({ description: 'Costo total del arriendo', default: 10000 })
    costo_total: number;

    @IsArray({ message: 'Dispositivos debe ser un arreglo de strings' })
    @IsString({ each: true, message: 'Cada dispositivo debe ser un string' })
    @ApiProperty({
        description: 'Códigos de los dispositivos',
        type: [String],
        default: ['0475b5ca-0728-4db3-bc94-d46f26047259', '0f79a24e-e126-4741-bcfb-c7cedf8ff40b']
    })
    dispositivos: string[];
}


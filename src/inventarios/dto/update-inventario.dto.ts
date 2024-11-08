import { PartialType } from '@nestjs/mapped-types';
import { CreateInventarioDto } from './create-inventario.dto';
import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EstadoInventario } from 'src/enum/estado_inventario';

export class UpdateInventarioDto extends PartialType(CreateInventarioDto) {

    @IsString({ message: 'El estado del inventario debe ser un string' })
    @IsEnum(EstadoInventario, { message: 'El estado del inventario debe ser un string valido' })
    @ApiProperty({ default: 'Disponible',description: 'Estado del inventario', enum: EstadoInventario })
    public estado_inventario: string;

    @IsString({ message: 'La ubicacion del inventario debe ser un string' })
    @ApiProperty({default: 'Bodega 04', description: 'Ubicacion del inventario'})
    public ubicacion: string;
}

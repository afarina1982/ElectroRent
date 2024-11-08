import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { IsUUID } from "class-validator";
import { EstadoInventario } from "src/enum/estado_inventario";

export class CreateInventarioDto {

    @IsUUID('4', { message: 'El id debe ser un UUID version 4' })
    @IsString({ message: 'El id_dispositivo debe ser un string' })
    @ApiProperty({ default: '123e4567-e89b-12d3-a456-426614174000'})
    public id_dispositivo: string;

    @IsString({ message: 'El estado del inventario debe ser un string' })
    @IsEnum(EstadoInventario, { message: 'El estado del inventario debe ser un string valido' })
    @ApiProperty({ default: 'Disponible',description: 'Estado del inventario', enum: EstadoInventario })
    public estado_inventario: string;

    @IsString({ message: 'La ubicacion del inventario debe ser un string' })
    @ApiProperty({default: 'Bodega 04', description: 'Ubicacion del inventario'})
    public ubicacion: string;
}

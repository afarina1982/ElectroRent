import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class GetDispositivoDto {
    @IsUUID('4', { message: 'El id debe ser un UUID version 4' })
    @ApiProperty({ type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000', description: 'Identificador único del dispositivo' })
    public id: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty({ type: 'string', example: 'NOT-01', description: 'Código del dispositivo' })
    public codigo: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty({ type: 'string', example: 'Samsung', description: 'Marca del dispositivo' })
    public marca: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty({ type: 'string', example: 'Galaxy S20', description: 'Modelo del dispositivo' })
    public modelo: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty({})
    public estado: string;

    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty({ type: 'string', example: '1', description: 'Código del dispositivo' })
    public id_categoria: number;
}

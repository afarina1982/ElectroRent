import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateDispositivoDto {
  
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
    @ApiProperty({ type: 'string', example: '123456', description: 'Código del dispositivo' })
    public id_categoria: number;
}

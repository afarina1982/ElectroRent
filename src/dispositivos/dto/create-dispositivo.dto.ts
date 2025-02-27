import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { EstadoDispositivo } from "src/enum/estado_dispositivo";

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
    @ApiProperty({default: 'Nuevo', description: 'Estado del dispositivo', enum:EstadoDispositivo })
    public estado: string;

    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty({ type: 'string', example: '1', description: 'Código del dispositivo' })
    public id_categoria: number;
}

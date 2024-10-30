import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateDispositivoDto {
    @IsUUID('4', { message: 'El id debe ser un UUID version 4' })
    @ApiProperty()
    public id: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty()
    public codigo: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty()
    public marca: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty()
    public modelo: string;
    
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty()
    public estado: string;
    @IsString({ message: 'El código del dispositivo debe ser un string' })
    @ApiProperty()
    public id_categoria: number;
}

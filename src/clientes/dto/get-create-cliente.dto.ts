import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetClienteDto {
    @IsNotEmpty({ message: 'El rut del usuario es requerido' })
    @IsString()
    @Length(11, 12, { message: 'El rut del usuario debe tener entre 9 y 10 caracteres' })
    @Matches(/^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]$/, { message: 'El rut debe tener el formato xx.xxx.xxx-x' })
    @ApiProperty({ description: 'RUT del cliente en formato xx.xxx.xxx-x', example: '12.345.678-9' })
    public rut: string;

    @IsString({ message: 'El nombre del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El nombre del comprador no puede estar vacío' })
    @ApiProperty({ default: 'Juan', description: 'Nombre del usuario' }) 
    public nombre: string;

   @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })    
   @ApiProperty({ default: '123@123.cl', description: 'Correo del usuario' }) 
    public correo: string;

   @IsString({ message: 'La dirección del comprador debe ser un string' })
    @ApiProperty({ default: 'Calle 123', description: 'Dirección del usuario' })
    public direccion: string;
}

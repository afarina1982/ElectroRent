import { PartialType } from '@nestjs/mapped-types';
import { CreateArriendoDispositivoDto } from './create-arriendo_dispositivo.dto';
import { IsUUID } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateArriendoDispositivoDto extends PartialType(CreateArriendoDispositivoDto) {
    @IsUUID(4, { message: 'El id_arriendo debe ser un UUID' })
    @ApiProperty()
    id_arriendo: string;
    @IsUUID(4, { message: 'El id_arriendo debe ser un UUID' })
    @ApiProperty()
    id_dispositivo: string;
}


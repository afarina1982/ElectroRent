import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateArriendoDispositivoDto {
    @IsUUID(4, { message: 'El id_arriendo debe ser un UUID' })
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id_arriendo: string;
    @IsUUID(4, { message: 'El id_arriendo debe ser un UUID' })
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id_dispositivo: string;
}

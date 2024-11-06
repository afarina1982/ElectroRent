import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateArriendoDispositivoDto {
   @IsUUID(4, { message: 'El id_arriendo debe ser un UUID' })
    @ApiProperty()
    id_arriendo: string;
    @IsUUID(4, { message: 'El id_arriendo debe ser un UUID' })
   @ApiProperty()
    id_dispositivo: string;
}

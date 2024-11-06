import { ApiProperty } from "@nestjs/swagger";

export class CreateInventarioDto {
    @ApiProperty()
    public id_dispositivo: string;
    
    @ApiProperty()
    public estado_inventario: string;
    
   @ApiProperty()
    public ubicacion: string;
}

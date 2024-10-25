import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('inventario')
export class Inventario {
    
    @PrimaryColumn()
    public id_dispositivo: string;
    
    @Column()
    public estado_inventario: string;
    
    @Column()
    public ubicacion: string;
}

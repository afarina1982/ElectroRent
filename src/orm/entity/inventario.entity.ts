import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Dispositivo } from "./dispositivo.entity"; // Adjust the path as necessary

@Entity({name:'inventario'})
export class Inventario {
    
    @PrimaryColumn({name:'id_dispositivo'})
    public id_dispositivo: string;
    
    @Column({name:'estado_inventario'})
    public estado_inventario: string;
    
    @Column({name:'ubicacion'})
    public ubicacion: string;

    @ManyToOne(() => Dispositivo)
    @JoinColumn({name: 'id_dispositivo'})
    dispositivos:Dispositivo;

    

    constructor(id_dispositivo: string, estado_inventario: string, ubicacion: string) {
        this.id_dispositivo = id_dispositivo;
        this.estado_inventario = estado_inventario;
        this.ubicacion = ubicacion;
    }
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Dispositivo } from "./dispositivo.entity";

@Entity({ name: 'inventario' })
export class Inventario {

    @PrimaryColumn({ name: 'id_dispositivo' })
    public id_dispositivo: string;

    @Column({ name: 'estado_inventario' })
    public estado_inventario: string;

    @Column({ name: 'ubicacion' })
    public ubicacion: string;

    @ManyToOne(() => Dispositivo, (dispositivo) => dispositivo.inventario)
    @JoinColumn({ name: 'id_dispositivo' })
    dispositivo: Dispositivo;
}

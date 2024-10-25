import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('arriendo')
export class Arriendo {

    @PrimaryColumn()
    public id: string;

    @Column()
    public rut_cliente: string;

    @Column()
    public fecha_inicio: Date;  

    @Column()
    public fecha_fin: Date;

    @Column()
    public costo_total: number;
}

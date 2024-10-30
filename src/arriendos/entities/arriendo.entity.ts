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

    constructor(id: string, rut_cliente: string, fecha_inicio: Date, fecha_fin: Date, costo_total: number) {
        this.id = id;
        this.rut_cliente = rut_cliente;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.costo_total = costo_total;
    }
}

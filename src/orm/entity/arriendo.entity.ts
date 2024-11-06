import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Dispositivo } from "./dispositivo.entity";
import { Cliente } from "./cliente.entity";

@Entity({name:'arriendo'})
export class Arriendo {

    @PrimaryColumn({name:'id'})
    public id: string;

    @Column({name:'rut_cliente'})
    public rut_cliente: string;

    @Column({name:'fecha_inicio'})
    public fecha_inicio: Date;  

    @Column({name:'fecha_fin'})
    public fecha_fin: Date;

    @Column({name:'costo_total'})
    public costo_total: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({name: 'rut_cliente'})
    clientes:Cliente;

    @ManyToMany(() => Dispositivo, d => d.dis_arrendados)
    dispositivos:Dispositivo[];

    constructor(id: string, rut_cliente: string, fecha_inicio: Date, fecha_fin: Date, costo_total: number) {
        this.id = id;
        this.rut_cliente = rut_cliente;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.costo_total = costo_total;
    }
}

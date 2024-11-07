import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Dispositivo } from "./dispositivo.entity";
import { Cliente } from "./cliente.entity";

@Entity({name:'arriendo'})
export class Arriendo {

    @PrimaryGeneratedColumn('uuid',{name:'id'})
    public id: string;

    @Column({name:'rut_cliente'})
    public rut_cliente: string;

    @Column({name:'fecha_inicio'})
    public fecha_inicio: string;  

    @Column({name:'fecha_fin'})
    public fecha_fin: string;

    @Column({name:'costo_total'})
    public costo_total: number;

    @ManyToOne(() => Cliente, c => c.arriendos)
    @JoinColumn({name: 'rut_cliente'})
    clientes:Cliente;

    @ManyToMany(() => Dispositivo, d => d.dis_arrendados)
    dispositivos:Dispositivo[];
}

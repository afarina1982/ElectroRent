import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Arriendo } from "./arriendo.entity";
@Entity({name:'cliente'})
export class Cliente {

    @PrimaryColumn({name:'rut'})
    public rut: string;

    @Column({name:'nombre'})
    public nombre: string;

    @Column({name:'correo'})
    public correo: string;

    @Column({name:'direccion'})
    public direccion: string;

    @OneToMany(() => Arriendo, a => a.clientes) 
    arriendos:Arriendo[];

    }


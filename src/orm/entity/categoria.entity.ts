import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Dispositivo } from "./dispositivo.entity";
@Entity({name:'categoria'})
export class Categoria {
    @PrimaryColumn({name:'id'})
    public id: number;

    @Column({name:'nombre'})
    public nombre: string;

    @OneToMany(() => Dispositivo, d => d.categoria)
    dispositivos:Dispositivo[];

    }



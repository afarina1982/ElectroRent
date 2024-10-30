import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('cliente')
export class Cliente {

    @PrimaryColumn()
    public rut: string;

    @Column()
    public nombre: string;

    @Column()
    public correo: string;

    @Column()
    public direccion: string;

    constructor(rut: string, nombre: string, correo: string, direccion: string) {
        this.rut = rut;
        this.nombre = nombre;
        this.correo = correo;
        this.direccion = direccion;
    }
}

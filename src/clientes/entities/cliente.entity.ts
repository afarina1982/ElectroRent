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
}

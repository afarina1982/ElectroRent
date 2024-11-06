import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria.entity";
import { Arriendo } from "./arriendo.entity";
import { Inventario } from "./inventario.entity";

@Entity({ name: 'dispositivo' })
export class Dispositivo {

    @PrimaryColumn({ name: 'id' })
    public id: string;

    @Column({ name: 'codigo' })
    public codigo: string;

    @Column({ name: 'marca' })
    public marca: string;

    @Column({ name: 'modelo' })
    public modelo: string;

    @Column({ name: 'estado' })
    public estado: string;

    @Column({ name: 'id_categoria' })
    public id_categoria: number;

    @ManyToOne(() => Categoria)
    @JoinColumn({ name: 'id_categoria' })
    categoria: Categoria;

    @ManyToMany(() => Arriendo)
    @JoinTable({
        name: 'arriendo_dispositivo',
        joinColumn: { name: 'id_dispositivo', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_arriendo', referencedColumnName: 'id' }
    })
    dis_arrendados: Arriendo[];

    // Asegúrate de que 'id_dispositivo' en Inventario exista y sea un string
    @OneToMany(() => Inventario, (inventario) => inventario.dispositivo)
    inventario: Inventario[];
}


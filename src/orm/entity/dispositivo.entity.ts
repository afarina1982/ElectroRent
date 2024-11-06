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
    categoria: Categoria

    @ManyToMany(() => Arriendo)
    @JoinTable({
        name: 'arriendo_dispositivo',
        joinColumn: { name: 'id_dispositivo', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_arriendo', referencedColumnName: 'id' }
    })
    dis_arrendados: Arriendo[];


    @OneToMany(() => Inventario, i => i.id_dispositivo)
    inventario:Inventario[];


    constructor(id: string, codigo: string, marca: string, modelo: string, estado: string, id_categoria: number) {
        this.id = id;
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
        this.id_categoria = id_categoria;
    }
}

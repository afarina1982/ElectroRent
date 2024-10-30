import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('dispositivo')
export class Dispositivo {
   
   @PrimaryColumn()
    public id: string;
   
   @Column()
    public codigo: string;
   
   @Column()
    public marca: string;
   
   @Column()
    public modelo: string;
   
   @Column()
    public estado: string;
   
   @Column()
    public id_categoria: number;

    constructor(id: string, codigo: string, marca: string, modelo: string, estado: string, id_categoria: number) {
        this.id = id;
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
        this.id_categoria = id_categoria;
    }
}

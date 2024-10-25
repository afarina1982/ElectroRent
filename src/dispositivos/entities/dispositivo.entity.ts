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
}

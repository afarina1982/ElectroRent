import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('categoria')
export class Categoria {
    @PrimaryColumn()
    public id: number;

    @Column()
    public nombre: string;
}

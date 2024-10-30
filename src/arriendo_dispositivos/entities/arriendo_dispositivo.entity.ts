import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('arriendo_dispositivo')
export class ArriendoDispositivo {
    @PrimaryColumn()
    public id_arriendo: string;

    @PrimaryColumn()
    public id_dispositivo: string;
}
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'arriendo_dispositivo'})
export class ArriendoDispositivo {
    @PrimaryColumn({name:'id_arriendo'})
    public id_arriendo: string;

    @PrimaryColumn({name:'id_dispositivo'})
    public id_dispositivo: string;

    }
    
    
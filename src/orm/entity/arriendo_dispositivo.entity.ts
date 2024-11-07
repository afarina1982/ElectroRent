import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

@Entity({name:'arriendo_dispositivo'})
export class ArriendoDispositivo {
    @PrimaryColumn({name:'id_arriendo_dispositivo'})
    public id_arriendo: string;

    @PrimaryColumn({name:'id_dispositivo'})
    public id_dispositivo: string;

    }
    
    
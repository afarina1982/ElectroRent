import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'arriendo_dispositivo'})
export class ArriendoDispositivo {
    @PrimaryColumn({name:'id_arriendo'})
    public id_arriendo: string;

    @PrimaryColumn({name:'id_dispositivo'})
    public id_dispositivo: string;

    constructor(id_arriendo: string, id_dispositivo: string) {
        this.id_arriendo = id_arriendo;
        this.id_dispositivo = id_dispositivo;   
    }
    }
    
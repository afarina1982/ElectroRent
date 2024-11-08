import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cliente } from "../orm/entity/cliente.entity";

@Injectable()
export class ValidacionExistenciaPipe implements PipeTransform {
    constructor(
        @InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>,
    ) {}

    async transform(rutCliente: any, metadata: ArgumentMetadata) {
        let existe: boolean = await this.clienteRepository.existsBy({
            rut: rutCliente.rut
        });
        if (!existe) {
            throw new BadRequestException('El rut ingresado NO esta registrado');
        }
        return rutCliente;
    }
}
 
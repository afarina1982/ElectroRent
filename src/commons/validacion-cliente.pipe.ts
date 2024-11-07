import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cliente } from "../orm/entity/cliente.entity";

@Injectable()
export class ValidacionClientePipe implements PipeTransform {
    constructor(
        @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
    ) {}

    async transform(value: any, metadata: ArgumentMetadata) {
        let existe: boolean = await this.clienteRepository.existsBy({
            rut: value.rut,
        });
        if (existe) {
            throw new BadRequestException('El cliente ya existe');
        }
        return value;
    }
}
 
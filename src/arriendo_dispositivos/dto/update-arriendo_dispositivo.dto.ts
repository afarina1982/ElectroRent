import { PartialType } from '@nestjs/mapped-types';
import { CreateArriendoDispositivoDto } from './create-arriendo_dispositivo.dto';

export class UpdateArriendoDispositivoDto extends PartialType(CreateArriendoDispositivoDto) {}

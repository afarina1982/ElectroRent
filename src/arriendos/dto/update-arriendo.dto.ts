import { PartialType } from '@nestjs/mapped-types';
import { CreateArriendoDto } from './create-arriendo.dto';

export class UpdateArriendoDto extends PartialType(CreateArriendoDto) {}

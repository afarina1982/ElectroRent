import { Test, TestingModule } from '@nestjs/testing';
import { ArriendoDispositivosController } from './arriendo_dispositivos.controller';
import { ArriendoDispositivosService } from './arriendo_dispositivos.service';

describe('ArriendoDispositivosController', () => {
  let controller: ArriendoDispositivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArriendoDispositivosController],
      providers: [ArriendoDispositivosService],
    }).compile();

    controller = module.get<ArriendoDispositivosController>(ArriendoDispositivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ArriendosController } from './arriendos.controller';
import { ArriendosService } from './arriendos.service';

describe('ArriendosController', () => {
  let controller: ArriendosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArriendosController],
      providers: [ArriendosService],
    }).compile();

    controller = module.get<ArriendosController>(ArriendosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ArriendoDispositivosService } from './arriendo_dispositivos.service';

describe('ArriendoDispositivosService', () => {
  let service: ArriendoDispositivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArriendoDispositivosService],
    }).compile();

    service = module.get<ArriendoDispositivosService>(ArriendoDispositivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

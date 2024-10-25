import { Test, TestingModule } from '@nestjs/testing';
import { ArriendosService } from './arriendos.service';

describe('ArriendosService', () => {
  let service: ArriendosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArriendosService],
    }).compile();

    service = module.get<ArriendosService>(ArriendosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

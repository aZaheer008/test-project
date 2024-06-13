import { Test, TestingModule } from '@nestjs/testing';
import { TokenGuardService } from './token-guard.service';

describe('TokenGuardService', () => {
  let service: TokenGuardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenGuardService],
    }).compile();

    service = module.get<TokenGuardService>(TokenGuardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HttpRequestServiceService } from './http-request-service.service';

describe('HttpRequestServiceService', () => {
  let service: HttpRequestServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpRequestServiceService],
    }).compile();

    service = module.get<HttpRequestServiceService>(HttpRequestServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

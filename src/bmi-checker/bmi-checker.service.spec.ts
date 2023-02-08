import { Test, TestingModule } from '@nestjs/testing';
import { BmiCheckerService } from './bmi-checker.service';

describe('BmiCheckerService', () => {
  let service: BmiCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BmiCheckerService],
    }).compile();

    service = module.get<BmiCheckerService>(BmiCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

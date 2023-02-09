import { Test, TestingModule } from '@nestjs/testing';
import { CalorieCheckerService } from './calorie-checker.service';

describe('CalorieCheckerService', () => {
  let service: CalorieCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalorieCheckerService],
    }).compile();

    service = module.get<CalorieCheckerService>(CalorieCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

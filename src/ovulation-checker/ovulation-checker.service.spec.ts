import { Test, TestingModule } from '@nestjs/testing';
import { OvulationCheckerService } from './ovulation-checker.service';

describe('OvulationCheckerService', () => {
  let service: OvulationCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OvulationCheckerService],
    }).compile();

    service = module.get<OvulationCheckerService>(OvulationCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

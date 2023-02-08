import { Test, TestingModule } from '@nestjs/testing';
import { BmiCheckerController } from './bmi-checker.controller';
import { BmiCheckerService } from './bmi-checker.service';

describe('BmiCheckerController', () => {
  let controller: BmiCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BmiCheckerController],
      providers: [BmiCheckerService],
    }).compile();

    controller = module.get<BmiCheckerController>(BmiCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

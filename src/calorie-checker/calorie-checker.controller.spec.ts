import { Test, TestingModule } from '@nestjs/testing';
import { CalorieCheckerController } from './calorie-checker.controller';

describe('CalorieCheckerController', () => {
  let controller: CalorieCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalorieCheckerController],
    }).compile();

    controller = module.get<CalorieCheckerController>(CalorieCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

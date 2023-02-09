import { Test, TestingModule } from '@nestjs/testing';
import { OvulationCheckerController } from './ovulation-checker.controller';

describe('OvulationCheckerController', () => {
  let controller: OvulationCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OvulationCheckerController],
    }).compile();

    controller = module.get<OvulationCheckerController>(
      OvulationCheckerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { OvulationCheckerController } from './ovulation-checker.controller';
import { OvulationCheckerService } from './ovulation-checker.service';

@Module({
  controllers: [OvulationCheckerController],
  providers: [OvulationCheckerService],
})
export class OvulationCheckerModule {}

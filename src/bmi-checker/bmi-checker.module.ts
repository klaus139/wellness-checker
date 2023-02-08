import { Module } from '@nestjs/common';
import { BmiCheckerService } from './bmi-checker.service';
import { BmiCheckerController } from './bmi-checker.controller';

@Module({
  controllers: [BmiCheckerController],
  providers: [BmiCheckerService],
})
export class BmiCheckerModule {}

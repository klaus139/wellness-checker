import { Module } from '@nestjs/common';
import { CalorieCheckerController } from './calorie-checker.controller';
import { CalorieCheckerService } from './calorie-checker.service';

@Module({
  controllers: [CalorieCheckerController],
  providers: [CalorieCheckerService],
})
export class CalorieCheckerModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmiCheckerModule } from './bmi-checker/bmi-checker.module';
import { OvulationCheckerModule } from './ovulation-checker/ovulation-checker.module';
import { CalorieCheckerModule } from './calorie-checker/calorie-checker.module';

@Module({
  imports: [BmiCheckerModule, OvulationCheckerModule, CalorieCheckerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

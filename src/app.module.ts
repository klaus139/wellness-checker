import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmiCheckerModule } from './bmi-checker/bmi-checker.module';
import { BmiApiModule } from './bmi-api/bmi-api.module';

@Module({
  imports: [BmiCheckerModule, BmiApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

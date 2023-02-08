import { Injectable } from '@nestjs/common';
import { CreateBmiCheckerDto } from './dto/create-bmi-checker.dto';
import { bmiApiService } from './axios/axioscall';

@Injectable()
export class BmiCheckerService {
  async create(createBmiCheckerDto: CreateBmiCheckerDto) {
    const bmiApisService = new bmiApiService();
    createBmiCheckerDto.bmi = await bmiApisService.getBmi(
      createBmiCheckerDto.weight,
      createBmiCheckerDto.height,
    );
    createBmiCheckerDto.weightCategory = this.getWeightCategory(
      createBmiCheckerDto.bmi,
    );
    return createBmiCheckerDto;
  }

  private getWeightCategory(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
}

// If your BMI is less than 18.5, it falls within the underweight range.
// If your BMI is 18.5 to <25, it falls within the healthy weight range.
// If your BMI is 25.0 to <30, it falls within the overweight range.
// If your BMI is 30.0 or higher, it falls within the obesity range.
// this is actual data from the cdc

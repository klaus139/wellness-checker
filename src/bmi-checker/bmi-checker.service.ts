import { Injectable } from '@nestjs/common';
import { CreateBmiCheckerDto } from './dto/create-bmi-checker.dto';

@Injectable()
export class BmiCheckerService {
  async create(createBmiCheckerDto: CreateBmiCheckerDto) {
    const weight = createBmiCheckerDto.weight;
    const height = createBmiCheckerDto.height; //because we are using cm to measure
    const bmi = weight / (height * height);
    const weightCategory = this.getWeightCategory(bmi);
    return { bmi, weightCategory };
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

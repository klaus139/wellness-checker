import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCalorieCheckerDto } from './dto/calorie-checker.dto';

@Injectable()
export class CalorieCheckerService {
  calculateCalories(createCalorieCheckerDto: CreateCalorieCheckerDto) {
    const { gender, age, height, weight, activityLevel } =
      createCalorieCheckerDto;
    const heightInCm = height * 100;

    let calories: number;
    if (gender === 'male') {
      calories = 66.5 + 13.8 * weight + 5 * heightInCm;
      calories = calories / (6.8 * age);
    } else if (gender === 'female') {
      calories = 655.1 + 9.6 * weight + 1.9 * heightInCm;
      calories = calories / (4.7 * age);
    } else {
      throw new HttpException('Invalid gender', HttpStatus.BAD_REQUEST);
    }

    let activityLevelMultiplier = 1.2;
    switch (activityLevel) {
      case 'basic metabolic rate(BMR)':
        activityLevelMultiplier = 1.2;
        break;
      case 'sedentary (little or no exercise)':
        activityLevelMultiplier = 1.2;
        break;
      case 'light (exercise 1-3 times/ week)':
        activityLevelMultiplier = 1.3;
        break;
      case 'extra active (very intense exercise)':
        activityLevelMultiplier = 1.4;
        break;
      default:
        throw new HttpException(
          'Invalid activity level',
          HttpStatus.BAD_REQUEST,
        );
    }
    calories *= activityLevelMultiplier;
    if (calories >= 1850 && calories <= 1950) {
      return { calories, goal: 'Lose weight' };
    } else if (calories >= 2110 && calories <= 2350) {
      return { calories, goal: 'Maintain weight' };
    } else {
      return { calories, goal: 'Gain weight' };
    }
  }
}

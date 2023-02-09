import { Controller, Post, Body } from '@nestjs/common';
import { CalorieCheckerService } from './calorie-checker.service';
import { CreateCalorieCheckerDto } from './dto/calorie-checker.dto';

@Controller('calorie-checker')
export class CalorieCheckerController {
  constructor(private readonly calorieCheckerService: CalorieCheckerService) {}

  @Post()
  calculateCalories(@Body() createCalorieCheckerDto: CreateCalorieCheckerDto) {
    return this.calorieCheckerService.calculateCalories(
      createCalorieCheckerDto,
    );
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { BmiCheckerService } from './bmi-checker.service';
import { CreateBmiCheckerDto } from './dto/create-bmi-checker.dto';

@Controller('bmi-checker')
export class BmiCheckerController {
  constructor(private readonly bmiCheckerService: BmiCheckerService) {}

  @Post()
  async create(
    @Body()
    createBmiCheckerDto: CreateBmiCheckerDto,
  ) {
    const bmiResult = await this.bmiCheckerService.create(createBmiCheckerDto);
    return bmiResult;
  }
}

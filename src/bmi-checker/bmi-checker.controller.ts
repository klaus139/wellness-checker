import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BmiCheckerService } from './bmi-checker.service';
import { CreateBmiCheckerDto } from './dto/create-bmi-checker.dto';

@Controller('bmi-checker')
export class BmiCheckerController {
  constructor(private readonly bmiCheckerService: BmiCheckerService) {}

  @Post()
  create(
    @Body()
    createBmiCheckerDto: CreateBmiCheckerDto,
  ) {
    const bmiResult = this.bmiCheckerService.create(createBmiCheckerDto);
    return bmiResult;
  }
}

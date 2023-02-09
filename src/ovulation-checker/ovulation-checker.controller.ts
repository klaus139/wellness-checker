import { Controller, Body, Post, HttpCode } from '@nestjs/common';
import { OvulationCheckerService } from './ovulation-checker.service';
import { OvulationCheckerDto } from './dto/create-ovulation-checker.dto';

@Controller('ovulation-checker')
export class OvulationCheckerController {
  constructor(
    private readonly ovulationCheckerService: OvulationCheckerService,
  ) {}

  @Post()
  @HttpCode(200)
  async calculate(@Body() ovulationCheckerDto: OvulationCheckerDto) {
    return this.ovulationCheckerService.calculate(ovulationCheckerDto);
  }
}

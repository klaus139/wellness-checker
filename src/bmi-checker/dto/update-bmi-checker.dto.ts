import { PartialType } from '@nestjs/mapped-types';
import { CreateBmiCheckerDto } from './create-bmi-checker.dto';

export class UpdateBmiCheckerDto extends PartialType(CreateBmiCheckerDto) {}

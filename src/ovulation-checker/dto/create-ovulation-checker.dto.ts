import { IsEmail, IsString, IsNumber, IsDateString } from 'class-validator';

export class OvulationCheckerDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsDateString()
  lastPeriod: string;
  @IsNumber()
  lenghtOfPeriod: number;
  @IsNumber()
  cycleSelected: number;
  @IsDateString()
  date: string;
  @IsDateString()
  nextPeriodDate: string;
}

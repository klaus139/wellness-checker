import { IsEmail, IsString, IsNumber } from 'class-validator';

export class CreateCalorieCheckerDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  gender: string;
  @IsNumber()
  age: number;
  @IsNumber()
  height: number;
  @IsNumber()
  weight: number;
  @IsString()
  activityLevel: string;
}

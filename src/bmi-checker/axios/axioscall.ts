import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class bmiApiService {
  async getBmi(weight: number, height: number): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
      params: { weight: weight.toString(), height: height.toString() },
      headers: {
        'X-RapidAPI-Key': 'b02ac4e6b3mshea75e26ed80edf2p1d6644jsnd770c62c1a6f',
        'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new HttpException('message', HttpStatus.BAD_REQUEST);
    }
  }
}

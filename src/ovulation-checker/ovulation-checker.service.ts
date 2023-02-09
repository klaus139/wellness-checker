import { BadRequestException, Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { OvulationCheckerDto } from './dto/create-ovulation-checker.dto';

@Injectable()
export class OvulationCheckerService {
  async calculate(ovulationCheckerDto: OvulationCheckerDto) {
    try {
      const calcDate = moment(ovulationCheckerDto.date, 'YYYY-MM-DD').format(
        'YYYYMMDD',
      );
      let dayOfOvulation: string;
      let fertilityWindow: string;
      let nextPeriodDate: string;

      if (ovulationCheckerDto.cycleSelected === 28) {
        dayOfOvulation = moment(calcDate, 'YYYYMMDD')
          .add(12, 'days')
          .format('MMMM Do YYYY');
        fertilityWindow = moment(calcDate, 'YYYYMMDD')
          .add(16, 'days')
          .format('MMMM Do YYYY');
      } else {
        dayOfOvulation = moment(calcDate, 'YYYYMMDD')
          .add(ovulationCheckerDto.cycleSelected - 28 + 12, 'days')
          .format('MMMM Do YYYY');
        fertilityWindow = moment(calcDate, 'YYYYMMDD')
          .add(ovulationCheckerDto.cycleSelected - 28 + 16, 'days')
          .format('MMMM Do YYYY');
      }

      // eslint-disable-next-line prefer-const
      nextPeriodDate = moment(fertilityWindow, 'MMMM Do YYYY')
        .add(ovulationCheckerDto.cycleSelected, 'days')
        .format('MMMM Do YYYY');

      return {
        dayOfOvulation,
        fertilityWindow,
        nextPeriodDate,
      };
    } catch (err) {
      throw new BadRequestException({
        message: err.message,
      });
    }
  }
}

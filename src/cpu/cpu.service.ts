import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  // Whenever nest creates an instance of CpuService,
  // it creates/passes already created powerService instance and provide it to CpuService instance
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log(`Drawing 10 watts of power`);
    this.powerService.supplyPower(10);
    return a + b;
  }
}

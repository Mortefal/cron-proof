import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor() {
    console.log(process.env.CRON_TEST_STRING);
  }
  @Cron(CronExpression.EVERY_10_SECONDS)
  getHello(): string {
    return 'Hello World!';
  }
  @Cron(process.env.CRON_TEST_STRING)
  getFoo(): string {
    return 'Foo';
  }
}

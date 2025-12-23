import { Module } from '@nestjs/common';
import { DriverAuthController } from './auth/driver.controller';
import { DriverAuthService } from './auth/driver.service';

@Module({
  controllers: [DriverAuthController],
  providers: [DriverAuthService],
})
export class DriverModule {}

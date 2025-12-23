import { Module } from '@nestjs/common';
import { PassengerAuthController } from './auth/passenger.controller';
import { PassengerAuthService } from './auth/passenger.service';

@Module({
  controllers: [PassengerAuthController],
  providers: [PassengerAuthService],
})
export class PassengerModule {}

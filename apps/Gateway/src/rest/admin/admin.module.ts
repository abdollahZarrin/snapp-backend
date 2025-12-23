import { Module } from '@nestjs/common';
import { AdminAuthController } from './auth/admin.controller';
import { AdminAuthService } from './auth/admin.service';

@Module({
  controllers: [AdminAuthController],
  providers: [AdminAuthService],
})
export class AdminModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';

@Module({
  providers: [AuthRepository, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

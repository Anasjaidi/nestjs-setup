import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { PrismaService } from 'src/databases/prisma/service/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [AuthRepository, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

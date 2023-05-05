import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { AuthRepository } from './repository/auth.repository';
import { PrismaService } from 'src/databases/prisma/service/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [AuthRepository, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

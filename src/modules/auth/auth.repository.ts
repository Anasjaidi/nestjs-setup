import { Injectable } from '@nestjs/common';

import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class AuthRepository {
  private users: PrismaClient['user'];
  constructor(private prisma: PrismaClient) {
    this.users = prisma.user;
  }

  async createUser(user: Omit<User, 'uid'>) {
    return this.users.create({ data: user });
  }
}

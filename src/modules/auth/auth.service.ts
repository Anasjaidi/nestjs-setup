import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthNewUserDto } from './dto/auth-new-user-dto';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async createUser(newUser: AuthNewUserDto) {
    const { firstName, lastName, email, password } = newUser;
    return this.authRepository.createUser({
      firstName,
      lastName,
      email,
      password,
    });
  }
}

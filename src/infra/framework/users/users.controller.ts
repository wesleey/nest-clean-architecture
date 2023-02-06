import { CreateUserDto } from '@/shared/dtos/users/create-user.dto';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { FindAllUsersUseCase } from '@/use-cases/users/find-all-users';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findAllUsersUseCase: FindAllUsersUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.createUserUseCase.execute(data);
  }

  @Get()
  async findAll() {
    return this.findAllUsersUseCase.execute();
  }
}

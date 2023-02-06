import { UsersRepository } from '@/core/repositories/users.repository';
import { PrismaUsersRepository } from '@/infra/data/prisma/prisma-users.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { FindAllUsersUseCase } from '@/use-cases/users/find-all-users';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useFactory: (prisma: PrismaService) => new PrismaUsersRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateUserUseCase,
      useFactory: (repository: UsersRepository) =>
        new CreateUserUseCase(repository),
      inject: [UsersRepository],
    },
    {
      provide: FindAllUsersUseCase,
      useFactory: (repository: UsersRepository) =>
        new FindAllUsersUseCase(repository),
      inject: [UsersRepository],
    },
  ],
})
export class UsersModule {}

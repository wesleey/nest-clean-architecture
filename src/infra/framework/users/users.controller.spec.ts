import { UsersRepository } from '@/core/repositories/users.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { FindAllUsersUseCase } from '@/use-cases/users/find-all-users';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let usersController: UsersController;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(async () => {
    const usersModule: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersRepository,
          useClass: UsersCacheMemoryRepository,
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
    }).compile();

    usersController = usersModule.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await usersController.create({ name, email, password });
    expect(user).toEqual({ id: 1, name, email });
  });

  it('should find all users', async () => {
    await usersController.create({ name, email, password });
    const users = await usersController.findAll();
    expect(users).toEqual([{ id: 1, name, email }]);
  });
});

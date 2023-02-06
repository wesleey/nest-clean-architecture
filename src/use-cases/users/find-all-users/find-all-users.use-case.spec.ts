import { UsersRepository } from '@/core/repositories/users.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from '../create-user';
import { FindAllUsersUseCase } from './find-all-users.use-case';

describe('FindAllUsersUseCase', () => {
  let findAllUsersUseCase: FindAllUsersUseCase;
  let createUserUseCase: CreateUserUseCase;
  let userRepository: UsersRepository;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(async () => {
    userRepository = new UsersCacheMemoryRepository();
    createUserUseCase = new CreateUserUseCase(userRepository);
    findAllUsersUseCase = new FindAllUsersUseCase(userRepository);

    await createUserUseCase.execute({ name, email, password });
  });

  it('should be defined', () => {
    expect(findAllUsersUseCase).toBeDefined();
  });

  it('should find all users', async () => {
    const users = await findAllUsersUseCase.execute();
    expect(users).toEqual([{ id: 1, name, email }]);
  });
});

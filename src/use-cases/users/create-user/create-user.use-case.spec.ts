import { UsersRepository } from '@/core/repositories/users.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from './create-user.use-case';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  let usersRepository: UsersRepository;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(() => {
    usersRepository = new UsersCacheMemoryRepository();
    createUserUseCase = new CreateUserUseCase(usersRepository);
  });

  it('should be defined', () => {
    expect(createUserUseCase).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await createUserUseCase.execute({ name, email, password });
    expect(user).toEqual({ id: 1, name, email });
  });

  // it('should throw an error if user already exists', async () => {
  //   await createUserUseCase.execute({ name, email, password })
  //   await expect(createUserUseCase.execute({ name, email, password })).rejects.toThrowError(
  //     'User already exists'
  //   )
  // })
});

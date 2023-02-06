import { PostsRepository } from '@/core/repositories/posts.repository';
import { UsersRepository } from '@/core/repositories/users.repository';
import { PostsCacheMemoryRepository } from '@/infra/data/cache-memory/posts-cache-memory.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreatePostUseCase } from '@/use-cases/posts/create-post';
import { FindAllPostsUseCase } from '@/use-cases/posts/find-all-posts';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { FindAllUsersUseCase } from '@/use-cases/users/find-all-users';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users/users.controller';
import { PostsController } from './posts.controller';

describe('PostsController', () => {
  let usersController: UsersController;
  let postsController: PostsController;

  const title = 'Post title';
  const content = 'Post content';
  const userId = 1;

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

    const postsModule: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsRepository,
          useClass: PostsCacheMemoryRepository,
        },
        {
          provide: CreatePostUseCase,
          useFactory: (repository: PostsRepository) =>
            new CreatePostUseCase(repository),
          inject: [PostsRepository],
        },
        {
          provide: FindAllPostsUseCase,
          useFactory: (repository: PostsRepository) =>
            new FindAllPostsUseCase(repository),
          inject: [PostsRepository],
        },
      ],
    }).compile();

    usersController = usersModule.get<UsersController>(UsersController);
    postsController = postsModule.get<PostsController>(PostsController);

    await usersController.create({ name, email, password });
  });

  it('should be defined', () => {
    expect(postsController).toBeDefined();
  });

  it('should create a post', async () => {
    const post = await postsController.create({ title, content, userId });
    expect(post).toEqual({ id: 1, title, content, userId });
  });

  it('should find all posts', async () => {
    await postsController.create({ title, content, userId });
    const posts = await postsController.findAll();
    expect(posts).toEqual([{ id: 1, title, content, userId }]);
  });
});

import { PostsRepository } from '@/core/repositories/posts.repository';
import { UsersRepository } from '@/core/repositories/users.repository';
import { PostsCacheMemoryRepository } from '@/infra/data/cache-memory/posts-cache-memory.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { CreatePostUseCase } from './create-post.use-case';

describe('CreatePostUseCase', () => {
  let createPostUseCase: CreatePostUseCase;
  let postRepository: PostsRepository;
  let createUserUseCase: CreateUserUseCase;
  let usersRepository: UsersRepository;

  const title = 'Post title';
  const content = 'Post content';
  const userId = 1;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(async () => {
    postRepository = new PostsCacheMemoryRepository();
    usersRepository = new UsersCacheMemoryRepository();
    createPostUseCase = new CreatePostUseCase(postRepository);
    createUserUseCase = new CreateUserUseCase(usersRepository);

    await createUserUseCase.execute({ name, email, password });
  });

  it('should be defined', () => {
    expect(createPostUseCase).toBeDefined();
  });

  it('should create a post', async () => {
    const post = await createPostUseCase.execute({ title, content, userId });
    expect(post).toEqual({ id: 1, title, content, userId });
  });
});

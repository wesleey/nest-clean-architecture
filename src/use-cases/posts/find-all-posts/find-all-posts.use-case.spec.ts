import { PostsRepository } from '@/core/repositories/posts.repository';
import { UsersRepository } from '@/core/repositories/users.repository';
import { PostsCacheMemoryRepository } from '@/infra/data/cache-memory/posts-cache-memory.repository';
import { UsersCacheMemoryRepository } from '@/infra/data/cache-memory/users-cache-memory.repository';
import { CreatePostUseCase } from '@/use-cases/posts/create-post';
import { FindAllPostsUseCase } from '@/use-cases/posts/find-all-posts';
import { CreateUserUseCase } from '@/use-cases/users/create-user';

describe('CreatePostUseCase', () => {
  let findAllPostsUseCase: FindAllPostsUseCase;
  let createPostUseCase: CreatePostUseCase;
  let postsRepository: PostsRepository;
  let createUserUseCase: CreateUserUseCase;
  let usersRepository: UsersRepository;

  const title = 'Post title';
  const content = 'Post content';
  const userId = 1;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(async () => {
    postsRepository = new PostsCacheMemoryRepository();
    usersRepository = new UsersCacheMemoryRepository();
    createPostUseCase = new CreatePostUseCase(postsRepository);
    createUserUseCase = new CreateUserUseCase(usersRepository);
    findAllPostsUseCase = new FindAllPostsUseCase(postsRepository);

    await createUserUseCase.execute({ name, email, password });
    await createPostUseCase.execute({ title, content, userId });
  });

  it('should be defined', () => {
    expect(findAllPostsUseCase).toBeDefined();
  });

  it('should find all posts', async () => {
    const posts = await findAllPostsUseCase.execute();
    expect(posts).toEqual([{ id: 1, title, content, userId }]);
  });
});

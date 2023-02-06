import { PostEntity } from '@/core/domain/entities/post.entity';
import { PostsRepository } from '@/core/repositories/posts.repository';
import { RepositoryCacheMemory } from '@/infra/data/cache-memory/repository-cache-memory';

export class PostsCacheMemoryRepository
  extends RepositoryCacheMemory<PostEntity>
  implements PostsRepository {}

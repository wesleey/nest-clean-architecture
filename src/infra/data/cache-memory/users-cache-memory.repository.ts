import { UserEntity } from '@/core/domain/entities/user.entity';
import { UsersRepository } from '@/core/repositories/users.repository';
import { RepositoryCacheMemory } from '@/infra/data/cache-memory/repository-cache-memory';

export class UsersCacheMemoryRepository
  extends RepositoryCacheMemory<UserEntity>
  implements UsersRepository {}

import { Repository } from '@/core/base/repository';
import { UserEntity } from '@/core/domain/entities/user.entity';

export abstract class UsersRepository extends Repository<UserEntity> {}

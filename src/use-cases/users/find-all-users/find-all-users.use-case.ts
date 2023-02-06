import { UseCase } from '@/core/base/use-case';
import { CreatedUserMapper } from '@/core/domain/mappers/users/created-user';
import { UsersRepository } from '@/core/repositories/users.repository';
import { CreatedUserDto } from '@/shared/dtos/users/created-user.dto';

export class FindAllUsersUseCase implements UseCase<CreatedUserDto[]> {
  private createdUserMapper: CreatedUserMapper;

  constructor(private readonly repository: UsersRepository) {
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(): Promise<CreatedUserDto[]> {
    const users = await this.repository.findAll();
    return users.map((user) => this.createdUserMapper.mapTo(user));
  }
}

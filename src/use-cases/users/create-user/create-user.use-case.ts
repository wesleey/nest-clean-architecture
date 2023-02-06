import { UseCase } from '@/core/base/use-case';
import { CreateUserMapper } from '@/core/domain/mappers/users/create-user';
import { CreatedUserMapper } from '@/core/domain/mappers/users/created-user';
import { UsersRepository } from '@/core/repositories/users.repository';
import { CreateUserDto } from '@/shared/dtos/users/create-user.dto';
import { CreatedUserDto } from '@/shared/dtos/users/created-user.dto';

export class CreateUserUseCase implements UseCase<CreatedUserDto> {
  private createUserMapper: CreateUserMapper;
  private createdUserMapper: CreatedUserMapper;

  constructor(private readonly repository: UsersRepository) {
    this.createUserMapper = new CreateUserMapper();
    this.createdUserMapper = new CreatedUserMapper();
  }

  public async execute(user: CreateUserDto): Promise<CreatedUserDto> {
    const entity = this.createUserMapper.mapFrom(user);
    const createdUser = await this.repository.create(entity);
    return this.createdUserMapper.mapTo(createdUser);
  }
}

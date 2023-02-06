import { Mapper } from '@/core/base/mapper';
import { UserEntity } from '@/core/domain/entities/user.entity';
import { CreateUserDto } from '@/shared/dtos/users/create-user.dto';

export class CreateUserMapper extends Mapper<CreateUserDto, UserEntity> {
  public mapFrom(data: CreateUserDto): UserEntity {
    const user = new UserEntity();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }

  public mapTo(data: UserEntity): CreateUserDto {
    const user = new CreateUserDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }
}

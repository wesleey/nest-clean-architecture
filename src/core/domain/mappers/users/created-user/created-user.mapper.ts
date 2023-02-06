import { Mapper } from '@/core/base/mapper';
import { UserEntity } from '@/core/domain/entities/user.entity';
import { CreatedUserDto } from '@/shared/dtos/users/created-user.dto';

export class CreatedUserMapper implements Mapper<CreatedUserDto, UserEntity> {
  public mapFrom(data: CreatedUserDto): UserEntity {
    const user = new UserEntity();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;

    return user;
  }

  public mapTo(data: UserEntity): CreatedUserDto {
    const user = new CreatedUserDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;

    return user;
  }
}

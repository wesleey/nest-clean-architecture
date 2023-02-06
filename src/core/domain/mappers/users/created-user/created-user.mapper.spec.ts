import { CreatedUserMapper } from './created-user.mapper';

describe('CreatedUserMapper', () => {
  let createdUserMapper: CreatedUserMapper;

  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const password = '123456';

  beforeEach(() => {
    createdUserMapper = new CreatedUserMapper();
  });

  it('should be defined', () => {
    expect(createdUserMapper).toBeDefined();
  });

  it('should map from', () => {
    const user = createdUserMapper.mapFrom({ id: 1, name, email });
    expect(user).toEqual({ id: 1, name, email });
  });

  it('should map to', () => {
    const user = createdUserMapper.mapTo({ id: 1, name, email, password });
    expect(user).toEqual({ id: 1, name, email });
  });
});

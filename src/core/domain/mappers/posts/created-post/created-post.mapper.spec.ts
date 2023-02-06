import { CreatedPostMapper } from './created-post.mapper';

describe('CreatedPostMapper', () => {
  let createdPostMapper: CreatedPostMapper;

  const id = 1;
  const title = 'Post title';
  const content = 'Post content';
  const userId = 1;

  beforeEach(() => {
    createdPostMapper = new CreatedPostMapper();
  });

  it('should be defined', () => {
    expect(createdPostMapper).toBeDefined();
  });

  it('should map from', () => {
    const post = createdPostMapper.mapFrom({ id, title, content, userId });
    expect(post).toEqual({ id, title, content, userId });
  });

  it('should map to', () => {
    const post = createdPostMapper.mapTo({ id, title, content, userId });
    expect(post).toEqual({ id, title, content, userId });
  });
});

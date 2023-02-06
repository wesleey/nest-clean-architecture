import { CreatePostMapper } from './create-post.mapper';

describe('CreatePostMapper', () => {
  let createPostMapper: CreatePostMapper;

  const title = 'Post title';
  const content = 'Post content';
  const userId = 1;

  beforeEach(() => {
    createPostMapper = new CreatePostMapper();
  });

  it('should be defined', () => {
    expect(createPostMapper).toBeDefined();
  });

  it('should map from', () => {
    const post = createPostMapper.mapFrom({ title, content, userId });
    expect(post).toEqual({ title, content, userId });
  });

  it('should map to', () => {
    const post = createPostMapper.mapTo({ id: 1, title, content, userId });
    expect(post).toEqual({ id: 1, title, content, userId });
  });
});

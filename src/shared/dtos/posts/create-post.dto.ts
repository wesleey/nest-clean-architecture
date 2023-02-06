import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  id?: number;

  @ApiProperty({
    example: 'Post title',
  })
  title: string;

  @ApiProperty({
    example: 'Post content',
  })
  content: string;

  @ApiProperty({
    example: 1,
  })
  userId: number;
}

import { CreatePostDto } from '@/shared/dtos/posts/create-post.dto';
import { CreatePostUseCase } from '@/use-cases/posts/create-post';
import { FindAllPostsUseCase } from '@/use-cases/posts/find-all-posts';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(
    private createPostUseCase: CreatePostUseCase,
    private findAllPostsUseCase: FindAllPostsUseCase,
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.createPostUseCase.execute(createPostDto);
  }

  @Get()
  findAll() {
    return this.findAllPostsUseCase.execute();
  }
}

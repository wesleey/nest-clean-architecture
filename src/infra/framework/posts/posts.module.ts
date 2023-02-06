import { PostsRepository } from '@/core/repositories/posts.repository';
import { PrismaPostsRepository } from '@/infra/data/prisma/prisma-posts.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';
import { CreatePostUseCase } from '@/use-cases/posts/create-post';
import { FindAllPostsUseCase } from '@/use-cases/posts/find-all-posts';
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
  providers: [
    PrismaService,
    {
      provide: PostsRepository,
      useFactory: (prisma: PrismaService) => new PrismaPostsRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreatePostUseCase,
      useFactory: (repository: PostsRepository) =>
        new CreatePostUseCase(repository),
      inject: [PostsRepository],
    },
    {
      provide: FindAllPostsUseCase,
      useFactory: (repository: PostsRepository) =>
        new FindAllPostsUseCase(repository),
      inject: [PostsRepository],
    },
  ],
})
export class PostsModule {}

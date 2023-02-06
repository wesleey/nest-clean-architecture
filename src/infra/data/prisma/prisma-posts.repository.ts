import { PostEntity } from '@/core/domain/entities/post.entity';
import { PostsRepository } from '@/core/repositories/posts.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';

export class PrismaPostsRepository implements PostsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: PostEntity): Promise<PostEntity> {
    return this.prisma.post.create({ data });
  }

  async findAll(filter?: Partial<PostEntity>): Promise<PostEntity[]> {
    return this.prisma.post.findMany({ where: filter });
  }

  async findOne(filter: Partial<PostEntity>): Promise<PostEntity> {
    return this.prisma.post.findUnique({ where: filter });
  }

  async update(id: number, data: Partial<PostEntity>): Promise<PostEntity> {
    return this.prisma.post.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.post.delete({ where: { id } });
  }
}

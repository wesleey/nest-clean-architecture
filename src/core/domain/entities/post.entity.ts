import { Entity } from '@/core/base/entity';

export class PostEntity extends Entity {
  title: string;
  content: string;
  userId: number;
}

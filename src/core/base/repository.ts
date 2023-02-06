import { Entity } from './entity';

export abstract class Repository<TEntity extends Entity> {
  abstract create(data: TEntity): Promise<TEntity>;
  abstract findAll(filter?: Partial<TEntity>): Promise<TEntity[]>;
  abstract findOne(filter: Partial<TEntity>): Promise<TEntity>;
  abstract update(id: number, data: Partial<TEntity>): Promise<TEntity>;
  abstract remove(id: number): Promise<void>;
}

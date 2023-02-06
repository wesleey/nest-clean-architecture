import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect([]);
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer()).post('/').expect(201).expect({ id: 1 });
  });

  it('/posts (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect([]);
  });

  it('/posts (POST)', () => {
    return request(app.getHttpServer()).post('/').expect(201).expect({ id: 1 });
  });
});

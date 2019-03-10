import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { Express } from 'express';
import { AppModule } from './lib/app.module';

export const server: Express = express();

const startNestApplication = async (expressInstance: Express) => {
  const app = await NestFactory.create(AppModule, expressInstance);
  app.init();
};

startNestApplication(server);

export { AppModule } from './lib/app.module';

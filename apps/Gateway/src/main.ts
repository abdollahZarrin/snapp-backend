import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const server = express;
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  const configService = app.get(ConfigService);
  const port = configService.get('App.port');

  setupSwagger(app, configService);
  await app.listen(port);
}
bootstrap();

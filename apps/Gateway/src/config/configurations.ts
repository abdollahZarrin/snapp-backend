import { registerAs } from '@nestjs/config';

const AppConfig = registerAs('App', () => ({
  version: 'v1',
  port: 3000,
}));

const SwaggerConfig = registerAs('Swagger', () => ({
  title: 'Snapp-backend',
  description: 'This is an online transporter application',
  apiVersion: '1.0.0',
}));

export const configurations = [AppConfig, SwaggerConfig];

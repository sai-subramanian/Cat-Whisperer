import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

/*
1) questionsByProductId
2) create module responses
3) create document module- save to s3 -  save signed url to responses 
4) create image storing in document module
*/

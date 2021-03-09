import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin:'http://localhost:4200'
  });
  await app.listen(3333,()=>{
    console.log('Admin Server port: 3333')
  });
}
bootstrap();

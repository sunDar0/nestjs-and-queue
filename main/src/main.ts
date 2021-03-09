import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin:'http://localhost:4200'// 프론트에 API로 제공 시 해당 경로 허용
  });
  await app.listen(3001, ()=>{
    console.log("on Main Server port 3001")
  });
  
}
bootstrap();

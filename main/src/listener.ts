import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap(){
    const app = await NestFactory.createMicroservice(AppModule,{
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://kggdvjio:jSb0_R-SpaVTv-gE3XjpHWIIdHi0hXQH@dingo.rmq.cloudamqp.com/kggdvjio'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      });
      app.listen(()=>{
        console.log('Microservice is listening');
      })
}

bootstrap();
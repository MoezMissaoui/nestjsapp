import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log('Moez Missaoui')


  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api')

  await app.listen(3030);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log('Moez Missaoui')


  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api')

  const config = new DocumentBuilder()
    .setTitle('NestJS App')
    .setDescription('NestJS App API exemple')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-api', app, document);

  await app.listen(3030);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { CustomExceptionFilter } from './error-handling.filter';
import { ValidationError, useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  await app.startAllMicroservices();
  // app.useGlobalFilters(new CustomExceptionFilter());
  // app.useGlobalPipes(new ValidationPipe());
  useContainer(app.select(AppModule), {fallbackOnErrors: true});
  app.enableCors({origin: true});
  await app.listen(3001)
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule, ObserveInstrument } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  // Validasi DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Konfigurasi Swagger
  const config = new DocumentBuilder()
    .setTitle('WisataKu API')
    .setDescription(
      'API untuk platform informasi dan reservasi destinasi wisata',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  // Membuat dokumentasi Swagger
  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI
  SwaggerModule.setup('api/docs', app, document);

  // Membuat file OpenAPI
  fs.writeFileSync(
    './openapi.json',
    JSON.stringify(document, null, 2),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
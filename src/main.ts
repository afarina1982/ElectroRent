import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('API')
  .setDescription('description')
  .setVersion('0.0.1')
  .addTag('ElectroRent')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document, {yamlDocumentUrl: 'swagger/yaml',});
  
await app.listen(process.env.PUERTO_NESTJS ?? 3000);
}
bootstrap();

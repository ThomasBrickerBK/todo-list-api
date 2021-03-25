import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as packageJson from './../package.json';

const port = parseInt(process.env.PORT, 10) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle((<any>packageJson).name)
    .setDescription((<any>packageJson).description)
    .setVersion((<any>packageJson).version)
    .addTag('default')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: true,
  });

  SwaggerModule.setup('docs', app, document);

  console.log('Server listening on port ' + port);

  await app.listen(port);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //activar validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,//elimina propiedades que no estan en el dto
                    
    forbidNonWhitelisted:true,//lanza error si hay propiedades que no estan en el dto
    transform:true//convierte el body al tipo que se espera en el dto
  }))
  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cars')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getLabuena(): string {
    const nombre: string = "CulmaHpta"
    return `Este es el
    responder para: ${nombre}`;
  }
}


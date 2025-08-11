import { Controller, Get } from '@nestjs/common';

@Controller('Profesores')
export class AppController {
  constructor() {}

  @Get()
  getLabuena(): string {
    const nombre: string = "CulmaHpta"
    return `Este es el
    responder para: ${nombre}`;
  }
}


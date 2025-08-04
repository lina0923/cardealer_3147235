import { Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

  @Get()
  consultaCustomers(): string {
    return 'Aquí se mostrarán todos los customers';
  }

  @Post()
  crearCustomers(): string {
    return 'Aquí se va a crear un customer';
  }
}

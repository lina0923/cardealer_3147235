import { Controller, Get } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {
  @Get()
  consultarVendors(): string {
    return 'Aquí estarán todos los vendors';
  }
}

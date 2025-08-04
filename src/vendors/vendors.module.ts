import { Module } from '@nestjs/common';
import { VendorsController } from './vendors.controller';  // Corregido aquí

@Module({
  controllers: [VendorsController],
})
export class VendorsModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';
@Controller('brands')
export class BrandsController {

  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() body ) {
    return this.brandsService.create(body) 
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string,) {
    return `Aqui se realiza la actualizacion de la brand cuyo id es: ${id}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      "success": true,
      "mensaje": this.brandsService.remove(+id)
    }
  }
}

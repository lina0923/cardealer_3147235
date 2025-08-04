import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {

  @Post()
  create() {
    return "aqui se van a crear las brand";
  }

  @Get()
  findAll() {
    return "aqui se van a consltar todas las brand";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se va a consultar una brand cuyo id es: ${id}`; 
  }

  @Patch(':id')
  update(@Param('id') id: string,) {
    return `Aqui se realiza la actualizacion de la brand cuyo id es: ${id}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aqui se elimina la brand cuyo id es: ${id}`;
  }
}

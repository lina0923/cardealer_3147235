import { BrandsService } from './brands.service';
import { Controller, Get, Post, Patch, Param, Delete, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

  //inyecion de dependencias
  //inyectar un componente para eso en otro
  //sin tener que instanciarlo
  constructor( private readonly BrandsService: BrandsService) {}

  @Post()
  create(@Body ()Body) {
    return this.BrandsService.create(Body);
  }

  @Get()
  findAll() {
    return this.BrandsService.findAll() ;
  }

  // Consultar un resource por id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BrandsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se actualizará la brand con el id: $ {id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return{
      "success" : true,
      "message" : this.BrandsService.remove(+id)
    }
  }
}

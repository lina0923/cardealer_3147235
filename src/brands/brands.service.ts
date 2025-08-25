import { Injectable, Body } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  brands: any;

  constructor(
    private prisma: PrismaService
  ) {}

  // private: solo se puede usar al interior de la clase con this

  create(Body) {
    // Aquí falta la implementación
  }

  // crud: select * from brands
  // this: acceder a algo private

  findAll() {
    return this.prisma.brand.findMany();
  }

  // buscar la brand por id:
  findOne(id: number) {
    // Aquí falta la implementación
  }

  // Aquí la llave cerraba mal, la corregí:
  // return marca; {   --> Está mal la sintaxis, la eliminé

  // eliminar un elemento del arreglo
  // por id
  remove(id: number): string {
    // filter: retornar un nuevo arreglo
    // con elementos que cumplan la
    // condicional
    this.brands = this.brands.filter(function (Brand) {
      return Brand.id !== id;
    });
    return "Elemento eliminado";
  }
}

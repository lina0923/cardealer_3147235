import { Injectable, Body } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  //private: solo se puede usar al interios de de la clase con this
  private brands: Brand [] = [
    {
      id: 1,
      name: "Toyota",
      description: "Marca japonesa reconocida por su fiabilidad y eficiencia.",
      createdAt: new Date('2025-08-11')
    },
    {
      id: 2,
      name: "Ford",
      description: "Fabricante estadounidense conocido por sus camionetas y vehículos robustos.",
      createdAt: new Date('2025-08-11')
    },
    {
      id: 3,
      name: "BMW",
      description: "Marca alemana de lujo famosa por su rendimiento y diseño.",
      createdAt: new Date('2025-08-11')
    }
  ];



  create(Body) {
    this.brands.push(Body);
    return Body;
  }

  //crud:select* from brands
  //this: acceder a algo private 

  findAll() {
    return this.brands;
  }

//buscar la brand por id:
findOne(id:number) {
//busco la brand por id
let marca = this.brands.find(function(brand) {
  //si la encuentro, la retorno
  return brand.id === id
})

return marca;
}

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}

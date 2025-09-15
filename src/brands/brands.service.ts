import { Body, Injectable } from "@nestjs/common";
import { Brand,} from './entities/brand.entity';
import { create } from "domain";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBrandDto } from "./dto/create-brand.dto";


@Injectable()
export class BrandsService{

  constructor(
    private prisma: PrismaService
  ){}

findAll(){
  return this.prisma.brand.findMany()
}
//buscar la brand por id
async findOne (id: number){
  return await this.prisma.brand.findFirst({
     where: {id:id}
  })
   
}
  //añadir al arreglo de brands la brand que esta llegando por el body
async create (newBrand: CreateBrandDto){
  return await this.prisma.brand.create({
    data:{
      name:newBrand.name
    }
  })
}
remove(id:number) {
  
}
}
  

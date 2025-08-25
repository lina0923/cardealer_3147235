import { Body, Injectable } from "@nestjs/common";
import { Brand,} from './entities/brand.entity';
import { create } from "domain";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class BrandsService{

  constructor(
    private prisma: PrismaService
  ){}

findAll(){
  return this.prisma.brand.findMany()
}
//buscar la brand por id
findOne (id: number){

}
  //añadir al arreglo de brands la brand que esta llegando por el body
create (body){
}
remove(id:number) {
  
}
}
  

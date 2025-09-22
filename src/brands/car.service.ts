import { HttpException, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarService {
    constructor(private prisma:PrismaService){}
    async create(newCar: CreateCarDto){
        //validacion logica de negocio
        //la placa no se repita
        let existe=await this.prisma.car.findFirst({
            where:{plate:newCar.plate}
        })
        if(existe) throw new HttpException("la placa ya existe",400)
        else{return await this.prisma.car.create({
            data:{
                plate:newCar.plate,
                release_date: new Date(newCar.release_date),
                is_available: newCar.is_available ,
                price: newCar.price,
                brand:{connect:{id:newCar.brand_id}
                }
            }
        })}
    }
    async findByid(id:number){
        //1.buscar el carro por id
        let existe =await this.prisma.car.findFirst({
            where:{id:id}
        })
        //2.si no existe lanzar una http exception
        //3.si existe devolver el carro
        
    }
}

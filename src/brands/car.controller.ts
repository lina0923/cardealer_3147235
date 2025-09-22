import { Controller,   
                Post,
                Get,
                Param,
                Patch,
                Delete,
                Body, } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './car.service';
import { identity } from 'rxjs';


@Controller('cars')
export class CarController {
    constructor(private carService:CarService){}
    @Post()
    create(@Body() newCar : CreateCarDto){
        return this.carService.create(newCar)
    }
//consultar un carro por id
    @Get(':id')
    findByid(@Param('id') id:string){
        return this.carService.findByid(parseInt(id))  
    }
    // consultar todos los carros
    @Get()
    findAll(){
        return this.carService.findAll()
    }
    // eliminar un carro por id
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.carService.delete(parseInt(id))
    }
}

import { Controller,
         Get, 
         Post, 
         Patch, 
         Delete } from '@nestjs/common';

@Controller('customers')
export class CustomerController {
    //ENDPOINT: punto de entrada que otro proyecto va a recibir 
    //reqquest http de aque proyecto
    //se programa con una funcion con sintaxis de lenguaje
    //de programacion que se este usando
    @Get()
    consultaCustomers() {
        return "Consulta de clientes realizada correctamente";
}
    @Post()
    crearcustomer() {
        return "Aqui se va a crear un customer";
    }}

import { clientes } from "./entities/customersentities"
import { Injectable } from '@nestjs/common';

@Injectable()
export class customersService {

    private customers: clientes[] = [
        {
            id: 1,
            name: "Cristian",
            Telefono: 3012134544,
            Direccion: "Calle 1",
            createdAt: new Date()
        },
        {
            id: 2,
            name: "mercedes",
            Telefono: 3114865923,
            Direccion: "Calle 2",
            createdAt: new Date()
        },
        {
            id: 3,
            name: "ramiro",
            Telefono: 3007564388,
            Direccion: "Calle 3",
            createdAt: new Date()
        },
    ]
    findAll() {
        return this.customers;
    }
    //buscar la brand por id
    findOne(id: number) {
        let marca = this.customers.find(function (brand) {
            return brand.id === id;
        })
        return marca;

    }
    //añadir al arreglo de brands la brand que esta llegando por el body
    create(body) {
        this.customers.push(body)
        return body;

    }
    remove(id: number) {
        this.customers = this.customers.filter(
            function (brand) {
                return brand.id !== id;
            }
        )
        return "elemento eliminado"
    }
}
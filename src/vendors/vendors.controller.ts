import { Controller , Get } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {

    @Get()
    consultaVendors() {
        return "Consulta de proveedores realizada correctamente";
    }
}


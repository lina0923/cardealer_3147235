import { Controller, Get, Post, Patch, Param, Delete, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { CreateEnvioDto } from './create-envio.dto';
import { UpdateEnvioDto } from './update-envio.dto';

@Controller('envios') // Asegúrate de que esta ruta sea "/envios" y no "/envio"
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  create(@Body() createEnvioDto: CreateEnvioDto) {
    return this.enviosService.create(createEnvioDto);
  }

  @Get() // Ruta GET para obtener todos los envíos
  findAll() {
    return this.enviosService.findAll();
  }

  @Get(':id') // Ruta GET para obtener un envío por su ID
  findOne(@Param('id') id: string) {
    return this.enviosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnvioDto: UpdateEnvioDto) {
    return this.enviosService.update(+id, updateEnvioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enviosService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateEnvioDto } from './create-envio.dto';
import { UpdateEnvioDto } from './update-envio.dto';
import { Envio } from './entities/envio.entity'; 

@Injectable()
export class EnviosService {
  private envios: Envio[] = [
    {
      id: 1,
      destinatario: "Juan Pérez",
      direccion: "Calle Falsa 123, Ciudad XYZ",
      fechaCreacion: new Date('2025-08-10'),
      estado: "Pendiente",
    },
    {
      id: 2,
      destinatario: "Ana Gómez",
      direccion: "Avenida Siempre Viva 456, Ciudad ABC",
      fechaCreacion: new Date('2025-08-11'),
      estado: "En tránsito",
    },
    {
      id: 3,
      destinatario: "Carlos Díaz",
      direccion: "Boulevard del Sol 789, Ciudad QWE",
      fechaCreacion: new Date('2025-08-12'),
      estado: "Entregado",
    }
  ];

  create(createEnvioDto: CreateEnvioDto): Envio {
    const newEnvio = {
      id: this.envios.length + 1,
      ...createEnvioDto,
    };
    this.envios.push(newEnvio);
    return newEnvio;
  }

  findAll(): Envio[] {
    return this.envios;
  }

  findOne(id: number): Envio | null {
  return this.envios.find(envio => envio.id === id) || null;
}


update(id: number, updateEnvioDto: UpdateEnvioDto): Envio | null {
  const envioIndex = this.envios.findIndex(envio => envio.id === id);

  if (envioIndex === -1) {
    return null; // Si no se encuentra el envío, retorna null
  }

  this.envios[envioIndex] = {
    ...this.envios[envioIndex],
    ...updateEnvioDto,
  };
  return this.envios[envioIndex]; // Retorna el objeto actualizado
}


  remove(id: number): string {
    const envioIndex = this.envios.findIndex(envio => envio.id === id);
    if (envioIndex === -1) {
      return 'Envio no encontrado';
    }
    this.envios.splice(envioIndex, 1);
    return 'Envio eliminado correctamente';
  }
}

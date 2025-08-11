import { IsString, IsDate, IsOptional } from 'class-validator';

export class CreateEnvioDto {

  destinatario: string;
  direccion: string;
  fechaCreacion: Date;
  estado: string;
}

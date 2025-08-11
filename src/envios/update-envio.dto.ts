import { IsString, IsOptional, IsDate } from 'class-validator';

export class UpdateEnvioDto {
  @IsOptional()
  @IsString()
  destinatario?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsDate()
  fechaCreacion?: Date;

  @IsOptional()
  @IsString()
  estado?: string;
}

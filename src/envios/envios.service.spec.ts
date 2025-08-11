import { Test, TestingModule } from '@nestjs/testing';
import { EnviosService } from './envios.service';

describe('EnviosService', () => {
  let service: EnviosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnviosService],
    }).compile();

    service = module.get<EnviosService>(EnviosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an envio', () => {
    const createEnvioDto = {
      destinatario: 'Pedro Sánchez',
      direccion: 'Calle Libertad 101',
      fechaCreacion: new Date(),
      estado: 'Pendiente',
    };
    expect(service.create(createEnvioDto)).toHaveProperty('id');
  });

  it('should return all envios', () => {
    expect(service.findAll()).toHaveLength(3);
  });

  it('should find an envio by id', () => {
    expect(service.findOne(1)).toHaveProperty('destinatario', 'Juan Pérez');
  });

  it('should update an envio', () => {
    const updateEnvioDto = {
      estado: 'Entregado',
    };
    expect(service.update(1, updateEnvioDto)).toHaveProperty('estado', 'Entregado');
  });

  it('should remove an envio', () => {
    expect(service.remove(1)).toBe('Envio eliminado correctamente');
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PettycashController } from './pettycash.controller';

describe('PettycashController', () => {
  let controller: PettycashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PettycashController],
    }).compile();

    controller = module.get<PettycashController>(PettycashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { PettycashService } from './pettycash.service';
import { PettycashController } from './pettycash.controller';

@Module({
  providers: [PettycashService],
  controllers: [PettycashController]
})
export class PettycashModule {}

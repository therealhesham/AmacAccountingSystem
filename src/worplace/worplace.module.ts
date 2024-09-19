import { Module } from '@nestjs/common';
import { WorplaceService } from './worplace.service';
import { WorplaceController } from './worplace.controller';

@Module({
  providers: [WorplaceService],
  controllers: [WorplaceController]
})
export class WorplaceModule {}

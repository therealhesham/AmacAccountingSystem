import { Module } from '@nestjs/common';
import { SafeService } from './safe.service';
import { SafeController } from './safe.controller';

@Module({
  providers: [SafeService],
  controllers: [SafeController]
})
export class SafeModule {}

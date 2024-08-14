import { Module } from '@nestjs/common';
import { BenefiaryController } from './benefiary.controller';
import { BenefiaryService } from './benefiary.service';

@Module({controllers:[BenefiaryController],providers:[BenefiaryService]})
export class BenefiaryModule {}

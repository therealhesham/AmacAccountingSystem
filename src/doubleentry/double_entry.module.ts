import { Module } from '@nestjs/common';
import { DoubleEntryService } from './double_entry.service';
import { DoubleEntryController } from './double_entry.controller';

@Module({
    providers: [DoubleEntryService],
    controllers: [DoubleEntryController]
  })
export class DoubleEntryModule {
constructor(){}



}

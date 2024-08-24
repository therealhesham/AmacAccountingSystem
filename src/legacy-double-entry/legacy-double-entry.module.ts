import { Module } from '@nestjs/common';
import { LegacyDoubleEntryController } from './legacy-double-entry.controller';
import { LegacyDoubleEntryService } from './legacy-double-entry.service';

@Module({
  controllers: [LegacyDoubleEntryController],
  providers: [LegacyDoubleEntryService]
})
export class LegacyDoubleEntryModule {}

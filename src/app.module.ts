import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DoubleEntryController } from './doubleentry/double_entry.controller';
import { DoubleEntryService } from './doubleentry/double_entry.service';
import { DoubleEntryModule } from './doubleentry/double_entry.module';
import { BenefiaryController } from './benefiary/benefiary.controller';
import { BenefiaryService } from './benefiary/benefiary.service';
import { BenefiaryModule } from './benefiary/benefiary.module';

@Module({
  imports: [UserModule, DoubleEntryModule, BenefiaryModule],
  controllers: [AppController, DoubleEntryController, BenefiaryController],
  providers: [AppService, DoubleEntryService, BenefiaryService],
})
export class AppModule {}

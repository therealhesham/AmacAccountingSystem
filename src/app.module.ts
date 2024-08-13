import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DoubleEntryController } from './doubleentry/double_entry.controller';
import { DoubleEntryService } from './doubleentry/double_entry.service';
import { DoubleEntryModule } from './doubleentry/double_entry.module';

@Module({
  imports: [UserModule, DoubleEntryModule],
  controllers: [AppController, DoubleEntryController],
  providers: [AppService, DoubleEntryService],
})
export class AppModule {}

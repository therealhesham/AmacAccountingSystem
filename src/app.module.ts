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
// import { AssetService } from './asset/assets.service';
import { AssetsService } from './assets/assets.service';
import { AssetsController } from './assets/assets.controller';
import { AssetsModule } from './assets/assets.module';
import { AddtobankaccountModule } from './addtobankaccount/addtobankaccount.module';
import { SafeModule } from './safe/safe.module';

@Module({
  imports: [UserModule, DoubleEntryModule, BenefiaryModule, AssetsModule, AddtobankaccountModule, SafeModule],
  controllers: [AppController, DoubleEntryController, BenefiaryController, AssetsController],
  providers: [AppService, DoubleEntryService, BenefiaryService, AssetsService],
})
export class AppModule {}

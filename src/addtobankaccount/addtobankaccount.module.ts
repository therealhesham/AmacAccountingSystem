import { Module } from '@nestjs/common';
import { AddtobankaccountController } from './addtobankaccount.controller';
import { AddtobankaccountService } from './addtobankaccount.service';

@Module({
  controllers: [AddtobankaccountController],
  providers: [AddtobankaccountService]
})
export class AddtobankaccountModule {}

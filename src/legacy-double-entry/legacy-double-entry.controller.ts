import { Controller, Get } from '@nestjs/common';
import { LegacyDoubleEntryService } from './legacy-double-entry.service';
// LegacyDoubleEntryService
@Controller('legacyentry')
export class LegacyDoubleEntryController {
constructor(public legacyDoubleEntry:LegacyDoubleEntryService){


}

@Get("/")
async Transfer(){
return this.legacyDoubleEntry.MoveTransactions()




}





}

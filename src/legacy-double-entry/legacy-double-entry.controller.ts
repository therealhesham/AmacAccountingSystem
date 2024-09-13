import { Controller, Get, Res } from '@nestjs/common';
import { LegacyDoubleEntryService } from './legacy-double-entry.service';
import { Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
// LegacyDoubleEntryService

@Controller('legacyentry')
export class LegacyDoubleEntryController {
constructor(public legacyDoubleEntry:LegacyDoubleEntryService){


}


@Get("/getdate")
async GetDate(@Res() res:Response){
const prism =new PrismaClient()

const getdate = await prism.date.findFirst()
res.send(getdate.date)


}




@Get("/")
async Transfer(){
return this.legacyDoubleEntry.MoveTransactions()




}





}

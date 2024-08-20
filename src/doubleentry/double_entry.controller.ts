import { Body, Controller, Get, Post,Req ,Res } from '@nestjs/common';
import { DoubleEntryService } from './double_entry.service';
import { Request,Response } from 'express';

console.log("")

@Controller('/double-entry')
export class DoubleEntryController {
constructor(public doubleentryservice:DoubleEntryService){
}
// onst prisma  = new PrismaClient();




@Get("/")
GetTransactions(){

return this.doubleentryservice.gettransactions()
}

@Post("/")
async Transacaction(@Req() req:Request,@Res() res:Response){
    const {CreditName,DebitName,CreditAmount,DebitAmount,CreditType,Notes}=req.body;
    const  DBResponse =await this.doubleentryservice.Transact(CreditType,CreditName,DebitName,Number(CreditAmount),Number(DebitAmount),Notes);
if (DBResponse == "error")  return res.status(301).json(DBResponse)
res.send(DBResponse)
}



}

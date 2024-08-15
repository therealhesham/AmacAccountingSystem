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
    const {CreditName,DebitName,CreditAmount,DebitAmount}=req.body;
    const  DBResponse =await this.doubleentryservice.Transact(CreditName,DebitName,Number(CreditAmount),Number(DebitAmount));
if (DBResponse == "error")  return res.status(301).json(DBResponse)
res.send(DBResponse)
}



}

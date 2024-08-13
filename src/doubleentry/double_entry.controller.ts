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
Transacaction(@Req() req:Request,@Res() res:Response){



  console.log("asdadspasdkoapoodkaopdkaopdskspodskapodkaopdkaioqdoizapomam")
console.log(req.body)
    const {CreditName,DebitName,CreditAmount,DebitAmount}=req.body;
    // if (CreditAmount != DebitAmount) return res.send("")
    return this.doubleentryservice.Transact(CreditName,DebitName,Number(CreditAmount),Number(DebitAmount))
}



}

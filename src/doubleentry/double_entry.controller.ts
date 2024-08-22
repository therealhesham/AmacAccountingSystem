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
    const {CreditName,DebitName,CreditAmount,DebitAmount,CreditType,Notes,date}=req.body;
    const  DBResponse =await this.doubleentryservice.Transact(date,CreditType,CreditName,DebitName,Number(CreditAmount),Number(DebitAmount),Notes);
if (!DBResponse )  return res.status(301).json({error:"error"})
res.send(DBResponse)
}






@Post("/addfunds")
async addfundstosafe(@Req() req:Request,@Res() res:Response){
    try {
    
        const {CreditName,DebitName,CreditAmount,DebitAmount,CreditType,Notes,date}=req.body;
        const  DBResponse =await this.doubleentryservice.Transactions(req,res,date,CreditType,CreditName,DebitName,CreditAmount,DebitAmount,Notes);
  console.log(DBResponse)
        if (!DBResponse )  return res.status(301).json({error:"error"})
    res.status(201).json(DBResponse)    
    } catch (error) {
    console.log(error)
        res.status(301).json(error)    
        
    }
    
    
}



}

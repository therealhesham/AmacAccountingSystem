import { Controller, Get,Post, Res,Req } from '@nestjs/common';
import { LegacyDoubleEntryService } from './legacy-double-entry.service';
import { Response,Request } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
// LegacyDoubleEntryServic
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
@Post("/delete")
async Delete(@Res() res:Response,@Req() req:Request){
const prism =new PrismaClient()
console.log(req.body.id)
const getdate = await prism.legacy_Double_Entry.delete({where:{id:req.body.id}})

res.status(201).json(getdate)


}



@Get("/legacy")
async Legacy(){
    const prism =new PrismaClient()

const find = await prism.legacy_Double_Entry.findMany()
console.log(find)
return find.reverse() 

}


@Get("/")
async Transfer(){
return this.legacyDoubleEntry.MoveTransactions()




}





}

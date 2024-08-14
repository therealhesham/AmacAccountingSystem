import {Post,Get, Controller,Req,Res } from '@nestjs/common';
import { Request,Response } from 'express';
import { BenefiaryService } from './benefiary.service';
import { PrismaClient } from '@prisma/client';
@Controller('/benefiary')
export class BenefiaryController {

constructor(private BenefiaryService:BenefiaryService){


}

@Get("/")
GetBeneficiary(){

const newclient= new PrismaClient()
const finder = newclient.benefiary.findMany()

return finder
}

@Post("/")
AddBeneficiary(@Req() req:Request,@Res() res:Response){

const {Name,Type}=req.body;
console.log(req.body)
return this.BenefiaryService.AddBeneficiary(Name,Type)

}
}

import {Post,Get, Controller,Req,Res } from '@nestjs/common';
import { Request,Response } from 'express';
import { BenefiaryService } from './benefiary.service';
import { PrismaClient } from '@prisma/client';
@Controller('/benefiary')
export class BenefiaryController {

constructor(public BenefiaryService:BenefiaryService){


}

@Get("/")
GetBeneficiary(@Res() res:Response){


return this.BenefiaryService.GetBeneficiary(res);

}

@Post("/")
AddBeneficiary(@Req() req:Request,@Res() res:Response){

const {Name,Type}=req.body;
console.log(req.body)
return this.BenefiaryService.AddBeneficiary(Name,Type)

}
}

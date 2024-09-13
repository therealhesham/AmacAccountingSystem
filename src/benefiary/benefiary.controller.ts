import {Post,Get, Controller,Req,Res, Param } from '@nestjs/common';
import { Request,Response } from 'express';
import { BenefiaryService } from './benefiary.service';
import { PrismaClient } from '@prisma/client';


@Controller('/benefciary')
export class BenefiaryController {

constructor(public BenefiaryService:BenefiaryService){


}

@Get("/delete/:id")
DeleteBeneficiary(@Param() param,@Res() res:Response){


return this.BenefiaryService.BeneficiaryDelete(param,res);

}


@Get("/get")
GetBeneficiary(@Res() res:Response){


return this.BenefiaryService.GetBeneficiary(res);

}

@Get("/totalamount/:id")
FindTotal(@Param() param:string , @Res() res:Response){
// new PrismaClient().pettyCash.deleteMany()
return this.BenefiaryService.GetTotalAmount(param,res)

}

@Get("/:id")
FindNotSettled(@Param() param:string , @Res() res:Response){
// new PrismaClient().pettyCash.deleteMany()
return this.BenefiaryService.FindNotSettled(param,res)

}

@Post("/")
AddBeneficiary(@Req() req:Request,@Res() res:Response){

const {Name,Type}=req.body;
console.log(req.body)
return this.BenefiaryService.AddBeneficiary(Name,Type)

}
}

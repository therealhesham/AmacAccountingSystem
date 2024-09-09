import {Req,Res,Get,Post, Controller } from '@nestjs/common';
import { Request,Response } from 'express';

import { ContractorService } from './contractor.service';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
@Controller('contractor')
export class ContractorController {
constructor(  private contractorService : ContractorService ){}


@Post("/addinvoice")
async addinvoice(@Req() req:Request,@Res() res:Response){


return this.contractorService.Addinvoice(req,res)

}

@Post("/addpaymnet")
async addpayment(@Req() req:Request,@Res() res:Response){


return this.contractorService.Addpayment(req,res)

}




@Get("/")
async List(@Req() req:Request,@Res() res:Response){

const li = await prisma.contractor.findMany()
res.status(200).json(li)
// return this.contractorService.AddContractor(req,res)
    
    }




@Get("/getinfo")
async GetInfo(@Req() req:Request,@Res() res:Response){

// const li = await prisma.contractor.findMany()
// res.status(200).json(li)
return this.contractorService.GetInfo(req,res)
    
    }
    

@Post("/addcontractor")
async addContractor(@Req() req:Request,@Res() res:Response){


return this.contractorService.AddContractor(req,res)

}


}

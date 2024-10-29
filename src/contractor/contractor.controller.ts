import {Req,Res,Param,Get,Post, Controller } from '@nestjs/common';
import { Request,Response } from 'express';

import { ContractorService } from './contractor.service';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Controller('/contractor')
export class ContractorController {
constructor(  public contractorService : ContractorService ){}



@Get("/contractorinfo/:id")
FindTotal(@Param() param:string , @Res() res:Response){
// new PrismaClient().pettyCash.deleteMany()
return this.contractorService.GetSpecificInfo(param,res)
// prisma.contractor.create({include:{Invoices:{}}})

}


@Post("/addpaymen")
async AddPayment(@Req() req:Request,@Res() res:Response){
// console.log(req.body)
return this.contractorService.Addpayment(req,res)

}





@Get("/getpayments")
async GetPayment(@Req() req:Request,@Res() res:Response){

return this.contractorService.GetPayment(req,res)

}
@Post("/addinvoice")
async addinvoice(@Req() req:Request,@Res() res:Response){


return this.contractorService.Addinvoice(req,res)

}

// @Post("/addpaymnet")



@Get("/")
async List(@Req() req:Request,@Res() res:Response){

// const li = await prisma.contractor.findMany()
// res.status(200).json(li)
return this.contractorService.ContractorList(req,res)
    
    }
    @Get("/invoices")
    async invoices(@Req() req:Request,@Res() res:Response){
    
    const li = await prisma.invoices.findMany()
    res.status(200).json(li)
    // return this.contractorService.AddContractor(req,res)
        
      }










      
@Get("/getinfo")
async GetInfo(@Req() req:Request,@Res() res:Response){

// const li = await prisma.contractor.findMany()
// res.status(200).json(li)
return this.contractorService.GetInfo(req,res)
    
    }

    @Get("/:id")
    async GetContractor(@Param() req:string,@Res() res:Response){
    console.log(req)
    // const li = await prisma.contractor.findMany()
    // res.status(200).json(li)
    return this.contractorService.GetContractor(req,res)
        
        }

@Post("/addcontractor")
async addContractor(@Req() req:Request,@Res() res:Response){


return this.contractorService.AddContractor(req,res)

}




@Post("/delete")
async delete(@Req() req:Request,@Res() res:Response){


return this.contractorService.Delete(req,res)

}



@Post("/deletepayment")
async DeletePayment(@Req() req:Request,@Res() res:Response){


return this.contractorService.DeletePayment(req,res)

}


}

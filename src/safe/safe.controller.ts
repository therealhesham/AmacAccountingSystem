import {Post, Controller,Get,Req,Res } from '@nestjs/common';
import { SafeService } from './safe.service';
import { Request,Response } from 'express';
@Controller('/safe')
export class SafeController 
{

constructor(private safeService:SafeService){}




@Get("/findcash")
async Cash(@Req() req:Request,@Res() res:Response){
    console.log(Req)

return this.safeService.AvailableCash(req,res)
}

@Get("/findcas")
async Cas(@Req() req:Request,@Res() res:Response){
    console.log(Req)

return this.safeService.AvailableCash(req,res)
}



@Post("/")
Addfund(@Req() req:Request,@Res() res:Response){

return this.safeService.AddFund(req,res)

}

    
}

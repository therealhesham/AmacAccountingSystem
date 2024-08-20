import {Post, Controller,Get,Req,Res } from '@nestjs/common';
import { SafeService } from './safe.service';
import { Request,Response } from 'express';
@Controller('/safe')
export class SafeController 
{

constructor(private safeService:SafeService){}


@Post("/")
Addfund(@Req() req:Request,@Res() res:Response){

console.log(Req)
return this.safeService.AddFund(req,res)

}

    
}

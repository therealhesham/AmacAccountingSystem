import { Controller,Get,Req,Res } from '@nestjs/common';
import { Request ,Response} from 'express';
import { AddtobankaccountService } from './addtobankaccount.service';

@Controller('addtobankaccount')
export class AddtobankaccountController {

constructor(public AddtobankaccountService : AddtobankaccountService){
}

@Get("/")
Addfund(@Req()req:Request,@Res() res:Response){
    return    this.AddtobankaccountService.AddFund(req,res)



}



}

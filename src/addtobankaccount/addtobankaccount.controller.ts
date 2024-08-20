import { Controller,Get,Post,Req,Res } from '@nestjs/common';
import { Request ,Response} from 'express';
import { AddtobankaccountService } from './addtobankaccount.service';

@Controller('/bankaccount')
export class AddtobankaccountController {

constructor(public AddtobankaccountService : AddtobankaccountService){
}
@Post("/")
Addfund(@Req() req:Request,@Res() res:Response){
    return    this.AddtobankaccountService.AddFund(req,res)
}



}

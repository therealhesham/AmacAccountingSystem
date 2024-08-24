import { Controller,Get,Post,Req,Res, UseGuards } from '@nestjs/common';
import { Request ,Response} from 'express';
import { AddtobankaccountService } from './addtobankaccount.service';
import { AccountsystemGuard } from 'src/accountsystem/accountsystem.guard';

@Controller('bankaccount')
export class AddtobankaccountController {

constructor(public AddtobankaccountService : AddtobankaccountService){
}


@Get("/")
Addund(@Req() req:Request,@Res() res:Response){
    return    "helo"
}
@Post("/")
Addfund(@Req() req:Request,@Res() res:Response){
    return    this.AddtobankaccountService.AddFund(req,res)
}



}

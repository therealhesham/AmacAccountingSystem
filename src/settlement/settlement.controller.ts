import {Param,Post,Get, Controller, Res ,Req} from '@nestjs/common';
import {Response,Request} from "express"
import { SettlementService } from './settlement.service';
SettlementService

@Controller('/settlement')
export class SettlementController {
    constructor(public settlementservice:SettlementService){

    
    }
    

@Get("/:id/:date")
async FindSettle(@Param() param , @Res() res:Response){
console.log(param)
return this.settlementservice.FindSettle(param,res)

}

@Post("/settle")
async Settle(@Req() req:Request,@Res() res:Response){


    return this.settlementservice.Settle(req,res)
}



}

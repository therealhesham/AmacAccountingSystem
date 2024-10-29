import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { RentService } from './rent.service';
import { Request,Response } from 'express';
@Controller('rent')
export class RentController {

/**
 *
 */
constructor(private RentService:RentService) {
  
}

@Post("/newrent")
async PostRent(@Req() req:Request,@Res() res:Response){

return  this.RentService.NewRent(req,res)


}




@Get("/debtslist")
async GetDebts(@Req() req:Request,@Res() res:Response){
console.log("s")
return  this.RentService.GetDebts(req,res)


}


}

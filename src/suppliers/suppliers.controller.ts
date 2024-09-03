import {Req,Res,Get,Post, Controller } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { Request,Response } from 'express';

@Controller('suppliers')
export class SuppliersController {
constructor(private supplierservice : SuppliersService){
   
}


@Get('/get')
async FetchSuppliers(@Req()  req:Request, @Res() res:Response){

return this.supplierservice.FetchSuppliers(req,res)


}


@Post("/adddeposit")
async AddDeposit(@Req() req:Request,@Res() res:Response){

    return this.supplierservice.addDeposits(req,res)
}


@Post("/addsupplier")
async AddSupplier(@Req() req:Request,@Res() res:Response){

return this.supplierservice.addSupplier(req,res)

}

}
// const sss = Object.getOwnPropertyDescriptor()

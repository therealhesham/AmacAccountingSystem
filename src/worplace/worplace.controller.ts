import {Req,Res,Post,Get, Controller } from '@nestjs/common';
import { WorplaceService } from './worplace.service';
import { Request,Response } from 'express';
@Controller('workplace')
export class WorplaceController {
constructor(private workplace:WorplaceService){}

@Post('/addworkplace')
async PostNew(@Req() req:Request,@Res() res:Response){


return this.workplace.AdddWorplace(req,res);

}

@Post('/delete')
async Delete(@Req() req:Request,@Res() res:Response){


return this.workplace.Delete(req,res);

}



@Get('/get')
async GetWorkPlace(@Req() req:Request,@Res() res:Response){


    return this.workplace.GetWorkPlace(req,res)
}

}

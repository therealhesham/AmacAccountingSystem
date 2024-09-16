// import { Controller,Get,Param,Post,Post,Res, } from '@nestjs/common';
import { Param, Post, Get, Controller, Res, Req } from '@nestjs/common';
import { Response, Request } from "express"

import { PettycashService } from './pettycash.service';
@Controller('pettycash')
export class PettycashController {

constructor(private pettyCash: PettycashService) { }





@Get("/")
async FindSettle(@Param() param, @Res() res: Response) {
        console.log(param)
        return this.pettyCash.FindSettle(param, res)

    }

@Get("/search/:id/:date")
async Search(@Param() param, @Res() res: Response) {
        console.log(param)
        return this.pettyCash.Search(param, res)

    }



}

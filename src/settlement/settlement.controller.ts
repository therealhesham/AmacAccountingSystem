import { Param, Post, Get, Controller, Res, Req } from '@nestjs/common';
import { Response, Request } from "express"
import { SettlementService } from './settlement.service';
SettlementService

@Controller('/settlement')
export class SettlementController {
    constructor(public settlementservice: SettlementService) {


    }



    @Get("/count")
    async Count(@Param() param, @Res() res: Response) {
        console.log(param)
        return this.settlementservice.Count(param, res)

    }



    @Get("/")
    async FindSettle(@Param() param, @Res() res: Response) {
        console.log(param)
        return this.settlementservice.FindSettle(param, res)

    }

    @Get("/search/:id/:date")
    async Search(@Param() param, @Res() res: Response) {
        console.log(param)
        return this.settlementservice.Search(param, res)

    }




    @Get("/:skip")
    async totalSettlement(@Param() param, @Res() res: Response) {
        console.log(param)
        return this.settlementservice.totalsettlmetns(param, res)

    }



    @Post("/settle")
    async Settle(@Req() req: Request, @Res() res: Response) {


        return this.settlementservice.Settle(req, res)
    }



}

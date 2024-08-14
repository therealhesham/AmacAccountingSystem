import {Post, Get,Controller, Req } from '@nestjs/common';
import {Request,Response } from "express";

import { AssetsService } from './assets.service';
@Controller('/assets')
export class AssetsController {
constructor(private assets:AssetsService){}
@Post("/addasset")
AddAsset(@Req() req:Request){

// 
const {AssetName,Cost}=req.body();

return this.assets.AddAsset(AssetName,Cost)
}



}

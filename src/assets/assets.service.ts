import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class AssetsService {


async AddAsset(AssetName,Cost){

const newAsset=    await prisma.asset.create({data:{AssetName,Cost}});
return newAsset;
}

}

import {Res, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
const newPrisma =new PrismaClient()
@Injectable()
export class BenefiaryService {


async AddBeneficiary(Name,Type){
console.log(Name,Type)
// newPrisma.benefiary.?
const waiter = await newPrisma.benefiary.create({data:{Name:Name,Type:Type}})
 return    waiter
}


async GetBeneficiary(res){
try {

    // newPrisma.benefiary.f
    const fetcher = await newPrisma.benefiary.findMany();
if(fetcher.length == 0 ) return   res.status(301).json({error:"No Data"})
    res.status(200).json(fetcher)
} catch (error) {
console.log(error)
    res.status(301).json({error})
    
}

}


}

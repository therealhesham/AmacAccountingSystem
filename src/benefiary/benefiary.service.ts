import {Res, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
const newPrisma =new PrismaClient()
@Injectable()
export class BenefiaryService {


async AddBeneficiary(Name,Type){
console.log(Name,Type)
// newPrisma.benefiary.?
const waiter = await newPrisma.benefiary.create({data:{Name:Name,Type:Type,Amount:0}})  
 return    waiter
}
async FindNotSettled(param,res){
    console.log(param)
    // await newPrisma.pettyCash.deleteMany()
try{
const waiter = await newPrisma.pettyCash.findMany({where:{BenefciaryID:param.id,isSettled:false}})
res.status(200).json(waiter);
}
catch(error){
console.log(error)
    res.status(301).json(error);

    
}


}

async GetTotalAmount(param,res){
    try {
        const fetcher = await newPrisma.benefiary.findFirst({where:{Name:param.id}});
        // console.log(fetcher)
        // if(fetcher. == 0 ) return   res.status(301).json({error:"No Data"})
        res.status(200).json(fetcher)
    } catch (error) {
        // console.log(error)
        res.status(301).json(error)
        
    }
    


}


async GetBeneficiary(res){
try {
    const fetcher = await newPrisma.benefiary.findMany();
    console.log(fetcher)
    if(fetcher.length == 0 ) return   res.status(301).json({error:"No Data"})
    res.status(200).json(fetcher)
} catch (error) {
    // console.log(error)
    res.status(301).json(error)
    
}

}


}

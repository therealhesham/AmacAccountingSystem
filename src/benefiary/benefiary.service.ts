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
async  GetSpecificInfo(param,res) {
    try {
        // const {Payment,Name,WorkPlace,id}=req.body;
    

const finder = await newPrisma.benefiary.findMany({where:{id:param.id},include:{Clauses:true,NewpettyCash:true}})
        
    res.status(200).json(finder)
    } catch (error) {
    res.status(301).json(error)
        
    }

}
async GetTotalAmount(param,res){
    try {
        console.log(param)
        const fetcher = await newPrisma.benefiary.findFirst({where:{Name:param.id}});
        console.log(fetcher)
        // if(fetcher. == 0 ) return   res.status(301).json({error:"No Data"})
        res.status(200).json(fetcher)
    } catch (error) {
        // console.log(error)
        res.status(301).json(error)
        
    }
    


}
async BeneficiaryDelete(param,res){


try {
    const fetcher = await newPrisma.benefiary.delete({where:{Name:param.id}});
    res.status(200).json(fetcher)
} catch (error) {
    res.status(301).json(error)
    
}



}

async GetBeneficiary(res){
try {
    const fetcher = await newPrisma.benefiary.findMany({include:{NewpettyCash:true}});
 console.log(fetcher)   
    if(fetcher.length == 0 ) return   res.status(301).json({error:"No Data"})
    res.status(200).json(fetcher)
} catch (error) {
    // console.log(error)
    res.status(301).json(error)
    
}

}


}

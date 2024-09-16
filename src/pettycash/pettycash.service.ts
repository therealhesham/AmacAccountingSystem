import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()

export class PettycashService {



    async FindSettle(param,res){
        try {
        // console.log("para",param)
    const waiter = await prisma.pettyCash.findMany()
    console.log(waiter)
    res.status(200).json(waiter.reverse())
    } catch (error) {
        // console.log(error)
        res.status(301).json(error)
    }}
    
    async Search(param,res){


        try {
    //   console.log(param)
    if(param.date == new Date().toLocaleDateString())   { 
        const waiter = await prisma.pettyCash.findMany({where:{BenefciaryID:param.id}})
        console.log(waiter)
          return  res.status(200).json(waiter.reverse())
        }

    
    const waiter = await prisma.pettyCash.findMany({where:{BenefciaryID:param.id, Date:param.date}})
        console.log(waiter)
            res.status(200).json(waiter.reverse())
    
        } catch (error) {
if(param.date == new Date().toLocaleDateString())   { 
            const waiter = await prisma.pettyCash.findMany({where:{BenefciaryID:param.id}})
            console.log(waiter)
                res.status(200).json(waiter.reverse())
            }
        }
    
    }
    
    
    
    
    
    
    
    









}

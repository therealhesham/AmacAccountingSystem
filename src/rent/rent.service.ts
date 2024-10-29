import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RentService {
    
    async NewRent(req,res){
        const {contractStart,contractEnd,duration,payDate,Cost,type}=req.body;
    const prisma = new PrismaClient();

const newrent = await prisma.rent.create({data:{ContractStart:contractStart,ContractEnd:contractEnd,duration,paydate:payDate,Debt:{create:{Amount:parseFloat(Cost),type:"ايجار"}},Cost,type},include:{Debt:true}})


res.status(200).json(newrent);

    }

 

    








    async GetDebts(req,res){
        try {
            
        // const {ContractStart,ContractEnd,duration,paydate,Cost,type}=req.body;
    const prisma = new PrismaClient();

const debts = await prisma.debt.findMany({include:{Rent:true,Supplier:true}});
console.log(debts)

// await prisma.debt.create({data:{DebtID:newrent.id,Amount:Number(newrent.Cost),type:"ايجار"}})
res.status(200).json(debts);

} catch (error) {
 console.log(error)           
}
    }






}



import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
    
const prisma = new PrismaClient()
@Injectable()
export class SafeService {


    

    async AddFund(req,res){
    
    try {
        const today = new Date().toLocaleDateString();
        const{BankName,Type,Quantity,_Date,Name} = req.body;
        console.log(req.body)
        const finder = await prisma.safe.findFirst({where:{Date:today}})
    if (finder )return res.status(401).json(finder) 
    
    const find_er  =await prisma.safe.create({data:{Date:today,Name,Quantity:Number(Quantity)}})
    res.status(200).json(find_er)
        
    } catch (error) {
console.log(error)
        

        
    }
    }


}

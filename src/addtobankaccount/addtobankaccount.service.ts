import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient()
@Injectable()
export class AddtobankaccountService {

    

async AddFund(req,res){
    const today = new Date().toLocaleDateString();
    const{BankName,Type,Quantity,_Date} = req.body;
    const finder = await prisma.bank_Account.findFirst({where:{Date:today}})
if (finder )return 

const find_er  =await prisma.bank_Account.create({data:{Date:today,BankName,Type,Quantity}})
res.status(200).json(find_er)
}


async AddAccount(){
// const waiter =await prisma.bank_Account.update({where:{Date:"ss"},data:{Quantity:55}})
// console.log(waiter)
}

}

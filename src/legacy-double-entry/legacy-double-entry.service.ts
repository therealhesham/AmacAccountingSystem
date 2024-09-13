import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
@Injectable()
export class LegacyDoubleEntryService {

async MoveTransactions() {
const findAll = await prisma.double_Entry.findMany()
   
const moveToLegacy = await prisma.legacy_Double_Entry.createMany({data:findAll})
const deleteAll = await prisma.double_Entry.deleteMany()
const find = await prisma.safe.findMany()
 
const waiter =await prisma.safe.create({data:{Quantity:find[find.length-1].Quantity+0,Date:new Date().toLocaleDateString()}})

const findBankAccount = await prisma.safe.findMany()
 try {
    const createdate = await prisma.date.findFirst()
  const creator =   await prisma.date.update({where:{id:createdate.id},data:{date:new Date().toLocaleDateString()}})       
} catch (error) {
     const createdate = await prisma.date.create({data:{date:new Date().toLocaleDateString()}})
    
 }
const waiterBank =await prisma.bank_Account.create({data:{Quantity:findBankAccount[findBankAccount.length-1].Quantity+0,Date:new Date().toLocaleDateString()}})
console.log("done")

}

}
function name<T>(params:T):T {

    return params;
    
}
// name<number>("")
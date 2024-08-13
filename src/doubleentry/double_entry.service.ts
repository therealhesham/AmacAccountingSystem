import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
@Injectable()
export class DoubleEntryService {




gettransactions(){
    return prisma.double_Entry.findMany()
}

async Transact(CreditName,DebitName,CreditAmount,DebitAmount){

    console.log(CreditName,DebitName,CreditAmount,DebitAmount)
const waiter = await prisma.double_Entry.create({data:{CreditAmount,CreditName,DebitAmount,DebitName}})
return waiter;
    
}



}

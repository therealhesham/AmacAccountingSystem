import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
@Injectable()
export class LegacyDoubleEntryService {

async MoveTransactions() {
const findAll = await prisma.double_Entry.findMany()
   
const moveToLegacy = await prisma.legacy_Double_Entry.createMany({data:findAll})
const deleteAll = await prisma.double_Entry.deleteMany()

console.log(moveToLegacy)
}

}
function name<T>(params:T):T {

    return params;
    
}
// name<number>("")
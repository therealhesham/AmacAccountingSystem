import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const newPrisma =new PrismaClient()
@Injectable()
export class BenefiaryService {


async AddBeneficiary(Name,Type){
console.log(Name,Type)
// newPrisma.benefiary.?
const waiter =  newPrisma.benefiary.create({data:{Name:Name,Type:Type}})
 return    waiter
}


}

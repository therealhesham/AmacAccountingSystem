import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { throwError } from 'rxjs';


const prisma = new PrismaClient()
@Injectable()
export class SettlementService {





async FindSettle(param,res){
// console.log(id)
try {
const waiter = await prisma.settlement.findMany({where:{BenefciaryID:param.id,Date:param.Date}})

res.status(200).json(waiter.reverse())
} catch (error) {
    res.status(301).json(error)
}

}








async Settle(req,res){
    console.log(req.body)
const {Clauses,Amount,Name}=req.body
try{
return await prisma.$transaction(async (tx)=>{
const f = await tx.benefiary.findUnique({where:{Name:Name}})
try {
    console.log(f)
    console.log(f.Amount-parseFloat(Amount))
if(f.Amount - parseFloat(Amount) < 0 ) throw new Error("Error : Amounts is less than 0");


} catch (error) {
    console.error(error)
 return res.status(301).json({error:"Result is less than ZERO"})    
}
const awaiter = await tx.benefiary.update({where:{Name:Name},data:{Amount:{decrement:parseFloat
    (Amount)}}})


const waiter = await tx.settlement.create({data:{Clauses,Amount:parseFloat(Amount),BenefciaryID:Name,Date:new Date().toLocaleString()}})
res.status(200).json(awaiter)   

// return "awaiter.Amount"


},{ maxWait: 5000, // 5 seconds max wait to connect to prisma
    timeout: 20000, // 20 seconds
    })

} catch (error) {
    console.error(error)
 res.status(301).json(error)   
}


}

}

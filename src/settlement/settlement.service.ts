import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { throwError } from 'rxjs';


const prisma = new PrismaClient()
@Injectable()
export class SettlementService {



async totalsettlmetns(param,res){
    try {
        // console.log("para",param)
    const waiter = await prisma.settlement.findMany({skip:parseFloat(param.skip),take:10})
    // console.log(waiter)
    res.status(200).json(waiter.reverse())
    } catch (error) {
        // console.log(error)
        res.status(301).json({error})
    }


}







async Count(param,res){
    try {
        // console.log("para",param)
    const waiter = await prisma.settlement.count()
    console.log(waiter)
    res.status(200).json(waiter)
    } catch (error) {
        // console.log(error)
        res.status(301).json({error})
    }


}


async Search(param,res){


    try {
//   console.log(param)


const waiter = await prisma.settlement.findMany({where:{BenefciaryID:param.id, Date:param.date}})
    console.log(waiter)
        res.status(200).json(waiter.reverse())

    } catch (error) {
        console.log(error)
        res.status(301).json({error})
    }


}









async FindSettle(param,res){
    try {
    // console.log("para",param)
const waiter = await prisma.settlement.findMany()
console.log(waiter)
res.status(200).json(waiter.reverse())
} catch (error) {
    // console.log(error)
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


const waiter = await tx.settlement.create({data:{Clauses,Amount:parseFloat(Amount),BenefciaryID:Name,Date:new Date().toLocaleDateString()}})
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

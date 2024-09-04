import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class ContractorService {

async Addinvoice(req,res){
const {Amount,InvoiceNO,ContractodID} = req.body;
try {
const createInvoice = await prisma.invoices.create({data:{Amount:parseFloat(Amount),InvoiceNO,ContractodID}})
res.status(200).json(createInvoice)
} catch (error) {
res.status(301).json(error)
    
}

}

async AddContractor(req,res){
try {
    const {Amount,Name,WorkPlace}=req.body;

const create = await prisma.contractor.create({data:{Amount,Name,WorkPlace}})


res.status(200).json(create)

} catch (error) {
res.status(301).json(error)
    
}
}


async Addpayment(req,res){
    try {
        const {Payment,Name,WorkPlace,id}=req.body;
    return await prisma.$transaction(async (tx)=>{
// await tx.contractor.update({where:id,data:{Amount:{decrement:Payment}}})

const t =await tx.payment.create({data:{Payment:parseFloat(Payment),Date:new Date().toLocaleString(),WorkPlace,ContractodID:id}})
const update = await tx.contractor.update({where:id,data:{Amount:{decrement:Payment}}})
if(update.Amount < 0)    throw new Error("error updating , funds is greater")
const doubleentry= await tx.double_Entry.create({data:{CreditAmount:Payment,DebitAmount:Payment,CreditName:Name,DebitName:"خزينة",CreditType:"دفعة"}})
res.status(200).json(doubleentry)   })

    } catch (error) {
    res.status(301).json(error)
        
    }
    }
    












}

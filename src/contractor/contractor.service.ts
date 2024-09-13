import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class ContractorService {

async Addinvoice(req,res){
const {Amount,InvoiceNO,ContractodID,Adminstrative,BasicTotal,Insurance,Total,WorkPlace} = req.body;
try {
const createInvoice = await prisma.invoices.create({data:{Amount:parseFloat(Amount),InvoiceNO,ContractodID,Adminstrative:parseFloat(Adminstrative),BasicTotal:parseFloat(BasicTotal),Insurance:parseFloat(Insurance),Total,WorkPlace}})
res.status(200).json(createInvoice)
} catch (error) {
    console.log(error)
res.status(301).json(error)
    
}

}

async AddContractor(req,res){
try {
    const {remainingPayment,TotalInvoice,Amount,Name,WorkPlace}=req.body;

const create = await prisma.contractor.create({data:{TotalInvoice:parseFloat(TotalInvoice),remainingPayment:parseFloat(remainingPayment),Name,WorkPlace}})


res.status(200).json(create)

} catch (error) {
    console.log(error)
res.status(301).json(error)
    
}
}



async ContractorList(req,res){
    try {
        
    const create = await prisma.contractor.findMany();
    
    
    res.status(200).json(create)
    
    } catch (error) {
    res.status(301).json(error)
        
    }
    }
    
async GetContractor(req,res){

    const finder = await prisma.contractor.findFirst({where:{Name:req.id}})
res.send(finder)

}


async GetInfo(req,res){
    try {
        const {Payment,Name,WorkPlace,id}=req.body;
    

const finder = await prisma.contractor.findMany({where:{id}})
    // await fetch()
const finders = await prisma.invoices.findMany({where:{ContractodID:id}})
const findert  = await prisma.payment.findMany({where:{ContractodID:id}})
     
    // res.status(200).json(finder)
    console.log(finder)
 const ss=   Promise.all([finder,finders,findert])
// await ss()
ss.then(e=>res.status(200).json(ss))
    } catch (error) {
    res.status(301).json(error)
        
    }




}

async Addpayment(req,res){
    try {
        const {Payment,Name,WorkPlace,id}=req.body;
    return await prisma.$transaction(async (tx)=>{
// await tx.contractor.update({where:id,data:{Amount:{decrement:Payment}}})

const t =await tx.payment.create({data:{Amount:parseFloat(Payment),Date:new Date().toLocaleString(),WorkPlace,ContractodID:id}})
const update = await tx.contractor.update({where:id,data:{Amount:{decrement:Payment}}})
if(update.Amount < 0)    throw new Error("error updating , funds is greater")
const doubleentry= await tx.double_Entry.create({data:{CreditAmount:Payment,DebitAmount:Payment,CreditName:Name,DebitName:"خزينة",CreditType:"دفعة"}})
res.status(200).json(doubleentry)   })

    } catch (error) {
    res.status(301).json(error)
        
    }
    }
    












}

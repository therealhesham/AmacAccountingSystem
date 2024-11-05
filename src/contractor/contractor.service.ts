import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class ContractorService {

async Addinvoice(req,res){
const {Amount,InvoiceNO,ContractodID,Adminstrative,invoiceTotal,BasicTotal,Insurance,Total,WorkPlace,StoreTransactions,fund} = req.body;
try {
console.log(parseFloat(BasicTotal)-(Insurance*BasicTotal)-(Adminstrative*BasicTotal)-(parseFloat(fund)*BasicTotal)-parseFloat(StoreTransactions))
    const createInvoice = await prisma.invoices.create({data:{InvoiceNO,ContractodID,StoreTransactions:parseFloat(StoreTransactions),Fund:parseFloat(fund),Adminstrative:parseFloat(Adminstrative),BasicTotal:parseFloat(BasicTotal),Insurance:parseFloat(Insurance),Total:parseFloat(BasicTotal)-(Insurance*BasicTotal)-(Adminstrative*BasicTotal),WorkPlace}})
const increment = await prisma.contractor.update({where:{id:ContractodID},data:{TotalInvoice:parseInt(invoiceTotal)}})
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
    // console.log(error)
res.status(301).json(error)
    
}
}



async ContractorList(req,res){
    try {
        
    const create = await prisma.contractor.findMany({include:{Invoices:true,Payment:true}});
    
    // console.log(create)
    res.status(200).json(create)
    
    } catch (error) {
    res.status(301).json(error)
        
    }
    }
    
async GetContractor(req,res){

    const finder = await prisma.contractor.findFirst({where:{Name:req.id}})
res.send(finder)

}


async AddPayment(req,res){
    try {
        const {Amount,ContractodID,WorkPlace,Name}=req.body
        console.log(parseFloat(Amount),Date,WorkPlace,ContractodID)
        const findmany = await prisma.payment.create({data:{Name,Amount:parseFloat(Amount),WorkPlace,Date: new Date().toLocaleDateString(),ContractodID}})
        res.status(200).json(findmany)
    } catch (error) {
        console.log(error)
        res.status(301).json({error})
    }
    
    }
async GetContractorPayment(req,res){
    try {
        const findmany = await prisma.payment.findMany()
    console.log(findmany)
        res.status(200).json(findmany)
    } catch (error) {
        res.status(301).json({error})
    }
    
    }






async GetPayment(req,res){
try {
    const findmany = await prisma.payment.findMany()
console.log(findmany)
    res.status(200).json(findmany.reverse())
} catch (error) {
// console.log(error)

    res.status(301).json({error})
}

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




async GetSpecificInfo(param,res){
    try {
        // const {Payment,Name,WorkPlace,id}=req.body;
    

const finder = await prisma.contractor.findMany({where:{id:param.id},include:{Invoices:true,Payment:true}})
     
    res.status(200).json(finder)
    } catch (error) {
    res.status(301).json(error)
        
    }




}



async DeletePayment(req,res){
    try {
        const {id}=req.body;
    
    const delet = await prisma.payment.delete({where:{id}})
    
    
    res.status(200).json(delet)
    
    } catch (error) {
        console.log(error)
    res.status(301).json(error)
        
    }

}
async Delete(req,res){
    try {
        const {id}=req.body;
    
    const delet = await prisma.contractor.delete({where:{id}})
    
    
    res.status(200).json(delet)
    
    } catch (error) {
        console.log(error)
    res.status(301).json(error)
        
    }
    




}

async Addpayment(req,res){
    try {
        const {Amount,Name,WorkPlace,ContractodID}=req.body;
    return await prisma.$transaction(async (tx)=>{
// await tx.contractor.update({where:id,data:{Amount:{decrement:Payment}}})
console.log(req.body)
const update = await tx.contractor.update({where:{id:ContractodID},data:{remainingPayment:{increment:parseFloat(Amount)}}})
if(update.Amount < 0)    throw new Error("error updating , funds is greater")
    const t =await tx.payment.create({data:{Name,Amount:parseFloat(Amount),Date:new Date().toLocaleDateString(),WorkPlace,ContractodID}})
const doubleentry= await tx.double_Entry.create({data:{CreditAmount:parseFloat(Amount),DebitAmount:parseFloat(Amount),CreditName:Name,DebitName:"خزينة",CreditType:"دفعة"}})
res.status(200).json(doubleentry)   },{maxWait:100000,timeout:50000})

    } catch (error) {
        console.log(error)
    res.status(301).json(error)
        
    }
    }
    












}

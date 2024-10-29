import { Injectable } from '@nestjs/common';
import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

@Injectable()
export class SuppliersService {
constructor(){}

async FetchSuppliers(req,res){


const fetch = await prisma.supplier.findMany()

res.status(200).json(fetch)
}




async addDeposits(req,res){

    try {
        
    const {Amount,Type,Name,Quantity}=req.body;
    return prisma.$transaction(async(tx)=>{
const waiter = await tx.double_Entry.create({data:{CreditAmount:Amount,DebitAmount:Amount,CreditName:Name,CreditType:"دفعة",DebitName:"safe",date:new Date().toLocaleDateString()}})

const dec =await tx.safe.update({where:{Date:new Date().toLocaleDateString()},data:{Quantity:{decrement:Amount}}})
if (dec.Quantity <0){
const deleteNewCreated = await tx.double_Entry.delete({where:{id:waiter.id}})
return res.status(301).json("error")

}
// await prisma.pettyCash.create({include:{Benefciary:}})
const create=await prisma.deposit.create({data:{Amount,Date:new Date().toLocaleDateString(),SupplierName:Name}})
const updater = await tx.supplier.update({where:{Name:Name},data:{RealAmount:{decrement:Amount}}})
return updater

// await tx.supplier.update({where:{Name:Name},data:{Amount:}}})
 })

// await prisma.supplier.create({data:{Name:}})

} catch (error) {
 res.staus(301).json(error)       
}

}

async addSupplier(req,res){

    try {
        
    const {RealAmount,Date,Type,Name,Quantity}=req.body;
    const search = await prisma .supplier.findFirst({where:{Name}})
    if (!search){
        //ما قبل السيستم
//    RealAmount ما بعد و قبل السيستم
const create = await prisma.supplier.create({data:{RealAmount,Date,Type,Name,Quantity,Amount:RealAmount}})
const creatdebt = await prisma.debt.create({data:{Amount:create.RealAmount,SupplierID:create.id,type:"مورد"}})
res.status(200).json(create)

}
else{
    res.status(301).json("found")

// await prisma.supplier.update({where:{Name:Name}})


}

} catch (error) {
res.status(301).json(error)        
}
}


async deletesupplier(req,res){

    try {
        
    const {RealAmount,Date,Type,Name,Quantity}=req.body;
    const search = await prisma .supplier.findFirst({where:{Name}})
    if (!search){
    
const create = await prisma.supplier.create({data:{RealAmount,Date,Type,Name,Quantity}})
res.status(200).json(create)

}
else{
    res.status(301).json("found")

// await prisma.supplier.update({where:{Name:Name}})


}

} catch (error) {
res.status(301).json(error)        
}
}






















// async BuyfromSupplier (req,res)





async paysupplier(req,res){
const {CreditAmount,DebitAmount,CreditName,DebitName}=req.body;
    try {
        const createdobuleentry = await prisma.double_Entry.create({data:{CreditAmount,DebitAmount,CreditName,DebitName,CreditType:"سداد مورد"}})
    // const search = await prisma .supplier.findFirst({where:{Name:CreditName}})
    

const create = await prisma.supplier.update({where:{Name:CreditName},data:{RealAmount:{decrement:CreditAmount}}});
 await prisma.debt.update({where:{SupplierID:create.id},data:{Amount:{decrement:CreditAmount}}})

res.status(200).json(create)


} catch (error) {
res.status(301).json(error)        
}
}








}

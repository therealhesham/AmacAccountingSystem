import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class DoubleEntryService {




async Total(req,res){
// const waiter = await prisma.pettyCash.aggregate({_sum:{amount:true},where:{isSettled :false}})
const waiter = await prisma.double_Entry.aggregate({_sum:{CreditAmount:true},where:{CreditType:"عهدة"}})
console.log(waiter)
res.status(200).json(waiter)
}

async gettransactions(){
    return await prisma.double_Entry.findMany()
}

async Transact(req,res){
// console.log(CreditAmount)
// console.log(DebitAmount)
// waiterwaiter
const {CreditName,DebitName,CreditAmount,DebitAmount,CreditType,Notes,date,id}=req.body;

// console.log(CreditAmount == DebitAmount)

if(CreditAmount != DebitAmount) return res.status(301).json({error:"CreditAmount is not equal Debit Amount"})      

const findSafe = await prisma.safe.findFirst({where:{Date:new Date().toLocaleDateString()}})

// if(!findSafe) return   res.status(301).json({error:"safe is not found , call adminstrator"})
if((findSafe.Quantity - CreditAmount) < 0 )return res.status(301).json({error:"safe is not found , call adminstrator"})
async function transfer( amount: number) {

try {
    
    return prisma.$transaction(async (tx) => {

  const waiter = await prisma.double_Entry.create({data:{date:new Date().toLocaleDateString(),CreditType,CreditAmount:parseFloat(CreditAmount),CreditName,DebitAmount:parseFloat(DebitAmount),DebitName,Notes}})
        
      const sender = await tx.safe.update({
        data: {
          Quantity: {
            decrement: parseFloat(CreditAmount),
          },
        },
        where: {
          Date: new Date().toLocaleDateString()
        }
      })
    //   console.log(sender)
          await tx.benefiary.update({data:{Amount:{increment:parseFloat(CreditAmount)}},where:{Name:CreditName}})
 const recipient =      await tx.pettyCash.create({data:{BenefciaryID:CreditName,Date:new Date().toLocaleDateString(),amount:parseFloat(CreditAmount),isSettled:false}})
 
  return  res.status(200).json({success:"created successful"})
      },
  {
    maxWait: 5000, // 5 seconds max wait to connect to prisma
    timeout: 20000, // 20 seconds
  })

} catch (error) {
   res.status(301).json({error:"Fatal Error"})
//  console.log(error)   
}
  }
  await transfer(DebitAmount)
// if(transafering) return "success"

    // return "waiter";
    
}


async Transactions(req,res,date, CreditType,CreditName,DebitName,CreditAmount,DebitAmount,Notes){
    
    if(CreditAmount != DebitAmount) return  "error"
    
    const findSafe = await prisma.safe.findFirst({where:{Date:new Date().toLocaleDateString()}})
    console.log(findSafe)
    if(!findSafe) return  "error"
    

    async function transfer( amount: number) {
    
    try {
        
        return prisma.$transaction(async (tx) => {
    
      const waiter = await prisma.double_Entry.create({data:{date,CreditType,CreditAmount:parseFloat(CreditAmount),CreditName,DebitAmount:parseFloat(DebitAmount),DebitName,Notes}})
    if(!waiter) return "error creating";
         
          const recipient = await tx.safe.update({
            data: {
              Quantity: {
                increment: parseFloat(CreditAmount),
                },
            },
            where: {
              Date: new Date().toLocaleDateString(),
            }
          })
      console.log(recipient)
          return recipient
        },
      {
        maxWait: 5000, // 5 seconds max wait to connect to prisma
        timeout: 20000, // 20 seconds
      })
    
    } catch (error) {
   return error   
    }
      }
      await transfer(DebitAmount)
    // if(transafering) return "success"
    
        // return "waiter";
        
    }
    














}

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
@Injectable()
export class DoubleEntryService {




async gettransactions(){
    return await prisma.double_Entry.findMany()
}

async Transact(date, CreditType,CreditName,DebitName,CreditAmount,DebitAmount,Notes){
console.log(CreditAmount)
console.log(DebitAmount)
// console.log(CreditAmount == DebitAmount)

if(CreditAmount != DebitAmount) return  "error";      

const findSafe = await prisma.safe.findFirst({where:{Date:new Date().toLocaleDateString()}})

if(!findSafe) return  

async function transfer( amount: number) {

try {
    
    return prisma.$transaction(async (tx) => {

  const waiter = await prisma.double_Entry.create({data:{date,CreditType,CreditAmount,CreditName,DebitAmount,DebitName,Notes}})
        console.log(waiter)
if(!waiter) return "error creating"
      const sender = await tx.safe.update({
        data: {
          Quantity: {
            decrement: CreditAmount,
          },
        },
        where: {
          Date: new Date().toLocaleDateString()
        }
      })
    //   console.log(sender)
        if (sender.Quantity < 0) {
        await prisma.double_Entry.delete({where:{id:waiter.id}})
        throw new Error(` doesn't have enough to send ${amount}`)
      }
  
      const recipient = await tx.benefiary.update({
        data: {
          Amount: {
            increment: CreditAmount,
          },
        },
        where: {
          Name: CreditName,
        }
      })
  
      return recipient
    },
  {
    maxWait: 5000, // 5 seconds max wait to connect to prisma
    timeout: 20000, // 20 seconds
  })

} catch (error) {
 console.log(error)   
}
  }
  await transfer(DebitAmount)
// if(transafering) return "success"

    // return "waiter";
    
}


async Transactions(req,res,date, CreditType,CreditName,DebitName,CreditAmount,DebitAmount,Notes){
    
    if(CreditAmount != DebitAmount) return  "error"
    
    const findBankAccount = await prisma.bank_Account.findFirst({where:{Date:new Date().toLocaleDateString()}})
          
    if(!findBankAccount) return "error" 
    
    const findSafe = await prisma.safe.findFirst({where:{Date:new Date().toLocaleDateString()}})
    
    if(!findSafe) return  "error"
    
    async function transfer( amount: number) {
    
    try {
        
        return prisma.$transaction(async (tx) => {
    
      const waiter = await prisma.double_Entry.create({data:{date,CreditType,CreditAmount:parseFloat(CreditAmount),CreditName,DebitAmount:parseFloat(DebitAmount),DebitName,Notes}})
            console.log(waiter)
    if(!waiter) return "error creating";
          const sender = await tx.bank_Account.update({
            data: {
              Quantity: {
                decrement: parseFloat(CreditAmount),
              },
            },
            where: {
              Date: new Date().toLocaleDateString()
            }
          })
          console.log(sender)
            if (sender.Quantity < 0) {
            await prisma.double_Entry.delete({where:{id:waiter.id}})
           return new Error(` doesn't have enough to send ${amount}`)
          }
      
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

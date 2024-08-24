import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Observable } from 'rxjs';
// PrismaClient

const prisma = new PrismaClient()
@Injectable()
export class AccountsystemGuard implements CanActivate {
 async canActivate(
    context: ExecutionContext,
  ){
try{    const today = new Date();
  let yasterday = new Date();
  yasterday.setDate(yasterday.getDate() - 1);
  const y = yasterday.toISOString().split('T')[0];
    // const yasterday = new Date().toLocaleDateString();
const counter = await prisma.transfering.count()
// console.log(counter) 
const waiter = await prisma.transfering.findFirst({where:{unix_timestamp:new Date().toISOString()}})
// const 
const waiterYasterDay = await prisma.transfering.findFirst({where:{unix_timestamp:y}})

if(waiter.status && waiter.unix_timestamp == today.toISOString().split('T')[0] )return false

if(!waiter.status && waiterYasterDay.unix_timestamp == y )return false
    return true;
} 
catch(error){
  return false
}

}
}

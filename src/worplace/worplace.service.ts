import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
@Injectable()
export class WorplaceService {


async AdddWorplace(req,res){
try {
const postnewWorkplace= await prisma.workplace.create({data:{WorkPlace:req.body.workplace}});
res.status(200).json(postnewWorkplace)

    
} catch (error) {
    console.log(error)
    res.status(301).json(error)
}

}




async Delete(req,res){
    try {
    const workPlaces= await prisma.workplace.delete({where:{id:req.body.id}});
    res.status(200).json(workPlaces)
    
        
    } catch (error) {
        console.log(error)
        res.status(301).json(error)
    }
    
    }


async GetWorkPlace(req,res){
    try {
    const workPlaces= await prisma.workplace.findMany();
    res.status(200).json(workPlaces)
    
        
    } catch (error) {
        console.log(error)
        res.status(301).json(error)
    }
    
    }







}

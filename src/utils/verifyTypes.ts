import { prisma } from "@/services/client/prismaClient"

export default async function VerifyTypes(type:string, id:string) {
  const rpmVerify = await prisma.item.findMany({
        where: {
          OR: [
            {amp: Number(type)},
            {hp: type},
            {model: type},
            {rpm: type},
            {capacitor: Number(type)}
          ]
        }
      })
    
    console.log(rpmVerify)
    if(!rpmVerify){
      return
    }

    if(rpmVerify.length <= 1){
      await prisma.type.deleteMany({
        where: {
          value: type
        }
      })
    } else if(rpmVerify.length > 1) {
      await prisma.type.delete({
        where: {
          id: id
        }
      })
    }
}
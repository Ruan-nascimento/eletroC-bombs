import { prisma } from "@/services/client/prismaClient"

export default async function VerifyTypes(type:string, id:string) {
  const verify = await prisma.item.findMany({
        where: {
          OR: [
            {amp: Number(type)},
            {hp: type.toString()},
            {rpm: type.toString()},
            {capacitor: Number(type)}
          ]
        }
      })
    if(!verify){
      return
    }

    if(verify.length <= 1){
      await prisma.type.deleteMany({
        where: {
          value: type
        }
      })
    } else if(verify.length > 1) {
      await prisma.type.delete({
        where: {
          id: id
        }
      })
    }
}
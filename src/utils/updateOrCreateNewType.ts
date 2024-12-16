import { prisma } from "@/services/client/prismaClient";
export default async function UpdateOrCreate(value: string, type:string) {
  const actualValue = await prisma.type.findFirst({
    where:{
      value: value.toLowerCase()
    }
  })

  if(!actualValue) {
    await prisma.type.create({
      data:{
        type: type,
        value: value
      }
    })
  }
}



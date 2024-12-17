import { Button } from "@/components/ui/button";
import BoxSelection from "./selection/boxSelection";
import { prisma } from "@/services/client/prismaClient";

export function FindSection() {

  async function handleClickFindButton(form: FormData) {
    'use server'
    const findObject = {
      model: form.get('MODEL'),
      capacitor: form.get('CAPACITOR'),
      hp: form.get('HP'),
      amp: form.get('AMP'),
      rpm: form.get('RPM')
    }
    const items = await prisma.item.findMany({
      where: {
        OR: [
          {amp: Number(findObject.amp)},
          {hp: findObject.hp?.toString()},
          {model: findObject.model?.toString()},
          {rpm: findObject.rpm?.toString()},
          {capacitor: Number(findObject.capacitor)}
        ]
      }
    })

    console.log(items)
  }

  return (
     <form
     action={handleClickFindButton}
     className="flex w-full flex-col gap-4 border-b border-neutral-900 pb-4"
     >
      <div className="w-full flex gap-2">
      <BoxSelection type="MODEL"/>
      <BoxSelection type="CAPACITOR"/>
      </div>

      <div className="w-full flex gap-2">
        <BoxSelection type="HP"/>
        <BoxSelection type="AMP"/>
      </div>

      <BoxSelection type="RPM"/>

      <Button>Buscar</Button>

     </form>     
  )
}


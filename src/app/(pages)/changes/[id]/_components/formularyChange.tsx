import { Vitrine } from "@/app/_components/vitrineBox";
import { Button } from "@/components/ui/button";
import { prisma } from "@/services/client/prismaClient";
import UpdateOrCreate from "@/utils/updateOrCreateNewType";
import { redirect } from "next/navigation";

export default async function FormularyChange({paramId}: {paramId: string}) {

  const item = await prisma.item.findFirst({
    where: {
      id: paramId
    }
  })

  if (!item){
    return
  }

  async function handleUpdateValues(form: FormData) {
    'use server'
    const formItem = {
      itemName: form.get(item!.itemName),
      amp: form.get(item!.amp.toString()),
      model: form.get(item!.model),
      hp: form.get(item!.hp),
      rpm: form.get(item!.rpm),
      capacitor: form.get(item!.capacitor.toString()),
      sqWork: form.get(item!.sqWork),
      sqStart: form.get(item!.sqStart),
      wireWork: form.get(item!.wireWork.toString()),
      wireStart: form.get(item!.wireStart.toString()),
}
    await prisma.item.update({
      where: {
        id: item!.id
      },
      data: {
        itemName: formItem.itemName?.toString(),
        amp: Number(formItem.amp),
        capacitor: Number(formItem.capacitor),
        hp: formItem.hp?.toString(),
        model: formItem.model?.toString().toUpperCase(),
        rpm: formItem.rpm?.toString(),
        sqStart: formItem.sqStart?.toString(),
        sqWork: formItem.sqWork?.toString(),
        wireStart: Number(formItem.wireStart),
        wireWork: Number(formItem.wireWork)
      }
    })

    redirect('/')
  }

  return (
    <form
    action={handleUpdateValues}
    className="flex flex-col gap-4 mt-12"
    >
      <h2
      className="text-3xl text-center"
      >{item.itemName}</h2>
      <Vitrine.input initialValue={item.itemName} place={item.itemName}/>
      <Vitrine.branch>
        <Vitrine.input initialValue={item.model} place="Modelo"/>
        <Vitrine.input initialValue={item.capacitor.toString()} place="Capacitor"/>
      </Vitrine.branch>
      <Vitrine.branch>
        <Vitrine.input initialValue={item.hp} place="Potência"/>
        <Vitrine.input initialValue={item.amp.toString()} place={item.amp.toString()}/>
      </Vitrine.branch>
      <Vitrine.input initialValue={item.rpm} place="RPM"/>
      <Vitrine.branch>
        <Vitrine.input initialValue={item.sqWork} place="Trabalho"/>
        <Vitrine.input initialValue={item.wireWork.toString()} place={item.wireWork.toString()}/>
      </Vitrine.branch>
      <Vitrine.branch>
        <Vitrine.input initialValue={item.sqStart} place="Partida"/>
        <Vitrine.input initialValue={item.wireStart.toString()} place={item.wireStart.toString()}/>
      </Vitrine.branch>

      <Button type="submit">Salvar</Button>
    </form>
  );
}
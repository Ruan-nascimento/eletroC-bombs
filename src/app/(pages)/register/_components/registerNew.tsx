import { Vitrine } from "@/app/_components/vitrineBox";
import { Button } from "@/components/ui/button";
import { prisma } from "@/services/client/prismaClient";
import UpdateOrCreate from "@/utils/updateOrCreateNewType";
import { redirect } from "next/navigation";

export default async function RegisterNew() {

  async function handleUpdateValues(form: FormData) {
    'use server'
    await prisma.item.create({
      data: {
        itemName: form.get('name')?.toString()!,
        amp: Number(form.get('amp')),
        capacitor: Number(form.get('capacitor')),
        hp: form.get('hp')?.toString()!,
        model: (form.get('model')?.toString()!).toUpperCase(),
        rpm: form.get('rpm')?.toString()!,
        sqStart: form.get('ss')?.toString()!,
        sqWork: form.get('sw')?.toString()!,
        wireStart: Number(form.get('ws')),
        wireWork: Number(form.get('ww')),
      }
    })
    UpdateOrCreate(form.get('rpm')?.toString()!, 'RPM')
    UpdateOrCreate(form.get('model')?.toString()!, 'MODEL')
    UpdateOrCreate(form.get('hp')?.toString()!, 'HP')
    UpdateOrCreate(form.get('amp')?.toString()!, 'AMP')
    UpdateOrCreate(form.get('capacitor')?.toString()!, 'CAPACITOR')
    redirect('/')
  }

  return (
    <form
    action={handleUpdateValues}
    className="flex flex-col gap-4 mt-12"
    >
      <h2
      className="text-3xl text-center"
      >Cadastro de Nova Bomba</h2>
      <Vitrine.input up={false} initialValue='name' place="Nome do Item"/>
      <Vitrine.branch>
        <Vitrine.input up={false} initialValue="model" place="Modelo" className="uppercase"/>
        <Vitrine.input up={false} initialValue="capacitor" place="Capacitor"/>
      </Vitrine.branch>
      <Vitrine.branch>
        <Vitrine.input up={false} initialValue="hp" place="Potência"/>
        <Vitrine.input up={false} initialValue="amp" place="Amperagem"/>
      </Vitrine.branch>
      <Vitrine.input up={false} initialValue="rpm" place="RPM"/>
      <Vitrine.branch>
        <Vitrine.input up={false} initialValue="sw" place="Trabalho"/>
        <Vitrine.input up={false} initialValue="ww" place="Fio de Trabalho"/>
      </Vitrine.branch>
      <Vitrine.branch>
        <Vitrine.input up={false} initialValue="ss" place="Partida"/>
        <Vitrine.input up={false} initialValue="ws" place="Fio da Partida"/>
      </Vitrine.branch>

      <Button type="submit">Criar</Button>
    </form>
  );
}
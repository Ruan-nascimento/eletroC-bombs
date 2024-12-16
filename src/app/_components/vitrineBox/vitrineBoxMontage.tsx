import { Button } from "@/components/ui/button";
import { Vitrine } from ".";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { redirect } from "next/navigation";
import { prisma } from "@/services/client/prismaClient";
import VerifyTypes from "@/utils/verifyTypes";

interface VitrineBoxProps {
  model: string
  rpm: string
  hp: string
  amp: number
  capacitor: number
  itemName: string
  wireWork: number
  wireStart: number
  sqWork: string
  sqStart: string
  id: string
}

export default function VitrineBoxMontage(props: VitrineBoxProps) {

  async function handleEditButton(){
    'use server'
    console.log(props.model)
    redirect(`/changes/${props.id}`)
  }

  async function handleDestructButton() {
    'use server'
    VerifyTypes(props.rpm, props.id)
    VerifyTypes(props.model, props.id)
    VerifyTypes(props.amp.toString(), props.id)
    VerifyTypes(props.capacitor.toString(), props.id)
    VerifyTypes(props.hp, props.id)

    await prisma.item.delete({
      where: {
        id: props.id
      }
    })

    redirect('/')
  }

  return (
    

    <Dialog>
    <DialogTrigger asChild>

      <Vitrine.root>
        <Vitrine.item item={props.model}/>
        <Vitrine.branch>
          <Vitrine.item item={props.amp.toString()}/>
          <Vitrine.item item={props.capacitor.toString()}/>
        </Vitrine.branch>
        <Vitrine.branch>
          <Vitrine.item item={props.hp}/>
          <Vitrine.item item={props.rpm}/>
        </Vitrine.branch>
        <Button className="w-full">Ver Mais</Button>
      </Vitrine.root>

    </DialogTrigger>

    <DialogContent className="max-w-[500px] w-9pc">

      <DialogHeader>
        <DialogTitle className="text-2xl">{props.itemName}</DialogTitle>
      </DialogHeader>

      <Vitrine.item item={props.model}/>
      <Vitrine.branch>
        <Vitrine.item item={props.rpm}/>
        <Vitrine.item item={`${props.capacitor.toString()} uf`}/>
      </Vitrine.branch>
      <Vitrine.branch>
        <Vitrine.item item={props.hp}/>
        <Vitrine.item item={`${props.amp.toString()} A`}/>
      </Vitrine.branch>
      <Vitrine.branch>
        <Vitrine.item item={`TB - ${props.sqWork}`}/>
        <Vitrine.item item={`Fio: ${props.wireWork.toString()}`}/>
      </Vitrine.branch>
      <Vitrine.branch>
        <Vitrine.item item={`PT - ${props.sqStart}`}/>
        <Vitrine.item item={`Fio: ${props.wireStart.toString()}`}/>
      </Vitrine.branch>
      
      

      <DialogFooter>
        <Vitrine.branch className="w-full flex justify-between">
          <Button className="w-full" onClick={handleEditButton}>Editar Configurações</Button>
          <Button className="w-full" onClick={handleDestructButton} variant={"destructive"}>Excluir</Button>
        </Vitrine.branch>
      </DialogFooter>

    </DialogContent>
    </Dialog>
  );
}
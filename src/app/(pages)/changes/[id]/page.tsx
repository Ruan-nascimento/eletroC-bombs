import { useRouter } from "next/navigation";
import FormularyChange from "./_components/formularyChange";

interface itemParams {
  id: string
}

export default async function Changes({params}: {params: itemParams}) {

  const {id} = await params

  return (
    <FormularyChange paramId={id}/>
  );
}
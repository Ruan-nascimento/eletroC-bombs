import { Button } from "@/components/ui/button";
import BoxSelection from "./selection/boxSelection";

export function FindSection() {
  return (
     <section
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

     </section>     
  )
}


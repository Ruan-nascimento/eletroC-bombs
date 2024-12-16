import { prisma } from "@/services/client/prismaClient";
import { FindSection } from "./_components/findSection/findSection";
import VitrineBoxMontage from "./_components/vitrineBox/vitrineBoxMontage";

export default async function Home() {

  const item = await prisma.item.findMany()

  return (
    <div
    className={`flex flex-col gap-6 items-center h-full`}
    >
      <FindSection/>

      <div
      className="w-full h-full max-h-full overflow-auto scrollbar-hide flex flex-wrap justify-around gap-4"
      >
        
        {item.map(item => {
          return(
            <VitrineBoxMontage
            id={item.id}
            sqStart={item.sqStart}
            sqWork={item.sqWork}
            wireStart={item.wireStart}
            wireWork={item.wireWork}
            itemName={item.itemName}
            amp={item.amp}
            capacitor={item.capacitor}
            hp={item.hp}
            model={item.model}
            rpm={item.rpm}
            key={item.id}
            />
          )
        })}
        
      </div>
    </div>
  );
}
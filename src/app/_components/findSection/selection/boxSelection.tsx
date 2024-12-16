import { prisma } from "@/services/client/prismaClient";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import IdentifyType from "@/utils/identifyType.function";

export interface BoxSelectionPros {
 type: 'HP' | 'MODEL' | 'CAPACITOR' | 'RPM' | 'AMP'   
}

export default async function BoxSelection({type}: BoxSelectionPros) {

  const upperType =type.toUpperCase()

  const items = await prisma.type.findMany({
    where: {
     type: upperType
    }
  })

  return (
    <Select name={upperType}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={upperType}/>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{upperType}</SelectLabel>
          {items.map(item => {
            return(
              <SelectItem 
              key={item.id} 
              value={item.value}
              >
                {
                  <span className="mr-1">{item.value}</span>
                }
                {
                  <span>{IdentifyType(upperType)}</span>
                }
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
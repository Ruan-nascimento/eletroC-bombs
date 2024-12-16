import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BoxSelectionPros } from "../findSection/selection/boxSelection";

export default function VitrineItem({item}: {item: string}) {
  return (
    <div
    title=""
    className="w-full text-center bg-neutral-600 rounded-md font-semibold h-10 max-h-10 overflow-clip flex items-center justify-center cursor-pointer
    duration-200 ease-in-out hover:bg-indigo-600/20"
    ><span className="h-6 max-h-6 overflow-hidden">
      <HoverCard>
        <HoverCardTrigger>
          {item}
        </HoverCardTrigger>
        <HoverCardContent>
          <span>{item}</span>
        </HoverCardContent>
      </HoverCard>

    
    </span></div>
  );
}
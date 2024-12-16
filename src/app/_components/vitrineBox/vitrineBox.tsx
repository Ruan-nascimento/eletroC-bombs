import { ReactNode } from "react";

export default function VitrineBox({children}: {children: ReactNode}) {
  return (
    <div
    className="flex gap-2 h-52 items-center justify-center flex-col w-4pc cursor-pointer border border-neutral-50/50 rounded-md p-2 duration-200 ease-in-out 
    hover:bg-neutral-900 active:bg-neutral/80 hover:border-indigo-600"
    >
      {children}
    </div>
  );
}
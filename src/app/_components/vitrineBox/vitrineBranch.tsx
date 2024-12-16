import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function VitrineBranch({children, ...rest}: {children: ReactNode, className?: string}) {
  return (
    <div
    {...rest}
    className={twMerge('flex gap-2 w-full', rest.className)}
    >
      {children}
    </div>
  );
}
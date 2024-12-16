import { ReactNode } from "react";

export default function MainWrapper({children}: {children: ReactNode}) {
  return (
    <div
    className="px-2 py-4 w-full max-w-[600px] h-full max mx-auto overflow-hidden"
    >{children}</div>
  );
}
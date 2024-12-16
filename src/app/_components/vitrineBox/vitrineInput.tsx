'use client'
import { RefreshCcwDotIcon } from "lucide-react";
import { FormEvent, HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface VitrineInputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string
  place?: string
  initialValue: string
  up?: boolean
}

export default function VitrineInput({up=true, initialValue, place, ...rest}:VitrineInputProps) {

  const [value, setValue] = useState(up ? initialValue : '')

  function handleChangeValue(e:any){
    setValue(e.target.value)
  }
  function handleResetField() {
    setValue(initialValue)
  }

  return (
    <div className="w-full relative">
        <input
        name={initialValue}
      {...rest}
      value={value}
      onChange={e => handleChangeValue(e)}
      placeholder={place}
      className={twMerge('w-full h-12 rounded-md outline-none border border-neutral-700 p-3 bg-neutral-900 focus:border-neutral-400 placeholder:font-bold placeholder:text-neutral-100', rest.className)}
      />

      <span
      onClick={handleResetField}
      className="h-full w-10 flex items-center justify-center absolute top-0 right-0 rounded-r-md z-50 duration-500 ease-in-out cursor-pointer hover:-rotate-180 hover:text-indigo-600"
      ><RefreshCcwDotIcon/></span>
    </div>
  );
}
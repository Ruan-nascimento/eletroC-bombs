'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ButtonHead({dir='/', label}: {dir?:string, label:string}) {

  const pathName = usePathname()

  return (
    <Link
    className={`w-full p-2 px-4 border-b-2 font-bold duration-200 ease-in-out
      hover:text-indigo-600 hover:border-b-indigo-600 active:opacity-45
      ${dir === pathName && 'text-indigo-600 border-b-indigo-600'}`}
    href={dir}
    >
      {label}
    </Link>
  );
}
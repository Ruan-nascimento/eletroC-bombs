import Link from "next/link";
import ButtonHead from "./buttonHead";

export default function LayoutHeader() {
  return (
    <header
    className="flex w-full bg-neutral-900 h-14 justify-center px-2"
    >
      <nav
      className="w-full max-w-[600px] flex gap-2"
      >

        <ButtonHead label="Inicio"/>
        <ButtonHead label="Cadastro" dir="/register"/>

      </nav>
    </header>
  );
}
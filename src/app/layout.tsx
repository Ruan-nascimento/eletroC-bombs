import type { Metadata } from "next";
import "./globals.css";
import LayoutHeader from "./_components/header";
import MainWrapper from "./_components/wrapper/mainWrapper";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Eletro C",
  description: "Pesquisa e Criação de Placas de Bombas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className='antialiased h-dvh w-screen flex flex-col bg-neutral-950 text-neutral-50'
      >
        <LayoutHeader/>
        <MainWrapper>
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}

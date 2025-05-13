import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/utils/font";
import LayoutClientWrapper from "@/app/LayoutClientWrapper"; 

export const metadata: Metadata = {
  title: "Ping Pong App",
  description: "Bueno aqui vamos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

    <body className={`${montserrat.className}`}>

        <LayoutClientWrapper>{children}</LayoutClientWrapper>

      </body>

    </html>
  );
}
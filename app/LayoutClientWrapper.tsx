'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/prin_page/navbar";
import Footer from "@/components/prin_page/footer";
import React from "react";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname.startsWith("/pages/Login") ||
  pathname.startsWith("/pages/mainPage");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
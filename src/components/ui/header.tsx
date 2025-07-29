"use client";
import React from "react";
import HeaderAccount from "@/components/ui/header/account";
export function Header() {
  return (
    <div
      className="relative w-full flex items-center justify-end px-6"
    >
      <HeaderAccount />
    </div>
  );
}

export default Header;

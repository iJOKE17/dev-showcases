import React, { useState } from "react";
import { User } from "lucide-react";

export default function HeaderAccount() {
 
  const handleOnClickAccount = () => {
    window.location.href = "/account";
  }

  return (
    <div
      className="inline-block text-left color-white"
      style={{ background: "transparent", position: "relative" }}
    >
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => handleOnClickAccount()}
      >
        <User className="mr-1" size={18} />
        Account
      </div>

    </div>
  );
}

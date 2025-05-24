"use client";

import React, { useState, useEffect } from "react";
import { CartContext } from "@/app/_context/CartContext";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  // --- Static persistence: initialize cart from localStorage on first load ---
  const [cart, setCart] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  });

  // --- Static persistence: update localStorage whenever cart changes ---
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // To revert to dynamic (API only), remove the localStorage logic above
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default ClientWrapper;

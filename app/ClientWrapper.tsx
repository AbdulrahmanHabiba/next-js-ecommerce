"use client"

import React, {useState} from 'react';
import {CartContext} from "@/app/_context/CartContext";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    const [cart , setCart] = useState<any[]>([])
    return (
        <>
            <CartContext.Provider  value={{ cart , setCart }}>
            {children}
            </CartContext.Provider>
        </>
    );
};

export default ClientWrapper;
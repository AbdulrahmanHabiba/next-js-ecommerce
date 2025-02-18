import { useContext } from "react";
import { CartContext } from "@/app/_context/CartContext";
import { CartContextTypes } from "@/app/_utils/types";

const useCartContext = (): CartContextTypes => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("useCartContext must be used within a CartContext.Provider");
    }

    return cartContext;
};

export default useCartContext;

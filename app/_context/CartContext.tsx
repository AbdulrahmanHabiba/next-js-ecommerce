import {createContext} from "react";
import {CartContextTypes} from "@/app/_utils/types";
export const CartContext = createContext<CartContextTypes | undefined>(undefined);

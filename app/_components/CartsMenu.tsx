import React from 'react';
import useCartContext from "@/app/_hooks/useCartContext";
import Image from "next/image";
import { Minimize2,Trash2,} from "lucide-react";
import Link from "next/link";

const CartsMenu = ({toggleMenuCart} : {toggleMenuCart : () => void}) => {
    const { cart } = useCartContext();
    if (!Array.isArray(cart)) {
        return null;
    }

    return (
        <div className="absolute top-12 right-10 sm:right-32 w-[250px] sm:w-[320px] max-h-[320px] sm:max-h-[400px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 z-20">
            <div className="bg-gray-100 p-2 sm:p-4">
                <Minimize2 onClick={toggleMenuCart}
                     className="xicon absolute right-3 top-2 text-gray-600 cursor-pointer hover:text-red-400 mb-6 w-4 "
                />

                <div className="relative space-y-4 mt-5">
                    <ul className="space-y-3 max-h-[300px] overflow-y-auto px-2">
                        {cart.length > 0 && cart.map((cartItem , i) => {
                            const product = cartItem?.products?.[0];
                            if (!product) return null;

                            return (
                                <li key={cartItem?.id} className="flex items-center gap-3 border-b pb-3 last:border-b-0">
                                    <Image
                                        src={product?.bannar?.formats?.small?.url}
                                        alt={product?.title}
                                        width={80}
                                        height={50}
                                        className="w-16 h-14 rounded-md object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900 line-clamp-1">{product?.title}</p>
                                        <p className="text-xs text-gray-600">Price: <span
                                            className="font-medium text-gray-800">${product?.price}</span></p>
                                    </div>


                                    {/*<button className="text-gray-500 hover:text-red-600 transition">*/}
                                    {/*    <Trash2 size={18}/>*/}
                                    {/*</button>*/}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="sticky bottom-0 left-0 right-0 text-center bg-white p-3 border-t">
                        <Link
                            onClick={toggleMenuCart}
                            href="/cart"
                            className="block w-full text-center rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2 text-sm font-medium transition hover:bg-gray-800 hover:ring-2 hover:ring-gray-600"
                        >
                            View my cart ({cart.length})
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartsMenu;

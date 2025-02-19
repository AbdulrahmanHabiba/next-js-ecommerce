"use client"
import React from 'react';
import useCartContext from "@/app/_hooks/useCartContext";
import Image from "next/image";
import {Trash2} from "lucide-react";
import {deleteCartItem} from "@/app/_utils/cartApis";
import {useRouter} from "next/navigation";

const Page = () => {
    const {cart , setCart} = useCartContext();
    const handleDeleteItem = (id: number) =>{
        deleteCartItem(id)
            .then((res) => {
            console.log("res ", res)
            return setCart((oldCart)=>oldCart.filter((c)=>c.id !== id))
        })
            .catch(err => console.error("Error:", err.response || err));
    }


    const totalPrice = (): number => {
        let total = 0;
        cart.forEach(item => {
            if (Array.isArray(item.products) && item.products.length > 0) {
                total += item.products[0]?.price ?? 0;
            }
        });
        return +total.toFixed(2);
    };
    const router = useRouter()
    const handleRoutingToCheckout = () => {
        router.push(`/checkout?amount=${totalPrice()}`)
    }
    return (
        <div className="mx-auto max-w-screen-lg px-6 py-10">
            <header className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Hello {cart[0]?.username}</h1>
            </header>

            <div className="bg-white shadow-lg rounded-lg p-6">
                {cart.length > 0 ? (
                    <ul className="space-y-4 max-h-[400px] overflow-y-auto">
                        {cart.map((cartItem) => {
                            const product = cartItem?.products?.[0];
                            if (!product) return null;

                            return (
                                <li key={cartItem.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
                                    <Image
                                        src={product?.bannar?.formats?.medium?.url || "/placeholder.jpg"}
                                        alt={product?.title || "No image"}
                                        width={100}
                                        height={60}
                                        className="w-24 h-16 rounded-md object-cover"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-gray-900">{product?.title || "Unknown Product"}</h3>
                                        <p className="text-xs text-gray-600">Category: {product?.category || "No category"}</p>
                                        <p className="text-xs text-gray-600 font-medium">Price: ${product?.price ?? "N/A"}</p>
                                    </div>

                                    <button
                                        onClick={() => handleDeleteItem(cartItem.id as number)}
                                        className="text-gray-500 hover:text-red-600 transition">
                                        <Trash2 size={18}/>
                                    </button>
                                </li>
                            );
                        })}

                    </ul>
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty</p>
                )}


                {cart.length > 0 && (
                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between text-gray-800 text-lg font-semibold">
                            <span>Total : </span>
                            <span>$ {totalPrice()}</span>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => {handleRoutingToCheckout()}}
                                className="block w-full text-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium transition hover:bg-gray-800"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
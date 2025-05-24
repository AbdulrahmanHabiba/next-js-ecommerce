"use client";
import React from "react";
import useCartContext from "@/app/_hooks/useCartContext";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { deleteCartItem } from "@/app/_utils/cartApis";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const { cart, setCart } = useCartContext();
  const handleDeleteItem = (id: number) => {
    deleteCartItem(id)
      .then((res) => {
        return setCart((oldCart) => oldCart.filter((c) => c.id !== id));
      })
      .catch((err) => {
        // --- Static fallback logic: Context + localStorage ---
        // If API fails, remove item from context and update localStorage
        // To revert to dynamic, just remove this fallback block
        setCart((oldCart) => {
          const newCart = oldCart.filter((c) => c.id !== id);
          localStorage.setItem("cart", JSON.stringify(newCart));
          return newCart;
        });
      });
  };

  const totalPrice = (): number => {
    let total = 0;
    cart.forEach((item) => {
      if (Array.isArray(item.products) && item.products.length > 0) {
        total += item.products[0]?.price ?? 0;
      }
    });
    return +total.toFixed(2);
  };
  const router = useRouter();
  const handleRoutingToCheckout = () => {
    router.push(`/checkout?amount=${totalPrice()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bgdark via-primary-dark to-bgdark flex flex-col items-center justify-start py-12 px-2">
      <header className="mb-10 w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg tracking-tight">
          Your Shopping Cart
        </h1>
        <p className="mt-2 text-lg text-textmuted font-medium">
          {cart[0]?.username
            ? `Welcome, ${cart[0]?.username}!`
            : "Review your selected products."}
        </p>
      </header>

      <div className="w-full max-w-2xl bg-glass backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10 border border-primary-dark/40 relative">
        {cart.length > 0 ? (
          <ul className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
            {cart.map((cartItem) => {
              const product = cartItem?.products?.[0];
              if (!product) return null;

              return (
                <li
                  key={uuidv4()}
                  className="flex items-center gap-6 bg-glass rounded-2xl p-4 shadow-md hover:shadow-xl transition border border-primary-dark/20"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={
                        product?.bannar?.formats?.large?.url ||
                        "/placeholder.jpg"
                      }
                      alt={product?.title || "No image"}
                      width={100}
                      height={60}
                      className="w-24 h-16 rounded-xl object-cover border border-primary-dark/30 shadow"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-textmain truncate">
                      {product?.title || "Unknown Product"}
                    </h3>
                    <p className="text-xs text-textmuted mt-1">
                      Category:{" "}
                      <span className="font-semibold">
                        {product?.category || "No category"}
                      </span>
                    </p>
                    <p className="text-sm text-textmuted font-medium mt-1">
                      Price:{" "}
                      <span className="text-primary font-bold">
                        ${product?.price ?? "N/A"}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteItem(cartItem.id as number)}
                    className="text-accent hover:text-red-400 transition p-2 rounded-full bg-white/20 hover:bg-white/30 shadow"
                    title="Remove from cart"
                  >
                    <Trash2 size={20} />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center text-textmuted text-lg py-12">
            Your cart is empty
          </p>
        )}

        {/* Sticky checkout bar */}
        {cart.length > 0 && (
          <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-r from-primary-dark/80 to-primary/80 rounded-2xl mt-8 p-6 flex flex-col md:flex-row items-center justify-between shadow-xl border-t border-primary-dark/30">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <span className="text-2xl font-bold text-textmain">Total:</span>
              <span className="text-2xl font-extrabold text-primary">
                ${totalPrice()}
              </span>
            </div>
            <button
              onClick={handleRoutingToCheckout}
              className="mt-4 md:mt-0 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:from-secondary hover:to-primary transition-all duration-200"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

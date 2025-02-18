"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/app/_utils/types";
import { BadgeCheck, BadgeX, CalendarClock, DollarSign, ShoppingCart } from "lucide-react";
import SkeletonBox from "@/app/_components/SkeletonBox";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { addToCart, getUserCarts } from "@/app/_utils/cartApis";
import useCartContext from "@/app/_hooks/useCartContext";

interface ProductDetailsProps {
    product: Product | null;
    loading: boolean;
}

const ProductDetails = ({ product, loading }: ProductDetailsProps) => {
    const { user } = useUser();
    const { cart, setCart } = useCartContext();
    const router = useRouter();

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // Load image and set imageLoaded to true once it's fully loaded
        if (product?.bannar?.url) {
            const img = new window.Image();
            img.src = product.bannar.url;
            img.onload = () => setImageLoaded(true);
        }
    }, [product]);

    const handleAddToCart = () => {
        if (!user) {
            router.push("/sign-in");
        } else {
            const data = {
                username: user.fullName,
                email: user.emailAddresses[0].emailAddress,
                products: [product?.id],
            };

            addToCart(data)
                .then(() => {
                    console.log("Added to cart successfully");
                    return getUserCarts(user.emailAddresses[0].emailAddress);
                })
                .then((res) => {
                    console.log("Updated cart data:", res.data.data);
                    setCart(res.data.data);
                })
                .catch((err) => {
                    console.error("Error adding to cart:", err);
                });
        }
    };

    if (loading || !product) {
        return (
            <div className="my-3">
                <div className="title relative">
                    <SkeletonBox width={400} height={250}  className="mb-6 pb-3" />
                    <span className="absolute -bottom-px h-0.5 w-[70%] bg-gradient-to-r from-red-700 to-red-100 rounded-2xl"></span>
                </div>
                <div className="flex justify-between items-center gap-6 flex-col lg:flex-row">
                    <div className="banner">
                        <SkeletonBox height={300} width={300} />
                    </div>
                    <div className="content flex flex-col w-full lg:w-[85%] space-y-2">
                        <SkeletonBox height={20} width={"90%"} />
                        <SkeletonBox height={20} width={"90%"} />
                        <SkeletonBox height={20} width={"90%"} />
                        <SkeletonBox height={25} width={"50%"} className="my-4" />
                        <SkeletonBox height={30} width={"50%"} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pb-3">
            <div className="title relative">
                <h1 className="text-3xl text-red-600 font-bold mb-6 pb-3">{product.title}</h1>
                <span className="absolute -bottom-px h-0.5 w-[70%] bg-gradient-to-r from-red-700 to-red-100 rounded-2xl"></span>
            </div>
            <div className="flex justify-between items-center gap-6 flex-col lg:flex-row">
                <div className="banner">
                    {imageLoaded ? (
                        <div className="mb-4">
                            <Image
                                src={product.bannar.url}
                                alt={product.bannar.name}
                                width={product.bannar.width}
                                height={product.bannar.height}
                                className="rounded-lg w-full h-auto"
                                priority
                            />
                        </div>
                    ) : (
                        <SkeletonBox height={300} width={"100%"} />
                    )}
                </div>
                <div className="content flex flex-col w-full lg:w-[85%]">
                    <p className="text-gray-700 text-lg lg:text-xl mb-2 md:mb-4">
                        {product.description?.[0]?.children?.[0]?.text || "No description available."}
                    </p>
                    <div className="flex justify-between items-center mb-4 w-[95%]">
            <span className="text-xl font-semibold text-green-600">
              Price : {product.price} <DollarSign className={"inline"} />
            </span>
                        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              {product.category}
            </span>
                    </div>
                    <div className="delivery capitalize">
                        {product.instantDelivery ? (
                            <span className="flex text-red-500 gap-2">
                <BadgeCheck /> Eligible for instant delivery
              </span>
                        ) : (
                            <span className="flex text-green-500 gap-2">
                <BadgeX /> Not eligible for instant delivery
              </span>
                        )}
                    </div>
                    <div className="btn w-full my-2 lg:my-5">
                        <button
                            onClick={() => handleAddToCart()}
                            className="w-full rounded border border-blue-600 bg-blue-600 px-12 py-2 font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        >
                            Add to Cart <ShoppingCart className={"ml-3 inline"} />
                        </button>
                    </div>
                    <div className="text-gray-500 text-sm flex gap-2 ">
                        <CalendarClock className="h-5 w-5" />{" "}
                        <p> Latest Update : {new Date(product.updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

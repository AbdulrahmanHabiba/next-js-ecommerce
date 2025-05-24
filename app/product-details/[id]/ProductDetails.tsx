"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/app/_utils/types";
import {
  BadgeCheck,
  BadgeX,
  CalendarClock,
  DollarSign,
  ShoppingCart,
} from "lucide-react";
import SkeletonBox from "@/app/_components/SkeletonBox";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { addToCart, getUserCarts } from "@/app/_utils/cartApis";
import useCartContext from "@/app/_hooks/useCartContext";
import Card from "@/app/_components/ui/Card";
import Button from "@/app/_components/ui/Button";

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
    if (product?.bannar) {
      const img = new window.Image();
      img.src = product.bannar.formats?.large?.url || product.bannar.url;
      img.onload = () => setImageLoaded(true);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        username: user.fullName || "Guest",
        email: user.emailAddresses[0].emailAddress,
        products: product
          ? [
              {
                category: product.category,
                price: product.price,
                title: product.title,
                bannar: product.bannar,
                id: product.id,
              },
            ]
          : [],
        id: product?.id, // add id for consistency
      };

      // --- Dynamic API logic (keep as is for production) ---
      addToCart({
        username: user.fullName,
        email: user.emailAddresses[0].emailAddress,
        products: [product?.id],
      })
        .then(() => {
          return getUserCarts(user.emailAddresses[0].emailAddress);
        })
        .then((res) => {
          setCart(res.data.data);
        })
        .catch(() => {
          // --- Static fallback logic: Context only ---
          // If API fails, add product to context only (no localStorage)
          // To revert to dynamic, just remove this fallback block
          setCart((prev) => [...prev, data]);
        });
    }
  };

  if (loading || !product) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center py-10 px-2">
        <div className="w-full mx-auto">
          <Card className="flex flex-col lg:flex-row gap-10 items-center justify-between p-6 bg-bgdark/90 border-primary-dark/40">
            {/* Skeleton Image */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <SkeletonBox height={300} width={"100%"} />
            </div>
            {/* Skeleton Content */}
            <div className="flex-1 flex flex-col gap-4 p-0 lg:p-4 w-full">
              <SkeletonBox height={40} width={"70%"} /> {/* Title */}
              <SkeletonBox height={20} width={"90%"} /> {/* Description */}
              <SkeletonBox height={20} width={"60%"} /> {/* Description 2 */}
              <div className="flex flex-wrap gap-4 items-center mb-2">
                <SkeletonBox height={32} width={100} /> {/* Price */}
                <SkeletonBox height={32} width={80} /> {/* Category */}
              </div>
              <SkeletonBox height={24} width={180} /> {/* Delivery */}
              <SkeletonBox height={48} width={"100%"} className="mt-2" />{" "}
              {/* Button */}
              <SkeletonBox height={18} width={160} className="mt-2" />{" "}
              {/* Date */}
            </div>
          </Card>
        </div>
      </section>
    );
  }

  // --- Premium product details design ---
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-10 px-2">
      <div className="w-full  mx-auto">
        <Card className="flex flex-col lg:flex-row gap-10 items-center justify-between p-6 bg-bgdark/90 border-primary-dark/40">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            {imageLoaded ? (
              <Image
                src={product.bannar.formats?.large?.url || product.bannar.url}
                alt={product.bannar.name}
                width={product.bannar.width}
                height={product.bannar.height}
                className="rounded-2xl w-full h-auto max-h-[350px] object-cover shadow-lg border border-primary-dark/30"
                priority
              />
            ) : (
              <SkeletonBox height={300} width={"100%"} />
            )}
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col gap-4 p-0 lg:p-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
              {product.title}
            </h1>
            <p className="text-lg text-textmuted mb-2">
              {product.description?.[0]?.children?.[0]?.text ||
                "No description available."}
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-2">
              <span className="text-2xl font-bold text-primary flex items-center gap-2">
                ${product.price} <DollarSign className="inline w-5 h-5" />
              </span>
              <span className="bg-glass text-textmain px-4 py-1 rounded-full font-semibold border border-primary-dark/20">
                {product.category}
              </span>
            </div>
            <div className="delivery capitalize mb-2">
              {product.instantDelivery ? (
                <span className="flex text-accent gap-2 items-center font-semibold">
                  <BadgeCheck /> Eligible for instant delivery
                </span>
              ) : (
                <span className="flex text-primary gap-2 items-center font-semibold">
                  <BadgeX /> Not eligible for instant delivery
                </span>
              )}
            </div>
            <Button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 text-lg mt-2"
            >
              Add to Cart <ShoppingCart className="ml-2 inline w-6 h-6" />
            </Button>
            <div className="text-textmuted text-sm flex gap-2 mt-2 items-center">
              <CalendarClock className="h-5 w-5" />
              <p>
                Latest Update :{" "}
                {new Date(product.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetails;

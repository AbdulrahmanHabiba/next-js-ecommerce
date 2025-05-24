import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Product } from "@/app/_utils/types";
import Link from "next/link";
import { MousePointerClick } from "lucide-react";
import Card from "@/app/_components/ui/Card";
import Button from "@/app/_components/ui/Button";

interface ProductItemProps {
  product: Product;
}

// Premium, reusable product card with improved image, border, and skeleton
const ProductItem = ({ product }: ProductItemProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new window.Image();
    img.src = product?.bannar?.formats?.large?.url || "";
    img.onload = () => setLoading(false);
  }, [product]);

  return (
    <Card className="relative w-full max-w-sm min-w-[300px] p-0 overflow-hidden group cursor-pointer transition-all hover:-translate-y-2 border border-primary-dark/20 bg-glass mx-auto">
      {loading && (
        <div className="aspect-[16/10] w-full rounded-t-3xl overflow-hidden bg-bgdark flex items-center justify-center">
          <Skeleton
            width="100%"
            height="100%"
            baseColor="#232946"
            highlightColor="#313866"
            borderRadius={0}
            style={{ width: "100%", height: "100%", borderRadius: 0 }}
          />
        </div>
      )}
      <Link href={`/product-details/${product?.id}`}>
        <div
          className={`aspect-[16/10] w-full flex items-center justify-center overflow-hidden rounded-t-3xl bg-bgdark relative ${loading ? "hidden" : "block"}`}
        >
          <Image
            className="object-cover w-full h-full rounded-t-3xl"
            src={product?.bannar?.formats?.large?.url || "" }
            alt={product.title}
            width={384}
            height={240}
            onLoad={() => setLoading(false)}
            priority
          />
        </div>
        {!loading && (
          <>
            {/* Glass overlay on hover */}
            <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-textmain text-center z-10">
              <p className="text-xl font-bold text-primary mb-2">
                ${product.price}
              </p>
              <p className="mt-2 max-h-32 font-serif text-lg text-textmuted line-clamp-2">
                {product.description[0]?.children[0]?.text}
              </p>
              <div className="show-more mt-6">
                <Button className="flex items-center gap-2 text-sm px-4 py-2">
                  <span>Show More</span>
                  <MousePointerClick className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* Title always visible */}
            <div className="content p-3 text-center group-hover:hidden">
              <h2 className="text-primary font-bold text-lg line-clamp-1">
                {product.title}
              </h2>
            </div>
          </>
        )}
        {/* Gradient bar at bottom */}
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></span>
      </Link>
    </Card>
  );
};

export default ProductItem;

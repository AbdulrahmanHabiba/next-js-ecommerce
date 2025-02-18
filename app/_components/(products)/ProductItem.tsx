import React, {useEffect, useState} from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Product } from "@/app/_utils/types";
import Link from "next/link";
import { MousePointerClick } from "lucide-react";

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const img = new window.Image();
        img.src = product.bannar.formats.large.url;
        img.onload = () => setLoading(false);
    }, [product]);

    return (
        <div className="product-card cursor-pointer relative bg-white rounded-md shadow-lg max-w-[340px] transition-all transform hover:-translate-y-3 overflow-hidden hover:shadow-2xl duration-300 border border-gray-200 group">
            {loading && <Skeleton width={300} height={170} />}

            <Link href={`/product-details/${product?.id}`}>
                <div className={`flex items-center justify-center overflow-hidden rounded-t-md bg-gray-100 relative ${loading ? "hidden" : "block"}`}>
                    <Image
                        className="object-cover h-full w-full"
                        src={product.bannar.formats.large.url}
                        alt={product.title}
                        width={340}
                        height={250}
                        onLoad={() => setLoading(false)}
                    />
                </div>

                {!loading && (
                    <>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                            <p className="text-lg font-bold text-gray-400">{product.price} USD</p>
                            <p className="mt-2 max-h-32 font-serif text-lg line-clamp-1 md:line-clamp-2">{product.description[0]?.children[0]?.text}</p>
                            <div className="show-more mt-4">
                                <button className="border rounded-xl py-2 px-5 text-background flex items-center gap-2 border-blue-600 hover:bg-blue-600">
                                    <span>Show More</span>
                                    <MousePointerClick className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="content p-1 text-center group-hover:hidden">
                            <h2 className="text-primary/70 line-clamp-1">{product.title}</h2>
                        </div>
                    </>
                )}

                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-700"></span>
            </Link>
        </div>
    );
};

export default ProductItem;

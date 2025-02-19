"use client";
import React, { useEffect, useState, use } from "react";
import { getProductByCategory, getProductById } from "@/app/_utils/productApis";
import { Product } from "@/app/_utils/types";
import ProductDetails from "@/app/product-details/[id]/ProductDetails";
import ProductItem from "@/app/_components/(products)/ProductItem";

const Page = ({ params }: any) => {
    const resolvedParams : any = use(params);
    const productId = resolvedParams?.id ;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading , setIsLoading] = useState<boolean>(true);
    const [similarProducts , setSimilarProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (productId) {
            getProductById(productId)
                .then((res) => {
                    setProduct(res.data)
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error(err)
                    setIsLoading(true);
                });
        }
    }, [productId]);

    useEffect(() => {
        if (product?.category) {
            getProductByCategory(product?.category)
                .then((res) => setSimilarProducts(res.data.data))
                .catch((err) => console.error(err));
        }
    }, [product?.category]);


    return (
        <section className="container mx-auto p-8 min-h-screen">
            <ProductDetails product={product} loading={loading} />
            <h2 className="text-3xl text-red-400 font-bold my-6 pt-5 mx-auto text-center">
                {similarProducts.length !== 1 ? "Similar Products" : "No similar products ..."}
            </h2>
            <div className="container mx-auto my-4 pb-4 flex flex-wrap justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {similarProducts.map((product) => (
                    product.id !== +productId &&
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Page;

"use client"
import React, { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import {getProducts} from "@/app/_utils/productApis";
import { Product } from "@/app/_utils/types";
const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading , setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        getProducts()
            .then((res) => {
                if (res.data.data.length > 0) {
                    setProducts(res.data.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.error("Error loading products:", err);
                setIsLoading(false);
            });
    }, []);
    return (
        <section className="py-5 min-h-screen">
            <div className="title text-4xl text-center my-3 ">
                <h2>Latest Products</h2>
            </div>
            {loading && (
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            )}
            <div
                className="container mx-auto my-4 flex flex-wrap justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((product) => {
                   return <ProductItem key={product.id} product={product}  />
            }  )}
            </div>
        </section>
    );
};

export default Products;

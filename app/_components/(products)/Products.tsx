"use client";
import React, { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import { getProducts } from "@/app/_utils/productApis";
import { Product } from "@/app/_utils/types";
import { staticProducts } from "@/app/_utils/staticProducts";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getProducts()
      .then((res) => {
        if (res.data.data.length > 0) {
          setProducts(res.data.data);
        } else {
          setProducts(staticProducts);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setProducts(staticProducts);
        setIsLoading(false);
      });
  }, []);
  // --- Premium products page design ---
  return (
    <section id="products" className="min-h-screen bg-gradient-to-br from-bgdark via-primary-dark to-bgdark py-12 px-2 flex flex-col items-center scroll-mt-20">
      <div className="w-full max-w-5xl text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg tracking-tight">
          Latest Products
        </h2>
        <p className="mt-2 text-lg text-textmuted font-medium">
          Discover our exclusive collection. Click any product for details!
        </p>
      </div>
      {loading && (
        <div className="flex justify-center items-center min-h-40 w-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      )}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center px-2  ">
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Products;

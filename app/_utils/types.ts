import React from "react";

export interface Product {
    id: number;
    documentId: string;
    title: string;
    description: DescriptionItem[];
    price: number;
    instantDelivery: boolean;
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    bannar: Banner;
}

export interface DescriptionItem {
    type: string;
    children: { type: string; text: string }[];
}

export interface Banner {
    id: number;
    documentId: string;
    name: string;
    url: string;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        large: ImageFormat;
    };
}

export interface ImageFormat {
    name: string;
    url: string;
    width: number;
    height: number;
    size: number;
}

export interface CartItem {
       id?: number;
       username : string ;
       email : string ;
       products: { id: number }[];
}

export interface CartContextTypes {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

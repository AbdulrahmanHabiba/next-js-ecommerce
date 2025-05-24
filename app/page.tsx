import Image from "next/image";
import Hero from "@/app/_components/Hero";
import Products from "@/app/_components/(products)/Products";
import ProductItem from "@/app/_components/(products)/ProductItem";

export default function Home() {
  return (
      <>
        <Hero />
        <Products />
      </>
  );
}

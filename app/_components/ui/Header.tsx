"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart, Home, Package, UserCircle } from "lucide-react";
import {
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import useCartContext from "@/app/_hooks/useCartContext";

const Header = () => {
  const { cart } = useCartContext();
  const { user } = useUser();
  const cartCount = cart.reduce(
    (acc, item) => acc + (item.products?.length || 1),
    0
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-bgdark/80 shadow-lg backdrop-blur-md border-b border-primary-dark/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-primary drop-shadow"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            E-Shop
          </span>
        </Link>
        {/* Navigation */}
        <nav className="flex gap-2 md:gap-4 items-center">
          <Link
            href="/"
            className="flex items-center gap-1 px-3 py-2 rounded-xl font-semibold text-textmain hover:bg-primary/10 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link
            href="/#products"
            className="flex items-center gap-1 px-3 py-2 rounded-xl font-semibold text-textmain hover:bg-primary/10 transition-colors"
          >
            <Package className="w-5 h-5" />
            <span className="hidden sm:inline">Products</span>
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-1 px-3 py-2 rounded-xl font-semibold text-textmain hover:bg-primary/10 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && user && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg">
                {cartCount}
              </span>
            )}
          </Link>
          {/* Clerk User/Profile */}
          <div className="ml-2 flex items-center">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{ elements: { avatarBox: "ring-2 ring-primary" } }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="flex items-center gap-1 px-3 py-2 rounded-xl font-semibold text-textmain hover:bg-primary/10 transition-colors">
                  <UserCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">Sign In</span>
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

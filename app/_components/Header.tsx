'use client';

import React, {useContext, useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {UserButton, useUser} from "@clerk/nextjs";
import {Menu, ShoppingCart } from "lucide-react";
import useCartContext from "@/app/_hooks/useCartContext";
import {getUserCarts} from "@/app/_utils/cartApis";
import {CartItem} from "@/app/_utils/types";
import CartsMenu from "@/app/_components/CartsMenu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        setIsLogged(window.location.href.toString().includes("sign-in"));
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const { user, isLoaded, isSignedIn } = useUser();
    const {cart , setCart} =  useCartContext() ;

    
    const [menuCartOpen, setMenuCartOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenuCart = () => {
        setMenuCartOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            // @ts-ignore
            if (menuCartOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuCartOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuCartOpen]);


    useEffect(() => {
        if (user) {
            getUserCarts(user.emailAddresses[0].emailAddress)
                .then((res) => {
                    console.log("Fetched cart data:", res.data.data);
                    setCart(res.data.data);
                })
                .catch((error) => {
                    console.error("Error fetching carts:", error);
                });
        }
    }, [user]);



    return  !isLogged && (
        <header className="bg-white shadow-md ">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="block text-primary">
                        <Image src="/logo.svg" alt="Logo" width={48} height={48} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm font-semibold">
                            <li>
                                <a className="text-primary hover:text-primary/75" href="#">Home</a>
                            </li>
                            <li>
                                <a className="text-primary hover:text-primary/75" href="#">Explore</a>
                            </li>
                            <li>
                                <a className="text-primary hover:text-primary/75" href="#">Projects</a>
                            </li>
                            <li>
                                <a className="text-primary hover:text-primary/75" href="#">About Us</a>
                            </li>
                            <li>
                                <a className="text-primary hover:text-primary/75" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Login and Register Buttons */}
                    <div className="flex gap-6">
                        {!user? (
                    <div className="hidden sm:flex items-center gap-4">
                        <a
                            className="  rounded-md bg-primary px-5 py-2.5 text-sm text-white shadow hover:bg-gray-100 hover:text-primary"
                            href="/sign-in"
                        >
                            Login
                        </a>
                        <a
                            className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm text-primary shadow hover:bg-primary hover:text-white"
                            href="/sign-up"
                        >
                            Register
                        </a>
                    </div>
                        ) : <div className={"flex items-center gap-4"}>
                            {menuCartOpen && (
                                <div ref={menuRef} >
                                    <CartsMenu toggleMenuCart={toggleMenuCart} />
                                </div>
                            )}
                           <p onClick={toggleMenuCart} className="flex"><ShoppingCart /> ({cart?.length})</p>
                            <UserButton />

                        </div>}
                        {/* Hamburger Button (Visible on Small Screens) */}
                        <div className="block md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <Menu />
                            </button>
                        </div>

                    </div>
                </div>



                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-md my-2 rounded-lg p-4 overflow-hidden">
                        <nav>
                            <ul className="flex flex-col gap-4 text-sm font-semibold">
                                <li>
                                    <a className="text-primary hover:text-primary/75" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="text-primary hover:text-primary/75" href="#">Explore</a>
                                </li>
                                <li>
                                    <a className="text-primary hover:text-primary/75" href="#">Projects</a>
                                </li>
                                <li>
                                    <a className="text-primary hover:text-primary/75" href="#">About Us</a>
                                </li>
                                <li>
                                    <a className="text-primary hover:text-primary/75" href="#">Contact Us</a>
                                </li>
                                {/* Mobile-specific Buttons */}
                                {!user && (
                                <ul className="sm:hidden flex gap-4 ">
                                    <li>
                                        <a
                                            className="block rounded-md bg-primary px-5 py-2.5 text-sm text-white shadow hover:bg-gray-100 hover:text-primary"
                                            href="/sign-in"
                                        >
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm text-primary shadow hover:bg-primary hover:text-white"
                                            href="/sign-up"
                                        >
                                            Register
                                        </a>
                                    </li>
                                </ul>
                                )}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

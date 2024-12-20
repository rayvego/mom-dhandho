"use client";

import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border transition-all duration-300 ${
        isScrolled ? "bg-background/50 border-muted-foreground shadow-lg rounded-xl m-2" : "bg-background/80 border-b"
      }`}
    >
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="h-6 w-6 hover:cursor-pointer mr-2" />
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg">
                  Home
                </Link>
                <Link href="/category/new-arrivals" className="text-lg">
                  New Arrivals
                </Link>
                <Link href="/category/sarees" className="text-lg">
                  Sarees
                </Link>
                <Link href="/category/suits" className="text-lg">
                  Suits
                </Link>
                <Link href="/category/lehengas" className="text-lg">
                  Lehengas
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* // TODO: Add logo here */}
          <Link href="/" className="text-3xl">
            👘 Vastram
          </Link>
        </div>

        <div className="flex items-center gap-6 ">
          <Link href="/" className="text-lg">
            Home
          </Link>
          <Link href="/category/new-arrivals" className="text-lg">
            New Arrivals
          </Link>
          <Link href="/category/sarees" className="text-lg">
            Sarees
          </Link>
          <Link href="/category/suits" className="text-lg">
            Suits
          </Link>
          <Link href="/category/lehengas" className="text-lg">
            Lehengas
          </Link>

          {/* Search Bar */}
          <div className="ml-12 flex items-center gap-4">
            <Search />
            <Input type="text" placeholder="Search" className="border border-muted-foreground rounded-lg p-2 w-52" />
          </div>
        </div>

        <div className="flex items-center gap-6 mr-2">
          <Link href={"/profile"}>
            <User className="h-6 w-6" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <ShoppingCart className="h-6 w-6 hover:cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right">
              <h2 className="text-2xl mb-4">Shopping Cart</h2>
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

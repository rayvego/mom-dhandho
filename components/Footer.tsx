"use client"

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4">Shop</h3>
            <div className="flex flex-col gap-2">
              <Link href="/category/new-arrivals" className="hover:underline">New Arrivals</Link>
              <Link href="/category/sarees" className="hover:underline">Sarees</Link>
              <Link href="/category/suits" className="hover:underline">Suits</Link>
              <Link href="/category/lehengas" className="hover:underline">Lehengas</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-4">Help</h3>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="hover:underline">Contact Us</Link>
              <Link href="/shipping" className="hover:underline">Shipping Information</Link>
              <Link href="/returns" className="hover:underline">Returns & Exchanges</Link>
              <Link href="/size-guide" className="hover:underline">Size Guide</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-4">About</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="hover:underline">Our Story</Link>
              <Link href="/stores" className="hover:underline">Store Locations</Link>
              <Link href="/careers" className="hover:underline">Careers</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <p>Email: nimi.kbp@gmail.com</p>
              <p>Phone: +91 9764689397</p>
              <p>Address: Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 Vastram. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

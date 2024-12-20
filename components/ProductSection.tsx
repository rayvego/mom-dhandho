"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

// TODO: Make it so that the photos of each product are displayed in a cycle

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string,
}

interface ProductSectionProps {
  title: string;
  description: string;
  products: Product[];
}

export const ProductSection = ({ title, description, products }: ProductSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl mb-2 font-semibold">{title}</h2>
      <p className="text-muted-foreground mb-4 font-semibold">{description}</p>
      <div className="relative">
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar">
          {products.map((product, index) => (
            <div key={index} className="flex-none w-72">
              <div className="aspect-[3/4] mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="text-lg">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <p className="">₹{product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

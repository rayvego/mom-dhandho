import { ImageSlider } from "@/components/ImageSlider";
import { ProductSection } from "@/components/ProductSection";
import ReviewSection from "@/components/ReviewSection";

// Fetch sections
const sections = [
  {
    title: "New Arrivals",
    description: "Check out our latest products.",
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 4,
        name: "Product 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 5,
        name: "Product 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 6,
        name: "Product 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
    ],
  },
  {
    title: "Popular Products",
    description: "Our customers' favorite products.",
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 4,
        name: "Product 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 5,
        name: "Product 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 6,
        name: "Product 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
    ],
  },
  {
    title: "Sale",
    description: "Get the best deals on our products.",
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 4,
        name: "Product 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 5,
        name: "Product 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
      {
        id: 6,
        name: "Product 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Indian Silk Saree",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="pt-16 min-h-screen">
      <ImageSlider />
      <div className="home-content">
        {sections.map((section) => (
          <ProductSection
            key={section.title}
            title={section.title}
            description={section.description}
            products={section.products}
          />
        ))}
      </div>
      <ReviewSection />
    </div>
  );
}
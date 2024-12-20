"use client";

import React, { useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    rating: 5,
    productName: "Product 1",
    content: "This is a great product.",
    username: "user1",
    productImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    id: 2,
    rating: 4,
    productName: "Product 2",
    content: "This is a great product.",
    username: "user2",
    productImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    id: 3,
    rating: 3,
    productName: "Product 3",
    content: "This is a great product.",
    username: "user3",
    productImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    id: 4,
    rating: 5,
    productName: "Product 1",
    content: "This is a great product.",
    username: "user1",
    productImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    id: 5,
    rating: 4,
    productName: "Product 2",
    content: "This is a great product.",
    username: "user2",
    productImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    id: 6,
    rating: 3,
    productName: "Product 3",
    content: "This is a great product.",
    username: "user3",
    productImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
];

const ReviewSection = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row1 && row2) {
      let position1 = 0;
      let position2 = 0;

      const animate = () => {
        position1 += 1; // Adjust speed for row 1
        position2 -= 1; // Adjust speed for row 2 (opposite direction)

        row1.style.transform = `translateX(-${position1}px)`;
        row2.style.transform = `translateX(${position2}px)`;

        if (position1 > row1.scrollWidth / 2) position1 = 0;
        if (Math.abs(position2) > row2.scrollWidth / 2) position2 = 0;

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  const renderReviewCard = (review: (typeof reviews)[0]) => (
    <div key={review.id} className="flex-none w-72 p-4 bg-white/80 backdrop-blur-md rounded-lg shadow-xl mb-8">
      <div className="aspect-square mb-4">
        <img src={review.productImage} alt={review.productName} className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="text-lg font-semibold">{review.productName}</h3>
      <p className="text-sm text-muted-foreground">{review.content}</p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-muted-foreground">@{review.username}</p>
        <p className="ml-auto text-yellow-500 font-semibold">{"★".repeat(review.rating)}</p>
      </div>
    </div>
  );

  return (
    <div className="my-8 bg-gray-100 pb-8">
      {/* Divider */}
      <div className="h-[1px] bg-gray-300 mx-4"></div>
      <div className="flex items-center justify-center p-8">
        <div className="border-2 border-gray-300 rounded-3xl bg-white/50 backdrop-blur-lg py-3 px-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-center">What Our Customers Say 🔥</h2>
        </div>
      </div>
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="overflow-hidden">
          <div ref={row1Ref} className="flex gap-6 w-full animate-scroll infinite-scroll">
            {reviews.concat(reviews).map(renderReviewCard)}
          </div>
        </div>
        {/* Row 2 */}
        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex gap-6 w-full animate-scroll infinite-scroll">
            {reviews.concat(reviews).map(renderReviewCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

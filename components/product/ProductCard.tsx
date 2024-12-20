import React from 'react'

const ProductCard = () => {
  return (
    <div key={product.id} className="flex-none w-72">
      <div className="aspect-[3/4] mb-4">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="font-serif text-lg">{product.name}</h3>
      <p className="text-muted-foreground">₹{product.price.toLocaleString()}</p>
    </div>
  );
}

export default ProductCard
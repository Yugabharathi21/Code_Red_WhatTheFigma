import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const products = [
    {
      id: "1",
      name: "Fresh Pears",
      description: "Sweet and juicy organic pears",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&q=80"
    },
    {
      id: "2",
      name: "Organic Mushrooms",
      description: "Rich in flavor, perfect for cooking",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&q=80"
    },
    {
      id: "3",
      name: "Radish Greens",
      description: "Crisp and fresh garden radishes",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1593105544559-f0794a669aa6?auto=format&fit=crop&q=80"
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="h-[720px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-10 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-6xl font-bold leading-[90px]">
              Shop Fresh & Organic
            </h1>
            <p className="text-white text-2xl font-medium leading-[34px]">
              Explore our selection of premium fresh produce and organic food
            </p>
          </div>
          <button className="px-8 py-5 bg-black shadow-sm rounded-lg text-white text-2xl font-medium">
            Shop
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-[1280px] mx-auto px-20 py-16">
        <h2 className="text-black text-5xl font-semibold mb-8">
          Fresh & Organic Selection
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
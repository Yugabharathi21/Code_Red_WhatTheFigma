import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-20 py-16">
        <div className="max-w-[844px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-black text-6xl font-bold">
                Fresh & Organic Food Delivered to Your Doorstep
              </h1>
              <p className="text-black/75 text-2xl font-normal leading-9">
                Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.
              </p>
            </div>
            <Link
              to="/shop"
              className="w-[150px] px-8 py-5 bg-black shadow-sm rounded-lg text-white text-2xl font-medium leading-9"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-20">
        <img
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80"
          alt="Fresh produce"
          className="w-full h-[640px] rounded-lg object-cover"
        />
      </section>

      {/* Products Section */}
      <section className="px-20 py-16">
        <h2 className="text-black text-5xl font-semibold mb-8">
          Discover Freshness in Every Bite
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <ProductCard
            id="1"
            name="Handpicked Fruits"
            description="Juicy and delicious seasonal picks."
            price={10.99}
            image="https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80"
          />
          <ProductCard
            id="2"
            name="Delicious Beverages"
            description="Taste the richness of homemade juices and natural drinks."
            price={10.99}
            image="https://images.unsplash.com/photo-1546173159-315724eb42c9?auto=format&fit=crop&q=80"
          />
          <ProductCard
            id="3"
            name="Gourmet & Essentials"
            description="Premium dairy, nuts, and healthy snacks."
            price={10.99}
            image="https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-20 py-16 bg-gray-50">
        <h2 className="text-black text-5xl font-semibold mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              text: "Absolutely love the fresh produce and quick delivery!",
              author: "Sam W",
              role: "Customer"
            },
            {
              text: "Their organic fruits are the best I've ever tasted!",
              author: "Liam P.",
              role: "Customer"
            },
            {
              text: "Highly recommend for anyone looking for quality groceries",
              author: "Sophia M.",
              role: "Customer"
            }
          ].map((testimonial, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-xl border border-[#E6E6E6] flex flex-col gap-12"
            >
              <p className="text-2xl font-medium leading-9">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] rounded-full bg-gray-200" />
                <div>
                  <p className="text-base font-medium">{testimonial.author}</p>
                  <p className="text-[#828282] text-base font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F7F7F7] py-16">
        <div className="max-w-[1280px] mx-auto px-20 flex justify-between items-center">
          <h2 className="text-black text-5xl font-semibold max-w-[728px]">
            Join Us for a Healthier Lifestyle!
          </h2>
          <div className="flex gap-6">
            <Link
              to="/shop"
              className="px-8 py-5 bg-black shadow-sm rounded-lg text-white text-2xl font-medium"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="px-8 py-5 bg-[#E6E6E6] shadow-sm rounded-lg text-black text-2xl font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
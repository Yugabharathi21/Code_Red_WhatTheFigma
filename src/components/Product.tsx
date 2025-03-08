import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className="flex flex-col gap-6">
      <img
        src={image}
        alt={name}
        className="w-full aspect-[4/3] bg-[#F7F7F7] rounded-lg object-cover"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-black text-2xl font-medium leading-9">{name}</h3>
        <p className="text-[#828282] text-xl font-medium leading-[30px]">
          {description}
        </p>
        <span className="text-black text-xl font-medium leading-[30px]">
          ${price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}
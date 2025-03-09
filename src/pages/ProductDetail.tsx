import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Mock data for related products
const relatedProducts = [
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
  {
    id: "4",
    name: "Seasonal Vegetables",
    description: "Handpicked for the best quality",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80"
  },
  {
    id: "5",
    name: "Watermelon",
    description: "Refreshing, naturally sweet watermelon",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80"
  },
  {
    id: "6",
    name: "Cherry Bunch",
    description: "Sun-ripened, sweet and tangy cherries",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80"
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  
  // In a real app, fetch product details based on id
  const product = {
    name: "Organic Gourmet Mushroom",
    price: 10.99,
    description: "A premium selection of farm-fresh mushrooms, perfect for gourmet dishes and healthy meals.",
    image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&q=80",
    features: "Sustainably grown | Freshly harvested | Packed with nutrients"
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-20 py-10">
        {/* Product Details Section */}
        <div className="flex gap-36 mb-20">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-[625px] h-[613px] rounded-xl object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6 max-w-[515px]">
            <h1 className="text-4xl font-semibold leading-tight">{product.name}</h1>
            <p className="text-2xl font-medium">${product.price}</p>
            <p className="text-xl text-[#828282] leading-relaxed">
              {product.description}
            </p>
            <button className="w-full py-3.5 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors">
              Add to cart
            </button>
            <p className="text-base text-[#828282] font-medium">
              {product.features}
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Related products</h2>
          <div className="grid grid-cols-3 gap-8">
            {relatedProducts.map(product => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="flex flex-col gap-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] rounded-lg object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-medium">{product.name}</h3>
                  <p className="text-xl text-[#828282] font-medium">
                    {product.description}
                  </p>
                  <span className="text-xl font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
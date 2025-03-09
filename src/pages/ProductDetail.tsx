import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import ProductCard from '../components/ProductCard';

// Mock data for related products
const relatedProducts = [
  {
    id: "1",
    name: "Fresh Pears",
    description: "Sweet and juicy organic pears",
    price: 10.99,
    image: "https://s3-alpha-sig.figma.com/img/65d6/8f72/4f70b8f021d5f479cd5eb6004696c267?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k~GPpBnsawDc5D8u1OziHx1J6j~IJES6DrI-xypsMJmpyiBtqzhrApJKkTZu2yufOVvjHb6IPKYfSrV5aSEb7j9ViqtSCWkeGSEYZkLjsA3dAe7GuBMTtqkF8qjLyOLE-xCQVS0KL3s9t-b57vn7-NFO-KkcSaAicKPqpf8myUl1gZTAiaG-Kakc3r7u~weUooXLUnk7KnszO-93FyMcG-RiDQrB423Tjlmg5t8bQ7Vy602XftWU1X-Rg2a74L1Fu-BP0709FKELff5cssECTspg-pA3yWwzgmHQpxnxJFnZdQ7DGoebh6P5MB-qOAyBySFyesrX4f2zY4hKogXRrw__"
  },
  {
    id: "2",
    name: "Organic Mushrooms",
    description: "Rich in flavor, perfect for cooking",
    price: 10.99,
    image: "https://s3-alpha-sig.figma.com/img/44b0/aa43/a57e23aec207706d7933d9eaa0f3360a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nOgKt40HIr5juk-OtLC8-5GPaFyJkufk~PAI8p1tHK6eCgzIbIioB5kijSruVq~pGpUDVgCHf1DvqD6KwaGv-JjA43n4HCMo4Stb2qLxVF-4nAIFJYKVldNWCKV~B~jllj1IC8mL~ugC1qbSKpcG1JJUL2qD7pwUhmBRo1-RB5FH90VNM7tBJCBR7FyFogLfJEQu4ELHc2wyUq0phAWfhv0kTZobiwSembTyAe1cLkFhAxghv63qvxBULvw~I8~Q1qTNr98U27vhswDJ8QwLu0U1xo0RIVUT79fhgi0ZCHxdu3SWjZgiRKqMYh7rApATcgw2vFvvfRwOcfWoLkU~yQ__"
  },
  {
    id: "3",
    name: "Radish Greens",
    description: "Crisp and fresh garden radishes",
    price: 10.99,
    image: "https://s3-alpha-sig.figma.com/img/4737/fe1b/f44d7342d9605d5c93635abf8a144817?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ouu6KnvS0JaEF8GEGKBgDrw~Kk93KQ2UrXuNT0kl~rn80iAkeXhXCXnVBiUGazIaj4PRz~rE0daUGSsSL-fnf53vj9x~vcjYFL~CYfqiTxAAtXS3LOveKLkdF5wh09vg3s-DdOvNok0YAXvlEHP02ejJKSID2x-Ni764BZPAfkiYQaMCi74fkFZwZE5jsN7247T9v6QT3XyF7xCv0uwuxXO-lvQY8rL1QTj~FQs~~vKOwrglyZD8tkNxN7hlxDl8bOChwc8Pzpdhbe-jlX3dX0K49iZLDCpatQYFR78kWkRfK3x9P5zgVX~QV1tpWlEhQrYeDy78zE6-mtQG1hd19w__"
  },
  {
    id: "4",
    name: "Seasonal Vegetables",
    description: "Handpicked for the best quality",
    price: 10.99,
    image: "https://s3-alpha-sig.figma.com/img/0df0/723d/98ed140baad5fa88103f2153d6fd6a19?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UDpWaZ2cFCOuYLhDgcPV8iUWkRTBfMwCqcV-9MPkbccS3g2NfKZnzXXWBynZPDQyaElw~5v3KD2Ez8sn1ao52ndMFDvltVATHRFYfonyVvRa8PD7puM8kbIT1VEir58Bf619IdOksyeIfwQZnYNyspY~tR75OeD1oXUmIDHcXDCnEuk~iCaoTK1njcaAnEjykmI-N1ANXY2lp2-NI~HOuZg9qSwO1Yov1T8niafMYn8wPc3LEqeig4jHczNqAUZJXYcIzm6y3ByJSfL3BjdK0ZwRM1TuP3MH2V9EUrGiTBT6f6TqNyqZxDVvUjN8KpDk8pbg3V31eogkVID-EYoKBQ__"
  },
  {
    id: "5",
    name: "Watermelon",
    description: "Refreshing, naturally sweet watermelon",
    price: 10.99,
    image: "https://s3-alpha-sig.figma.com/img/bf0f/7a8e/e2fc11dc46294e141acf3415eb94b77b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sKa3fT6ubr19-fJpoHrD-IUpZYyXk47cH6~EFvrAkV-Vb07h2bn2sZOwTzCMJMbjCAmtV1h7a9DayHV7aQjANIz8XoKjVxxg26ikb4H0leM6zY9NmOnQPfhdptn60OkeAbDofZ5SsjCwrhSeBVi~B2jKb4q2dfZ5DR0cnAw8JMTdcHnFKcmdnTF90y4Y6xd-LfRwFeYdaF7GLd0lpSM4XXEz07t1BHFbC0tUst~rTOID8nD05tFHgx2eN816ek1qB0yRv7agZTt0~UOvcZLoBndPbBRMOkL0dV8FSSG2eTwnWCSBkviSR5WBGiBCYgyeQf0XGZnVQiKQa18TMFvd3g__"
  },
  {
    id: "6",
    name: "Cherry Bunch",
    description: "Sun-ripened, sweet and tangy cherries",
    price: 10.99,
    image: "https://s3-alpha-sig.figma.com/img/379c/0155/bc413a61ca41917df832a2e64530e9d7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KPVM7RP9am2b51V5k7VqPjax5OblTgUvHUgYLWcKXFctF6EFFLJQG1JKa5lg5-TdtEohl6ZnIfGSowHL6-RmIuL1M20dWfIgTbBEKFws0mNpCJcIjwTppvxBVLT1XqiXPuobmv9o3gRYElOp1Z4rHfbWUP2gRVFCK5uTCwrZLdtSVb10JpXNNNynwvyJml5kX7CJ5Xv10C06ahDk6yCzYSSWHWqBowNZTneH35fX7XF0tHek-qyGaufZmCJIX13KSrnP~J8LIuzIivpy3mnh0biDSw8MqjDPxZmMiZpHXEnuQZGE9aIIRsQYbDlyFA5mYQslk5a6Jfo4lxRCUp42qQ__"
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);
  
  // In a real app, fetch product details based on id
  const product = {
    name: "Organic Gourmet Mushroom",
    price: 10.99,
    description: "A premium selection of farm-fresh mushrooms, perfect for gourmet dishes and healthy meals.",
    image: "https://s3-alpha-sig.figma.com/img/5f23/c259/5995124f13fd72ca83702e2683cbad22?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wo5y9UWEyKmmLE7PxHXwLsVp32KK1YsV~QOok3a7lstfapi59mTbOjk8P5LoNpjP7~wLoKGly7PuZHdxY0yU2Oc01U9-lTQg9bX4Yp1LtbLUaRGo5l6tocrrzVNqKo64D4YxEivHLAAE~5coIE527EgUQzi7afQ3X2~WZYTG~Aup0r5HeT5-V2phqeTxa01DO7aTZVN2ou1n1g2tUVy2HQJyWjWQD~iBm7CdJUIr~URzO2xdrxH12KdTRvRrljw5AruaQTMj52b7MuwkXpPWDbnRfGwq0jD~1TLofTW9Ct82yfb9y7QZ~OHzgWO2XgX87RbjDIOJYDyytN03av0OZQ__",
    features: "Sustainably grown | Freshly harvested | Packed with nutrients",
    stock: 10
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <SectionTransition direction="up" className="max-w-[1280px] mx-auto px-20 py-10">
        {/* Product Details Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-36 mb-20"
        >
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              whileHover={{ scale: isZoomed ? 1 : 1.02 }}
              onClick={() => setIsZoomed(!isZoomed)}
              className="cursor-zoom-in"
            >
              <motion.img
                layoutId="product-image"
                src={product.image}
                alt={product.name}
                className={`w-[625px] h-[613px] rounded-xl object-cover ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              />
            </motion.div>

            {/* Zoom Overlay */}
            <AnimatePresence>
              {isZoomed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                  onClick={() => setIsZoomed(false)}
                >
                  <motion.img
                    layoutId="product-image"
                    src={product.image}
                    alt={product.name}
                    className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 max-w-[515px]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-semibold leading-tight"
            >
              {product.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-medium"
            >
              ${(product.price * quantity).toFixed(2)}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-[#828282] leading-relaxed"
            >
              {product.description}
            </motion.p>

            {/* Quantity Selector */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-lg font-medium">Quantity:</span>
              <div className="flex items-center gap-3 border border-[#E0E0E0] rounded-lg p-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange(-1)}
                  className="w-8 h-8 flex items-center justify-center text-xl font-medium"
                  disabled={quantity <= 1}
                >
                  -
                </motion.button>
                <span className="w-8 text-center">{quantity}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange(1)}
                  className="w-8 h-8 flex items-center justify-center text-xl font-medium"
                  disabled={quantity >= product.stock}
                >
                  +
                </motion.button>
              </div>
              <span className="text-sm text-[#828282]">
                {product.stock} available
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full py-3.5 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors"
            >
              Add to cart
            </motion.button>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base text-[#828282] font-medium"
            >
              {product.features}
            </motion.p>

            {/* Cart Notification */}
            <AnimatePresence>
              {showCartNotification && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
                >
                  Added {quantity} item{quantity > 1 ? 's' : ''} to cart!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Related Products Section */}
        <SectionTransition direction="up">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-semibold mb-8"
            >
              Related products
            </motion.h2>
            <div className="grid grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <Link 
                    to={`/product/${product.id}`}
                    className="flex flex-col gap-6"
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[4/3] rounded-lg object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      className="flex flex-col gap-1"
                    >
                      <h3 className="text-2xl font-medium">{product.name}</h3>
                      <p className="text-xl text-[#828282] font-medium">
                        {product.description}
                      </p>
                      <span className="text-xl font-medium">
                        ${product.price.toFixed(2)}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionTransition>
      </SectionTransition>
    </div>
  );
}
"use client";

import React from "react";

const reviews = [
  // Clothing (4)
  {
    id: 1,
    title: "Elegant Evening Gown",
    content:
      "A beautiful gown perfect for special occasions. The fabric feels luxurious and fits beautifully.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww",
    category: "clothing",
  },
  {
    id: 2,
    title: "Casual Denim Jacket",
    content:
      "Classic denim jacket that adds style to any casual outfit. Durable and comfortable for daily wear.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww",
    category: "clothing",
  },
  {
    id: 3,
    title: "Summer Floral Dress",
    content:
      "Light and breezy dress with vibrant floral print, perfect for warm weather and outdoor events.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fHww",
    category: "clothing",
  },
  {
    id: 4,
    title: "Soft Knit Sweater",
    content:
      "Comfortable knit sweater that keeps you warm without feeling bulky. Great for layering.",
    rating: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1552327359-d86398116072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0fGVufDB8fDB8fHww",
    category: "clothing",
  },

  // Shoes (4)
  {
    id: 5,
    title: "Classic White Sneakers",
    content:
      "Stylish and versatile sneakers that go with almost any outfit. Comfortable for all-day wear.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    category: "shoes",
  },
  {
    id: 6,
    title: "Leather Ankle Boots",
    content:
      "Durable and elegant ankle boots perfect for fall and winter. The leather ages beautifully over time.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    category: "shoes",
  },
  {
    id: 7,
    title: "Sporty Running Shoes",
    content:
      "Designed for performance, these running shoes provide excellent cushioning and support.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    category: "shoes",
  },
  {
    id: 8,
    title: "Comfortable Sandals",
    content:
      "Perfect sandals for summer with cushioned soles and adjustable straps for a great fit.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww",
    category: "shoes",
  },

  // Smartphones (4)
  {
    id: 9,
    title: "Latest Smartphone X12",
    content:
      "Sleek design with powerful performance and excellent camera quality for stunning photos.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    category: "smartphones",
  },
  {
    id: 10,
    title: "Affordable Smartphone S9",
    content:
      "Great value for money with decent performance, suitable for everyday tasks and casual gaming.",
    rating: 4,
   imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    category: "smartphones",
  },
  {
    id: 11,
    title: "Smartphone Pro Z5",
    content:
      "High-end smartphone with exceptional display and battery life, perfect for professionals.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    category: "smartphones",
  },
  {
    id: 12,
    title: "Compact Smartphone Mini",
    content:
      "Small form factor with surprisingly good specs and easy one-handed use.",
    rating: 4,
   imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    category: "smartphones",
  },

  // Laptops (4)
  {
    id: 13,
    title: "Ultrabook Pro 15",
    content:
      "Lightweight and powerful laptop, ideal for business and creative professionals.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    category: "laptops",
  },
  {
    id: 14,
    title: "Gaming Laptop GX",
    content:
      "High performance with excellent graphics and cooling, perfect for gamers.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
    category: "laptops",
  },
  {
    id: 15,
    title: "Budget Laptop Lite",
    content:
      "Affordable laptop with reliable performance for students and casual users.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    category: "laptops",
  },
  {
    id: 16,
    title: "Business Laptop Elite",
    content:
      "Durable build and long battery life, designed for business use and productivity.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    category: "laptops",
  },

  // Furniture (4)
  {
    id: 17,
    title: "Modern Sofa Set",
    content:
      "Comfortable and stylish sofa set that enhances any living room decor.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    category: "furniture",
  },
  {
    id: 18,
    title: "Wooden Dining Table",
    content:
      "Solid wood table perfect for family dinners and gatherings.",
    rating: 4,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    category: "furniture",
  },
  {
    id: 19,
    title: "Ergonomic Office Chair",
    content:
      "Provides excellent back support for long hours of work.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
    category: "furniture",
  },
  {
    id: 20,
    title: "Minimalist Bookshelf",
    content:
      "Stylish and functional bookshelf that fits any modern home.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "furniture",
  },

  // Home Decor (4)
  {
    id: 21,
    title: "Abstract Wall Art",
    content:
      "Adds a pop of color and style to your living space.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww",
    category: "home decor",
  },
  {
    id: 22,
    title: "Elegant Floor Lamp",
    content:
      "Perfect lighting fixture to create cozy ambiance.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww",
    category: "home decor",
  },
  {
    id: 23,
    title: "Decorative Throw Pillows",
    content:
      "Comfortable and stylish pillows that complement any sofa or bed.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww",
    category: "home decor",
  },
  {
    id: 24,
    title: "Modern Vase Set",
    content:
      "Beautiful vases perfect for flowers and centerpiece decoration.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "home decor",
  },
];

// Star icon component with glow effect
const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-6 h-6 ${
      filled
        ? "fill-yellow-400 drop-shadow-lg"
        : "stroke-yellow-400"
    } transition-colors duration-300`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

export default function AllReviewsPage() {
  return (
    <div className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-14 drop-shadow-md">
          All Fashion & Tech Reviews
        </h1>

        {["clothing", "shoes", "smartphones", "laptops", "furniture", "home decor"].map(
          (category) => (
            <section key={category} className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center capitalize underline decoration-purple-600 decoration-4 underline-offset-8">
                {category} Reviews
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {reviews
                  .filter((r) => r.category === category)
                  .map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full cursor-pointer transform transition duration-500 hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(139,92,246,0.4)] border border-transparent hover:border-purple-600"
                    >
                      <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                        <img
                          src={review.imageUrl}
                          alt={review.title}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-extrabold text-purple-700 mb-3 line-clamp-2">
                          {review.title}
                        </h3>
                        <p className="text-gray-600 flex-grow mb-6 line-clamp-3">
                          {review.content}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star key={i} filled={i < review.rating} />
                            ))}
                          </div>
                          <span className="capitalize px-3 py-1 text-sm font-semibold rounded-full bg-purple-100 text-purple-700 select-none">
                            {review.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )
        )}
      </div>
    </div>
  );
}

import { Product } from "@/types/product";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSmartphone from "@/assets/product-smartphone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 199.99,
    originalPrice: 299.99,
    image: productHeadphones,
    category: "Electronics",
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Latest Smartphone Pro",
    description: "Cutting-edge smartphone with professional camera system, 5G connectivity, and all-day battery life.",
    price: 899.99,
    originalPrice: 1099.99,
    image: productSmartphone,
    category: "Electronics",
    rating: 4.6,
    reviewCount: 1523,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Ultra-Thin Laptop",
    description: "Powerful laptop with the latest processor, 16GB RAM, and stunning display. Perfect for work and creativity.",
    price: 1299.99,
    originalPrice: 1599.99,
    image: productLaptop,
    category: "Computers",
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "Gaming Wireless Mouse",
    description: "High-precision gaming mouse with customizable RGB lighting and ultra-responsive sensors.",
    price: 79.99,
    originalPrice: 99.99,
    image: productHeadphones, // Using headphones as placeholder
    category: "Gaming",
    rating: 4.7,
    reviewCount: 1247,
    inStock: true,
    featured: false,
  },
  {
    id: "5",
    name: "4K Webcam",
    description: "Professional 4K webcam with auto-focus and built-in microphone. Perfect for streaming and video calls.",
    price: 149.99,
    image: productSmartphone, // Using smartphone as placeholder
    category: "Electronics",
    rating: 4.5,
    reviewCount: 634,
    inStock: false,
    featured: false,
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with customizable backlighting and tactile switches for the best typing experience.",
    price: 159.99,
    originalPrice: 199.99,
    image: productLaptop, // Using laptop as placeholder
    category: "Computers",
    rating: 4.8,
    reviewCount: 956,
    inStock: true,
    featured: true,
  },
];
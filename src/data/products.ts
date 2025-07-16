import { Product } from '@/types/product';

export const products: Product[] = [
  // Trousers
  {
    id: '1',
    name: 'Classic Fit Chino Trousers',
    price: 45.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop',
    category: 'trousers',
    description: 'Comfortable and versatile chino trousers perfect for both casual and semi-formal occasions.',
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Navy', 'Khaki', 'Black', 'Grey'],
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    discount: 23
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 65.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop',
    category: 'trousers',
    description: 'Premium quality slim fit jeans with stretch comfort and modern styling.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    discount: 27
  },
  {
    id: '3',
    name: 'Formal Dress Pants',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop',
    category: 'trousers',
    description: 'Elegant formal dress pants for professional and special occasions.',
    sizes: ['30', '32', '34', '36', '38', '40'],
    colors: ['Black', 'Navy', 'Charcoal'],
    rating: 4.7,
    reviewCount: 156,
    inStock: true
  },
  
  // Shirts
  {
    id: '4',
    name: 'Cotton Dress Shirt',
    price: 39.99,
    originalPrice: 54.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop',
    category: 'shirts',
    description: 'Classic cotton dress shirt with button-down collar and comfortable fit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Light Blue', 'Pink'],
    rating: 4.4,
    reviewCount: 203,
    inStock: true,
    discount: 27
  },
  {
    id: '5',
    name: 'Casual Linen Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop',
    category: 'shirts',
    description: 'Lightweight linen shirt perfect for warm weather and casual occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Beige', 'Light Green'],
    rating: 4.2,
    reviewCount: 95,
    inStock: true
  },
  
  // T-Shirts
  {
    id: '6',
    name: 'Premium Cotton T-Shirt',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    category: 't-shirts',
    description: 'Soft, comfortable cotton t-shirt with perfect fit and durability.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Grey', 'Red'],
    rating: 4.6,
    reviewCount: 342,
    inStock: true,
    discount: 33
  },
  {
    id: '7',
    name: 'Graphic Print T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop',
    category: 't-shirts',
    description: 'Trendy graphic print t-shirt with unique design and comfortable fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    rating: 4.3,
    reviewCount: 167,
    inStock: true
  },
  
  // Sweaters
  {
    id: '8',
    name: 'Wool Blend Sweater',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=300&h=300&fit=crop',
    category: 'sweaters',
    description: 'Warm and stylish wool blend sweater perfect for cold weather.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Grey', 'Burgundy', 'Black'],
    rating: 4.8,
    reviewCount: 78,
    inStock: true,
    discount: 25
  },
  {
    id: '9',
    name: 'Cashmere V-Neck Sweater',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop',
    category: 'sweaters',
    description: 'Luxurious cashmere v-neck sweater with premium quality and comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Navy', 'Black', 'Grey'],
    rating: 4.9,
    reviewCount: 45,
    inStock: false
  },
  
  // Jackets
  {
    id: '10',
    name: 'Leather Jacket',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop',
    category: 'jackets',
    description: 'Classic leather jacket with timeless style and premium construction.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.7,
    reviewCount: 134,
    inStock: true,
    discount: 33
  },
  {
    id: '11',
    name: 'Denim Jacket',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop',
    category: 'jackets',
    description: 'Versatile denim jacket perfect for layering and casual style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Light Blue', 'Black'],
    rating: 4.4,
    reviewCount: 98,
    inStock: true
  },
  
  // Socks
  {
    id: '12',
    name: 'Premium Cotton Socks (3-Pack)',
    price: 15.99,
    originalPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop',
    category: 'socks',
    description: 'Comfortable cotton socks with moisture-wicking properties. Pack of 3.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Grey'],
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    discount: 36
  },
  {
    id: '13',
    name: 'Wool Hiking Socks',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300&h=300&fit=crop',
    category: 'socks',
    description: 'Durable wool hiking socks with cushioned sole and moisture management.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Grey', 'Brown', 'Green'],
    rating: 4.6,
    reviewCount: 87,
    inStock: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.rating >= 4.5).slice(0, 8);
};

export const getDiscountedProducts = () => {
  return products.filter(product => product.discount).slice(0, 6);
};
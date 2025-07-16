import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    // Default to first available size and color
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addItem(product, defaultSize, defaultColor);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-foreground">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
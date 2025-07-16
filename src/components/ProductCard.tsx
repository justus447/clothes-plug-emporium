import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              -{product.discount}%
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviewCount})
            </span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add to Cart
            </Button>
            <Button
              size="sm"
              className="flex-1"
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
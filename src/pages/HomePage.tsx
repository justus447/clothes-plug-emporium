import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { CategorySection } from '@/components/CategorySection';
import { ProductGrid } from '@/components/ProductGrid';
import { getFeaturedProducts, getDiscountedProducts } from '@/data/products';

export const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const discountedProducts = getDiscountedProducts();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CategorySection />
      
      {/* Featured Products */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <ProductGrid 
            products={featuredProducts}
            title="Featured Products"
          />
        </div>
      </section>

      {/* Discounted Products */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <ProductGrid 
            products={discountedProducts}
            title="Special Offers"
          />
        </div>
      </section>
    </div>
  );
};
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/ProductGrid';
import { getProductsByCategory } from '@/data/products';

export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];
  
  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{categoryName}</h1>
          <p className="text-muted-foreground">
            Discover our collection of {categoryName.toLowerCase()}
          </p>
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  );
};
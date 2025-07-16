import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Trousers',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop',
    link: '/category/trousers'
  },
  {
    name: 'Shirts',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop',
    link: '/category/shirts'
  },
  {
    name: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    link: '/category/t-shirts'
  },
  {
    name: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=300&h=300&fit=crop',
    link: '/category/sweaters'
  },
  {
    name: 'Jackets',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop',
    link: '/category/jackets'
  },
  {
    name: 'Socks',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop',
    link: '/category/socks'
  }
];

export const CategorySection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
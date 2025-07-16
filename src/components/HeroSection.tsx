import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    title: 'Summer Collection 2024',
    subtitle: 'Up to 50% off on selected items',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    cta: 'Shop Now',
    link: '/category/t-shirts'
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Discover the latest fashion trends',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop',
    cta: 'Explore',
    link: '/category/shirts'
  },
  {
    id: 3,
    title: 'Winter Essentials',
    subtitle: 'Stay warm with our premium collection',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop',
    cta: 'Shop Jackets',
    link: '/category/jackets'
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-muted">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  {banner.subtitle}
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to={banner.link}>
                    {banner.cta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
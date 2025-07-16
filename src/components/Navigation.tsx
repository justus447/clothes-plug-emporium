import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const categories = [
  'Trousers',
  'Shirts', 
  'Socks',
  'Sweaters',
  'Jackets',
  'T-Shirts'
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CP</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Clothes Plug</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for clothes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border border-border rounded-lg"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="flex items-center space-x-1 text-foreground hover:text-primary">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Account</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-1 text-foreground hover:text-primary relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="hidden md:flex items-center space-x-6 py-2 border-t border-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground">
                All Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem key={category} asChild>
                  <Link to={`/category/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {category}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Search for clothes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase()}`}
                    className="block py-2 text-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
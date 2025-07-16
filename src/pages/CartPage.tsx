import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';

export const CartPage = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const getItemId = (item: any) => 
    `${item.product.id}-${item.selectedSize}-${item.selectedColor}`;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Add some products to your cart to see them here.
          </p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Shopping Cart ({state.itemCount} items)</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-destructive hover:text-destructive"
                  >
                    Clear All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div
                      key={getItemId(item)}
                      className="flex items-center space-x-4 p-4 border border-border rounded-lg"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-semibold hover:text-primary"
                        >
                          {item.product.name}
                        </Link>
                        <div className="text-sm text-muted-foreground">
                          Size: {item.selectedSize} | Color: {item.selectedColor}
                        </div>
                        <div className="font-bold text-lg">
                          ${item.product.price}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(getItemId(item), item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(getItemId(item), item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(getItemId(item))}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(state.total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(state.total * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6" asChild>
                  <Link to="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
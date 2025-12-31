"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Tu Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.length === 0 ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                  <p className="text-xl text-slate-600 mb-4">Tu carrito está vacío</p>
                  <Link href="/products">
                    <Button>Comenzar a Comprar</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              cart.map((item) => (
                <Card key={item.id} className="cart-item" id={`cart-item-${item.id}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-pastel-pink to-pastel-lavender rounded-lg w-24 h-24 flex items-center justify-center flex-shrink-0">
                        <span className="text-4xl">{item.image}</span>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-2xl font-bold text-pastel-purple mt-2">${item.price}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Button 
                          id={`decrease-qty-${item.id}`}
                          variant="outline" 
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-xl font-semibold w-8 text-center quantity-value">{item.quantity}</span>
                        <Button 
                          id={`increase-qty-${item.id}`}
                          variant="outline" 
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button 
                        id={`remove-item-${item.id}`}
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'GRATIS' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping === 0 && subtotal > 0 && (
                  <p className="text-sm text-green-600 bg-green-50 p-2 rounded">
                    ✓ ¡Envío gratis aplicado!
                  </p>
                )}
                <div className="border-t-2 border-pastel-purple pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span id="cart-total">${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                {cart.length > 0 && (
                  <Link href="/checkout" className="w-full">
                    <Button id="checkout-button" className="w-full" size="lg">
                      Proceder al Pago
                    </Button>
                  </Link>
                )}
                <Link href="/products" className="w-full">
                  <Button variant="outline" className="w-full">
                    Seguir Comprando
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

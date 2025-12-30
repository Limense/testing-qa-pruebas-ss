"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { ShoppingCart, Package, Shield, Truck } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <Link href="/products" className="text-pastel-purple hover:underline mb-4 inline-block">
          ← Volver a productos
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-pastel-pink to-pastel-lavender rounded-2xl p-16 flex items-center justify-center">
            <span className="text-9xl">{product.image}</span>
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm text-slate-500 uppercase tracking-wide">{product.category}</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">{product.name}</h1>
            <p className="text-lg text-slate-700 mb-6">{product.description}</p>
            
            <div className="bg-pastel-lavender rounded-lg p-6 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">${product.price}</span>
                <span className="text-slate-600">USD</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">
                {product.stock > 10 ? '✓ En stock' : `Solo quedan ${product.stock} unidades`}
              </p>
            </div>

            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 w-5 h-5" />
                {added ? "¡Agregado!" : "Añadir al Carrito"}
              </Button>
              <Link href="/cart" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Ir al Carrito
                </Button>
              </Link>
            </div>

            <div className="space-y-4 border-t-2 border-pastel-purple pt-6">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-pastel-blue" />
                <div>
                  <p className="font-semibold">Envío Gratis</p>
                  <p className="text-sm text-slate-600">En compras mayores a $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-pastel-coral" />
                <div>
                  <p className="font-semibold">Garantía Extendida</p>
                  <p className="text-sm text-slate-600">12 meses de cobertura total</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-pastel-purple" />
                <div>
                  <p className="font-semibold">Devoluciones</p>
                  <p className="text-sm text-slate-600">30 días sin preguntas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

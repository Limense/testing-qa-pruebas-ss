"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 product-card">
      <CardHeader className="bg-gradient-to-br from-pastel-pink to-pastel-lavender">
        <div className="flex justify-center items-center h-32">
          <span className="text-6xl">{product.image}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className="mb-2">{product.name}</CardTitle>
        <CardDescription className="mb-4">{product.description}</CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-pastel-purple">${product.price}</span>
          <span className="text-sm text-slate-500">{product.stock} disponibles</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link href={`/product/${product.id}`} className="flex-1">
          <Button variant="outline" className="w-full">Ver Detalles</Button>
        </Link>
        <Button 
          id={`add-to-cart-${product.id}`}
          variant="default" 
          size="icon" 
          onClick={handleAddToCart}
          className="add-to-cart-btn"
        >
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

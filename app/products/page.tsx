"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { Input } from "@/components/input";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Todos los Productos</h1>
        
        {/* Search Bar */}
        <div className="mb-8 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input 
            type="text" 
            placeholder="Buscar productos..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            data-testid="search-input"
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-slate-600">No se encontraron productos</p>
            <p className="text-slate-500 mt-2">Intenta con otra búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}

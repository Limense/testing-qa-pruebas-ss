import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { Button } from "@/components/button";
import Link from "next/link";
import { ArrowRight, Package, Shield, Truck } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-blue rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Bienvenido a Pastel Shop
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Descubre los mejores productos de tecnología con diseño elegante y calidad garantizada
          </p>
          <Link href="/products">
            <Button size="lg" className="text-lg">
              Ver Todos los Productos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center border-2 border-pastel-mint">
            <Truck className="w-12 h-12 mx-auto mb-4 text-pastel-blue" />
            <h3 className="text-xl font-semibold mb-2">Envío Gratis</h3>
            <p className="text-slate-600">En compras mayores a $100</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-pastel-peach">
            <Shield className="w-12 h-12 mx-auto mb-4 text-pastel-coral" />
            <h3 className="text-xl font-semibold mb-2">Garantía Total</h3>
            <p className="text-slate-600">12 meses de garantía</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-pastel-sage">
            <Package className="w-12 h-12 mx-auto mb-4 text-pastel-purple" />
            <h3 className="text-xl font-semibold mb-2">Envío Seguro</h3>
            <p className="text-slate-600">Empaque premium garantizado</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/products">
            <Button variant="outline" size="lg">
              Ver Más Productos
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-pastel-purple mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-slate-600">
            © 2025 Pastel Shop - Perfecto para practicar automatización con ScreenPlay + Cucumber
          </p>
        </div>
      </footer>
    </div>
  );
}

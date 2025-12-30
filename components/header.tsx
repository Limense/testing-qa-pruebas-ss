"use client";

import Link from "next/link";
import { ShoppingCart, Home, Package, LogOut, User } from "lucide-react";
import { Button } from "./button";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export function Header() {
  const { getCartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const cartCount = getCartCount();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="bg-white border-b-2 border-pastel-purple shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🛍️</span>
            <h1 className="text-2xl font-bold text-slate-900">Pastel Shop</h1>
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
              <Home className="w-5 h-5" />
              <span>Inicio</span>
            </Link>
            <Link href="/products" className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
              <Package className="w-5 h-5" />
              <span>Productos</span>
            </Link>
            
            {isAuthenticated && user && (
              <div className="flex items-center space-x-2 text-slate-700 px-3 py-1 bg-pastel-lavender rounded-full">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">{user.name}</span>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative" data-testid="shopping-cart-link">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pastel-coral text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center" data-testid="shopping-cart-badge">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {isAuthenticated ? (
              <Button variant="ghost" size="icon" onClick={handleLogout} title="Cerrar sesión" data-testid="logout-button">
                <LogOut className="w-5 h-5" />
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm" data-testid="login-link">
                  Iniciar Sesión
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

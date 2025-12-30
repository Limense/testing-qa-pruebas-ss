"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Si no está autenticado y no está en la página de login o confirmación, redirigir
    if (!isAuthenticated && pathname !== "/login" && !pathname.startsWith("/confirmation")) {
      router.push("/login");
    }
  }, [isAuthenticated, pathname, router]);

  // Si está en login, confirmación, o está autenticado, mostrar el contenido
  if (pathname === "/login" || pathname.startsWith("/confirmation") || isAuthenticated) {
    return <>{children}</>;
  }

  // Mientras verifica, mostrar loading
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-purple mx-auto mb-4"></div>
        <p className="text-slate-600">Cargando...</p>
      </div>
    </div>
  );
}

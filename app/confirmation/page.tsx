"use client";

import { useEffect, useState, Suspense } from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

interface OrderData {
  orderNumber: number;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  total: number;
  date: string;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
  };
}

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order");
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Confirmation page loaded");
    console.log("Order number:", orderNumber);
    
    const savedOrder = localStorage.getItem("lastOrder");
    console.log("Saved order:", savedOrder);
    
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);
      console.log("Parsed order:", parsedOrder);
      setOrderData(parsedOrder);
    }
    setLoading(false);
  }, [orderNumber]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Procesando tu pedido...</p>
        </div>
      </div>
    );
  }

  if (!orderNumber || !orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-6">No se encontró información del pedido</p>
          <Link href="/products">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Ir a Productos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <CheckCircle className="w-32 h-32 text-green-500" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-green-50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" data-testid="confirmation-title">
          Thank you for your order!
        </h1>

        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Your order has been dispatched, and will arrive just as fast as the pony can get there!
        </p>

        {/* Order Number */}
        <div className="mb-8 p-6 bg-slate-50 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-slate-500 mb-1">Order Number</p>
          <p className="text-3xl font-bold text-slate-900" data-testid="order-number">#{orderNumber}</p>
        </div>

        {/* Order Summary */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Order Summary</h3>
            <div className="space-y-3 text-left">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.image}</span>
                    <span className="text-sm text-slate-700">
                      {item.name} x{item.quantity}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t-2 border-slate-200 pt-3 flex justify-between items-center">
                <span className="font-bold text-slate-900">Total</span>
                <span className="font-bold text-xl text-green-600">
                  ${orderData.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-slate-700">
            📧 A confirmation email has been sent to <strong>{orderData.customer.email}</strong>
          </p>
        </div>

        {/* Action Button */}
        <Link href="/products">
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-lg rounded-lg"
            data-testid="back-home-button"
          >
            Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Procesando tu pedido...</p>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Moderna",
    description: "Laptop de alta gama con diseño elegante y potente rendimiento",
    price: 1299.99,
    image: "💻",
    category: "Electrónica",
    stock: 15
  },
  {
    id: 2,
    name: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con cancelación de ruido activa",
    price: 249.99,
    image: "🎧",
    category: "Audio",
    stock: 30
  },
  {
    id: 3,
    name: "Smartwatch Deportivo",
    description: "Reloj inteligente con monitor de salud y GPS integrado",
    price: 399.99,
    image: "⌚",
    category: "Wearables",
    stock: 25
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    description: "Teclado mecánico con iluminación RGB personalizable",
    price: 149.99,
    image: "⌨️",
    category: "Accesorios",
    stock: 40
  },
  {
    id: 5,
    name: "Mouse Inalámbrico",
    description: "Mouse ergonómico con sensor de alta precisión",
    price: 79.99,
    image: "🖱️",
    category: "Accesorios",
    stock: 50
  },
  {
    id: 6,
    name: "Tablet Pro",
    description: "Tablet profesional con stylus incluido, ideal para diseño",
    price: 899.99,
    image: "📱",
    category: "Electrónica",
    stock: 20
  },
  {
    id: 7,
    name: "Cámara Web HD",
    description: "Cámara web 4K con micrófono integrado para videollamadas",
    price: 159.99,
    image: "📷",
    category: "Accesorios",
    stock: 35
  },
  {
    id: 8,
    name: "Altavoz Portátil",
    description: "Altavoz bluetooth resistente al agua con sonido 360°",
    price: 129.99,
    image: "🔊",
    category: "Audio",
    stock: 45
  }
];

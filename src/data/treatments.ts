export type Treatment = {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  tags: string[];
};

/** Precios, tiempos e imágenes son valores de muestra para revisar la maquetación. */
export const featuredTreatments: Treatment[] = [
  {
    id: 'masaje-descontracturante',
    category: 'Masajes',
    title: 'Masaje descontracturante',
    description:
      'Un masaje manual adaptado a las zonas donde notas más tensión. Un espacio para soltar, respirar y recuperar calma.',
    duration: '60 min',
    price: 49,
    image:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=82',
    imageAlt: 'Tratamiento de masaje en una cabina cálida y tranquila',
    imagePosition: 'center 48%',
    tags: ['Presión adaptada', 'Atención personalizada'],
  },
  {
    id: 'presoterapia',
    category: 'Cuidado corporal',
    title: 'Presoterapia',
    description:
      'Una pausa reconfortante para el cuidado corporal, con una sesión pautada según tus necesidades.',
    duration: '45 min',
    price: 39,
    image:
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=82',
    imageAlt: 'Espacio de spa preparado para una sesión de bienestar',
    imagePosition: 'center 55%',
    tags: ['Sensación de ligereza', 'Sesión de bienestar'],
  },
  {
    id: 'maderoterapia',
    category: 'Rituales corporales',
    title: 'Maderoterapia',
    description:
      'Un ritual corporal con herramientas de madera y maniobras rítmicas, realizado con cuidado y sin prisas.',
    duration: '60 min',
    price: 55,
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=82',
    imageAlt: 'Detalle de una experiencia de masaje corporal',
    imagePosition: 'center 44%',
    tags: ['Vendas', 'Tratamientos reductores'],
  },
  {
    id: 'limpieza-facial-profunda',
    category: 'Cuidado facial',
    title: 'Limpieza facial profunda',
    description:
      'Limpieza y cuidado cosmético de la piel, con técnicas superficiales y no invasivas adaptadas a tu rostro.',
    duration: '75 min',
    price: 65,
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=82',
    imageAlt: 'Tratamiento cosmético facial en cabina',
    imagePosition: 'center 42%',
    tags: ['No invasivo', 'Cuidado cosmético'],
  },
];

export const additionalTreatments = [
  'Masaje relajante',
  'Vendas corporales',
  'Tratamientos reductores',
  'Limpieza facial',
  'Hidratación y luminosidad',
];

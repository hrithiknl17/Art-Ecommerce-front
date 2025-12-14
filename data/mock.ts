
export const GENRES = [
  { id: 'clothing', name: 'Vintage Clothing', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80' },
  { id: 'painting', name: 'Fine Art', image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80' },
  { id: 'decor', name: 'Decor & Curios', image: 'https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?auto=format&fit=crop&w=800&q=80' },
];

const CATEGORIES = ['Clothing', 'Painting', 'Accessories', 'Decor'];

// SMART IMAGE CURATION:
// Each product now includes a main image and supplementary images that share the SAME
// color palette, material, or texture to serve as "details" or "angles" without breaking immersion.

export const INITIAL_PRODUCTS = [
  // --- CLOTHING ---
  { 
    id: 1, 
    name: 'Velvet Renaissance Gown', 
    price: 85000, 
    category: 'Clothing', 
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', // Main: Woman in Red
      'https://images.unsplash.com/photo-1612459792198-8422204c979d?auto=format&fit=crop&w=800&q=80', // Texture: Red Velvet Fabric
      'https://images.unsplash.com/photo-1545959953-29497e8b6183?auto=format&fit=crop&w=800&q=80', // Detail: Red Fabric Drape
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80&crop=top' // Simulated Portrait Crop
    ],
    rating: 4.9, stock: 2, sales: 4 
  },
  { 
    id: 2, 
    name: 'Embroidered Silk Cape', 
    price: 45000, 
    category: 'Clothing', 
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80', // Main: Gold/Sequin
      'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?auto=format&fit=crop&w=800&q=80', // Texture: Gold Silk
      'https://images.unsplash.com/photo-1617390978709-32205559385d?auto=format&fit=crop&w=800&q=80' // Detail: Gold Embroidery
    ],
    rating: 4.7, stock: 5, sales: 12 
  },
  { 
    id: 3, 
    name: 'Linen Poet Shirt', 
    price: 12000, 
    category: 'Clothing', 
    image: 'https://images.unsplash.com/photo-1485230946086-1d99d5297123?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1485230946086-1d99d5297123?auto=format&fit=crop&w=800&q=80', // Main
      'https://images.unsplash.com/photo-1584184804426-5e2aa395af93?auto=format&fit=crop&w=800&q=80', // Texture: White Linen
      'https://images.unsplash.com/photo-1589205566085-f5b9d36e8976?auto=format&fit=crop&w=800&q=80' // Detail: White Fabric Fold
    ],
    rating: 4.5, stock: 15, sales: 40 
  },
  { 
    id: 4, 
    name: 'Brocade Waistcoat', 
    price: 28000, 
    category: 'Clothing', 
    image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613531390457-3f339459392e?auto=format&fit=crop&w=800&q=80', // Texture: Dark Fabric
    ],
    rating: 4.8, stock: 3, sales: 8 
  },
  { 
    id: 5, 
    name: 'Victorian Lace Dress', 
    price: 92000, 
    category: 'Clothing', 
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80', // Main: White Dress
      'https://images.unsplash.com/photo-1585250325456-4c48971f1dfd?auto=format&fit=crop&w=800&q=80', // Texture: White Lace
      'https://images.unsplash.com/photo-1521319557744-8b6345d3eb9e?auto=format&fit=crop&w=800&q=80' // Detail: White Ruffles
    ],
    rating: 5.0, stock: 1, sales: 2 
  },

  // --- PAINTINGS ---
  { 
    id: 6, 
    name: 'Portrait of a Lady', 
    price: 450000, 
    category: 'Painting', 
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80&crop=top', // Simulated Detail Crop 1
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80&crop=bottom' // Simulated Detail Crop 2
    ],
    rating: 5.0, stock: 1, sales: 1 
  },
  { 
    id: 7, 
    name: 'The Stormy Coast', 
    price: 320000, 
    category: 'Painting', 
    image: 'https://images.unsplash.com/photo-1578320339908-a5b822d66579?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1578320339908-a5b822d66579?auto=format&fit=crop&w=800&q=80'],
    rating: 4.7, stock: 1, sales: 0 
  },
  { 
    id: 8, 
    name: 'Still Life with Fruit', 
    price: 180000, 
    category: 'Painting', 
    image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=80'],
    rating: 4.6, stock: 1, sales: 3 
  },
  { 
    id: 9, 
    name: 'Angels in Clouds', 
    price: 550000, 
    category: 'Painting', 
    image: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=800&q=80'],
    rating: 4.9, stock: 1, sales: 2 
  },
  { 
    id: 10, 
    name: 'The Royal Hunt', 
    price: 290000, 
    category: 'Painting', 
    image: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=800&q=80'],
    rating: 4.8, stock: 1, sales: 5 
  },

  // --- ACCESSORIES ---
  { 
    id: 11, 
    name: 'Pearl Drop Earrings', 
    price: 15000, 
    category: 'Accessories', 
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626372579294-d2427a20c910?auto=format&fit=crop&w=800&q=80', // Detail: Pearls
    ],
    rating: 4.7, stock: 8, sales: 25 
  },
  { 
    id: 12, 
    name: 'Gilded Hand Fan', 
    price: 8500, 
    category: 'Accessories', 
    image: 'https://images.unsplash.com/photo-1620802051782-42c237895f3a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620802051782-42c237895f3a?auto=format&fit=crop&w=800&q=80', // Main: Fan
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80', // Texture: Gold pattern
    ],
    rating: 4.5, stock: 12, sales: 45 
  },
  { 
    id: 13, 
    name: 'Cameo Brooch', 
    price: 12000, 
    category: 'Accessories', 
    image: 'https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?auto=format&fit=crop&w=800&q=80'],
    rating: 4.8, stock: 4, sales: 18 
  },
  { 
    id: 14, 
    name: 'Silk Gloves', 
    price: 4500, 
    category: 'Accessories', 
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80', // Main
      'https://images.unsplash.com/photo-1589451431664-9d543167a65b?auto=format&fit=crop&w=800&q=80' // Texture: White Satin
    ],
    rating: 4.4, stock: 20, sales: 80 
  },
  { 
    id: 15, 
    name: 'Vintage Pocket Watch', 
    price: 35000, 
    category: 'Accessories', 
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550534791-2677533605ab?auto=format&fit=crop&w=800&q=80', // Detail: Watch Mechanism
    ],
    rating: 4.9, stock: 3, sales: 15 
  },

  // --- DECOR ---
  { 
    id: 16, 
    name: 'Marble Bust', 
    price: 65000, 
    category: 'Decor', 
    image: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&w=800&q=80', // Main: Bust
      'https://images.unsplash.com/photo-1582236592285-d72221b0e922?auto=format&fit=crop&w=800&q=80', // Texture: White Marble
    ],
    rating: 4.8, stock: 2, sales: 7 
  },
  { 
    id: 17, 
    name: 'Brass Candelabra', 
    price: 12000, 
    category: 'Decor', 
    image: 'https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?auto=format&fit=crop&w=800&q=80', // Main
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80' // Angle: Candle Light
    ],
    rating: 4.6, stock: 6, sales: 22 
  },
  { 
    id: 18, 
    name: 'Persian Rug', 
    price: 125000, 
    category: 'Decor', 
    image: 'https://images.unsplash.com/photo-1596141246727-6609d5557084?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596141246727-6609d5557084?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80' // Detail: Rug Pattern
    ],
    rating: 4.9, stock: 1, sales: 4 
  },
  { 
    id: 19, 
    name: 'Ornate Mirror', 
    price: 45000, 
    category: 'Decor', 
    image: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80', // Main
      'https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&w=800&q=80' // Detail: Gold Frame
    ],
    rating: 4.7, stock: 3, sales: 11 
  },
  { 
    id: 20, 
    name: 'Ceramic Vase', 
    price: 8000, 
    category: 'Decor', 
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&w=800&q=80', // Main
      'https://images.unsplash.com/photo-1581345837651-34b52df39433?auto=format&fit=crop&w=800&q=80' // Detail: Clay Texture
    ],
    rating: 4.5, stock: 15, sales: 34 
  },
];

export const MOCK_CUSTOMERS = [
  { id: 101, name: 'Marie Antoinette', email: 'marie@versailles.fr', joined: '1770-05-16', orders: 150, spent: 8500000 },
  { id: 102, name: 'Coco Chanel', email: 'coco@paris.fr', joined: '1910-01-01', orders: 80, spent: 450000 },
  { id: 103, name: 'Oscar Wilde', email: 'oscar@london.uk', joined: '1890-02-20', orders: 25, spent: 120000 },
];

export const INITIAL_ORDERS = [
  { id: 'ORD-1920', customer: 'Coco Chanel', date: '2024-10-24', items: 12, total: 159000, status: 'Delivered' },
  { id: 'ORD-1921', customer: 'Oscar Wilde', date: '2024-10-25', items: 2, total: 45000, status: 'Processing' },
];

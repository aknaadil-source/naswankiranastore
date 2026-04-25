export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  unit: string
  category: string
  badge?: string
}

const products: Array<Product> = [
  // Fruits
  {
    id: 1,
    name: 'Organic Bananas',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80',
    description: 'Sweet, ripe organic bananas sourced from local farms. Rich in potassium and natural sugars for sustained energy.',
    shortDescription: 'Sweet & ripe, farm-fresh bunch',
    price: 149,
    unit: 'per bunch',
    category: 'Fruits',
    badge: 'Organic',
  },
  {
    id: 2,
    name: 'Red Apples',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80',
    description: 'Crisp, juicy red apples perfect for snacking or baking. Handpicked at peak ripeness.',
    shortDescription: 'Crisp & juicy, handpicked',
    price: 299,
    unit: 'per kg',
    category: 'Fruits',
  },
  {
    id: 3,
    name: 'Fresh Strawberries',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80',
    description: 'Plump, sun-ripened strawberries bursting with flavor. Perfect for desserts, smoothies, or eating fresh.',
    shortDescription: 'Sun-ripened, bursting with flavor',
    price: 399,
    unit: 'per 250g',
    category: 'Fruits',
    badge: 'Fresh',
  },
  {
    id: 4,
    name: 'Ripe Mangoes',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80',
    description: 'Tropical Alphonso mangoes with rich, creamy flesh and intoxicating aroma. The king of fruits.',
    shortDescription: 'Alphonso variety, tropical sweetness',
    price: 499,
    unit: 'per kg',
    category: 'Fruits',
    badge: 'Seasonal',
  },
  // Vegetables
  {
    id: 5,
    name: 'Baby Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80',
    description: 'Tender baby spinach leaves, triple-washed and ready to eat. Packed with iron, vitamins, and minerals.',
    shortDescription: 'Triple-washed, ready to eat',
    price: 199,
    unit: 'per 200g bag',
    category: 'Vegetables',
    badge: 'Organic',
  },
  {
    id: 6,
    name: 'Cherry Tomatoes',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80',
    description: 'Sweet, vibrant cherry tomatoes on the vine. Adds a burst of color and flavor to any dish.',
    shortDescription: 'On-the-vine, sweet & vibrant',
    price: 249,
    unit: 'per 400g',
    category: 'Vegetables',
  },
  {
    id: 7,
    name: 'Broccoli Crown',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80',
    description: 'Fresh broccoli crowns with tightly packed florets. A nutrient powerhouse for healthy meals.',
    shortDescription: 'Tightly packed, nutrient-rich',
    price: 179,
    unit: 'per head',
    category: 'Vegetables',
  },
  {
    id: 8,
    name: 'Rainbow Carrots',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400&q=80',
    description: 'A colorful mix of orange, purple, and yellow carrots. Crunchy, sweet, and full of beta-carotene.',
    shortDescription: 'Colorful mix, crunchy & sweet',
    price: 229,
    unit: 'per bunch',
    category: 'Vegetables',
    badge: 'Colorful',
  },
  // Dairy
  {
    id: 9,
    name: 'Farm Fresh Eggs',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&q=80',
    description: 'Free-range eggs from hens raised on local farms. Rich golden yolks with superior flavor.',
    shortDescription: 'Free-range, golden yolks',
    price: 329,
    unit: 'dozen',
    category: 'Dairy & Eggs',
  },
  {
    id: 10,
    name: 'Greek Yogurt',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
    description: 'Thick, creamy Greek yogurt with live active cultures. High in protein and probiotics for gut health.',
    shortDescription: 'Thick & creamy, live cultures',
    price: 449,
    unit: 'per 500g',
    category: 'Dairy & Eggs',
    badge: 'Probiotic',
  },
  {
    id: 11,
    name: 'Whole Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80',
    description: 'Fresh whole milk from grass-fed cows. Creamy, wholesome, and perfect for the whole family.',
    shortDescription: 'Grass-fed cows, creamy & fresh',
    price: 189,
    unit: 'per liter',
    category: 'Dairy & Eggs',
  },
  // Bakery
  {
    id: 12,
    name: 'Sourdough Loaf',
    image: 'https://images.unsplash.com/photo-1585478259715-4d3f984e4c85?w=400&q=80',
    description: 'Artisan sourdough baked fresh daily with a crackling crust and chewy interior. Made with natural fermentation.',
    shortDescription: 'Artisan baked, crackling crust',
    price: 549,
    unit: 'per loaf',
    category: 'Bakery',
    badge: 'Artisan',
  },
  {
    id: 13,
    name: 'Whole Wheat Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
    description: 'Hearty whole wheat bread packed with fiber and nutrients. Sliced and ready for sandwiches.',
    shortDescription: 'Hearty, fiber-rich, pre-sliced',
    price: 299,
    unit: 'per loaf',
    category: 'Bakery',
  },
  // Pantry
  {
    id: 14,
    name: 'Extra Virgin Olive Oil',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80',
    description: 'Cold-pressed extra virgin olive oil from Mediterranean groves. Fruity, peppery finish.',
    shortDescription: 'Cold-pressed, Mediterranean',
    price: 899,
    unit: 'per 500ml',
    category: 'Pantry',
    badge: 'Premium',
  },
  {
    id: 15,
    name: 'Brown Rice',
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80',
    description: 'Nutty, wholesome brown rice with the bran layer intact. A fiber-rich whole grain staple.',
    shortDescription: 'Whole grain, nutty & wholesome',
    price: 349,
    unit: 'per kg',
    category: 'Pantry',
  },
]

export default products

export interface Product {
  slug: string;
  title: string;
  description: string;
  asin: string;
  imageUrl: string;
  price: string;
  rating: number;
  features: string[];
  category: string;
}

export const AMAZON_TAG = 'theweldersguide-20';

export function getAffiliateUrl(asin: string, title?: string): string {
  if (title) {
    return `https://www.amazon.com/s?k=${encodeURIComponent(title)}&tag=${AMAZON_TAG}`;
  }
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;
}

export function getGoUrl(slug: string): string {
  return `/go/${slug}`;
}

export const products: Product[] = [
  {
    slug: 'hobart-handler-210-mig',
    title: 'Hobart Handler 210 MIG Welder',
    description: 'A versatile MIG welder capable of welding 24-gauge to 3/8-inch steel. Perfect for farm, ranch, and hobbyist projects with 210A output and dual-voltage capability.',
    asin: 'B0BP1TYTQG',
    imageUrl: 'https://m.media-amazon.com/images/I/51OZ759evhL._AC_SL250_.jpg',
    price: '$$$',
    rating: 4.6,
    features: ['210A output', 'Dual-voltage 115/230V', 'Welds 24-ga to 3/8"', '5-position voltage control'],
    category: 'MIG Welders',
  },
  {
    slug: 'lincoln-electric-square-wave-tig',
    title: 'Lincoln Electric Square Wave TIG 200',
    description: 'A compact TIG/stick welder with AC/DC output for welding aluminum, steel, and stainless. Ideal for both beginners and experienced welders.',
    asin: 'B00ZM0IT9W',
    imageUrl: 'https://m.media-amazon.com/images/I/71kam2dCjEL._AC_SL250_.jpg',
    price: '$$$',
    rating: 4.5,
    features: ['AC/DC TIG and Stick', '200A output', 'Portable design', 'Advanced square wave'],
    category: 'TIG Welders',
  },
  {
    slug: 'esab-rogue-180-stick',
    title: 'ESAB Rogue 180 Stick Welder',
    description: 'A rugged stick welder with 180A output and hot start technology. Built for outdoor work and tough environments with excellent arc stability.',
    asin: 'B0BNLQD8R8',
    imageUrl: 'https://m.media-amazon.com/images/I/61ct+FFwGtL._AC_SL250_.jpg',
    price: '$$',
    rating: 4.4,
    features: ['180A output', 'Hot start technology', 'Dual voltage', 'Portable at 21 lbs'],
    category: 'Stick Welders',
  },
  {
    slug: 'lincoln-electric-kh557-auto-dark-helmet',
    title: 'Lincoln Electric Viking 3350 Auto-Darkening Helmet',
    description: 'A premium auto-darkening welding helmet with 1/1/1/1 optical clarity, 4C lens technology, and a wide viewing area. Comfortable for all-day use.',
    asin: 'B00VXKGHF6',
    imageUrl: 'https://m.media-amazon.com/images/I/51s-aEap3GL._AC_SL250_.jpg',
    price: '$$',
    rating: 4.7,
    features: ['4C lens technology', '1/1/1/1 optical clarity', 'Wide 12.5 sq in view', 'Grind mode'],
    category: 'Safety Gear',
  },
  {
    slug: 'milwaukee-leather-gloves',
    title: 'Caiman 2410-6 Premium Welding Gloves',
    description: 'Top-grain goatskin welding gloves with Kevlar stitching for heat resistance. Excellent dexterity and protection for TIG and MIG welding.',
    asin: 'B00CZAYSSM',
    imageUrl: 'https://m.media-amazon.com/images/I/61nvBljBB8L._AC_SL250_.jpg',
    price: '$',
    rating: 4.5,
    features: ['Top-grain goatskin', 'Kevlar stitching', 'Heat resistant', 'Excellent dexterity'],
    category: 'Safety Gear',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

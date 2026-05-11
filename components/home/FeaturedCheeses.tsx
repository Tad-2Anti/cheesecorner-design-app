import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export default function FeaturedCheeses() {
  const featuredIds = [11, 2, 18, 19, 24, 21, 17, 20]; // matching list from spec
  const featuredProducts = featuredIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as typeof products;

  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <SectionHeading 
          label="Our Collection"
          heading="Curated for the Curious Palate"
          subtext="From bold blues to delicate fresh curds — every cheese in our store is hand-selected for quality."
          align="left"
        />
        <Link href="/shop" className="group font-[family-name:var(--font-dm)] font-medium text-[var(--color-forest)] border-b-2 border-transparent hover:border-[var(--color-forest)] pb-1 transition-all flex items-center gap-2 whitespace-nowrap mb-6 shrink-0">
          View Full Catalog <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

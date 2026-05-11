import { Metadata } from 'next';
import FilterBar from '@/components/shop/FilterBar';
import ProductGrid from '@/components/shop/ProductGrid';

export const metadata: Metadata = {
  title: 'All Cheeses — Shop',
  description: 'Browse 40+ artisan cheese varieties at Cheese Corner, Madurai. Mozzarella, Gouda, Cheddar, Feta, Parmesan & more. Order via WhatsApp.',
};

export default function ShopPage() {
  return (
    <>
      <div className="bg-[var(--color-forest-dark)] w-full py-16 md:py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-dm)] text-xs font-medium tracking-[3px] uppercase text-[var(--color-gold)] mb-4 animate-fade-in [animation-fill-mode:forwards]">
            Our Collection
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-[44px] font-bold text-white mb-6 animate-fade-in-up [animation-fill-mode:forwards]">
            Every Cheese. Every Craving.
          </h1>
          <p className="font-[family-name:var(--font-dm)] text-[var(--color-cream)]/80 text-lg leading-relaxed max-w-xl mx-auto animate-fade-in-up delay-200 opacity-0 [animation-fill-mode:forwards]">
            Explore our full range of 40+ artisan and specialty cheeses. New varieties added regularly.
          </p>
        </div>
      </div>
      
      <FilterBar />
      <ProductGrid />
    </>
  );
}

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { categories } from '@/data/products';
import { Suspense } from 'react';

function FilterBarContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const handleCategoryClick = (val: string) => {
    if (val === 'all') {
      router.push('/shop');
    } else {
      router.push(`/shop?category=${val}`);
    }
  };

  return (
    <div className="sticky top-[80px] z-30 bg-[var(--color-cream)] border-b border-[var(--color-border)] py-4 overflow-x-auto whitespace-nowrap scrollbar-hide px-6 pb-5 [-webkit-overflow-scrolling:touch]">
      <div className="max-w-[1400px] mx-auto flex items-center gap-3">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`font-[family-name:var(--font-dm)] text-sm px-6 py-2 rounded-full border transition-all ${
                isActive 
                  ? 'bg-[var(--color-forest-dark)] border-[var(--color-forest-dark)] text-[var(--color-cream)]' 
                  : 'bg-transparent border-[var(--color-forest-dark)] text-[var(--color-forest-dark)] hover:bg-[var(--color-forest-dark)]/5'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function FilterBar() {
  return (
    <Suspense fallback={<div className="h-[68px] bg-[var(--color-cream)] border-b border-[var(--color-border)]" />}>
      <FilterBarContent />
    </Suspense>
  );
}

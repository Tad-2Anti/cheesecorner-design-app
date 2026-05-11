'use client';

import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import { Suspense } from 'react';

function GridContent() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const filteredProducts = currentCategory === 'all' 
    ? products 
    : products.filter(p => p.category.includes(currentCategory));

  return (
    <div className="max-w-[1400px] mx-auto px-3 md:px-6 py-8 md:py-16">
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 font-[family-name:var(--font-dm)]">
          <p className="text-lg text-[var(--color-muted)]">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 gap-y-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <GridContent />
    </Suspense>
  );
}

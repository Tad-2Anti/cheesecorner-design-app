import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { getWhatsAppLink } from '@/lib/utils';
import ProductCard from '@/components/shop/ProductCard';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const product = products.find((prod) => prod.slug === p.slug);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [
        {
          url: `/images/products/${product.slug}.jpg`,
          width: 800,
          height: 800,
          alt: product.name,
        }
      ]
    }
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const product = products.find((prod) => prod.slug === p.slug);

  if (!product) {
    notFound();
  }

  // Get related products from the same category
  const relatedProducts = products
    .filter(prod => prod.id !== product.id && prod.category.some(c => product.category.includes(c)))
    .slice(0, 4);

  return (
    <div className="bg-[var(--color-cream)] w-full pb-24">
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT — Image Column */}
          <div className="w-full lg:w-[55%]">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-white">
              <Image 
                src="/placeholder.svg"
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT — Info Column */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <nav className="font-[family-name:var(--font-dm)] text-xs tracking-wider text-[var(--color-muted)] mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-[var(--color-ink)] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-[var(--color-ink)] transition-colors">Shop</Link>
              <span>/</span>
              <Link href={`/shop?category=${product.category[0]}`} className="hover:text-[var(--color-ink)] transition-colors capitalize">
                {product.category[0].replace('-', ' ')}
              </Link>
              <span>/</span>
              <span className="text-[var(--color-ink)] font-medium truncate">{product.name}</span>
            </nav>

            <div className="mb-4">
              <span className="inline-block bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-dm)] text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full font-bold">
                {product.category[0].replace('-', ' ')}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-[42px] font-bold text-[var(--color-ink)] leading-tight mb-6">
              {product.name}
            </h1>

            <p className="font-[family-name:var(--font-cormorant)] italic text-[20px] text-[var(--color-muted)] leading-relaxed mb-8">
              &quot;{product.shortDescription}&quot;
            </p>
            
            <p className="font-[family-name:var(--font-dm)] text-[15px] text-[var(--color-ink)] leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            <div className="w-full h-px bg-[var(--color-border)] mb-8" />

            {/* Custom progress bars represent visual flavour specs theoretically */}
            <div className="space-y-4 mb-10">
              <div className="grid grid-cols-[100px_1fr_60px] gap-4 items-center">
                <span className="font-[family-name:var(--font-dm)] text-sm font-semibold text-[var(--color-muted)]">Intensity</span>
                <div className="h-2 w-full bg-[var(--color-border)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-gold)] w-[60%]" />
                </div>
                <span className="font-[family-name:var(--font-dm)] text-xs text-right text-[var(--color-muted)]">Medium</span>
              </div>
              <div className="grid grid-cols-[100px_1fr_60px] gap-4 items-center">
                <span className="font-[family-name:var(--font-dm)] text-sm font-semibold text-[var(--color-muted)]">Saltiness</span>
                <div className="h-2 w-full bg-[var(--color-border)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-forest)] w-[40%]" />
                </div>
                <span className="font-[family-name:var(--font-dm)] text-xs text-right text-[var(--color-muted)]">Mild</span>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-dm)] text-sm font-bold uppercase tracking-wider text-[var(--color-ink)] mb-4">
                Available As:
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Slice', 'Block', 'Grated'].map(opt => (
                  <div key={opt} className="px-4 py-2 border border-[var(--color-border)] rounded-full text-sm font-[family-name:var(--font-dm)] text-[var(--color-ink)] hover:border-[var(--color-gold)] cursor-default transition-colors">
                    {opt}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer" className="w-full bg-[var(--color-gold)] text-[var(--color-ink)] flex justify-center items-center gap-2 font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:brightness-110 transition-all text-center">
                <span className="text-xl">🟢</span> Order via WhatsApp
              </a>
              <a href="tel:+919489531976" className="w-full bg-transparent border-2 border-[var(--color-forest)] text-[var(--color-forest)] flex justify-center items-center gap-2 font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[var(--color-forest)] hover:text-white transition-all text-center">
                📞 Call to Enquire
              </a>
            </div>

            <div className="bg-[var(--color-parchment)] p-6 rounded-xl font-[family-name:var(--font-dm)] text-sm text-[var(--color-ink)] space-y-3 border border-[var(--color-border)]">
              <div className="flex gap-3"><span className="textlg">📍</span> <p>4/4, Vallabhai Road, Chokkikulam, Madurai – 625002</p></div>
              <div className="flex gap-3"><span className="textlg">🕐</span> <p>Mon–Sat: 10 AM – 8 PM, Sun: 11 AM – 6 PM</p></div>
              <div className="flex gap-3"><span className="textlg">📦</span> <p className="font-semibold">In-store pickup available</p></div>
            </div>

          </div>
        </div>
      </div>

      {/* PAIRING AND DISHES */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[var(--color-gold)]">●</span> Dishes You Can Make
            </h3>
            <ul className="space-y-3">
              {product.dishes.map((dish, i) => (
                <li key={i} className="font-[family-name:var(--font-dm)] text-[15px] text-[var(--color-muted)] flex items-start gap-2">
                  <span className="text-[var(--color-forest)] opacity-50 mt-1">•</span> {dish}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[var(--color-gold)]">●</span> Cheese Pairing Guide
            </h3>
            <p className="font-[family-name:var(--font-dm)] text-[15px] text-[var(--color-muted)] mb-5">Pairs well with:</p>
            <div className="flex flex-wrap gap-2">
              {product.pairings.map((pairing, i) => (
                <span key={i} className="bg-white border border-[var(--color-border)] px-4 py-2 rounded-full font-[family-name:var(--font-dm)] text-sm shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></span>
                  {pairing}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-6 py-20 border-t border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

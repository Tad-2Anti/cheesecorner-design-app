import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { getWhatsAppLink } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  // Using external placeholder for now if local doesn't exist, Next.js Image component handles it.
  
  return (
    <div className="group rounded-2xl bg-white transition-all duration-300 hover:shadow-[0_8px_40px_rgba(28,74,59,0.18)] hover:-translate-y-1.5 overflow-hidden flex flex-col h-full">
      <Link href={`/shop/${product.slug}`} className="block overflow-hidden relative aspect-[3/4] w-full">
        <Image 
           src="/placeholder.svg" 
           alt={product.name} 
           fill 
           className="object-cover transition-transform duration-500 group-hover:scale-105"
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/shop/${product.slug}`} className="flex-1 block">
          <div className="text-[11px] font-[family-name:var(--font-dm)] uppercase tracking-[2px] text-[var(--color-gold)] font-medium mb-2">
            {product.category[0].replace('-', ' ')}
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-ink)] mb-2">
            {product.name}
          </h3>
          <p className="font-[family-name:var(--font-dm)] text-sm text-[var(--color-muted)] leading-relaxed mb-6 line-clamp-2">
            {product.shortDescription}
          </p>
        </Link>
        
        <div className="mt-auto overflow-hidden">
          <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-success)] font-[family-name:var(--font-dm)] text-sm font-medium hover:text-[var(--color-forest)] transition-colors group/btn">
            {/* Minimal ghost button */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148
                -.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15
                -1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018
                -.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099
                -.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487
                -.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297
                -1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096
                3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118
                .571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074
                -.124-.272-.198-.57-.347z"/>
            </svg>
            <span className="translate-y-0 opacity-100 transition-all">WhatsApp Order</span>
            <ArrowRight size={16} className="ml-auto opacity-0 -translate-x-2 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover:-translate-y-0" />
          </a>
        </div>
      </div>
    </div>
  );
}

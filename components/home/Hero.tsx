import Link from 'next/link';
import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550508546-b31ac72afef2?w=1920&q=85&auto=format&fit=crop"
          alt="Luxury Cheese Board"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#102B23]/60 to-[#102B23]/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center mt-20">
        <p className="font-[family-name:var(--font-dm)] text-xs font-bold tracking-[3px] uppercase text-[var(--color-gold)] mb-6 animate-fade-in delay-200 opacity-0 [animation-fill-mode:forwards]">
          MADURAI&apos;S GOURMET CHEESE DESTINATION
        </p>
        
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-[80px] leading-[1.1] font-bold text-white mb-6 animate-fade-in-up delay-300 opacity-0 [animation-fill-mode:forwards]">
          The Art of <br />
          Exceptional Cheese.
        </h1>
        
        <p className="font-[family-name:var(--font-cormorant)] italic text-2xl text-[var(--color-cream)]/70 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-500 opacity-0 [animation-fill-mode:forwards]">
          Over 40 rare and artisan varieties — from silky Mascarpone to smoky Edam — delivered to your door or savoured in-store.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-700 opacity-0 [animation-fill-mode:forwards]">
          <Link href="/shop" className="bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:brightness-110 hover:scale-105 transition-all w-full sm:w-auto text-center">
            Explore Our Cheeses
          </Link>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white hover:text-[#102B23] transition-all w-full sm:w-auto text-center">
            WhatsApp to Order
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce delay-1000">
        <ChevronDown size={32} className="text-[var(--color-cream)]/70" />
      </div>
    </section>
  );
}

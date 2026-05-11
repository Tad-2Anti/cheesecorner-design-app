import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/utils';

export default function CTABanner() {
  return (
    <section className="bg-[var(--color-forest)] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="py-20 lg:py-32 px-6 lg:px-20 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
          <p className="font-[family-name:var(--font-dm)] text-xs font-medium tracking-[3px] uppercase text-[var(--color-gold)] mb-4">
            Limited Time Offer
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold leading-tight mb-6">
            Buy for ₹1,500 & Get a <br />
            Cheese Slice (100g) Free!
          </h2>
          <p className="font-[family-name:var(--font-dm)] text-[var(--color-cream)]/90 text-lg leading-relaxed mb-10">
            Visit our store at Chokkikulam or WhatsApp us to know about current offers, seasonal bundles, and gift packs.
          </p>

          <div>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--color-gold)] text-[var(--color-ink)] font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:brightness-110 transition-all mb-8">
              WhatsApp Us for Offers
            </a>
          </div>

          <div className="text-[10px] text-[var(--color-cream)]/60 font-[family-name:var(--font-dm)] uppercase tracking-wider space-y-1">
            <p>* Offers subject to availability. In-store purchases only.</p>
            <p>* Conditions apply.</p>
          </div>
        </div>
        
        <div className="relative min-h-[400px] lg:min-h-full">
          <Image 
            src="/placeholder.svg" 
            alt="Cheese Gift Packs and Chocolates" 
            fill 
            className="object-cover object-center" 
          />
        </div>
      </div>
    </section>
  );
}

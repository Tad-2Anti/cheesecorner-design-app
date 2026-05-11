import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore the culinary offerings at Cheese Corner Madurai.',
};

export default function MenuPage() {
  return (
    <div className="w-full bg-[var(--color-cream)] pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
        
        {/* Intro / Main Column */}
        <div className="flex flex-col justify-center">
          <p className="font-[family-name:var(--font-dm)] text-xs font-bold tracking-[3px] uppercase text-[var(--color-gold)] mb-6">
            Café & Tasting
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-[80px] font-bold text-[var(--color-ink)] leading-[1.1] mb-8 lg:mb-12">
            The<br />Cheese<br />Menu.
          </h1>
          <p className="font-[family-name:var(--font-dm)] text-lg text-[var(--color-muted)] leading-relaxed mb-8">
            Experience our artisanal cheeses paired perfectly with fresh bakes, charcuterie, and preserves. Designed to be shared.
          </p>
          <Link href="/reservations" className="inline-block bg-[var(--color-forest)] text-white font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-[var(--color-ink)] transition-all w-fit text-center">
            Book a Table
          </Link>
        </div>

        {/* Menu Items Column */}
        <div className="flex flex-col gap-12 justify-center">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-ink)] mb-6 border-b border-[var(--color-border)] pb-4">
              Cheese Boards
            </h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg font-[family-name:var(--font-dm)] text-[var(--color-ink)]">The Classic Platter</h4>
                  <span className="font-bold text-[var(--color-forest)]">₹850</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] font-[family-name:var(--font-dm)]">Gouda, Cheddar, Brie, crackers, honey, fresh fruits.</p>
              </li>
              <li>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg font-[family-name:var(--font-dm)] text-[var(--color-ink)]">The Connoisseur</h4>
                  <span className="font-bold text-[var(--color-forest)]">₹1,250</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] font-[family-name:var(--font-dm)]">Blue cheese, aged parmesan, smoked cheddar, artisanal jam, walnuts, baguette.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-ink)] mb-6 border-b border-[var(--color-border)] pb-4">
              Warm Bites
            </h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg font-[family-name:var(--font-dm)] text-[var(--color-ink)]">Truffle & Cheese Toastie</h4>
                  <span className="font-bold text-[var(--color-forest)]">₹450</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] font-[family-name:var(--font-dm)]">Sourdough, gruyere, mozzarella, truffle oil.</p>
              </li>
              <li>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg font-[family-name:var(--font-dm)] text-[var(--color-ink)]">Swiss Fondue (For Two)</h4>
                  <span className="font-bold text-[var(--color-forest)]">₹1,400</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] font-[family-name:var(--font-dm)]">Melted Swiss blend, served with roasted potatoes, pickles, and croutons.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Column Photo */}
        <div className="hidden lg:block relative min-h-[700px] rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/placeholder.svg"
            alt="Melted cheese pull"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:hidden relative min-h-[400px] w-full rounded-xl overflow-hidden shadow-lg mt-8">
          {/* Fallback image for mobile when stacked */}
          <Image 
            src="/placeholder.svg"
            alt="Melted cheese pull"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

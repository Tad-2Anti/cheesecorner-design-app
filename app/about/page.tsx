import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn the story behind Cheese Corner — Madurai\'s most loved artisan cheese destination at Chokkikulam since our founding.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[var(--color-cream)] pb-24">
      {/* 8.1 About Hero */}
      <section className="flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0">
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-screen">
          <Image 
            src="/placeholder.svg"
            alt="Cheese Corner Store"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 bg-[var(--color-parchment)] flex flex-col justify-center px-8 py-16 lg:px-20 lg:py-32">
          <p className="font-[family-name:var(--font-dm)] text-xs font-bold tracking-[3px] uppercase text-[var(--color-gold)] mb-6">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[64px] font-bold text-[var(--color-ink)] leading-[1.1] mb-8">
            Born From a Love of<br />Exceptional Cheese.
          </h1>
          <div className="font-[family-name:var(--font-dm)] text-lg text-[var(--color-muted)] leading-relaxed space-y-6">
            <p>
              Cheese Corner began with a simple obsession — bringing the world&apos;s finest cheeses to the tables of Madurai. Tucked in the heart of Chokkikulam, our store has grown from a passion project into South India&apos;s most curated specialty cheese destination.
            </p>
            <p>
              We believe cheese is not just an ingredient — it is a culture, a craft, and an experience. Every variety we stock has been carefully selected for quality, freshness, and character.
            </p>
          </div>
        </div>
      </section>

      {/* 8.2 Our Space */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6">Come Visit Us</h2>
        <p className="font-[family-name:var(--font-dm)] text-[16px] text-[var(--color-muted)] leading-relaxed max-w-3xl mx-auto mb-16">
          We&apos;re proud of our beautiful store — an airy, green space with a relaxed ambiance perfect for tastings, celebrations, and weekend explorations. Our outdoor area is shaded, well-maintained, and open to all cheese lovers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image src="/placeholder.svg" alt="Store interior" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm md:-translate-y-6">
            <Image src="/placeholder.svg" alt="Outdoor area" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image src="/placeholder.svg" alt="Store evening" fill className="object-cover" />
          </div>
        </div>
        
        <p className="font-[family-name:var(--font-dm)] text-sm tracking-widest uppercase text-[var(--color-gold)] font-bold">
          4/4, Vallabhai Road, Chokkikulam, Madurai
        </p>
      </section>

      {/* 8.3 What We Carry */}
      <section className="bg-[var(--color-forest)] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-8">
            Over 40 Varieties. One Destination.
          </h2>
          <p className="font-[family-name:var(--font-dm)] text-lg text-[var(--color-cream)]/80 leading-relaxed mb-12">
            Our shelves are stocked with everything from everyday favourites to rare international varieties — alongside locally-sourced Indian dairy staples. We also carry curated partner brands like Kodai Cheese and George&apos;s Gourmet Kitchen condiments to complete your cheese board.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left border-t border-[var(--color-white)]/20 pt-12">
            <div className="bg-[var(--color-forest-dark)] p-8 rounded-2xl">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4 text-[var(--color-gold)]">Kodai Cheese</h3>
              <p className="font-[family-name:var(--font-dm)] text-sm text-[var(--color-cream)]/70">Mozzarella, Gouda, Edam, Extra Sharp Cheddar</p>
            </div>
            <div className="bg-[var(--color-forest-dark)] p-8 rounded-2xl">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4 text-[var(--color-gold)]">George&apos;s Gourmet Kitchen</h3>
              <p className="font-[family-name:var(--font-dm)] text-sm text-[var(--color-cream)]/70">Plum Jam, Spicy Hot Chili Pepper Jam, Sweet and Sour Picnic Relish</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 Values Strip */}
      <section className="bg-[var(--color-parchment)] py-20 px-6 mt-12 border-y border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-3">
            <h4 className="font-[family-name:var(--font-dm)] text-sm tracking-widest uppercase font-bold text-[var(--color-ink)] flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-2xl mb-2 md:mb-0">🧀</span> Quality First
            </h4>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-muted)] italic">
              Every cheese, every time — sourced for freshness and character.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-[family-name:var(--font-dm)] text-sm tracking-widest uppercase font-bold text-[var(--color-ink)] flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-2xl mb-2 md:mb-0">🌿</span> Community Rooted
            </h4>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-muted)] italic">
              A Madurai-born store, proud to serve our city&apos;s growing food culture.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-[family-name:var(--font-dm)] text-sm tracking-widest uppercase font-bold text-[var(--color-ink)] flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-2xl mb-2 md:mb-0">🎉</span> Experiences Over Transactions
            </h4>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-muted)] italic">
              Tastings, events, and knowledge sharing — we&apos;re here to make you love cheese.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

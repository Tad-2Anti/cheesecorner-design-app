import { Metadata } from 'next';
import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/utils';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Cheese Tasting Events',
  description: 'Join Cheese Corner\'s exclusive cheese tasting events in Madurai. Discover rare varieties, learn pairings, and celebrate with us.',
};

export default function EventsPage() {
  return (
    <div className="pb-24">
      {/* 9.1 Events Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/placeholder.svg" 
            alt="Cheese Tasting Event" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#102B23]/70" />
        </div>
        <div className="relative z-10 max-w-3xl px-6 text-white pt-20">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold mb-6">
            Taste. Discover. Celebrate.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] italic text-2xl text-[var(--color-cream)]/90">
            We host regular cheese tasting events — intimate, educational, and delicious. Sign up to be notified for our next event.
          </p>
        </div>
      </section>

      {/* 9.2 Featured Event Card */}
      <section className="max-w-4xl mx-auto px-6 py-20 -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(28,74,59,0.12)] p-8 md:p-12 border border-[var(--color-border)]">
          <div className="text-center mb-10">
            <span className="inline-block bg-[var(--color-gold)] text-[var(--color-ink)] text-xs font-bold font-[family-name:var(--font-dm)] uppercase tracking-[2px] px-4 py-2 rounded-full mb-6">
              Next Event
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
              Cheese Tasting Event — Coming Soon
            </h2>
            <p className="font-[family-name:var(--font-dm)] text-[16px] text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
              Join us at Cheese Corner for an exclusive tasting experience. Sample over 10 varieties, learn the story behind each cheese, and discover the art of pairing.
            </p>
          </div>

          <div className="bg-[var(--color-parchment)] rounded-xl p-8 mb-10 font-[family-name:var(--font-dm)]">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <strong className="block text-[var(--color-ink)]">Location</strong>
                  <span className="text-[var(--color-muted)]">Cheese Corner, Chokkikulam, Madurai</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-xl">🕐</span>
                <div>
                  <strong className="block text-[var(--color-ink)]">Date & Time</strong>
                  <span className="text-[var(--color-muted)]">To be announced — follow us on Instagram for updates</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-xl">🎟</span>
                <div>
                  <strong className="block text-[var(--color-ink)]">Admission</strong>
                  <span className="text-[var(--color-muted)]">Seats are limited (Booking required)</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a href="https://wa.me/919489531976?text=Hi!%20I%20would%20like%20to%20register%20my%20interest%20for%20the%20next%20Cheese%20Tasting%20Event." 
               target="_blank" rel="noopener noreferrer" 
               className="inline-block bg-[var(--color-forest)] text-white font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-10 py-4 rounded-full hover:bg-[var(--color-forest-light)] transition-colors">
              WhatsApp to Register Interest
            </a>
          </div>
        </div>
      </section>

      {/* 9.3 Past Events Gallery */}
      <section className="bg-[var(--color-forest)] py-24 px-6 text-white text-center">
        <SectionHeading 
          heading="Memories from Past Events"
          subtext="A look back at our community celebrations and tastings."
          theme="dark"
        />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {[1,2,3].map(i => (
            <div key={i} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/20">
                <Image src="/placeholder.svg" alt={`Past Event ${i}`} fill className="object-cover" />
              </div>
              <p className="font-[family-name:var(--font-dm)] text-sm text-[var(--color-cream)]/70 italic">
                Cheese Tasting at Cheese Corner, 2024
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9.4 Seasonal & Festive Posts */}
      <section className="bg-[var(--color-cream)] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-5xl mb-6 block">🎉</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6">Celebrate With Cheese</h2>
          <p className="font-[family-name:var(--font-dm)] text-lg text-[var(--color-muted)] leading-relaxed mb-10">
            We celebrate every festival with our cheese community. From Holi to Eid, Diwali to Women&apos;s Day — there&apos;s always a reason to share great cheese.
          </p>
          <a href="https://instagram.com/cheesecorner.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-forest)] border-b-2 border-transparent hover:border-[var(--color-forest)] pb-1 transition-all font-bold tracking-wide uppercase text-sm">
            See Our Festive Posts on Instagram <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

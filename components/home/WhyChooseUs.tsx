import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-[var(--color-gold)] mb-6 mx-auto">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 10 10" />
          <path d="M12 2v20" />
          <path d="M22 12A10 10 0 0 0 12 2" />
        </svg>
      ),
      title: '40+ Artisan Varieties',
      body: 'From everyday favourites like Mozzarella and Cheddar to rare finds like Cambrie and Triple Layer — the widest selection in South India.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-[var(--color-gold)] mb-6 mx-auto">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      ),
      title: 'Fresh. Always.',
      body: 'We source directly from trusted dairies and artisan creameries. Every batch is fresh, never mass-produced.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-[var(--color-gold)] mb-6 mx-auto">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: 'Tastings & Events',
      body: 'Join our in-store cheese tasting events, explore pairings, and discover your next favourite cheese in our lush outdoor space.',
    }
  ];

  return (
    <section className="bg-[var(--color-forest)] py-24 px-6 text-white text-center">
      <SectionHeading 
        label="Why Cheese Corner"
        heading="More Than a Store. A Cheese Experience."
        theme="dark"
      />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
        {pillars.map((pillar, i) => (
          <div key={i} className={`flex flex-col items-center px-4 ${i !== pillars.length - 1 ? 'md:border-r border-[var(--color-gold)]/20' : ''}`}>
            {pillar.icon}
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">{pillar.title}</h3>
            <p className="font-[family-name:var(--font-dm)] text-[var(--color-cream)]/80 leading-relaxed text-sm max-w-sm">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

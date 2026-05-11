import Image from 'next/image';

export default function CheeseBenefits() {
  const benefits = [
    { title: 'High in Protein', text: 'Supports muscle repair and keeps you satisfied longer.' },
    { title: 'Rich in Calcium', text: 'Strengthens bones and teeth; especially important for growing children.' },
    { title: 'Healthy Fats', text: 'Provides sustained energy; essential for brain and organ function.' },
    { title: 'Vitamins & Minerals', text: 'An excellent source of Vitamins A, B12, phosphorus, and zinc.' },
    { title: 'Gut Health', text: 'Fermented varieties like Gouda and Brie contain natural probiotics.' },
    { title: 'Weight Management', text: 'Protein and fat combination helps control hunger and cravings.' },
    { title: 'Heart-Friendly', text: 'Contains beneficial fatty acids when consumed in moderation.' },
  ];

  return (
    <section className="bg-[var(--color-parchment)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="py-20 lg:py-32 px-6 lg:px-20 flex flex-col justify-center">
          <p className="font-[family-name:var(--font-dm)] text-xs font-medium tracking-[3px] uppercase text-[var(--color-gold)] mb-4">
            Did You Know
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--color-ink)] leading-tight mb-12">
            Why Cheese Belongs <br className="hidden md:block"/>on Every Table
          </h2>

          <ul className="space-y-6 mb-12">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[var(--color-gold)] text-xl leading-none mt-1">•</span>
                <p className="font-[family-name:var(--font-dm)] text-[15px] leading-relaxed text-[var(--color-muted)]">
                  <strong className="text-[var(--color-ink)] font-semibold">{benefit.title} —</strong> {benefit.text}
                </p>
              </li>
            ))}
          </ul>

          <p className="font-[family-name:var(--font-cormorant)] italic text-xl text-[var(--color-muted)]">
            &quot;Cheese can be eaten as a snack too — not just in cooking.&quot;
          </p>
        </div>
        
        <div className="relative min-h-[500px] lg:min-h-full">
          <Image 
            src="/placeholder.svg" 
            alt="Parmesan Cheese Texture" 
            fill 
            className="object-cover object-center" 
          />
        </div>
      </div>
    </section>
  );
}

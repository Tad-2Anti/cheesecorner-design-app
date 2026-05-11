export default function Testimonial() {
  return (
    <section className="bg-[var(--color-parchment)] py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-[family-name:var(--font-playfair)] text-[120px] leading-none text-[var(--color-gold)] opacity-40 mb-6">&quot;</span>
        <blockquote className="font-[family-name:var(--font-cormorant)] italic text-2xl md:text-3xl text-[var(--color-ink)] leading-relaxed mb-10">
          Cheese Corner offers a wonderful experience — perfectly maintained, spacious, and with such a great ambiance. The management is professional and always ensures a smooth experience. My go-to for anything cheese.
        </blockquote>
        <div className="flex text-[var(--color-gold)] mb-3">
          {[1,2,3,4,5].map(i => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          ))}
        </div>
        <p className="font-[family-name:var(--font-dm)] font-bold tracking-[2px] uppercase text-xs text-[var(--color-muted)]">
          — Divyadharshini, Madurai
        </p>
      </div>
    </section>
  );
}

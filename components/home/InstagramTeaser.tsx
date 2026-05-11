import Image from 'next/image';

export default function InstagramTeaser() {
  const posts = [
    { id: 1, photoId: 'ramadan-kareem', alt: 'Ramadan Kareem post' },
    { id: 2, photoId: 'holi-festive', alt: 'Holi festive post' },
    { id: 3, photoId: 'colby-cheddar-shot', alt: 'Colby Cheddar product shot' },
    { id: 4, photoId: 'gruyere-cheese', alt: 'Gruyere Cheese product shot' },
    { id: 5, photoId: 'store-outdoor', alt: 'Store outdoor space' },
    { id: 6, photoId: 'cheese-tasting', alt: 'Cheese tasting event' },
  ];

  return (
    <section className="bg-[var(--color-cream)] py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
      <div className="mb-14">
        <p className="font-[family-name:var(--font-dm)] text-[11px] font-medium tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
          Follow Along
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6">@cheesecorner.in on Instagram</h2>
        <a href="https://instagram.com/cheesecorner.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-[family-name:var(--font-dm)] border-b-2 border-transparent hover:border-[var(--color-ink)] transition-all font-medium">
          Follow on Instagram <span>→</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {posts.map((post) => (
          <a key={post.id} href="https://instagram.com/cheesecorner.in" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden rounded-xl block">
            <Image 
              src="/placeholder.svg"
              alt={post.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#102B23]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

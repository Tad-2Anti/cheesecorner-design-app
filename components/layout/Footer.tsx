import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest-dark)] text-white pt-16 pb-8 border-t border-[var(--color-forest-light)]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* COL 1 */}
        <div className="space-y-4">
          <div className="text-2xl font-bold font-[family-name:var(--font-playfair)]">Cheese Corner</div>
          <p className="text-[var(--color-cream)] opacity-80 text-sm">
            India&apos;s Finest Artisan Cheese — Curated for the Connoisseur
          </p>
          <div className="pt-2">
            <a href="https://instagram.com/cheesecorner.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-cream)] hover:text-[#C9993A] transition">
              @cheesecorner.in
            </a>
          </div>
        </div>

        {/* COL 2 */}
        <div>
          <h4 className="font-bold tracking-wider text-xs mb-6 text-[#C9993A] uppercase">Explore</h4>
          <ul className="space-y-3 opacity-90 text-sm">
            <li><Link href="/shop" className="hover:text-[var(--color-gold)] transition">Shop All Cheeses</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-gold)] transition">About Us</Link></li>
            <li><Link href="/events" className="hover:text-[var(--color-gold)] transition">Events & Tastings</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-gold)] transition">Contact</Link></li>
          </ul>
        </div>

        {/* COL 3 */}
        <div>
          <h4 className="font-bold tracking-wider text-xs mb-6 text-[#C9993A] uppercase">Shop by Type</h4>
          <ul className="space-y-3 opacity-90 text-sm">
            <li><Link href="/shop?category=cheddar" className="hover:text-[var(--color-gold)] transition">Cheddar</Link></li>
            <li><Link href="/shop?category=gouda" className="hover:text-[var(--color-gold)] transition">Gouda</Link></li>
            <li><Link href="/shop?category=mozzarella" className="hover:text-[var(--color-gold)] transition">Mozzarella</Link></li>
            <li><Link href="/shop?category=fresh-cheese" className="hover:text-[var(--color-gold)] transition">Fresh Cheese</Link></li>
            <li><Link href="/shop?category=smoked" className="hover:text-[var(--color-gold)] transition">Smoked Varieties</Link></li>
            <li><Link href="/shop?category=indian-dairy" className="hover:text-[var(--color-gold)] transition">Indian Dairy</Link></li>
          </ul>
        </div>

        {/* COL 4 */}
        <div>
          <h4 className="font-bold tracking-wider text-xs mb-6 text-[#C9993A] uppercase">Find Us</h4>
          <address className="not-italic text-sm opacity-90 space-y-2">
            <p>4/4, Vallabhai Road, Chokkikulam,</p>
            <p>Madurai – 625002</p>
            <p className="pt-2">+91 94895 31976</p>
          </address>
          <div className="mt-6">
            <a href="https://wa.me/919489531976" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] hover:underline font-medium text-sm group flex items-center gap-1">
              WhatsApp Us <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-6 border-t border-[var(--color-forest-light)]/50 flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
        <p>© {new Date().getFullYear()} Cheese Corner. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with ♥ in Madurai</p>
      </div>
    </footer>
  );
}

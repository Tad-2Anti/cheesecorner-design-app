'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // For the case when the logo doesn't exist yet, we can render text or fallback safely.
  // Using a fallback UI when the logo image fails isn't trivial here, but we will use the Image tag as requested.

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1C4A3B] shadow-lg py-3' : 'bg-transparent py-[12px] md:py-5'} border-b border-white/10`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between">
        
        <div className="flex flex-row items-center gap-4">
            {/* Mobile Hamburger on Left */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[var(--color-cream)] p-2 -ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link href="/">
            <div className="text-[var(--color-cream)] font-[family-name:var(--font-playfair)] text-[13px] md:text-[16px] lg:text-2xl font-bold flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                Cheese Corner
            </div>
            </Link>
        </div>

        {/* Tablet Nav (md) - About & Menu only */}
        {/* Desktop Nav (lg) - all links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => (
            <li key={link.href} className={link.label === 'Shop' || link.label === 'Contact' || link.label === 'Events' ? 'hidden lg:block' : ''}>
              <Link href={link.href}
                className="text-[var(--color-cream)] font-[family-name:var(--font-dm)] text-sm tracking-wide hover:text-[#F5C842] transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Nav (Desktop only & Cart) */}
        <div className="flex items-center gap-4">
            <a href={getWhatsAppLink()}
            target="_blank" rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[var(--color-gold)] text-[#1A1A1A] font-[family-name:var(--font-dm)] font-medium text-sm tracking-wider uppercase px-6 py-2.5 rounded-full hover:brightness-110 transition-all duration-200 min-h-[44px]">
            WhatsApp Order
            </a>
            {/* Cart/Search icons placeholder */}
            <div className="text-[var(--color-cream)] w-[44px] h-[44px] flex items-center justify-center cursor-pointer hover:text-[var(--color-gold)]">
              🛍️
            </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#102B23] z-40 flex flex-col items-center justify-center gap-7 pt-20 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 left-4 text-white min-w-[44px] min-h-[44px] flex items-center justify-center">
          <X size={32} />
        </button>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-playfair)] text-[28px] text-white hover:text-[var(--color-gold)] transition-colors leading-loose">
            {link.label}
          </Link>
        ))}
        {/* Missing navigation items from the prompt to be exhaustive */}
        <Link href="/menu" onClick={() => setMenuOpen(false)} className="font-[family-name:var(--font-playfair)] text-[28px] text-white hover:text-[var(--color-gold)] transition-colors leading-loose">Menu</Link>
        
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
          className="mt-6 bg-[#1C4A3B] border-2 border-[var(--color-gold)] text-white font-[family-name:var(--font-dm)] tracking-widest uppercase text-sm px-10 py-4 max-w-[200px] rounded-full text-center hover:bg-[var(--color-gold)] hover:text-[#1A1A1A] transition-colors">
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
}

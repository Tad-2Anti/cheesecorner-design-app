import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Cheese Corner — Madurai\'s Gourmet Cheese Destination',
    template: '%s | Cheese Corner Madurai',
  },
  description: 'Cheese Corner Madurai — Artisan Cheese Shop & Café. Curated selection of fresh, aged and specialty cheeses. 4/4 Vallabhai Road, Madurai.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧀</text></svg>",
  },
  keywords: [
    'cheese store madurai', 'artisan cheese madurai', 'gourmet cheese madurai',
    'mozzarella madurai', 'buy cheese online madurai', 'cheese corner madurai',
    'specialty cheese shop tamil nadu', 'gouda cheese madurai', 'parmesan madurai',
    'feta cheese madurai', 'smoked cheese madurai', 'cheese delivery madurai',
    'cheesecorner.in', 'cheese corner chokkikulam'
  ],
  authors: [{ name: 'Cheese Corner', url: 'https://cheesecorner.in' }],
  creator: 'Cheese Corner',
  publisher: 'Cheese Corner',
  formatDetection: { telephone: true, email: false, address: true },
  metadataBase: new URL('https://cheesecorner.in'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cheesecorner.in',
    siteName: 'Cheese Corner',
    title: 'Cheese Corner — Madurai\'s Gourmet Cheese Destination',
    description: 'Discover 40+ artisan cheeses at Cheese Corner, Madurai. Mozzarella, Gouda, Cheddar, Feta, Parmesan & more.',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Cheese Corner — Madurai Gourmet Cheese Store',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheese Corner — Madurai\'s Gourmet Cheese Destination',
    description: '40+ artisan cheeses. Order via WhatsApp or visit us in Chokkikulam, Madurai.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cheese Corner",
  "image": "https://cheesecorner.in/images/og-image.jpg",
  "@id": "https://cheesecorner.in",
  "url": "https://cheesecorner.in",
  "telephone": "+919489531976",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4/4, Vallabhai Road, Chokkikulam",
    "addressLocality": "Madurai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "625002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.9261,
    "longitude": 78.1198
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "11:00",
      "closes": "18:00"
    }
  ],
  "sameAs": ["https://www.instagram.com/cheesecorner.in"],
  "priceRange": "₹₹",
  "description": "Madurai's premier gourmet cheese store offering 40+ artisan varieties.",
  "servesCuisine": "Cheese, Gourmet, Artisan Dairy"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col bg-[var(--color-cream)] text-[var(--color-ink)] font-[family-name:var(--font-dm)]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

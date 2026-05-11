import { Metadata } from 'next';
import { getWhatsAppLink } from '@/lib/utils';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Cheese Corner, Madurai. Visit us at Chokkikulam, call, or WhatsApp us for orders and enquiries.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[var(--color-cream)] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading 
          heading="We'd Love to Hear From You."
          subtext="Walk in, call, or WhatsApp — we're always happy to help you find your perfect cheese."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 max-w-5xl mx-auto">
          {/* LEFT — Contact Info */}
          <div className="lg:col-span-5 space-y-10 font-[family-name:var(--font-dm)]">
            <div>
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-[var(--color-gold)] mb-3">Address</h4>
              <p className="text-[16px] text-[var(--color-ink)] leading-relaxed">
                4/4, Vallabhai Road, Chokkikulam,<br/>
                Madurai – 625002, Tamil Nadu, India
              </p>
              <a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[var(--color-forest)] font-medium text-sm hover:underline">
                View on Google Maps →
              </a>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-[var(--color-gold)] mb-3">Phone / WhatsApp</h4>
              <p className="text-[16px] text-[var(--color-ink)] mb-2">+91 94895 31976</p>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[var(--color-forest)] font-medium text-sm hover:underline">
                Message on WhatsApp →
              </a>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-[var(--color-gold)] mb-3">Store Hours</h4>
              <ul className="text-[16px] text-[var(--color-ink)] space-y-2">
                <li>Monday – Saturday: 10:00 AM – 8:00 PM</li>
                <li>Sunday: 11:00 AM – 6:00 PM</li>
              </ul>
              <p className="text-sm text-[var(--color-muted)] italic mt-2">
                (Please verify current hours with the store)
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-[var(--color-gold)] mb-3">Social</h4>
              <a href="https://instagram.com/cheesecorner.in" target="_blank" rel="noopener noreferrer" className="text-[16px] text-[var(--color-ink)] hover:text-[var(--color-forest)] transition">
                @cheesecorner.in
              </a>
            </div>
          </div>

          {/* RIGHT — Map + CTA */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm flex-1 min-h-[400px] mb-8 relative">
              {/* Note: Iframe should be actual google maps embed, using a placeholder iframe for now since actual embed code isn't provided */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123!2d78.1198!3d9.9261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCheese%20Corner!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full bg-[var(--color-gold)] text-[var(--color-ink)] flex justify-center items-center gap-3 font-[family-name:var(--font-dm)] font-bold tracking-wider uppercase px-8 py-5 rounded-xl hover:brightness-110 hover:-translate-y-1 transition-all text-center shadow-lg">
              <span className="text-xl">💬</span> WhatsApp Us to Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

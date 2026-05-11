export default function MarqueeStrip() {
  const items = [
    'MOZZARELLA', 'GRUYERE', 'SMOKED GOUDA', 'FETA', 'MASCARPONE',
    'EMMENTAL', 'BLUE CHEESE', 'BOCCONCINI', 'RICOTTA', 'GOAT CHEESE',
    'COLBY CHEDDAR', 'PARMESAN', 'EDAM', 'CREAM CHEESE', 'PANEER'
  ];

  return (
    <div className="bg-[var(--color-forest-dark)] py-3 overflow-hidden flex items-center border-y border-[var(--color-forest-light)]/30 h-[52px]">
      {/* We double the list to make infinite scroll seamless */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-[family-name:var(--font-dm)] text-[13px] font-medium tracking-[3px] text-[var(--color-gold-light)] whitespace-nowrap mx-6">
              {item}
            </span>
            <span className="text-[var(--color-cream)]/50 text-xs text-center">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

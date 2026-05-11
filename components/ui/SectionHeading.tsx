interface Props {
  label?: string;
  heading: string;
  subtext?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark'; // light = dark text, dark = white text
}

export default function SectionHeading({ label, heading, subtext, align = 'center', theme = 'light' }: Props) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]';
  const labelColor = 'text-[#C9993A]';
  const subtextColor = theme === 'dark' ? 'text-[var(--color-cream)] opacity-70' : 'text-[#5C5C5C]';
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-14 ${alignment}`}>
      {label && (
        <p className={`${labelColor} font-[family-name:var(--font-dm)] text-xs font-medium tracking-[3px] uppercase mb-4`}>
          {label}
        </p>
      )}
      <h2 className={`${textColor} font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold leading-tight mb-5`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`${subtextColor} font-[family-name:var(--font-dm)] text-base md:text-lg leading-relaxed`}>
          {subtext}
        </p>
      )}
    </div>
  );
}

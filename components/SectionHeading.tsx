export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

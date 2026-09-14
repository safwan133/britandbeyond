import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const CATEGORY_LABEL: Record<Product['category'], string> = {
  souvenir: 'Souvenir',
  apparel: 'Apparel',
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink-900/20 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <span className="absolute left-2.5 top-2.5 rounded-full bg-rose-600 px-2 py-0.5 font-display text-[9px] uppercase tracking-wide text-white shadow-sm">
          {CATEGORY_LABEL[product.category]}
        </span>

        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />

        <div
          className="absolute inset-x-0 bottom-0 flex translate-y-3 flex-col p-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          <h3 className="font-display text-lg leading-snug text-white">{product.name}</h3>
          <p className="mt-1 text-sm leading-snug text-white/70">{product.subheading}</p>
        </div>
      </div>
    </article>
  );
}
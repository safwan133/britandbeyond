import ProductCard from '../components/ui/ProductCard';
import { souvenirProducts, apparelProducts } from '../data/products';

interface CollectionRowProps {
  title: string;
  number: string;
  products: typeof souvenirProducts;
}

function CollectionRow({ title, number, products }: CollectionRowProps) {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="mb-7 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-b border-ink-900 pb-4">
        <span className="font-display text-xs font-semibold text-rose-600">{number}</span>
        <h3 className="font-display text-2xl text-ink-900 sm:text-3xl">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function FeaturedCollection() {
  return (
    <section id="featured" className="scroll-mt-20 border-y border-ink-900/10 bg-[#FAF6EF] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
            The collection
          </p>
          <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl lg:text-6xl">
            Take the feeling home.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink-900/60">
            Distinctly British pieces chosen for their quality, character and lasting charm.
          </p>
        </div>

        <CollectionRow title="Souvenirs of the United Kingdom" number="01" products={souvenirProducts} />
        <CollectionRow title="British Apparel & Knitwear" number="02" products={apparelProducts} />
      </div>
    </section>
  );
}
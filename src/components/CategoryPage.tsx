import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const filteredProducts = PRODUCTS.filter((p) => p.category === categoryId);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-4">Collection</span>
            <h2 className="font-serif text-6xl md:text-8xl font-normal tracking-tighter text-on-surface capitalize">
              {categoryId}.
            </h2>
          </div>
          <p className="font-sans text-sm opacity-60 max-w-xs text-right leading-relaxed pt-8 md:pt-0">
            A curated exploration of functional geography and the silent beauty of {categoryId} furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 artistic-border bg-on-surface gap-[1px]">
          {filteredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-background p-10 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="font-serif italic text-2xl opacity-20 block mb-4">0{idx + 1}</span>
                <div className="aspect-[4/5] bg-accent artistic-border mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-on-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link 
                      to={`/product/${product.id}`}
                      className="bg-background text-on-surface px-6 py-3 font-sans text-[10px] font-bold uppercase tracking-widest artistic-border hover:bg-on-surface hover:text-background transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <h3 className="font-sans text-[14px] font-bold uppercase tracking-widest text-on-surface mb-2">{product.name}</h3>
                <p className="font-sans text-[12px] opacity-50 mb-6">{product.material}</p>
              </div>
              <span className="font-serif text-2xl">{product.price}</span>
            </motion.div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full bg-background p-24 text-center">
              <p className="font-serif text-2xl opacity-30 italic whitespace-nowrap overflow-hidden text-ellipsis">Coming soon to the collection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

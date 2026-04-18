import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export default function NewArrivals() {
  return (
    <section className="py-32 bg-background border-b border-on-surface">
      <div className="max-w-screen-2xl mx-auto px-12 mb-20 flex justify-between items-end">
        <div>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-4">Curated Selections</span>
          <h2 className="font-serif text-6xl font-normal tracking-tighter text-on-surface">New Arrivals</h2>
        </div>
        <a className="font-sans font-bold text-[11px] uppercase tracking-widest border-b border-on-surface pb-1 hover:opacity-50 transition-all" href="#">Shop Full Collection</a>
      </div>
      
      <div className="flex border-t border-on-surface flex-wrap md:flex-nowrap">
        {PRODUCTS.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex-1 min-w-[300px] artistic-border-r p-10 group cursor-pointer transition-colors hover:bg-accent/30 ${idx === PRODUCTS.length - 1 ? 'md:border-r-0' : ''} border-b md:border-b-0 border-on-surface`}
          >
            <span className="font-serif italic text-2xl opacity-20 block mb-8">0{idx + 1}</span>
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
            <span className="font-serif text-2xl">{product.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-6">Product not found.</h2>
          <Link to="/" className="font-sans text-[11px] uppercase tracking-widest border-b border-on-surface pb-1">Return to Atelier</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-widest mb-16 opacity-50 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft size={14} />
          Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-1 border-r border-on-surface hidden lg:flex flex-col gap-12 py-8 items-center h-full">
            <span className="vertical-text text-[10px] opacity-30">ARTISANAL // SPEC 0{product.id}</span>
            <span className="vertical-text text-[10px] opacity-30">ORIGIN // MILAN</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-6 artistic-border bg-accent grayscale overflow-hidden aspect-[4/5]"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] mb-6 opacity-50">Edition 2024</span>
            <h1 className="font-serif text-6xl md:text-8xl font-normal tracking-tighter text-on-surface mb-8">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-8 mb-12">
              <span className="font-serif text-4xl">{product.price}</span>
              <span className="font-sans text-[12px] opacity-40 uppercase tracking-widest">{product.material}</span>
            </div>
            
            <div className="space-y-8 mb-16">
              <p className="font-sans text-lg leading-relaxed opacity-70">
                {product.description}
              </p>
              <div className="artistic-border-b border-on-surface/10 pb-8">
                 <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-4">Material Notes</h4>
                 <p className="font-sans text-sm opacity-50 leading-relaxed">
                   Responsibly sourced at the edge of the Sahara, utilizing traditional weathering techniques to achieve a texture that is both raw and refined.
                 </p>
              </div>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="w-full artistic-border py-4 font-sans text-[12px] font-bold uppercase tracking-[0.3em] bg-on-surface text-background hover:bg-background hover:text-on-surface transition-colors"
            >
              Request Acquisition
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

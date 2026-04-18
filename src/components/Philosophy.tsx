import { motion } from 'motion/react';
import { Verified } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-32 bg-accent/20 border-b border-on-surface">
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] rounded-none overflow-hidden artistic-border grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtgbsonQrr9sFlrSQYRfN2EUacpMQc538H1vMGcLIRvzd8LUgjjbSF4uI7BPkOTxeIHDNS7SsbeVtvoLadmcCoSOW7N4qIULu9sSkRw5-a02GsZ7HD9cJjSX0hSwnl23PwedEoMRTknZnWbRaJySwjM8bVlyXrobraHdLU7xd5d5GBe_wxcBRCqxG0IiHI_zKiiZ37VJlj4vzpNQoNVjhzoIcMS1OMzKj4xfaeH5ybA6vKCO7UXqWbSLxSzDh0zIYB66p3CUu658U" 
              alt="Artisan craftsmanship" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-8 w-64 bg-background artistic-border p-8 hidden lg:flex flex-col justify-center"
          >
            <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-on-surface mb-4">Integrity</p>
            <p className="text-[12px] text-on-surface/60 leading-relaxed font-sans">
              Every piece is crafted from FSC-certified timber, ensuring our atelier gives back more than it takes.
            </p>
          </motion.div>
        </div>
        
        <div className="order-1 md:order-2">
          <span className="font-sans uppercase tracking-[0.4em] text-on-surface font-bold text-xs mb-6 block opacity-50">Our Essence</span>
          <h2 className="font-serif text-5xl md:text-7xl font-normal tracking-tighter text-on-surface mb-8 leading-tight">
            Geometry & <br /> Texture.
          </h2>
          <p className="text-on-surface/80 text-lg leading-relaxed mb-10 font-sans opacity-70">
            Blending ancient joinery techniques with precision engineering to create silent artifacts of your personal history.
          </p>
          <motion.a 
            href="#" 
            className="inline-flex items-center gap-6 text-on-surface font-sans font-bold text-xs uppercase tracking-[0.2em] group border-b border-on-surface pb-2"
          >
            Explore the Craft
          </motion.a>
        </div>
      </div>
    </section>
  );
}

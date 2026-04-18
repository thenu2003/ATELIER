import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-32 bg-accent border-b border-on-surface">
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl font-normal tracking-tighter text-on-surface mb-6">Manifesto.</h2>
          <p className="font-sans text-sm opacity-60 leading-relaxed max-w-sm">
            Sign up for early access to new collections and editorial stories on the art of living. A digital companion for the curated journey.
          </p>
        </div>
        <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-on-surface py-4 text-2xl font-serif outline-none placeholder:opacity-20" 
              placeholder="Your email address" 
            />
            <motion.button 
              whileHover={{ x: 10 }}
              className="absolute right-0 bottom-4 font-sans text-[11px] font-bold uppercase tracking-[0.2em]"
            >
              Subscribe
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}

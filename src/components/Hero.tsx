import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-[80px_1fr_300px] border-b border-on-surface overflow-hidden pt-24">
      <aside className="border-r border-on-surface flex flex-col justify-between py-12 items-center">
        <div className="w-8 h-8 bg-on-surface rounded-full"></div>
        <div className="vertical-text text-xs">COLLECTION // 2024</div>
        <div className="vertical-text text-xs">ATELIER STUDIO</div>
      </aside>

      <main className="p-16 flex flex-col justify-center relative bg-background">
        <span className="font-sans text-[11px] uppercase tracking-[0.4em] mb-8 opacity-80">Featured Atmosphere</span>
        <h1 className="hero-title mb-10">SCULPT</h1>
        <p className="font-sans text-lg max-w-md mb-12 opacity-70 leading-relaxed">
          A curated exploration of minimal furniture and the silent beauty of functional art. Redefining the sanctuary in 2024.
        </p>
        <div className="w-full h-[200px] bg-accent artistic-border overflow-hidden grayscale">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzXrmqKPfenaG3qpSRDcWLk-dPSgp4Flelex5YCvPzgCy9Bnu1h-QEc-yUHOkAddhLFexDxJCwLmRh_dpYHLWn1CAYY4xWKlz6wdD4eMXPuvG_Zl58Q3IFYU5ABYa78D4GWLLOFNY_3ztuZ2KIiDXUhsQ1vq75--gHne7HZocPPUWMdf30pwem4Y4QlwinBgfdZtsN4YABWcVhj_BsDkpTa7A1Am4QbAci0-KLVX9_TGSd_IiH1H5_EuqQxD-PDlspDQSXPhmrKZc" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
      </main>

      <aside className="border-l border-on-surface p-10 flex flex-col gap-12 bg-background">
        <nav className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-[0.2em]">
          <a href="#" className="border-b-2 border-on-surface pb-2">Experience</a>
          <a href="#" className="border-b border-on-surface/10 pb-2 hover:border-on-surface transition-all">Details</a>
          <a href="#" className="border-b border-on-surface/10 pb-2 hover:border-on-surface transition-all">Origins</a>
          <a href="#" className="border-b border-on-surface/10 pb-2 hover:border-on-surface transition-all">Availability</a>
        </nav>
        
        <div className="mt-auto space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-2">Masterpieces Created</span>
            <span className="font-serif text-5xl">1,240</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-2">Artisan Hours</span>
            <span className="font-serif text-5xl">42k</span>
          </div>
        </div>
      </aside>
    </section>
  );
}


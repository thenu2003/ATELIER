import { Globe, Heart, Share2, AtSign } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-24 px-12 bg-background">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 artistic-border bg-on-surface gap-[1px]">
        <div className="bg-background p-10 flex flex-col justify-between">
          <h3 className="font-serif text-2xl font-normal text-on-surface mb-8">ATELIER.</h3>
          <p className="font-sans text-[11px] uppercase tracking-widest opacity-50 leading-relaxed">
            A destination for curated design, ethical craftsmanship, and the beauty of natural materials.
          </p>
        </div>
        
        <div className="bg-background p-10">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Discover</h4>
          <ul className="space-y-4 font-sans text-[11px] uppercase tracking-widest opacity-50">
            <li><a className="hover:opacity-100 transition-opacity" href="#">Living</a></li>
            <li><a className="hover:opacity-100 transition-opacity" href="#">Bedroom</a></li>
            <li><a className="hover:opacity-100 transition-opacity" href="#">Office</a></li>
            <li><a className="hover:opacity-100 transition-opacity" href="#">Chairs</a></li>
          </ul>
        </div>
        
        <div className="bg-background p-10">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Atelier</h4>
          <ul className="space-y-4 font-sans text-[11px] uppercase tracking-widest opacity-50">
            <li><a className="hover:opacity-100 transition-opacity" href="#">Our Story</a></li>
            <li><a className="hover:opacity-100 transition-opacity" href="#">Philosophy</a></li>
            <li><a className="hover:opacity-100 transition-opacity" href="#">Artisans</a></li>
            <li><a className="hover:opacity-100 transition-opacity" href="#">Sustainability</a></li>
          </ul>
        </div>
        
        <div className="bg-background p-10">
          <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Contact</h4>
          <ul className="space-y-4 font-sans text-[11px] uppercase tracking-widest opacity-50">
            <li className="normal-case opacity-100 italic font-serif">hello@theatelier.com</li>
            <li>+1 800 242 1212</li>
            <li className="pt-4 flex gap-6">
              <Share2 className="w-4 h-4" />
              <AtSign className="w-4 h-4" />
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] uppercase font-sans opacity-40">
        <span>© 2024 THE CURATED ATELIER.</span>
        <div className="flex gap-8">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

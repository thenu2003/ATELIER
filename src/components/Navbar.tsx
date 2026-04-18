import { Search, User, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F5F2ED]/90 backdrop-blur-md border-b border-on-surface">
      <div className="flex justify-between items-center px-12 py-8 w-full max-w-screen-2xl mx-auto font-sans font-bold tracking-widest text-[11px] uppercase">
        <div className="flex items-center gap-16">
          <Link className="font-serif text-2xl font-normal tracking-tighter normal-case" to="/">ATELIER</Link>
          <div className="hidden md:flex gap-12 items-center text-on-surface/60">
            <Link className="hover:text-on-surface transition-colors" to="/category/living">Living</Link>
            <Link className="hover:text-on-surface transition-colors" to="/category/bedroom">Bedroom</Link>
            <Link className="hover:text-on-surface transition-colors" to="/category/office">Office</Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            <motion.button whileTap={{ scale: 0.95 }} className="hover:opacity-50 uppercase tracking-widest">Search</motion.button>
            <motion.button whileTap={{ scale: 0.95 }} className="hover:opacity-50 uppercase tracking-widest">Cart (0)</motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}


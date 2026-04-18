import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const spaces = [
  {
    id: 'living',
    name: 'Living',
    description: 'The heart of the home',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_6RQINfz9TiueiNEaICEUVUvHVtiKWHU_34qMQ8-epYsfbbuEtQDMBobkGrVsarK2940yjFzP7D5egUrY7fTt5rcW3hcfWTfd5Q6XzQyaUw0R47XPPaBLoo_aov3R0Lh_WvSWRrjOqXbRGeVbSnIklNDpJFbfpxVOUCOIeBJG6aLjEwosHXY778L1dm-W7HfXOemn9llghoKTcvSg2BHIN5XlVaq7FGaXAW8_fDGTZU47i0jeUCvzLTWqKlDZm2a-3m8XC0kSzJY',
    gridClass: 'md:col-span-8 md:row-span-1'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'A restful retreat',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJKrWGOMETA4LIBuGvpjXDZdQjMPjIA5eAxlmaKCPE6E3Cl9eFYhf5XzH0DTiiCE0kkF6G_je5ywdyq6DFAY6drCJ4OqwSHou3_3WktQ5eWNcOYnCrhDgoDw8iKsSVVO-m2_7GLAuGHG4KUVmsEGE3s1p5KE7yfRd7S18xnPRmJWOXvdLrvYK1L0D3m0e3po72141_-wLQK4WxlypDMlUWes_bPA6mRAwi24NXnY7BIXjXLUXVMlqcDPz2CeTd49_Nk06NE10-Hg0',
    gridClass: 'md:col-span-4 md:row-span-2'
  },
  {
    id: 'dining',
    name: 'Dining',
    description: 'Shared moments',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp-JR957_8ACzNRdKEGjJBqe6FTDxIX-VajseueuCNHHjuWhqxWJcXsOhZE8WphBretI6hVDlzpPH3kfxTwaL7KLjPM7wPgYgRPS00fWzZD2x1xAoYkzVFkAhMFpUtFj3seYaF9x3MzP7tDVe0XkyhY-fLZ2s6NFRCOK_TlnpuN9tAlHDrybvhG7o_xHXeEzM7mv8iUjifb5ULrkEMUp_UbiOUAtY3PZenwi9noq39xV_z88EhQ5sbMBg7RjkRKCbZX_royG-7GL8',
    gridClass: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 'office',
    name: 'Office',
    description: 'Focus & flow',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3G-1Kojd-8bpW0C5pchqZwnM81Rjl2epoaHh-soNIjHWAU8Jij9da_Pkm6mpTqqW0zZhhdseSTdQysRGpPhH5Z0sWSQXD9CHe7C72z-ZHRcjp0G_caiv7xnDq2VVzoEQQR6h5i_IKG75rlogjBmRVFAR4hYUnflJ0bPMd43jZjp88D4UvFW_G0HJSpU2RkiS8RrK8oYwCx1abk_OuBSppgy0UsQ4FLEDq3sw_P5Mju_MwsA3Ke8YTaEkxIEDqNyEVaTnk2dhWwMc',
    gridClass: 'md:col-span-4 md:row-span-1'
  }
];

export default function CuratedSpaces() {
  return (
    <section className="py-32 bg-background border-b border-on-surface">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-4">Space & Form</span>
            <h2 className="font-serif text-6xl md:text-8xl font-normal tracking-tighter text-on-surface">Spaces.</h2>
          </div>
          <p className="font-sans text-sm opacity-60 max-w-xs text-right leading-relaxed pt-8 md:pt-0">
            A curated exploration of functional geography and the silent beauty of modern architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 artistic-border h-auto md:h-[600px] bg-on-surface gap-[1px]">
          {spaces.map((space, idx) => (
            <Link key={space.id} to={`/category/${space.id}`} className="block h-full group">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative h-full cursor-pointer overflow-hidden bg-background p-10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif italic text-2xl opacity-20 block mb-4">0{idx + 1}</span>
                  <h4 className="font-serif text-4xl font-normal text-on-surface mb-2">{space.name}</h4>
                  <p className="font-sans text-[11px] uppercase tracking-widest opacity-40">{space.description}</p>
                </div>
                <div className="h-48 mt-8 overflow-hidden artistic-border grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={space.image} 
                    alt={space.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


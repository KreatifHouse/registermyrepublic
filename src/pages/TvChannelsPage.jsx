import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Tv2 } from 'lucide-react';
import { tvChannelsByCategory } from '@/data/siteData';

const TvChannelsPage = ({ navigateTo }) => {
  const categories = Object.entries(tvChannelsByCategory);

  return (
    <div className="bg-slate-50 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Tv2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">Daftar Channel TV MyRepublic</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nikmati beragam pilihan channel TV berkualitas untuk hiburan Anda dan keluarga.
          </p>
          <Button 
            variant="outline" 
            onClick={() => navigateTo('home')} 
            className="mt-6 border-primary text-primary hover:bg-primary/10"
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Kembali ke Beranda
          </Button>
        </motion.div>

        <div className="space-y-12">
          {categories.map(([category, channels], catIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-primary/30">{category}</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-6">
                {channels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                    className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-[3/2] flex items-center justify-center hover:-translate-y-1"
                  >
                    {channel.logoUrl ? (
                      <img 
                        src={channel.logoUrl} 
                        alt={`Logo Channel ${channel.name}`} 
                        className="max-h-12 md:max-h-14 w-auto object-contain" 
                        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<span class='font-passion-one text-primary text-center text-lg md:text-xl' aria-label='Logo ${channel.name} tidak tersedia'>${channel.name}</span>` }}
                      />
                    ) : (
                       <span className="font-passion-one text-primary text-center text-lg md:text-xl" aria-label={`Logo ${channel.name}`}>
                          {channel.name}
                        </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {categories.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500 mt-10 text-lg"
          >
            Saat ini belum ada daftar channel yang tersedia. Silakan cek kembali nanti.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default TvChannelsPage;
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { streamingServices } from '@/data/siteData';

const HiburanSection = ({ navigateTo }) => {
  const { toast } = useToast();

  const handleLinkClick = (e, serviceName) => {
    e.preventDefault();
    const service = streamingServices.find(s => s.name === serviceName);
    if (service && service.link && service.link !== "#") {
      window.open(service.link, '_blank');
    } else {
      toast({
        title: "🚧 Fitur Belum Tersedia",
        description: `Layanan ${serviceName} akan segera hadir. Anda bisa meminta fitur ini di prompt berikutnya! 🚀`,
      });
    }
  };

  const displayedStreamingApps = ["Vidio", "Genflix", "WeTV", "Vision+", "Bstation"];

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-purple-100/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Hiburan Terlengkap Untuk Keluarga</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-xl mx-auto text-sm md:text-base">
          Nikmati ribuan jam tayangan berkualitas dari berbagai platform streaming populer dan channel TV favorit.
        </p>
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-center text-gray-700 mb-6">Streaming Apps Pilihan</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {displayedStreamingApps.map((appName) => (
              <motion.a 
                key={appName}
                href="#" 
                onClick={(e) => handleLinkClick(e, appName)}
                className="text-xl md:text-2xl text-gray-800 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {appName}
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-center text-gray-700 mb-4">Beragam Channel TV Favorit</h3>
            <p className="text-xl md:text-2xl text-gray-800 text-center px-4">
                AXN ・ DISCOVERY ・ NICKELODEON ・ DAN BANYAK LAGI!
            </p>
          <div className="text-center mt-4">
              <Button variant="link" onClick={() => navigateTo('tv-channels')} className="text-primary hover:underline text-sm">
                  Lihat Semua Channel <ChevronRight className="inline h-4 w-4 ml-1" />
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiburanSection;
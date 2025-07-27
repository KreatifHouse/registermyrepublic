import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    "Gratis Biaya Instalasi",
    "Diskon Hingga 50%",
    "Internet Unlimited Tanpa FUP",
    "Bonus 76 Channel TV"
  ];

  const handleScrollToPackages = () => {
    document.getElementById('paket-internet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Keluarga bahagia menggunakan internet MyRepublic di ruang tamu yang nyaman" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606787365527-d5aee1f46968" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/90 via-purple-700/60 to-pink-500/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 shadow-text">
            Koneksi Cepat & Unlimited Kini Bisa #UntukSemua
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light mb-8 opacity-90 shadow-text">
            Mulai dari Rp 200ribuan, nikmati koneksi fiber ultra cepat, simetris, dan tanpa batas kuota untuk semua kebutuhan digital Anda.
          </p>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-sm md:text-base">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <Button 
            onClick={handleScrollToPackages}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Lihat Paket & Berlangganan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
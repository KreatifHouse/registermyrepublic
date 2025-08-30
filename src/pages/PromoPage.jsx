import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Tag, Percent, CalendarDays, MessageCircle } from 'lucide-react';

const promos = [
  // {
  //   id: 1,
  //   title: "Cashback Hingga 1 JUTA!",
  //   description: "Dapatkan cashback spesial untuk pelanggan baru MyRepublic. Semakin cepat berlangganan, semakin besar cashbacknya! Berlaku untuk paket tertentu.",
  //   imageUrl: "https://images.unsplash.com/photo-1649486116188-b464d7f864a9",
  //   alt: "Ilustrasi promo cashback MyRepublic dengan tumpukan uang",
  //   ctaText: "Klaim Promo Ini",
  //   period: "1 Juni - 31 Juli 2025",
  //   category: "Pelanggan Baru"
  // },
  {
    id: 2,
    title: "Gratis Biaya Instalasi & Router WiFi!",
    description: "Nikmati internet super cepat tanpa ribet. Biaya instalasi (senilai Rp500.000) dan router WiFi kami tanggung sepenuhnya untuk pelanggan baru.",
    imageUrl: "https://images.unsplash.com/photo-1681770678332-3a190df72091",
    alt: "Router WiFi MyRepublic dengan teknisi melakukan instalasi",
    ctaText: "Lihat Detail Paket",
    period: "Berlaku Selamanya",
    category: "Semua Pelanggan Baru"
  },
  // {
  //   id: 3,
  //   title: "Diskon 20% Paket MyGamer 250 Mbps",
  //   description: "Para gamer, merapat! Dapatkan diskon 20% untuk langganan paket MyGamer 250 Mbps selama 6 bulan pertama. Latency rendah, main game makin seru!",
  //   imageUrl: "https://images.unsplash.com/photo-1580236800792-93519c189e2a",
  //   alt: "Setup gaming dengan monitor dan keyboard menyala terang",
  //   ctaText: "Ambil Diskon Gamer",
  //   period: "15 Juni - 15 Agustus 2025",
  //   category: "Paket Gaming"
  // },
  {
    id: 4,
    title: "Upgrade Speed Gratis Selama 3 Bulan!",
    description: "Pelanggan setia MyRepublic? Upgrade kecepatan internet Anda dan nikmati speed lebih tinggi GRATIS selama 3 bulan pertama. S&K berlaku.",
    imageUrl: "https://images.unsplash.com/photo-1611078489857-e7054e9b6a9a",
    alt: "Grafik kecepatan internet meningkat sebagai ilustrasi upgrade speed",
    ctaText: "Upgrade Sekarang",
    period: "Terbatas untuk Pelanggan Terpilih",
    category: "Pelanggan Setia"
  }
];

const PromoCard = ({ promo, index, openWhatsAppWithMessage }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="relative">
      <img alt={promo.alt} className="w-full h-56 object-cover" src={promo.imageUrl} />
      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
        <Tag className="inline-block h-3 w-3 mr-1" /> {promo.category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{promo.title}</h2>
      <p className="text-gray-600 mb-4 text-sm flex-grow">{promo.description}</p>
      <div className="flex items-center text-xs text-gray-500 mb-4">
        <CalendarDays className="h-4 w-4 mr-1.5 text-primary" />
        Periode: {promo.period}
      </div>
      <Button 
        className="w-full bg-primary text-white hover:bg-purple-700 mt-auto"
        onClick={() => openWhatsAppWithMessage(`Halo, saya tertarik dengan promo "${promo.title}". Bisa jelaskan lebih lanjut?`)}
      >
        <Gift className="mr-2 h-4 w-4" /> {promo.ctaText}
      </Button>
    </div>
  </motion.div>
);


const PromoPage = ({ navigateTo, openWhatsAppWithMessage }) => (
  <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
    <div className="container mx-auto px-4 min-h-[calc(100vh-200px)]"> {/* Adjusted min-height */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Percent className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">Promo Spesial MyRepublic!</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Jangan lewatkan berbagai penawaran menarik dari MyRepublic untuk internetan lebih hemat dan menyenangkan!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {promos.map((promo, index) => (
          <PromoCard key={promo.id} promo={promo} index={index} openWhatsAppWithMessage={openWhatsAppWithMessage} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: promos.length * 0.1 + 0.5, duration: 0.5 }}
        className="mt-16 text-center bg-white p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Tidak Menemukan Promo yang Cocok?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Tim kami siap membantu Anda menemukan paket dan promo terbaik sesuai kebutuhan Anda. Jangan ragu untuk menghubungi kami!
        </p>
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 text-lg rounded-lg shadow-md transition-transform hover:scale-105"
          onClick={() => openWhatsAppWithMessage("Halo, saya ingin konsultasi mengenai promo MyRepublic.")}
        >
          <MessageCircle className="mr-2 h-5 w-5" /> Konsultasi via WhatsApp
        </Button>
        <p className="text-xs text-gray-500 mt-4">Syarat dan ketentuan berlaku untuk semua promo.</p>
      </motion.div>
    </div>
  </div>
);

export default PromoPage;
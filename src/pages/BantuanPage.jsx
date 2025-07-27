import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Headphones, MessageCircle, FileText, ChevronDown, ChevronUp, Search, LifeBuoy } from 'lucide-react';

const faqs = [
  {
    question: "Bagaimana cara cek jangkauan area MyRepublic?",
    answer: "Anda dapat mengecek jangkauan area MyRepublic melalui tombol 'Area Jangkauan' di bagian atas website kami atau menghubungi tim sales kami melalui WhatsApp."
  },
  {
    question: "Berapa lama proses instalasi setelah pendaftaran?",
    answer: "Proses instalasi biasanya memakan waktu 1-3 hari kerja setelah pendaftaran Anda dikonfirmasi dan jadwal teknisi tersedia di area Anda."
  },
  {
    question: "Apakah ada batasan kuota (FUP) pada paket MyRepublic?",
    answer: "Tidak, semua paket internet MyRepublic bersifat unlimited tanpa FUP (Fair Usage Policy), sehingga Anda bisa internetan sepuasnya tanpa khawatir kecepatan turun."
  },
  {
    question: "Bagaimana jika saya mengalami gangguan koneksi?",
    answer: "Jika mengalami gangguan, Anda bisa mencoba restart modem dan router Anda. Jika masalah berlanjut, segera hubungi layanan pelanggan kami melalui Call Center 1500 818, WhatsApp, atau live chat di website."
  },
  {
    question: "Apakah saya bisa mengubah paket langganan saya?",
    answer: "Ya, Anda bisa melakukan upgrade atau downgrade paket langganan. Silakan hubungi customer service kami untuk informasi lebih lanjut mengenai syarat dan ketentuannya."
  }
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 py-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-gray-700 hover:text-primary focus:outline-none"
      >
        <span className="font-semibold">{faq.question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
          exit={{ height: 0, opacity: 0, marginTop: 0 }}
          className="text-gray-600 text-sm leading-relaxed"
        >
          {faq.answer}
        </motion.div>
      )}
    </motion.div>
  );
};

const BantuanPage = ({ openWhatsAppWithMessage }) => (
  <div className="bg-gradient-to-b from-sky-50 via-indigo-50 to-purple-50 py-12">
    <div className="container mx-auto px-4 min-h-[calc(100vh-200px)]"> {/* Adjusted min-height */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <LifeBuoy className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">Pusat Bantuan MyRepublic</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami siap membantu Anda! Temukan jawaban atas pertanyaan Anda atau hubungi kami langsung.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Headphones, title: "Hubungi Call Center", desc: "Tim kami siap membantu 24/7 di nomor", link: "tel:1500818", linkText: "1500 818" },
          { icon: MessageCircle, title: "Chat via WhatsApp", desc: "Konsultasi atau laporkan kendala via WhatsApp.", action: () => openWhatsAppWithMessage("Halo, saya butuh bantuan terkait layanan MyRepublic."), linkText: "Mulai Chat" },
          { icon: FileText, title: "Panduan & Dokumen", desc: "Akses panduan instalasi, syarat & ketentuan, dll.", linkText: "Lihat Dokumen" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
          >
            <item.icon className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{item.desc} {item.link && <a href={item.link} className="text-primary hover:underline font-medium">{item.linkText}</a>}</p>
            {item.action ? (
              <Button onClick={item.action} className="bg-primary text-white hover:bg-purple-700 mt-auto w-full">
                {item.linkText}
              </Button>
            ) : !item.link && item.linkText ? (
               <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 mt-auto w-full">
                {item.linkText}
              </Button>
            ): null}
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-xl mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Search className="h-6 w-6 mr-2 text-primary" /> Pertanyaan Umum (FAQ)
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="bg-primary text-white p-8 rounded-xl shadow-xl text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Masih Butuh Bantuan Lain?</h2>
        <p className="mb-6 max-w-xl mx-auto opacity-90">
          Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk mengirimkan pertanyaan spesifik Anda kepada tim kami.
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Nama Anda" className="w-full px-4 py-2.5 rounded-lg border border-transparent focus:ring-2 focus:ring-white/50 focus:border-white/50 bg-white/10 placeholder-white/60 text-white outline-none transition-all" />
          <input type="email" placeholder="Email Anda" className="w-full px-4 py-2.5 rounded-lg border border-transparent focus:ring-2 focus:ring-white/50 focus:border-white/50 bg-white/10 placeholder-white/60 text-white outline-none transition-all" />
          <textarea placeholder="Pesan Anda..." rows="4" className="w-full px-4 py-2.5 rounded-lg border border-transparent focus:ring-2 focus:ring-white/50 focus:border-white/50 bg-white/10 placeholder-white/60 text-white outline-none transition-all"></textarea>
          <Button type="submit" className="bg-white text-primary hover:bg-gray-200 font-semibold py-2.5 px-8 text-base rounded-lg shadow-md transition-transform hover:scale-105 w-full sm:w-auto">
            Kirim Pertanyaan
          </Button>
        </form>
      </motion.div>
    </div>
  </div>
);

export default BantuanPage;
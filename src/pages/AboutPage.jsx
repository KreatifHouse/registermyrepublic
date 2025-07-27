import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Building, Target, Users, Zap, Award, HeartHandshake as Handshake, TrendingUp } from 'lucide-react';

const AboutPage = ({ navigateTo }) => {

  const milestones = [
    { year: "2015", event: "MyRepublic resmi hadir di Indonesia, memulai revolusi internet cepat." },
    { year: "2017", event: "Memperluas jangkauan ke kota-kota besar di Pulau Jawa." },
    { year: "2019", event: "Meluncurkan paket GAMER, internet khusus untuk para pecinta game." },
    { year: "2021", event: "Meraih penghargaan sebagai 'Best Fixed Internet Provider'." },
    { year: "2023", event: "Menjangkau lebih dari 2.5 juta rumah di seluruh Indonesia." },
    { year: "2025", event: "Berkomitmen untuk menjadi penyedia internet #1 di hati masyarakat." },
  ];

  const values = [
    { icon: Zap, title: "Cepat & Andal", desc: "Kami memberikan koneksi yang bukan hanya cepat, tapi juga stabil untuk segala aktivitas." },
    { icon: Users, title: "Fokus Pelanggan", desc: "Kepuasan Anda adalah prioritas utama kami dalam setiap layanan yang kami berikan." },
    { icon: Award, title: "Kualitas Terbaik", desc: "Kami hanya menggunakan teknologi fiber optik terdepan untuk menjamin kualitas." },
    { icon: Handshake, title: "Integritas", desc: "Kejujuran dan transparansi adalah landasan dalam berbisnis dan melayani." },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div className="relative h-[50vh] min-h-[400px]">
        <img alt="Tim MyRepublic berkolaborasi di kantor modern yang cerah" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Menghubungkan Indonesia</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Dengan Internet Fiber Ultra Cepat, Kami Membawa Masa Depan Digital ke Rumah Anda.</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-primary mb-4">Tentang MyRepublic</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="text-lg text-gray-600 leading-relaxed">
            MyRepublic adalah penyedia layanan internet (ISP) yang telah menjadi bagian dari Sinarmas Group, berkomitmen untuk memberikan layanan internet fiber terbaik bagi masyarakat Indonesia. Dengan semangat untuk terus berinovasi, kami menghadirkan koneksi ultra-cepat dan hiburan berkualitas untuk pelanggan residensial dan bisnis.
          </motion.p>
        </div>
      </div>
      
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="bg-purple-100 p-8 rounded-lg border-l-4 border-primary shadow-lg">
                <div className="flex items-center mb-4">
                   <Building className="w-10 h-10 text-primary mr-4" />
                   <h3 className="text-3xl font-bold text-gray-800">Visi Kami</h3>
                </div>
                <p className="text-gray-700 text-base">Menjadi penyedia layanan telekomunikasi yang membanggakan, memberikan inovasi, dan menjadi pilihan utama bagi masyarakat Indonesia untuk memenuhi kebutuhan data dan internet.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="bg-sky-100 p-8 rounded-lg border-l-4 border-sky-500 shadow-lg">
                <div className="flex items-center mb-4">
                   <Target className="w-10 h-10 text-sky-500 mr-4" />
                    <h3 className="text-3xl font-bold text-gray-800">Misi Kami</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base">
                  <li>Menyediakan layanan internet fiber dan hiburan yang inovatif dan berkualitas.</li>
                  <li>Memberikan pengalaman terbaik dan solusi yang bernilai tambah bagi pelanggan.</li>
                  <li>Menciptakan lingkungan kerja yang positif untuk mengembangkan talenta terbaik.</li>
                </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Perjalanan Kami</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-purple-200 rounded-full"></div>
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12">
                <div className={`p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mr-auto text-left' : 'ml-auto text-right'}`}>
                  <p className="text-2xl font-bold text-primary">{item.year}</p>
                  <p className="text-gray-600 mt-1">{item.event}</p>
                </div>
              </div>
              <div className="relative w-2/12 flex-shrink-0 flex justify-center">
                 <div className="w-6 h-6 bg-primary rounded-full z-10 border-4 border-white"></div>
              </div>
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
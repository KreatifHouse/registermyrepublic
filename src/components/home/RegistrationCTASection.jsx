import React from 'react';
import RegistrationFormSection from '@/components/home/RegistrationFormSection';
import { motion } from 'framer-motion';

const RegistrationCTASection = ({ openWhatsAppWithMessage }) => (
  <section id="daftar" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-100/20">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Siap untuk Internetan Super Cepat?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">Hanya butuh beberapa menit untuk mendaftar. Isi data diri Anda di samping dan tim kami akan segera menghubungi Anda untuk proses selanjutnya.</p>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img className="w-full h-full object-cover object-right-top" alt="Perangkat Smart Home MyRepublic terhubung dengan internet cepat" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/6e8568d9c2206cb1dbbf2c13f5f8d564.jpg" />
          </div>
        </div>
        <RegistrationFormSection openWhatsAppWithMessage={openWhatsAppWithMessage} />
      </motion.div>
    </div>
  </section>
);

export default RegistrationCTASection;
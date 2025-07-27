import React from 'react';
import { motion } from 'framer-motion';
import { kenapaPilihMyRepublic } from '@/data/siteData';

const KenapaPilihMyRepublicSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Kenapa Harus Pilih MyRepublic?</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Kami berkomitmen memberikan pengalaman internet terbaik untuk Anda dan keluarga dengan keunggulan berikut.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {kenapaPilihMyRepublic.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-start space-x-5 hover:border-primary/30 hover:bg-white"
          >
            <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-full">
              <item.icon {...item.iconProps} size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default KenapaPilihMyRepublicSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const TermsAndConditions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mt-12 md:mt-16">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-4 md:p-6 text-left"
          aria-expanded={isOpen}
          aria-controls="terms-content"
        >
          <h3 className="text-lg font-semibold text-gray-800">Syarat dan Ketentuan</h3>
          <ChevronUp
            className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="terms-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="px-4 md:px-6 pb-6">
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Promo berlaku untuk pelanggan baru yang berlangganan pada tanggal 1 - Juni 2025.</li>
                  <li>Promo berlaku untuk paket Internet Only dan Combo TV.</li>
                  <li>Promo berlaku selama 12 bulan berlangganan.</li>
                  <li>Harga tertera diatas sudah termasuk PPN 11%.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TermsAndConditions;
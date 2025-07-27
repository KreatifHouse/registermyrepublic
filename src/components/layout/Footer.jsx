import React from 'react';
import { myRepublicLogoUrl } from '@/data/siteData';

const FooterContent = ({ navigateTo }) => {

  const Link = ({ children, page }) => (
    <a href="#" onClick={(e) => {e.preventDefault(); navigateTo(page)}} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">{children}</a>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="space-y-6">
            <img src={myRepublicLogoUrl} alt="Logo MyRepublic Putih" className="h-10 filter brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed">Provider Internet terbaik dengan koneksi ultra cepat untuk semua kebutuhan Anda.</p>
          </div>
          
          <div>
            <p className="font-bold text-lg mb-5">Jelajahi</p>
            <ul className="space-y-3">
              <li><Link page="home">Beranda</Link></li>
              <li><a href="#paket-internet" onClick={(e) => {e.preventDefault(); navigateTo('home'); setTimeout(() => document.getElementById('paket-internet')?.scrollIntoView({behavior: 'smooth'}), 100)}} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Paket Internet</a></li>
              <li><Link page="promo">Promo</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-5">Informasi</p>
            <ul className="space-y-3">
              <li><Link page="terms">Syarat & Ketentuan</Link></li>
              <li><Link page="privacy">Kebijakan Privasi</Link></li>
              <li><Link page="about">Tentang Kami</Link></li>
              <li><Link page="payment-methods">Metode Pembayaran</Link></li>
            </ul>
          </div>
          
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MyRepublic. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
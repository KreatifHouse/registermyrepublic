import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Landmark, Wallet, Store, School as University } from 'lucide-react';

const PaymentMethodsPage = ({ navigateTo }) => {

  const paymentMethods = [
    {
      category: "Virtual Account",
      icon: Landmark,
      description: "Bayar langsung dari mobile banking atau ATM Anda.",
      items: [
        { name: "BCA Virtual Account", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia_logo.svg/2560px-Bank_Central_Asia_logo.svg.png" },
        { name: "Mandiri Virtual Account", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo.svg.png" },
        { name: "BNI Virtual Account", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png" },
        { name: "BRI Virtual Account", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png" },
        { name: "Permata Virtual Account", logo: "https://upload.wikimedia.org/wikipedia/id/thumb/f/f7/PermataBank_logo.svg/1200px-PermataBank_logo.svg.png" },
        { name: "Bank Lainnya", logo: "https://upload.wikimedia.org/wikipedia/id/thumb/9/9e/ATM_Bersama_logo.svg/1200px-ATM_Bersama_logo.svg.png" },
      ]
    },
    {
      category: "E-Wallet",
      icon: Wallet,
      description: "Gunakan saldo dompet digital favorit Anda.",
      items: [
        { name: "Gopay", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png" },
        { name: "OVO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/1200px-Logo_ovo_purple.svg.png" },
        { name: "DANA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png" },
        { name: "ShopeePay", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/ShopeePay_logo.svg/1200px-ShopeePay_logo.svg.png" },
      ]
    },
    {
      category: "Gerai Retail",
      icon: Store,
      description: "Bayar tunai di gerai terdekat di kota Anda.",
      items: [
        { name: "Indomaret", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Logo_Indomaret.svg/1200px-Logo_Indomaret.svg.png" },
        { name: "Alfamart", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/ALFAMART_LOGO_BARU.png/1200px-ALFAMART_LOGO_BARU.png" },
      ]
    },
    {
      category: "Auto Debit",
      icon: CreditCard,
      description: "Tagihan dibayar otomatis setiap bulan.",
      items: [
        { name: "Kartu Kredit VISA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" },
        { name: "Kartu Kredit Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-center mb-12"
        >
            <CreditCard className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Metode Pembayaran</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pilih cara pembayaran yang paling mudah dan nyaman untuk Anda.
            </p>
        </motion.div>

        <div className="space-y-12">
          {paymentMethods.map((method, index) => (
            <motion.div 
              key={method.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <method.icon className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{method.category}</h2>
                  <p className="text-gray-500">{method.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {method.items.map((item) => (
                  <div key={item.name} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex items-center justify-center h-24 transition-transform hover:scale-105 hover:shadow-lg">
                    <img src={item.logo} alt={`Logo ${item.name}`} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
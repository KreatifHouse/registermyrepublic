import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

const RegistrationModal = ({ isOpen, onClose, selectedPackage, whatsappNumber }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: "Error",
        description: "Mohon lengkapi Nama, Nomor WhatsApp, dan Alamat.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    const message = `Halo MyRepublic,

Saya tertarik untuk mendaftar paket internet berikut:
--------------------------------------------------
📦 *Paket:* ${selectedPackage?.name}
🚀 *Kecepatan:* ${selectedPackage?.speed}
💰 *Harga:* Rp ${selectedPackage?.price.toLocaleString('id-ID')}/bulan
--------------------------------------------------

👤 *Data Calon Pelanggan:*
• Nama Lengkap: ${formData.name}
• Nomor WhatsApp: ${formData.phone}
• Alamat Lengkap Pemasangan: ${formData.address}
${formData.email ? `• Email: ${formData.email}` : ''}
--------------------------------------------------

Mohon bantuannya untuk proses selanjutnya. Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Form Terkirim!",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan pendaftaran.",
      duration: 3000,
    });
    
    onClose();
    setFormData({ name: '', phone: '', address: '', email: '' }); 
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <Card className="border-0">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 z-10"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>

              <CardHeader className="bg-primary text-primary-foreground text-center p-6">
                <CardTitle className="text-2xl font-bold">
                  Formulir Pendaftaran
                </CardTitle>
                {selectedPackage && (
                  <CardDescription className="text-primary-foreground/80">
                    Paket Pilihan: <span className="font-semibold">{selectedPackage.name} ({selectedPackage.speed})</span>
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Nama Lengkap <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Contoh: Budi Santoso"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Nomor WhatsApp <span className="text-red-500">*</span></Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 081234567890"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">Alamat Lengkap Pemasangan <span className="text-red-500">*</span></Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Contoh: Jl. Merdeka No. 10, RT 01/RW 02, Kel. Bahagia, Kec. Sentosa, Kota Maju"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Alamat Email (Opsional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Contoh: budi.santoso@email.com"
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 text-base rounded-lg shadow-md transition-transform hover:scale-102"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Kirim & Lanjut ke WhatsApp
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-6">
                  Dengan menekan tombol di atas, Anda akan diarahkan ke WhatsApp untuk mengirimkan data pendaftaran.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;
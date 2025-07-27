import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "@/components/ui/use-toast";

const RegistrationFormSection = ({ openWhatsAppWithMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      toast({ title: "Error", description: "Semua data wajib diisi.", variant: "destructive" });
      return;
    }
    if (!formData.agree) {
      toast({ title: "Error", description: "Anda harus menyetujui Syarat & Ketentuan.", variant: "destructive" });
      return;
    }

    const message = `Pendaftaran Baru MyRepublic:
Nama: ${formData.name}
Handphone: ${formData.phone}
Email: ${formData.email}
Alamat Pemasangan: ${formData.address}

Saya telah menyetujui Syarat & Ketentuan untuk proses registrasi. Mohon bantuannya.`;

    openWhatsAppWithMessage(message);
    toast({ title: "Formulir Terkirim!", description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan." });
    
    setFormData({ name: '', phone: '', email: '', address: '', agree: false });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">Nama Lengkap*</Label>
          <Input type="text" name="name" id="name" placeholder="Nama Lengkap Kamu" value={formData.name} onChange={handleInputChange} required className="mt-1 text-sm bg-gray-50 border-gray-300 focus:border-primary focus:ring-primary" />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Nomor Handphone*</Label>
          <div className="flex items-center mt-1">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm h-10">
              +62
            </span>
            <Input type="tel" name="phone" id="phone" placeholder="812 345 678" value={formData.phone} onChange={handleInputChange} required className="rounded-l-none text-sm bg-gray-50 border-gray-300 focus:border-primary focus:ring-primary" />
          </div>
        </div>

        <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email*</Label>
            <Input type="email" name="email" id="email" placeholder="emailkamu@domain.com" value={formData.email} onChange={handleInputChange} required className="mt-1 text-sm bg-gray-50 border-gray-300 focus:border-primary focus:ring-primary" />
        </div>

        <div>
          <Label htmlFor="address" className="text-sm font-medium text-gray-700">Alamat Lengkap Pemasangan*</Label>
          <Textarea name="address" id="address" placeholder="Masukkan alamat lengkap, nama perumahan, nomor rumah, RT/RW" value={formData.address} onChange={handleInputChange} required className="mt-1 text-sm bg-gray-50 border-gray-300 focus:border-primary focus:ring-primary" />
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <Checkbox id="agree" name="agree" checked={formData.agree} onCheckedChange={(checked) => setFormData(prev => ({...prev, agree: checked}))} className="mt-0.5" />
          <Label htmlFor="agree" className="text-xs text-gray-600 leading-tight">
            Saya setuju bahwa data diri tersebut akan digunakan untuk proses registrasi MyRepublic dan telah membaca Syarat & Ketentuan yang berlaku.
          </Label>
        </div>
        
        <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">Daftar Sekarang</Button>
      </form>
    </div>
  );
};

export default RegistrationFormSection;
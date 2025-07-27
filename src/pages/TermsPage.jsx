import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, User, Signal, CreditCard, Wrench as Tool, Shield, MessageSquare, PowerOff } from 'lucide-react';

const TermsPage = ({ navigateTo }) => {
  const Section = ({ icon, title, children }) => (
    <section className="mb-8">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-bold text-gray-800 m-0">{title}</h2>
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  );
  
  const Icon = ({ component }) => {
      const LucideIcon = component;
      return <LucideIcon className="w-7 h-7 text-primary mr-4 flex-shrink-0"/>;
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Syarat & Ketentuan Berlangganan
            </h1>
            <p className="text-lg text-gray-600 mb-12">
                Mohon baca dengan saksama. Dengan berlangganan, Anda setuju dengan seluruh ketentuan di bawah ini.
            </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-xl rounded-2xl">
          <div className="prose lg:prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500">Terakhir Diperbarui: 13 Juni 2025</p>

            <Section icon={<Icon component={User} />} title="1. Pendaftaran & Aktivasi">
              <p>Pelanggan wajib memberikan data yang valid (KTP/KITAS/Paspor). Layanan akan diaktifkan setelah proses verifikasi, pembayaran pertama, dan instalasi berhasil dilakukan oleh teknisi MyRepublic.</p>
            </Section>

            <Section icon={<Icon component={Signal} />} title="2. Layanan">
              <p>MyRepublic menyediakan layanan internet ultra-cepat dan/atau TV Kabel. Kecepatan yang tertera adalah kecepatan maksimal dan dapat bervariasi tergantung pada kondisi jaringan dan faktor teknis lainnya.</p>
              <p>Layanan ini hanya untuk penggunaan pribadi dan tidak boleh diperjualbelikan atau digunakan untuk aktivitas ilegal.</p>
            </Section>

            <Section icon={<Icon component={CreditCard} />} title="3. Pembayaran">
              <p>Tagihan akan dikirimkan setiap bulan ke email terdaftar. Pembayaran harus dilakukan sebelum tanggal jatuh tempo. Keterlambatan pembayaran dapat mengakibatkan pengisolasian layanan dan denda keterlambatan.</p>
              <p>Biaya berlangganan belum termasuk PPN 11%.</p>
            </Section>
            
            <Section icon={<Icon component={Tool} />} title="4. Perangkat">
              <p>Perangkat yang dipinjamkan (ONT/Modem, STB) adalah milik MyRepublic. Pelanggan wajib menjaga perangkat dalam kondisi baik. Kerusakan atau kehilangan perangkat akan dikenakan biaya penggantian.</p>
            </Section>
            
            <Section icon={<Icon component={Shield} />} title="5. Tanggung Jawab Pelanggan">
              <p>Pelanggan bertanggung jawab penuh atas segala aktivitas yang menggunakan layanan MyRepublic dari alamat instalasinya. Pelanggan wajib menjaga kerahasiaan password dan data pribadi lainnya.</p>
            </Section>

            <Section icon={<Icon component={PowerOff} />} title="6. Penghentian Layanan">
              <p>Untuk berhenti berlangganan, pelanggan harus mengajukan permohonan resmi dan menyelesaikan seluruh kewajiban pembayaran. Pengembalian perangkat wajib dilakukan.</p>
              <p>Pemutusan sebelum masa kontrak berakhir (jika ada) akan dikenakan penalti sesuai ketentuan promo yang berlaku.</p>
              <p>MyRepublic berhak menghentikan layanan jika pelanggan melanggar syarat dan ketentuan atau menggunakan layanan untuk aktivitas yang melanggar hukum.</p>
            </Section>
            
            <Section icon={<Icon component={MessageSquare} />} title="7. Lain-lain">
              <p>MyRepublic dapat mengubah syarat & ketentuan ini dari waktu ke waktu. Informasi perubahan akan diumumkan melalui situs web resmi atau email. Dengan tetap menggunakan layanan, pelanggan dianggap menyetujui perubahan tersebut.</p>
            </Section>

            <div className="text-center mt-12">
              <Button onClick={() => navigateTo('home')} size="lg" className="bg-primary hover:bg-primary/90 text-white transition-transform duration-300 hover:scale-105">
                Kembali ke Beranda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
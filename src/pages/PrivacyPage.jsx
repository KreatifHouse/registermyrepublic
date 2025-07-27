import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Database, Share2, UserCheck, Inbox, Clock, ExternalLink } from 'lucide-react';

const PrivacyPage = ({ navigateTo }) => {
  return (
    <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <ShieldCheck className="w-16 h-16 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Kebijakan Privasi
                </h1>
                <p className="text-lg text-gray-600 mb-12">
                    Privasi Anda adalah prioritas kami. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai dengan hukum yang berlaku di Indonesia.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-xl rounded-2xl">
                <div className="prose lg:prose-lg max-w-none text-gray-700">
                    <p className="text-sm text-gray-500">Terakhir Diperbarui: 13 Juni 2025</p>
                    <p>
                        PT Eka Mas Republik ("MyRepublic", "kami") sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini bertujuan untuk menginformasikan Anda tentang bagaimana kami mengelola Data Pribadi yang kami kumpulkan sesuai dengan Peraturan Menteri Komunikasi dan Informatika No. 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik.
                    </p>

                    <div className="space-y-10 mt-10">
                        <section>
                            <div className="flex items-center mb-3">
                               <Database className="w-7 h-7 text-primary mr-3 flex-shrink-0"/>
                               <h2 className="text-2xl font-bold text-gray-800 m-0">Pengumpulan Informasi Pribadi</h2>
                            </div>
                            <p>Kami mengumpulkan Data Pribadi Anda agar dapat menyediakan layanan kami. Data ini dapat mencakup:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Informasi identitas seperti nama, nomor KTP, tanggal lahir, dan jenis kelamin.</li>
                                <li>Informasi kontak seperti alamat, nomor telepon, dan alamat email.</li>
                                <li>Informasi pembayaran seperti detail rekening bank dan kartu kredit.</li>
                                <li>Informasi teknis seperti alamat IP, data lokasi, dan detail perangkat yang digunakan untuk mengakses layanan kami.</li>
                                <li>Informasi lain yang Anda berikan secara sukarela saat berinteraksi dengan kami.</li>
                            </ul>
                        </section>
                        
                        <section>
                           <div className="flex items-center mb-3">
                               <UserCheck className="w-7 h-7 text-primary mr-3 flex-shrink-0"/>
                               <h2 className="text-2xl font-bold text-gray-800 m-0">Penggunaan Informasi Pribadi</h2>
                            </div>
                            <p>Informasi Anda kami gunakan untuk:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Memverifikasi identitas Anda dan memproses pendaftaran layanan.</li>
                                <li>Menyediakan, mengelola, dan meningkatkan kualitas layanan kami.</li>
                                <li>Memproses tagihan dan pembayaran.</li>
                                <li>Menanggapi pertanyaan, keluhan, dan memberikan dukungan pelanggan.</li>
                                <li>Mengirimkan informasi promosi dan pembaruan layanan (dengan persetujuan Anda).</li>
                                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku.</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center mb-3">
                               <Share2 className="w-7 h-7 text-primary mr-3 flex-shrink-0"/>
                               <h2 className="text-2xl font-bold text-gray-800 m-0">Pengungkapan Informasi Pribadi</h2>
                            </div>
                            <p>Kami tidak akan memperdagangkan atau menjual Data Pribadi Anda. Kami dapat mengungkapkan informasi Anda kepada pihak ketiga dalam situasi berikut:</p>
                             <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Kepada afiliasi dan perusahaan dalam Sinarmas Group untuk tujuan layanan terintegrasi.</li>
                                <li>Kepada vendor, konsultan, dan penyedia layanan pihak ketiga yang bekerja atas nama kami (misalnya, teknisi instalasi, mitra penagihan).</li>
                                <li>Jika diwajibkan oleh hukum, proses hukum, atau permintaan dari otoritas pemerintah.</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center mb-3">
                               <Inbox className="w-7 h-7 text-primary mr-3 flex-shrink-0"/>
                               <h2 className="text-2xl font-bold text-gray-800 m-0">Penyimpanan dan Keamanan Data</h2>
                            </div>
                            <p>
                               Kami menyimpan Data Pribadi Anda selama diperlukan untuk tujuan layanan atau selama diwajibkan oleh hukum. Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data Anda dari akses, pengungkapan, atau modifikasi yang tidak sah.
                            </p>
                        </section>
                         <section>
                            <div className="flex items-center mb-3">
                               <Clock className="w-7 h-7 text-primary mr-3 flex-shrink-0"/>
                               <h2 className="text-2xl font-bold text-gray-800 m-0">Pembaruan Kebijakan</h2>
                            </div>
                            <p>
                               Kami dapat meninjau dan mengubah Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan selalu tersedia di situs web kami. Dengan terus menggunakan layanan kami, Anda dianggap menyetujui versi terbaru dari kebijakan ini.
                            </p>
                        </section>
                    </div>
                    
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

export default PrivacyPage;
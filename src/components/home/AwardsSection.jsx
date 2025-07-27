import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import Marquee from '@/components/ui/marquee';

const AwardsSection = () => {
  const nationalAwards = [
    { name: "HR Asia Best Companies to Work for in Asia 2018", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/e82a6c31b89e96361d619ef3bb756d6b.webp" },
    { name: "HR Asia Best Companies to Work for in Asia 2020", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/2b8922dba3141c1dcf348da5c3e94553.webp" },
    { name: "HR Asia Best Companies to Work for in Asia 2021", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/a8758e00692ebdf1901870789fcc1cb4.webp" },
    { name: "Indonesia Customer Experience Award 2021", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/b0dbde9f4dc6075c24692c620ac236a5.webp" },
    { name: "Indonesia Customer Experience Award 2022", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/d679f179804f4565cb0214d0413a4443.webp" },
    { name: "Top Brand Award 2022", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/df6af455a0abdada98b681fde4d49542.webp" },
    { name: "ACES Awards - Asia's Best Performing Companies 2022", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/04e615aad8ee19aca20411be3755e80e.webp" },
    { name: "Great Place To Work Certified Nov 2023 - Nov 2024 Indonesia", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/c5e5503ffb954b9f03655b712d114c72.webp" },
    { name: "Great Place To Work Certified Nov 2022 - Nov 2023 Indonesia", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/8d19e8655a7268ffb5f5fe394c096ae3.webp" },
    { name: "Digital User Experience Award 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/0d61e11b6d49b0beeaad38fa06c9d6c1.webp" },
    { name: "ACES Awards - Asia's Most Inspiring Executives 2022", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/60b6196d0eb2d5566fd9090218bd2372.webp" },
    { name: "Top CSR of The Year 2022", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/67d99b67f43e5c3b0470d5ad4c811cd0.webp" },
    { name: "Indonesia Best Customer Service Champions 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/0b451d0df38a88333acadc0a7982ba89.webp" },
    { name: "Wow Brand Festive Day 2023 - Gold Champion", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/ffdb42c98c7681ba5bf9b567e6bd919c.webp" },
    { name: "Indonesia Best Business Transformation Award 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/f9f6354a425568e62badbd447187b554.webp" },
    { name: "Top Brand Award 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/1a0a0b4f9624e9d06a37f2cbe416dca2.webp" },
    { name: "Service Quality Award 2023 Diamond", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/d609376ad7cb2b8bd41ccbf962732645.webp" },
    { name: "Indonesia Digital Popular Brand Award 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/9864532fc19430eace9ec0d462cfbe55.webp" },
    { name: "Best Choice Award 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/6e6be0089e3b2ea339bdedda60651ed6.webp" },
    { name: "Indonesia Best Workplace For Women Award 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/988e614dac2b02f73aac772c611dd30b.webp" },
    { name: "Marketeers OMNI Brands of The Year 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/87097ddbaa69f33a47d65318d5b551aa.webp" },
    { name: "HR Excellence Award 2023 - Gold Winner", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/74cd796bb4a5dd2c0e45f8e9130268bb.webp" },
    { name: "NPS Excellence Award 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/2571835d486f23a02224b3ef132f84b8.webp" },
    { name: "Corporate Reputation Awards 2023", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/7553d9c64e5865168c10094640c41474.webp" },
  ];

  const uniqueNationalAwards = Array.from(new Set(nationalAwards.map(a => a.url)))
    .map(url => {
      return nationalAwards.find(a => a.url === url)
    });

  const isoCertifications = [
    { name: "ISO 45001", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/2e5927c93ee05ea109cbd27ea0b24f77.webp" },
    { name: "ISO 14001", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/1de482ecbd749e3b794180b022d577e2.webp" },
    { name: "ISO 27001", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/beaf4393257fa23a384dd9f7ddefeb1e.webp" },
    { name: "ISO 27701", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/f00857006c40c129d639e334f43bed63.webp" },
    { name: "ISO 9001", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/1ec41f4706f3452eaa4e656f26e3fbc6.webp" },
    { name: "ISO SMKM", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/9fc94b57163a01ac53279e6373b5e424.webp" },
  ];

  const AwardLogo = ({ award }) => (
    <div className="p-1 bg-white rounded-lg shadow-sm flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mx-1.5 flex-shrink-0">
      <img src={award.url} alt={`Logo Penghargaan ${award.name}`} className="max-h-12 md:max-h-16 object-contain" />
    </div>
  );

  const IsoLogo = ({ cert }) => (
    <div className="p-0.5 bg-white rounded-full shadow-sm flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mx-1.5 flex-shrink-0">
      <img src={cert.url} alt={`Logo Sertifikasi ${cert.name}`} className="h-6 md:h-8 object-contain" />
    </div>
  );

  return (
    <section className="bg-gray-50 py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-myrep-purple-600"/>Penghargaan Nasional
            </h3>
            <Marquee pauseOnHover className="[--duration:50s] [--gap:0.5rem]">
              {uniqueNationalAwards.map((award, index) => (
                <AwardLogo key={`national-${index}`} award={award} />
              ))}
            </Marquee>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center justify-center gap-2">
              <ShieldCheck className="w-6 h-6 text-myrep-purple-600"/>Sertifikasi ISO Terintegrasi
            </h3>
            <Marquee pauseOnHover reverse className="[--duration:30s] [--gap:0.5rem]">
              {isoCertifications.map((cert, index) => (
                <IsoLogo key={`iso-${index}`} cert={cert} />
              ))}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
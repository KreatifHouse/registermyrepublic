import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Zap, Wifi, HardDrive, Settings, Smartphone, ArrowDownUp, CheckCircle, Globe, Headphones, Router, UserCheck, Tv2, Film } from 'lucide-react';

const benefitIcons = {
  Zap: (props) => <Zap {...props} />,
  Wifi: (props) => <Wifi {...props} />,
  HardDrive: (props) => <HardDrive {...props} />,
  Settings: (props) => <Settings {...props} />,
  Smartphone: (props) => <Smartphone {...props} />,
  ArrowDownUp: (props) => <ArrowDownUp {...props} />,
  CheckCircle: (props) => <CheckCircle {...props} />,
  Globe: (props) => <Globe {...props} />,
  Headphones: (props) => <Headphones {...props} />,
  Router: (props) => <Router {...props} />,
  UserCheck: (props) => <UserCheck {...props} />,
  Tv2: (props) => <Tv2 {...props} />,
  Film: (props) => <Film {...props} />
};

const PackageCard = ({ packageData, index, onRegister, activeContract }) => {
  const { name, speed, upgradedSpeed, price, benefits, bestseller, image, equivalentPrice } = packageData;

  const handleSelectPackage = () => {
    onRegister(packageData);
  };

  let priceDisplay;
  if (activeContract && activeContract !== "1bulan" && equivalentPrice) {
    priceDisplay = (
      <>
        <p className="text-2xl font-extrabold text-gray-900">
          Rp{equivalentPrice.toLocaleString('id-ID', { maximumFractionDigits: 0 })}
        </p>
        <p className="text-sm text-emerald-700 font-bold">
          Setara Rp{price.toLocaleString('id-ID', { maximumFractionDigits: 0 })}
          <span className="text-xs font-medium text-gray-500"> /Bulan</span>
        </p>
      </>
    );
  } else {
    priceDisplay = (
      <p className="text-2xl font-extrabold text-gray-900">
        Rp{price.toLocaleString('id-ID')}
        <span className="text-base font-medium text-gray-500"> /Bulan</span>
      </p>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white flex flex-col h-full relative">
        {bestseller && (
          <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden z-20">
            <div className="absolute transform rotate-45 bg-primary text-center text-white font-semibold py-1 -right-10 top-5 w-[120px]">
              Best Seller
            </div>
          </div>
        )}
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 rounded-t-2xl"></div>
            <img src={image} alt={`Latar belakang paket ${name}`} className="w-full h-40 object-cover rounded-t-2xl" />
        </div>

        <CardContent className="p-4 flex flex-col flex-grow text-center">
          <h3 className="text-2xl font-extrabold text-primary mb-2 min-h-[4rem] flex items-center justify-center">
            {name}
          </h3>
          {upgradedSpeed && !(name === "Prime 500" || name === "Prime 500 Combo TV") && (
             <div className="border-2 border-dashed border-amber-400 bg-amber-50 rounded-lg p-2 text-center mb-4 mx-auto max-w-max">
                <p className="text-sm text-amber-800 font-bold animate-pulse">
                    Gratis Upgrade ke {upgradedSpeed} Mbps
                </p>
            </div>
          )}
          
          <div className="my-4">
            {priceDisplay}
            <p className="text-xs text-gray-400 mt-1">Harga termasuk PPN 11%</p>
          </div>

          <div className="border-t border-gray-100 pt-4 flex-grow flex flex-col min-h-0 text-left">
            <h4 className="font-semibold text-gray-700 mb-3 flex-shrink-0">Fitur dan Benefit</h4>
            <div className="overflow-y-auto pr-2 space-y-3 text-sm text-gray-600 max-h-[150px]">
              {benefits?.map((item, idx) => {
                const IconComponent = benefitIcons[item.icon] || Zap;
                return (
                  <li key={idx} className="flex items-start list-none">
                    <IconComponent className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </div>
          </div>
          
          <div className="pt-4 flex-shrink-0 mt-auto">
             <Button 
                onClick={handleSelectPackage}
                className="w-full font-bold text-base py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 bg-primary hover:bg-purple-700 text-white"
             >
                Pilih Paket
            </Button>
          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PackageCard;
import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Tv2, Film, ArrowDownUp } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import { Button } from "@/components/ui/button";
import { 
  residentialInternetPackages, 
  residentialInternetTvPackages, 
  residentialInternetStreamingPackages,
  smeInternetPackages, 
  smeInternetTvPackages 
} from '@/data/packages';
import TermsAndConditions from '@/components/home/TermsAndConditions';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useMediaQuery from '@/hooks/useMediaQuery';

const PaketInternetSection = ({ activeMainTab, setActiveMainTab, activeSubTab, setActiveSubTab, activeContract, setActiveContract, handleRegister }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const isMobile = useMediaQuery("(max-width: 767px)");

  const baseContractOptions = [
      { id: '1bulan', label: '1 Bulan', order: 1 },
      { id: '5get1', label: 'Promo 5 Get 1', order: 2 },
      { id: '9get3', label: 'Promo 9 Get 3', order: 3 },
      { id: '12get6', label: 'Promo 12 Get 6', order: 4 },
  ];
  
  const contractOptions = useMemo(() => {
    if (activeMainTab === 'sme') {
      return baseContractOptions.filter(option => option.id === '1bulan');
    }
    return baseContractOptions;
  }, [activeMainTab]);

  const sortedContractTabs = useMemo(() => {
    return [...contractOptions].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.order - b.order;
      } else {
        return b.order - a.order;
      }
    });
  }, [sortOrder, contractOptions]);

  useEffect(() => {
    // If current activeContract is a promo and we switch to SME, reset to '1bulan'
    if (activeMainTab === 'sme' && activeContract !== '1bulan') {
      setActiveContract('1bulan');
    }
  }, [activeMainTab, activeContract, setActiveContract]);

  const handleSortToggle = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const serviceTabs = {
    residential: [
      { id: "internet", label: "Internet", icon: Wifi },
      { id: "internet+tv", label: "Internet + TV", icon: Tv2 },
      // { id: "internet+streaming", label: "Internet + Streaming", icon: Film }, // Hidden for now
    ],
    sme: [
      { id: "internet-sme", label: "Internet Bisnis", icon: Wifi },
      { id: "internet-sme-tv", label: "Bisnis + TV", icon: Tv2 },
    ]
  };

  const packages = {
    "internet": residentialInternetPackages,
    "internet+tv": residentialInternetTvPackages,
    "internet+streaming": residentialInternetStreamingPackages, // Keep data for potential future use
    "internet-sme": smeInternetPackages,
    "internet-sme-tv": smeInternetTvPackages,
  };
  
  const currentPackages = packages[activeSubTab]?.[activeContract] || [];
  
  useEffect(() => {
    if (activeMainTab === 'residential' && activeSubTab === 'internet+streaming') {
      setActiveSubTab('internet'); // Default to internet if internet+streaming was active
    }
  }, [activeMainTab, activeSubTab, setActiveSubTab]);


  const handleMainTabChange = (tab) => {
    setActiveMainTab(tab);
    if (tab === 'residential') {
      if (activeSubTab === 'internet-sme' || activeSubTab === 'internet-sme-tv' || activeSubTab === 'internet+streaming') {
        setActiveSubTab('internet');
      }
    } else if (tab === 'sme') {
      if (activeSubTab === 'internet' || activeSubTab === 'internet+tv' || activeSubTab === 'internet+streaming') {
        setActiveSubTab('internet-sme');
      }
      // Ensure contract is reset to '1bulan' when switching to SME
      if (activeContract !== '1bulan') {
        setActiveContract('1bulan');
      }
    }
    // Don't reset contract if switching from SME to residential if it's a valid promo
    // setActiveContract('1bulan'); // This was resetting contract on every main tab change
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50/30 to-white" id="paket-internet">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center rounded-xl border border-purple-200 bg-white p-1">
              <button
                onClick={() => handleMainTabChange('residential')}
                className={`px-8 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                  activeMainTab === 'residential'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-500 hover:bg-purple-50'
                }`}
              >
                Residensial
              </button>
              <button
                onClick={() => handleMainTabChange('sme')}
                className={`px-8 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                  activeMainTab === 'sme'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-500 hover:bg-purple-50'
                }`}
              >
                Bisnis SME
              </button>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 tracking-tight">
            Internetan Super Lancar dan Unlimited!
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hemat Besar Mulai Rp 235.000 - Streaming Lancar, Gaming Tanpa Lag, Langganan Sekarang
          </p>
        </motion.div>
        
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {sortedContractTabs.map(tab => (
                        <Button key={tab.id} variant={activeContract === tab.id ? 'secondary' : 'outline'} className="rounded-full text-xs md:text-sm whitespace-nowrap" onClick={() => setActiveContract(tab.id)}>
                            {tab.label}
                        </Button>
                    ))}
                </div>
                 <div className="flex-shrink-0">
                    <Button variant="outline" className="rounded-full w-full md:w-auto" onClick={handleSortToggle}>
                        <ArrowDownUp className="mr-2 h-4 w-4" /> Urutkan
                    </Button>
                </div>
            </div>
             <div className="border-t my-4"></div>
             <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {(activeMainTab === 'residential' ? serviceTabs.residential : serviceTabs.sme).map(tab => (
                     <Button key={tab.id} variant={activeSubTab === tab.id ? 'soft' : 'ghost'} className="rounded-full" onClick={() => setActiveSubTab(tab.id)}>
                        <tab.icon className="mr-2 h-4 w-4" /> {tab.label}
                    </Button>
                ))}
             </div>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 gap-6">
            {currentPackages.length > 0 ? (
              currentPackages.map((pkg, index) => (
                <PackageCard
                  key={`${activeMainTab}-${activeSubTab}-${activeContract}-${pkg.name}-${index}`}
                  packageData={pkg}
                  index={index}
                  onRegister={handleRegister}
                  activeContract={activeContract}
                />
              ))
            ) : (
              <div className="text-center py-10 w-full">
                <p className="text-gray-500">Paket tidak tersedia untuk pilihan ini.</p>
              </div>
            )}
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {currentPackages.length > 0 ? (
                currentPackages.map((pkg, index) => (
                  <CarouselItem key={`${activeMainTab}-${activeSubTab}-${activeContract}-${pkg.name}-${index}`} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <PackageCard
                      packageData={pkg}
                      index={index}
                      onRegister={handleRegister}
                      activeContract={activeContract}
                    />
                  </CarouselItem>
                ))
              ) : (
                <CarouselItem>
                  <div className="text-center py-10 w-full">
                    <p className="text-gray-500">Paket tidak tersedia untuk pilihan ini.</p>
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            {currentPackages.length > (isMobile ? 0 : 3) && !isMobile && ( // Adjusted condition for carousel controls
              <>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </>
            )}
          </Carousel>
        )}

        <TermsAndConditions />
      </div>
    </section>
  );
};

export default PaketInternetSection;
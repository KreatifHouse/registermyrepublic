import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import KenapaPilihMyRepublicSection from '@/components/home/KenapaPilihMyRepublicSection';
import PaketInternetSection from '@/components/home/PaketInternetSection';
import HiburanSection from '@/components/home/HiburanSection';
import AwardsSection from '@/components/home/AwardsSection';
import RegistrationCTASection from '@/components/home/RegistrationCTASection';

const HomePage = ({
  handleRegister, 
  openWhatsAppWithMessage,
  activeMainTab, setActiveMainTab,
  activeSubTab, setActiveSubTab, 
  activeContract, setActiveContract,
  navigateTo
}) => {
  return (
    <main className="bg-white">
      <HeroSection />
      <KenapaPilihMyRepublicSection />
      <PaketInternetSection 
        activeMainTab={activeMainTab}
        setActiveMainTab={setActiveMainTab}
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
        activeContract={activeContract}
        setActiveContract={setActiveContract}
        handleRegister={handleRegister}
      />
      <RegistrationCTASection openWhatsAppWithMessage={openWhatsAppWithMessage} />
      <HiburanSection navigateTo={navigateTo} />
      <AwardsSection />
    </main>
  );
}

export default HomePage;
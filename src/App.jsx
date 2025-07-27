import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import RegistrationModal from '@/components/RegistrationModal';
import Header from '@/components/layout/Header';
import FooterContent from '@/components/layout/Footer'; 
import HomePage from '@/pages/HomePage';
import PromoPage from '@/pages/PromoPage';
import PaymentMethodsPage from '@/pages/PaymentMethodsPage';
import TvChannelsPage from '@/pages/TvChannelsPage';
import AboutPage from '@/pages/AboutPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import BantuanPage from '@/pages/BantuanPage';
import { WHATSAPP_NUMBER, myRepublicLogoUrl, chatIconUrl } from '@/data/siteData';
import { useToast } from "@/components/ui/use-toast";

const validPages = ["home", "promo", "payment-methods", "tv-channels", "about", "privacy", "terms", "bantuan"];

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeMainTab, setActiveMainTab] = useState("residential"); 
  const [activeSubTab, setActiveSubTab] = useState("internet");
  const [activeContract, setActiveContract] = useState("1bulan"); 
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleRegister = (packageData) => {
    setSelectedPackage(packageData);
    setIsModalOpen(true);
  };
  
  const openWhatsAppWithMessage = (message) => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigateTo = (page) => {
    if (!validPages.includes(page)) {
      page = "home"; // Fallback ke home jika page tidak valid
    }
    setCurrentPage(page);
    setIsMobileMenuOpen(false); 
    window.scrollTo(0, 0);
    
    // Update URL di browser
    const newPath = page === "home" ? "/" : `/${page}`;
    window.history.pushState({path: newPath}, '', newPath);

    // Atur ulang tab jika kembali ke home
    if (page === "home") {
      setActiveMainTab("residential");
      setActiveSubTab("internet");
      setActiveContract("1bulan");
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      const path = window.location.pathname.substring(1) || "home";
      if (validPages.includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage("home"); 
         // Arahkan ke home jika path tidak dikenali dan update URL
        window.history.replaceState({path: "/"}, '', "/");
      }
    };

    // Initial page load handling
    const initialPath = window.location.pathname.substring(1) || "home";
    if (validPages.includes(initialPath)) {
      setCurrentPage(initialPath);
    } else {
      setCurrentPage("home");
      // Ganti URL ke root jika path awal tidak valid
      window.history.replaceState({path: "/"}, '', "/");
    }

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);


  const handleSetActiveSubTab = (tabId) => {
    if (activeMainTab === "residential" && tabId === "internet+streaming") {
      const residentialServiceTabs = [
        { id: "internet", label: "Internet" },
        { id: "internet+tv", label: "Internet + TV" },
      ];
      if (!residentialServiceTabs.find(tab => tab.id === tabId)) {
        setActiveSubTab("internet");
        return;
      }
    }
    setActiveSubTab(tabId);
  };


  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage 
                  handleRegister={handleRegister}
                  openWhatsAppWithMessage={openWhatsAppWithMessage}
                  activeMainTab={activeMainTab}
                  setActiveMainTab={setActiveMainTab}
                  activeSubTab={activeSubTab}
                  setActiveSubTab={handleSetActiveSubTab}
                  activeContract={activeContract}
                  setActiveContract={setActiveContract}
                  navigateTo={navigateTo}
                />;
      case "promo":
        return <PromoPage navigateTo={navigateTo} openWhatsAppWithMessage={openWhatsAppWithMessage} />;
      case "payment-methods":
        return <PaymentMethodsPage navigateTo={navigateTo} />;
      case "tv-channels":
        return <TvChannelsPage navigateTo={navigateTo} />;
      case "about":
        return <AboutPage navigateTo={navigateTo} />;
      case "privacy":
        return <PrivacyPage navigateTo={navigateTo} />;
      case "terms":
        return <TermsPage navigateTo={navigateTo} />;
      case "bantuan":
        return <BantuanPage navigateTo={navigateTo} openWhatsAppWithMessage={openWhatsAppWithMessage} />;
      default: // Fallback jika currentPage tidak dikenali
         navigateTo("home"); // Navigasi kembali ke home
         return null; // Atau tampilkan komponen loading/error sementara
    }
  };
  
  const FloatingChatButton = () => (
    <button
      onClick={() => openWhatsAppWithMessage("Halo, saya ingin bertanya tentang layanan MyRepublic.")}
      className="fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
      aria-label="Chat with Maira on WhatsApp"
    >
      <img src={chatIconUrl} alt="Ikon Chat WhatsApp MyRepublic" className="w-20 h-20 md:w-24 md:h-24 object-contain"/>
    </button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col font-manrope">
      <Header 
        logoUrl={myRepublicLogoUrl}
        navigateTo={navigateTo} 
        currentPage={currentPage}
      />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <FooterContent navigateTo={navigateTo} />
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
        whatsappNumber={WHATSAPP_NUMBER}
      />
      <Toaster />
      <FloatingChatButton />
    </div>
  );
};

export default App;
export const packagePromoImageUrl = "https://images.unsplash.com/photo-1609702346628-ba899ea15550";
export const packageTvPromoImageUrl = "https://images.unsplash.com/photo-1585007600269-0908dc453890";

const createPackage = (base, overrides) => ({...base, ...overrides});

const commonBenefits = {
  unlimited: { text: "Internet UNLIMITED", icon: "Wifi" },
  modem: { text: "Include ONT/Modem", icon: "HardDrive" },
  installation: { text: "Gratis Instalasi Rp500.000", icon: "Settings" },
};

const baseResidentialInternet = {
  value: {
    name: "Value 30", speed: "30", upgradedSpeed: "40", type: "internet",
    image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_01_b1381ab385.webp",
    benefits: [
      { text: "Gratis Upgrade Speed 40 Mbps", icon: "Zap" }, commonBenefits.unlimited, commonBenefits.modem, commonBenefits.installation,
      { text: "Ideal untuk 1 - 3 Device", icon: "Smartphone" }, { text: "DL & UL 1:1 up to 30 Mbps", icon: "ArrowDownUp" }
    ]
  },
  fast: {
    name: "Fast 50", speed: "50", upgradedSpeed: "100", type: "internet",
    image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_02_c4a886f673.webp",
    benefits: [
      { text: "Gratis Upgrade Speed 100 Mbps", icon: "Zap" }, commonBenefits.unlimited, commonBenefits.modem, commonBenefits.installation,
      { text: "Ideal untuk 1 - 5 Device", icon: "Smartphone" }, { text: "DL & UL 1:1 up to 50 Mbps", icon: "ArrowDownUp" }
    ]
  },
  nova: {
    name: "Nova 100", speed: "100", upgradedSpeed: "200", type: "internet",
    image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_03_8675fb4207.webp",
    benefits: [
      { text: "Gratis Upgrade Speed 200 Mbps", icon: "Zap" }, commonBenefits.unlimited, commonBenefits.modem, commonBenefits.installation,
      { text: "Ideal untuk 1 - 7 Device", icon: "Smartphone" }, { text: "DL & UL 1:1 up to 100 Mbps", icon: "ArrowDownUp" }
    ]
  },
  gamer: {
    name: "MyGamer 250", speed: "250", upgradedSpeed: "350", type: "internet",
    image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_04_27524acf1c.webp",
    benefits: [
      { text: "Gratis Upgrade Speed 350 Mbps", icon: "Zap" }, commonBenefits.unlimited, { text: "Latency Terbaik untuk Gaming", icon: "Wifi" },
      commonBenefits.modem, commonBenefits.installation, { text: "DL & UL 1:1 up to 250 Mbps", icon: "ArrowDownUp" }, { text: "Ideal untuk 1 - 10 Device", icon: "Smartphone" },
    ]
  },
  prime: {
    name: "Prime 500", speed: "500", upgradedSpeed: null, type: "internet",
    image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_05_ecbbdc7c9c.webp",
    benefits: [
      commonBenefits.unlimited, commonBenefits.modem, commonBenefits.installation,
      { text: "Ideal untuk 1 - 15 Device", icon: "Smartphone" }, { text: "DL & UL 1:1 up to 500 Mbps", icon: "ArrowDownUp" }
    ]
  }
};

const internet_1bulan_prices = {
  value: 260850,
  fast: 277500,
  nova: 333000,
  gamer: 444000,
  prime: 555000,
};

export const residentialInternetPackages = {
  "1bulan": [
    createPackage(baseResidentialInternet.value, { price: internet_1bulan_prices.value, originalPrice: 305250 }),
    createPackage(baseResidentialInternet.fast, { price: internet_1bulan_prices.fast, originalPrice: 333000, bestseller: false }),
    createPackage(baseResidentialInternet.nova, { price: internet_1bulan_prices.nova, originalPrice: 416250 }),
    createPackage(baseResidentialInternet.gamer, { price: internet_1bulan_prices.gamer, originalPrice: 555000 }),
    createPackage(baseResidentialInternet.prime, { price: internet_1bulan_prices.prime, originalPrice: 721500 }),
  ],
  "5get1": [
    createPackage(baseResidentialInternet.value, { price: 217375, originalPrice: 260850, equivalentPrice: 1304250 }),
    createPackage(baseResidentialInternet.fast, { price: 231250, originalPrice: 277500, bestseller: true, equivalentPrice: 1387500 }),
    createPackage(baseResidentialInternet.nova, { price: 277500, originalPrice: 333000, equivalentPrice: 1665000 }),
    createPackage(baseResidentialInternet.gamer, { price: 370000, originalPrice: 444000, equivalentPrice: 2220000 }),
    createPackage(baseResidentialInternet.prime, { price: 462500, originalPrice: 555000, equivalentPrice: 2775000 }),
  ],
  "9get3": [
    createPackage(baseResidentialInternet.value, { price: 195638, originalPrice: 260850, equivalentPrice: 2347650 }),
    createPackage(baseResidentialInternet.fast, { price: 208125, originalPrice: 277500, bestseller: true, equivalentPrice: 2497500 }),
    createPackage(baseResidentialInternet.nova, { price: 249750, originalPrice: 333000, equivalentPrice: 2997000 }),
    createPackage(baseResidentialInternet.gamer, { price: 333000, originalPrice: 444000, equivalentPrice: 3996000 }),
    createPackage(baseResidentialInternet.prime, { price: 416250, originalPrice: 555000, equivalentPrice: 4995000 }),
  ],
  "12get6": [
    createPackage(baseResidentialInternet.value, { price: 173900, originalPrice: 260850, equivalentPrice: 3130200 }),
    createPackage(baseResidentialInternet.fast, { price: 185000, originalPrice: 277500, bestseller: true, equivalentPrice: 3330000 }),
    createPackage(baseResidentialInternet.nova, { price: 222000, originalPrice: 333000, equivalentPrice: 3996000 }),
    createPackage(baseResidentialInternet.gamer, { price: 296000, originalPrice: 444000, equivalentPrice: 5328000 }),
    createPackage(baseResidentialInternet.prime, { price: 370000, originalPrice: 555000, equivalentPrice: 6660000 }),
  ],
};

const tvBenefits = [
  { text: "Termasuk STB Android 12", icon: "Smartphone" },
  { text: "Gratis Vidio Platinum 12 Bulan", icon: "CheckCircle" },
  { text: "Gratis Genflix 12 Bulan", icon: "CheckCircle" },
];

const baseResidentialTv = {
  value: { name: "Value 30 Combo TV", speed: "30", upgradedSpeed: "40", type: "internet+tv", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_01_b1381ab385.webp", benefits: [{ text: "Gratis Upgrade Speed 40 Mbps", icon: "Zap" }, { text: "65+ Channel TV", icon: "Tv2"}, commonBenefits.unlimited, ...tvBenefits] },
  fast: { name: "Fast 50 Combo TV", speed: "50", upgradedSpeed: "100", type: "internet+tv", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_02_c4a886f673.webp", benefits: [{ text: "Gratis Upgrade Speed 100 Mbps", icon: "Zap" }, { text: "76+ Channel TV", icon: "Tv2"}, commonBenefits.unlimited, ...tvBenefits] },
  nova: { name: "Nova 100 Combo TV", speed: "100", upgradedSpeed: "200", type: "internet+tv", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_03_8675fb4207.webp", benefits: [{ text: "Gratis Upgrade Speed 200 Mbps", icon: "Zap" }, { text: "76+ Channel TV", icon: "Tv2"}, commonBenefits.unlimited, ...tvBenefits] },
  gamer: { name: "MyGamer 250 Combo TV", speed: "250", upgradedSpeed: "350", type: "internet+tv", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_04_27524acf1c.webp", benefits: [{ text: "Gratis Upgrade Speed 350 Mbps", icon: "Zap" }, { text: "76+ Channel TV", icon: "Tv2"}, commonBenefits.unlimited, ...tvBenefits] },
  prime: { name: "Prime 500 Combo TV", speed: "500", upgradedSpeed: null, type: "internet+tv", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_05_ecbbdc7c9c.webp", benefits: [{ text: "76+ Channel TV", icon: "Tv2"}, commonBenefits.unlimited, ...tvBenefits, { text: "DL & UL 1:1 up to 500 Mbps", icon: "ArrowDownUp" }] }
};

const internetTv_1bulan_prices = {
  value: 355200,
  fast: 371850,
  nova: 427350,
  gamer: 538350,
  prime: 638350, 
};

export const residentialInternetTvPackages = {
  "1bulan": [
    createPackage(baseResidentialTv.value, { price: internetTv_1bulan_prices.value, originalPrice: 399600 }),
    createPackage(baseResidentialTv.fast, { price: internetTv_1bulan_prices.fast, originalPrice: 427350 }),
    createPackage(baseResidentialTv.nova, { price: internetTv_1bulan_prices.nova, originalPrice: 510600 }),
    createPackage(baseResidentialTv.gamer, { price: internetTv_1bulan_prices.gamer, originalPrice: 649350 }),
    createPackage(baseResidentialTv.prime, { price: internetTv_1bulan_prices.prime, originalPrice: 815850 })
  ], 
  "5get1": [
    createPackage(baseResidentialTv.value, { price: 296000, originalPrice: 355200, equivalentPrice: 1776000 }),
    createPackage(baseResidentialTv.fast, { price: 309875, originalPrice: 371850, bestseller: true, equivalentPrice: 1859250 }),
    createPackage(baseResidentialTv.nova, { price: 356125, originalPrice: 427350, equivalentPrice: 2136750 }),
    createPackage(baseResidentialTv.gamer, { price: 448625, originalPrice: 538350, equivalentPrice: 2691750 }),
    createPackage(baseResidentialTv.prime, { price: 541125, originalPrice: 638350, equivalentPrice: 3264750 })
  ], 
  "9get3": [
    createPackage(baseResidentialTv.value, { price: 266400, originalPrice: 355200, equivalentPrice: 3196800 }),
    createPackage(baseResidentialTv.fast, { price: 278888, originalPrice: 371850, bestseller: true, equivalentPrice: 3346650 }),
    createPackage(baseResidentialTv.nova, { price: 320513, originalPrice: 427350, equivalentPrice: 3846150 }),
    createPackage(baseResidentialTv.gamer, { price: 403763, originalPrice: 538350, equivalentPrice: 4845150 }),
    createPackage(baseResidentialTv.prime, { price: 487013, originalPrice: 638350, equivalentPrice: 5844150 })
  ],
  "12get6": [
    createPackage(baseResidentialTv.value, { price: 236800, originalPrice: 355200, equivalentPrice: 4262400 }),
    createPackage(baseResidentialTv.fast, { price: 247900, originalPrice: 371850, bestseller: true, equivalentPrice: 4462200 }),
    createPackage(baseResidentialTv.nova, { price: 284900, originalPrice: 427350, equivalentPrice: 5128200 }),
    createPackage(baseResidentialTv.gamer, { price: 358900, originalPrice: 538350, equivalentPrice: 6460200 }),
    createPackage(baseResidentialTv.prime, { price: 432900, originalPrice: 638350, equivalentPrice: 7792200 })
  ]
};

const streamingBenefits = [
  { text: "Termasuk STB Android 12", icon: "Smartphone" },
  { text: "Langganan Viu Premium", icon: "CheckCircle" },
  { text: "Langganan WeTV", icon: "CheckCircle" },
  { text: "Langganan Vidio Platinum", icon: "CheckCircle" },
];
const baseResidentialStreaming = {
  value: { name: "Value + Streaming", speed: "30", upgradedSpeed: "40", type: "internet+streaming", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_01_b1381ab385.webp", benefits: [{ text: "Gratis Upgrade Speed 40 Mbps", icon: "Zap" }, commonBenefits.unlimited, ...streamingBenefits] },
  fast: { name: "Fast + Streaming", speed: "50", upgradedSpeed: "100", type: "internet+streaming", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_02_c4a886f673.webp", benefits: [{ text: "Gratis Upgrade Speed 100 Mbps", icon: "Zap" }, commonBenefits.unlimited, ...streamingBenefits] },
  nova: { name: "Nova + Streaming", speed: "100", upgradedSpeed: "200", type: "internet+streaming", image: "https://www.myrepublic.co.id/img/gothel/uploads/Design_Thumbnail_Produk_03_8675fb4207.webp", benefits: [{ text: "Gratis Upgrade Speed 200 Mbps", icon: "Zap" }, commonBenefits.unlimited, ...streamingBenefits] },
};

const internetStreaming_1bulan_prices = {
  value: 349900,
  fast: 479900,
  nova: 729900,
};

export const residentialInternetStreamingPackages = {
  "1bulan": [
    createPackage(baseResidentialStreaming.value, { price: internetStreaming_1bulan_prices.value, originalPrice: 440000 }),
    createPackage(baseResidentialStreaming.fast, { price: internetStreaming_1bulan_prices.fast, originalPrice: 570000 }),
    createPackage(baseResidentialStreaming.nova, { price: internetStreaming_1bulan_prices.nova, originalPrice: 820000 }),
  ], 
  "5get1": [
    createPackage(baseResidentialStreaming.value, { price: 291583, originalPrice: 349900, equivalentPrice: 1776000 }),
    createPackage(baseResidentialStreaming.fast, { price: 399917, originalPrice: 479900, bestseller: true, equivalentPrice: 2399500 }),
    createPackage(baseResidentialStreaming.nova, { price: 608250, originalPrice: 729900, equivalentPrice: 3649500 }),
  ], 
  "9get3": [
    createPackage(baseResidentialStreaming.value, { price: 262425, originalPrice: 349900, equivalentPrice: 3149100 }),
    createPackage(baseResidentialStreaming.fast, { price: 359925, originalPrice: 479900, bestseller: true, equivalentPrice: 4319100 }),
    createPackage(baseResidentialStreaming.nova, { price: 547425, originalPrice: 729900, equivalentPrice: 6569100 }),
  ],
  "12get6": [
    createPackage(baseResidentialStreaming.value, { price: 233267, originalPrice: 349900, equivalentPrice: 4198800 }),
    createPackage(baseResidentialStreaming.fast, { price: 319933, originalPrice: 479900, bestseller: true, equivalentPrice: 5758800 }),
    createPackage(baseResidentialStreaming.nova, { price: 486600, originalPrice: 729900, equivalentPrice: 8758800 }),
  ]
};

const smeCommonBenefits = {
  csPriority: { text: "CS Prioritas 24 Jam", icon: "Headphones" },
  installation: { text: "Gratis Instalasi Rp500.000", icon: "Settings" },
};

const baseSmeInternet = {
  biz50: {
    name: "Business 50", speed: "50", type: "internet-sme",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/8903f612fe833aafaa9b00fcef91d42e.webp",
    benefits: [
      { text: "Internet UNLIMITED", icon: "Wifi" }, 
      { text: "Ideal untuk 1 - 5 Device", icon: "Smartphone" },
      commonBenefits.installation,
      { text: "IP Public Dynamic", icon: "Globe" }, 
      { text: "Gratis Router Wi-Fi Plus (Single Band)", icon: "Router" }, 
      smeCommonBenefits.csPriority
    ]
  },
  biz100: {
    name: "Business 100", speed: "100", type: "internet-sme",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/5d6f137d7fbea7db93a924c062351efa.webp",
    benefits: [
      { text: "Internet UNLIMITED", icon: "Wifi" }, 
      { text: "Ideal untuk 1 - 7 Device", icon: "Smartphone" },
      commonBenefits.installation,
      { text: "IP Public Dynamic", icon: "Globe" }, 
      { text: "Gratis Router Wi-Fi Plus (Single Band)", icon: "Router" }, 
      smeCommonBenefits.csPriority
    ]
  },
  biz300: {
    name: "Business 300", speed: "300", type: "internet-sme",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/2088335aa623a1f96de41e71f8f6a235.webp",
    benefits: [
      { text: "Internet UNLIMITED", icon: "Wifi" }, 
      { text: "Ideal untuk 1 - 12 Device", icon: "Smartphone" },
      commonBenefits.installation,
      { text: "IP Public Dynamic", icon: "Globe" }, 
      { text: "Gratis Router Wi-Fi Plus (Dual Band Pro)", icon: "Router" }, 
      smeCommonBenefits.csPriority
    ]
  },
  pro150: {
    name: "Business PRO 150", speed: "150", type: "internet-sme",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/bf3e1884c8d936779c2eb39f4e70d3d2.webp",
    benefits: [
      { text: "Internet UNLIMITED", icon: "Wifi" }, 
      { text: "Ideal untuk 1 - 10 Device", icon: "Smartphone" },
      { text: "IP Public Static", icon: "Globe" }, 
      { text: "Gratis 1 Access Point", icon: "Router" }, 
      smeCommonBenefits.csPriority
    ]
  },
  pro500: {
    name: "Business PRO 500", speed: "500", type: "internet-sme",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/a3040bf53247867b506c33cf037284c5.webp",
    benefits: [
      { text: "Internet UNLIMITED", icon: "Wifi" }, 
      { text: "Ideal untuk 1 - 16 Device", icon: "Smartphone" },
      { text: "IP Public Static", icon: "Globe" }, 
      { text: "Gratis 2 Access Point", icon: "Router" }, 
      smeCommonBenefits.csPriority
    ]
  }
};

const smeInternet_1bulan_prices = {
  biz50: 703740, 
  biz100: 1147740, 
  biz300: 2479740,
  pro150: 2479740,
  pro500: 3719740,
};

export const smeInternetPackages = {
  "1bulan": [
    createPackage(baseSmeInternet.biz50, { price: smeInternet_1bulan_prices.biz50, originalPrice: 634000 }), 
    createPackage(baseSmeInternet.biz100, { price: smeInternet_1bulan_prices.biz100, originalPrice: 1034000, bestseller: true }), 
    createPackage(baseSmeInternet.biz300, { price: smeInternet_1bulan_prices.biz300, originalPrice: 2234000 }),
    createPackage(baseSmeInternet.pro150, { price: smeInternet_1bulan_prices.pro150, originalPrice: 2234000 }), 
    createPackage(baseSmeInternet.pro500, { price: smeInternet_1bulan_prices.pro500, originalPrice: 3350000 }),
  ],
  "5get1": [
     createPackage(baseSmeInternet.biz50, { price: 369075, originalPrice: 442890, equivalentPrice: 2214450 }),
     createPackage(baseSmeInternet.biz100, { price: 739575, originalPrice: 887490, bestseller: true, equivalentPrice: 4428900 }),
     createPackage(baseSmeInternet.pro150, { price: 1109242, originalPrice: 1331090, equivalentPrice: 6655450 }),
  ],
  "9get3": [
     createPackage(baseSmeInternet.biz50, { price: 332168, originalPrice: 442890, equivalentPrice: 3986010 }),
     createPackage(baseSmeInternet.biz100, { price: 665618, originalPrice: 887490, bestseller: true, equivalentPrice: 7969410 }),
     createPackage(baseSmeInternet.pro150, { price: 998318, originalPrice: 1331090, equivalentPrice: 11979810 }),
  ],
  "12get6": [
     createPackage(baseSmeInternet.biz50, { price: 295260, originalPrice: 442890, equivalentPrice: 5314680 }),
     createPackage(baseSmeInternet.biz100, { price: 591660, originalPrice: 887490, bestseller: true, equivalentPrice: 10649880 }),
     createPackage(baseSmeInternet.pro150, { price: 887393, originalPrice: 1331090, equivalentPrice: 15973080 }),
  ]
};

const smeTvBenefits = [
  { text: "78 Channel TV", icon: "Tv2" },
  { text: "Termasuk STB Android", icon: "Smartphone" }
];

const smeTvBenefitsBiz100 = [
  { text: "82 Channel TV", icon: "Tv2" },
  { text: "Termasuk STB Android", icon: "Smartphone" }
];

const smeTvBenefitsPro = [
  { text: "82+ Channel TV Premium", icon: "Tv2" },
  { text: "Termasuk STB Android", icon: "Smartphone" }
];


const baseSmeTv = {
  biz50: {
    name: "Business 50 + TV", speed: "50", type: "internet-sme-tv",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/8903f612fe833aafaa9b00fcef91d42e.webp",
    benefits: [
      ...baseSmeInternet.biz50.benefits,
      ...smeTvBenefits
    ]
  },
  biz100: {
    name: "Business 100 + TV", speed: "100", type: "internet-sme-tv",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/5d6f137d7fbea7db93a924c062351efa.webp",
    benefits: [
      ...baseSmeInternet.biz100.benefits,
      ...smeTvBenefitsBiz100
    ]
  },
  biz300: {
    name: "Business 300 + TV", speed: "300", type: "internet-sme-tv",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/70bee0c396da1d2db73a45733e8346c2.webp",
    benefits: [
      ...baseSmeInternet.biz300.benefits,
      ...smeTvBenefitsPro 
    ]
  },
  pro150: {
    name: "Business PRO 150 + TV", speed: "150", type: "internet-sme-tv",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/8747c3e5645f519854f65ef1e0a058fe.webp",
    benefits: [
      ...baseSmeInternet.pro150.benefits,
      ...smeTvBenefitsPro
    ]
  },
  pro500: {
    name: "Business PRO 500 + TV", speed: "500", type: "internet-sme-tv",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/4414ce8c-4780-4bda-a6de-a857cf3ca804/a3040bf53247867b506c33cf037284c5.webp",
    benefits: [
      ...baseSmeInternet.pro500.benefits,
      ...smeTvBenefitsPro
    ]
  }
};

const smeInternetTv_1bulan_prices = {
  biz50: 798090, 
  biz100: 1242090,
  biz300: 2574090,
  pro150: 2574090,
  pro500: 3814090,
};

export const smeInternetTvPackages = {
  "1bulan": [
    createPackage(baseSmeTv.biz50, { price: smeInternetTv_1bulan_prices.biz50, originalPrice: 719000 }), 
    createPackage(baseSmeTv.biz100, { price: smeInternetTv_1bulan_prices.biz100, originalPrice: 1119000, bestseller: true }), 
    createPackage(baseSmeTv.biz300, { price: smeInternetTv_1bulan_prices.biz300, originalPrice: 2319000 }),
    createPackage(baseSmeTv.pro150, { price: smeInternetTv_1bulan_prices.pro150, originalPrice: 2319000 }),
    createPackage(baseSmeTv.pro500, { price: smeInternetTv_1bulan_prices.pro500, originalPrice: 3435000 }),
  ],
  "5get1": [
    createPackage(baseSmeTv.biz50, { price: 461575, originalPrice: 553890, equivalentPrice: 2769450 }),
    createPackage(baseSmeTv.biz100, { price: 832075, originalPrice: 998490, bestseller: true, equivalentPrice: 4992450 }),
  ],
  "9get3": [
    createPackage(baseSmeTv.biz50, { price: 415418, originalPrice: 553890, equivalentPrice: 4985010 }),
    createPackage(baseSmeTv.biz100, { price: 748868, originalPrice: 998490, bestseller: true, equivalentPrice: 8986410 }),
  ],
  "12get6": [
    createPackage(baseSmeTv.biz50, { price: 369260, originalPrice: 553890, equivalentPrice: 6646680 }),
    createPackage(baseSmeTv.biz100, { price: 665660, originalPrice: 998490, bestseller: true, equivalentPrice: 11981880 }),
  ]
};
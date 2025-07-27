import React from 'react';
import { caraBerlanggananSteps } from '@/data/siteData';

const CaraBerlanggananSection = () => (
  <div className="bg-primary p-6 md:p-8 rounded-xl shadow-2xl text-white h-full">
    <h2 className="text-2xl font-bold">Cara Berlangganan MyRepublic</h2>
    <p className="text-sm opacity-80 mb-6">3 Langkah Mudah Berlangganan</p>
    <div className="space-y-4">
      {caraBerlanggananSteps.map((step, index) => (
        <div key={step.id} className={`flex items-start space-x-4 ${index !== caraBerlanggananSteps.length - 1 ? 'pb-4' : ''}`}>
          <div className="bg-white/20 p-3 rounded-lg mt-1">
            <step.icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{step.title}</h3>
            <p className="text-sm opacity-90">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CaraBerlanggananSection;
import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Award, Shield, Users, ArrowRight, Star, Car, Facebook, Instagram } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('code8');
  // State to track if the user wants to add vehicle hire for test day
  const [includeVehicleHire, setIncludeVehicleHire] = useState(false);

  const contactInfo = {
    phone: '076 029 5823',
    whatsappNum: '27760295823',
    email: 'info@mardonsdrivingacademy.co.za',
    address: '1 Exmouth Street, Algoa Park, Gqeberha, 6001',
    mapUrl: 'https://maps.app.goo.gl/1yNYdVqKiyupLEok8',
    facebook: 'https://www.facebook.com/mardonsdrivingacademy',
    instagram: 'https://www.instagram.com/mardonsdrivingacademygq/'
  };

  const pricing = {
    code8: {
      title: 'Code 8 Manual (Light Motor Vehicle)',
      subtitle: 'Taught in premium, brand-new VW Polos.',
      hirePrice: 650,
      hireLabel: 'Add Car Hire for Test Day (+R650)',
      packages: [
        { hours: '10 Hours', price: 3200, desc: 'Ideal for drivers with basic familiarity looking to polish K53 procedures.' },
        { hours: '16 Hours', price: 5200, desc: 'Recommended for beginners to master K53 parking and road logic.' },
        { hours: '20 Hours', price: 6200, desc: 'Complete zero-to-hero track for absolute beginners who have never sat behind a wheel.' }
      ],
      extras: [
        'FREE Learner\'s Materials & Theory Class included',
        'Door-to-door pickup & drop-off service',
        'Certified commercial instructors',
        'Additional hours: R350 p/h'
      ]
    },
    code10: {
      title: 'Code 10 Manual (Heavy Motor Vehicle)',
      subtitle: 'Taught on industry-standard commercial trucks.',
      hirePrice: 700,
      hireLabel: 'Add Truck Hire for Test Day (+R700)',
      packages: [
        { hours: '10 Hours', price: 3700, desc: 'For those with basic truck handling looking to nail the test yard.' },
        { hours: '16 Hours', price: 6000, desc: 'Comprehensive yard and road training covering all K53 truck modules.' },
        { hours: '20 Hours', price: 7000, desc: 'Full premium mastery track designed for absolute beginners entering the logistics space.' }
      ],
      extras: [
        'FREE Learner\'s Materials & Theory Class included',
        'Door-to-door pickup & drop-off service',
        'Certified commercial instructors',
        'Additional hours: R400 p/h'
      ]
    },
    learners: {
      title: 'Learner\'s License Tuition',
      subtitle: 'One-on-one professional theory instruction.',
      packages: [
        { hours: '2 Sessions (1 Hour Each)', price: 400, desc: 'Personalized interactive breakdown covering the entire new electronic testing framework.' }
      ],
      extras: [
        'All official premium learning materials provided',
        'High pass rate preparation strategy',
        '1-on-1 private tuition structure'
      ]
    }
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setIncludeVehicleHire(false);
  };

  const generateWhatsAppLink = (category, hours, basePrice) => {
    let message = "";
    const activeCategory = pricing[category];
    const totalPrice = includeVehicleHire && category !== 'learners' ? basePrice + activeCategory.hirePrice : basePrice;
    const formattedTotal = `R${totalPrice.toLocaleString('en-ZA')}`;
    const formattedBase = `R${basePrice.toLocaleString('en-ZA')}`;

    if (category === 'learners') {
      message = `Hi Mardons Driving Academy, I would like to book the Learner's License Tuition package (${hours} for R400). Please let me know available slots.`;
    } else {
      const formattedCategory = category === 'code8' ? 'Code 8 Manual' : 'Code 10 Manual';
      const vehicleType = category === 'code8' ? 'car hire' : 'truck hire';
      
      if (includeVehicleHire) {
        message = `Hi Mardons Driving Academy, I want to book the ${formattedCategory} package for ${hours} and include the test day ${vehicleType}. Total comes to ${formattedTotal} (${formattedBase} + R${activeCategory.hirePrice} hire). Please let me know how we can get started.`;
      } else {
        message = `Hi Mardons Driving Academy, I am interested in booking the ${formattedCategory} package for ${hours} (${formattedBase}). Please let me know how we can get started.`;
      }
    }

    return `https://wa.me/${contactInfo.whatsappNum}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Value Banner */}
      <div className="bg-red-700 text-white text-xs md:text-sm font-semibold py-2 px-4 text-center tracking-wide">
        PREMIUM K53 INSTRUCTION IN GQEBERHA • BRAND NEW VW POLO FLEET • HIGH PASS RATE
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="text-xl font-black tracking-tighter text-white">
              MARDONS<span className="text-red-500">.</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-400 border-l border-slate-700 pl-3 hidden sm:inline">Driving Academy</span>
          </div>
          
          <div className="flex items-center gap-5">
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" title="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" title="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={`tel:${contactInfo.phone}`} className="bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full transition-all shadow-lg shadow-red-900/20 flex items-center justify-center" title="Call Hotline">
              <Phone className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-24 px-6 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.08),transparent_50%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-bold text-red-500 bg-red-950/50 border border-red-900/50 px-3 py-1 rounded-full">
            The Gold Standard in Gqeberha
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 mb-6 leading-tight">
            Preparing You Fully For <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">The Road Ahead.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional, certified K53 driver training tailored for lasting confidence. We combine modern vehicles, highly disciplined training frameworks, and patient tuition to secure your licence smoothly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#packages" className="bg-slate-100 hover:bg-white text-slate-950 px-6 py-3 rounded-md font-bold transition-all flex items-center gap-2 shadow-lg text-sm">
              View Rates & Packages <ArrowRight className="w-4 h-4 text-red-600" />
            </a>
            <a href={`tel:${contactInfo.phone}`} className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-6 py-3 rounded-md font-semibold transition-all text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" /> Talk to an Instructor
            </a>
          </div>
        </div>
      </header>

      {/* Core Highlights */}
      <section id="features" className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-xl backdrop-blur-sm">
          <div className="w-12 h-12 bg-red-950 text-red-500 rounded-lg flex items-center justify-center mb-6 border border-red-900/30">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Premium VW Polo Fleet</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We exclusively utilize late-model Volkswagen Polos for all light vehicle training, ensuring maximum safety, ergonomic comfort, and modern handling properties.
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-xl backdrop-blur-sm">
          <div className="w-12 h-12 bg-red-950 text-red-500 rounded-lg flex items-center justify-center mb-6 border border-red-900/30">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Certified, Patient Tuition</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every member of our team is fully qualified, highly motivated, and structurally vetted to deliver structured, highly patient training environments.
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-xl backdrop-blur-sm">
          <div className="w-12 h-12 bg-red-950 text-red-500 rounded-lg flex items-center justify-center mb-6 border border-red-900/30">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Exceptional Pass Rates</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our historical metrics show an exceptional track record of performance. We focus intensely on core confidence, ensuring you pass cleanly on test day.
          </p>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="packages" className="bg-slate-900/20 border-y border-slate-900/60 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">Professional Pricing Matrices</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              All inclusive training bundles. No hidden infrastructure surcharges. Select your training category below.
            </p>
            
            {/* UPDATED: Specific descriptive labels for the tab layout */}
            <div className="inline-flex p-1 bg-slate-900 rounded-lg mt-8 border border-slate-800 flex-wrap justify-center gap-1 sm:gap-0">
              <button onClick={() => handleTabChange('code8')} className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'code8' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>
                Code 8 License
              </button>
              <button onClick={() => handleTabChange('code10')} className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'code10' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>
                Code 10 License
              </button>
              <button onClick={() => handleTabChange('learners')} className={`px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'learners' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>
                Learners License
              </button>
            </div>
          </div>

          <div>
            <div className="mb-10 text-center md:text-left md:flex justify-between items-end border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-2xl font-black text-white">{pricing[activeTab].title}</h3>
                <p className="text-slate-400 text-sm mt-1">{pricing[activeTab].subtitle}</p>
              </div>
              <span className="inline-block mt-4 md:mt-0 text-xs bg-slate-900 text-slate-400 px-3 py-1.5 rounded border border-slate-800">
                Door-to-Door Service Included
              </span>
            </div>

            {/* Matrix Architecture */}
            <div className={`grid gap-6 items-start ${activeTab === 'learners' ? 'max-w-md mx-auto grid-cols-1' : 'md:grid-cols-3'}`}>
              {pricing[activeTab].packages.map((pkg, idx) => {
                const hasAddon = includeVehicleHire && activeTab !== 'learners';
                const finalPrice = hasAddon ? pkg.price + pricing[activeTab].hirePrice : pkg.price;

                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 p-6 rounded-xl transition-all relative flex flex-col justify-between min-h-[340px]">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Duration</div>
                      <h4 className="text-xl font-bold text-white mb-4">{pkg.hours}</h4>
                      
                      <div className="mb-4">
                        <div className="text-3xl font-black text-red-500">
                          R{finalPrice.toLocaleString('en-ZA')}
                        </div>
                        {hasAddon && (
                          <div className="text-xs text-slate-400 font-medium mt-1">
                            (R{pkg.price.toLocaleString('en-ZA')} package + R{pricing[activeTab].hirePrice} hire)
                          </div>
                        )}
                      </div>

                      <p className="text-slate-400 text-xs leading-relaxed mb-6 border-t border-slate-800/60 pt-4">
                        {pkg.desc}
                      </p>
                    </div>
                    
                    {/* UPDATED: Integrated Internal Booking Checkbox Setup */}
                    <div className="space-y-4 pt-2">
                      {activeTab !== 'learners' && (
                        <label className="flex items-center gap-2.5 bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/60 px-3 py-2 rounded-md cursor-pointer select-none transition-colors w-full">
                          <input 
                            type="checkbox" 
                            checked={includeVehicleHire} 
                            onChange={(e) => setIncludeVehicleHire(e.target.checked)}
                            className="w-3.5 h-3.5 rounded text-red-600 bg-slate-900 border-slate-700 focus:ring-0 cursor-pointer accent-red-600"
                          />
                          <span className="text-[11px] font-semibold text-slate-300 tracking-wide">
                            {pricing[activeTab].hireLabel}
                          </span>
                        </label>
                      )}
                      
                      <a 
                        href={generateWhatsAppLink(activeTab, pkg.hours, pkg.price)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full text-center block bg-slate-800 hover:bg-green-600 hover:text-white text-slate-200 text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors shadow-sm"
                      >
                        Secure Training Slot
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* UPDATED: Spacious, Equal-Sized Single Line Grid System */}
            <div className="mt-12 bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
                {pricing[activeTab].extras.map((extra, idx) => (
                  <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 bg-slate-950/40 border border-slate-900/80 p-4 rounded-lg flex-1 h-full justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs font-semibold leading-relaxed tracking-wide">
                      {extra}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="text-xl font-black tracking-tighter text-white mb-4">
              MARDONS<span className="text-red-500">.</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mb-6">
              Vetted, high-end K53 educational design operating throughout Gqeberha. Built on execution, modern fleets, and complete safety profiles.
            </p>
            {/* UPDATED: Amplified Footer Social Icon Targets */}
            <div className="flex gap-6 items-center">
              <a href={contactInfo.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors p-1" title="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors p-1" title="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Direct Channels</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="break-all">{contactInfo.email}</span>
              </a>
              {/* UPDATED: Address anchors cleanly straight to specified mapUrl mapping */}
              <a href={contactInfo.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 group-hover:text-red-400" />
                <span className="underline decoration-slate-700 underline-offset-4 group-hover:decoration-white transition-colors">
                  {contactInfo.address}
                </span>
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Booking Hotline</h4>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">
              Have specific scoping questions regarding testing slots or vehicle availability? Give our team a call directly.
            </p>
            <a href={`tel:${contactInfo.phone}`} className="w-full text-center block bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 fill-current" /> Initiate Call
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center text-slate-600 text-xs mt-12 pt-6 border-t border-slate-900">
          Copyright © {new Date().getFullYear()} Mardons Driving Academy. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
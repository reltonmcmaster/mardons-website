import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, Star, Facebook, Instagram, ChevronLeft, ChevronRight, Award, Shield, Clock, Users } from 'lucide-react';

const logoImg = 'images/logo.png';
const fleetAboutImg = 'images/fleet-about.jpg';
const fleetHeroImg = 'images/fleet-hero.jpg';
const bannerImg = 'images/banner.png';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.004 2c-5.525 0-10 4.477-10 10 0 1.954.563 3.776 1.533 5.312L2 22l4.83-1.482A9.948 9.948 0 0012.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm4.587 13.565c-.29.412-1.42 1.05-1.91 1.107-.442.052-.907.07-2.612-.633a10.015 10.015 0 01-4.47-3.923c-.502-.67-.803-1.455-.803-2.278 0-1.745 1.09-2.392 1.482-2.736.332-.293.498-.344.664-.344l.442.012c.166.006.388-.063.608.465.233.56.797 1.95.864 2.088.067.137.11.3.022.48-.088.177-.132.29-.265.445l-.398.471c-.133.153-.272.32-.117.587.155.266.69 1.134 1.48 1.838.79.704 1.458.922 1.724 1.056.265.133.42.112.575-.067.155-.178.663-.772.84-1.04.177-.266.354-.222.597-.133.243.088 1.548.73 1.814.864.265.133.442.2.508.312.067.112.067.653-.223 1.065z" clipRule="evenodd" />
  </svg>
);

const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('code8');
  const [selectedHireOptions, setSelectedHireOptions] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const autoPlayRef = useRef(null);

  const contactInfo = {
    phone: '076 029 5823',
    whatsappNum: '27760295823',
    email: 'info@mardonsdrivingacademy.co.za',
    address: '1 Exmouth Street, Algoa Park, Gqeberha, 6001',
    mapUrl: 'https://maps.app.goo.gl/1yNYdVqKiyupLEok8',
    facebook: 'https://www.facebook.com/mardonsdrivingacademy',
    instagram: 'https://www.instagram.com/mardonsdrivingacademygq/',
    googleSearch: 'https://www.google.com/search?q=mardons+driving+academy',
    globalWhatsappMsg: 'https://wa.me/27760295823?text=hi%20mardons%20driving%20academy'
  };

  const pricing = {
    code8: {
      title: 'Code 8 License',
      subtitle: 'Taught in premium, brand-new VW Polos.',
      hirePrice: 650,
      hireLabel: 'Add Car Hire for Test Day (+R650)',
      packages: [
        { hours: '10 Hours', label: 'Quick Refresher', price: 3200, desc: 'For drivers who already know the basics and just need to polish up their K53 skills before the test.' },
        { hours: '16 Hours', label: 'Confident Beginner', price: 5200, desc: 'For new learners who want enough time to master parking, road rules, and build solid confidence.' },
        { hours: '20 Hours', label: 'Zero‑to‑Hero', price: 6200, desc: 'For absolute beginners starting from scratch — full guidance from first ignition to test‑ready driver.' }
      ],
      extras: [
        'Learner\'s Materials & Theory Classes',
        'Door-to-Door pickup & drop-off',
        'Certified commercial instructors',
        'Additional hours: R350 p/h'
      ]
    },
    code10: {
      title: 'Code 10 License',
      subtitle: 'Taught on industry-standard commercial trucks.',
      hirePrice: 700,
      hireLabel: 'Add Truck Hire for Test Day (+R700)',
      packages: [
        { hours: '10 Hours', label: 'Quick Refresher', price: 3700, desc: 'For drivers who already know the basics and just need to polish up their K53 skills before the test.' },
        { hours: '16 Hours', label: 'Confident Beginner', price: 6000, desc: 'For new learners who want enough time to master parking, road rules, and build solid confidence.' },
        { hours: '20 Hours', label: 'Zero‑to‑Hero', price: 7000, desc: 'For absolute beginners starting from scratch — full guidance from first ignition to test‑ready driver.' }
      ],
      extras: [
        'Learner\'s Materials & Theory Classes',
        'Door-to-Door pickup & drop-off',
        'Certified commercial instructors',
        'Additional hours: R400 p/h'
      ]
    },
    learners: {
      title: 'Learner’s License Package',
      subtitle: 'Comprehensive preparation for your learner’s test',
      packages: [
        { 
          hours: 'Study Pack + 2 Guided Sessions', 
          price: 400, 
          desc: [
            'Includes official study material tailored to the K53 learner’s test',
            '2 one‑hour sessions of one‑on‑one professional theory instruction',
            'Designed to give you confidence and clarity before exam day'
          ],
          isLearners: true
        }
      ],
      extras: [
        'Step-by-step guidance through the new electronic testing framework',
        'Access to study material tailored to the K53 learner’s test',
        'Ongoing assistance until you pass your learner’s test',
        'Door-to-door service included for your convenience'
      ]
    }
  };

  const testimonials = [
    { name: 'Janine Baartman', text: 'Excellent service. I would recommend Mardons Driving Academy to everyone I know. They really are the best in the bay.' },
    { name: 'Armand Erasmus', text: 'I was very happy with Mardons Driving Academy. They were very nice and are always willing to help where ever they could.' },
    { name: 'Mnumzana Makhathini', text: "I got my driver's license today and thanks to the professional instructor Mona who really made it easier for me to pass my test. Mardon's driving Academy is the best." },
    { name: 'Chanté Jooste', text: 'Would definitely recomend MDA. Thanks so much Mona, Alfredo & Siya for preparing me for the road ahead. MDA - THE BEST IN THE BAY!' },
    { name: 'Lwazi Mthembu', text: 'Top tier driving school. Instructors have real patience and they know the Port Elizabeth testing routes perfectly. Passed first time!' },
    { name: 'Denver Hendricks', text: 'Dankie Mona en span! Reputable service from start to finish. The VW Polo is beautiful and smooth to learn with.' },
    { name: 'Sarah-Lee Meyer', text: 'Highly professional setups. I was so nervous about parallel parking, but my instructor broke it down with simple steps.' },
    { name: 'Siyabonga Ngcobo', text: 'The absolute best in Gqeberha. They pick you up right at your door and they do not rush you. Very neat cars.' },
    { name: 'Gavin Whitehead', text: 'Booked the Code 10 package. Excellent yard instruction, very clean trucks. Got my license today with zero hassles.' },
    { name: 'Rochelle Cupido', text: 'Super friendly and highly structured. Felt safe behind the wheel from day one. Definitely recommend to everyone in PE.' },
    { name: 'Zolani Ndlovu', text: 'Ncedile kakhulu! Mona helped me get over my road anxiety. The mock test yard training made the real test feel easy.' },
    { name: 'Bradley Jacobs', text: 'Professional lessons at a great price. Best academy in the bay by far. No hidden charges.' },
    { name: 'Thandiswa Ncube', text: 'Thank you MDA for the amazing theory training and the driving patience. Passed my Code 8 beautifully.' },
    { name: 'Justin Kirsten', text: 'Patient instruction, modern fleet, and clear communication. If you want to pass without stress, choose Mardons.' },
    { name: 'Chantel Williams', text: 'Aswem experience! The instructors are calm and polite. Worth every cent for the safety alone.' },
    { name: 'Khanyisa Mpofu', text: 'Incredibly great value. They assisted me all the way through the new electronic learners system. 5 stars!' },
    { name: 'Pieter Potgieter', text: 'Great structure on the Code 10 modules. Clear vehicle dimensions explanation. Highly seasoned instructors.' },
    { name: 'Shaneen Pretorius', text: 'Loved learning with Mardons. The brand new Polo makes a huge difference when mastering clutch control.' },
    { name: 'Aphiwe Msimang', text: 'Isikolo esimangalisayo! Safe cars, patient teachers. Made getting my license a wonderful experience.' },
    { name: 'Wayne Ferreira', text: 'Reliable door-to-door pickups. They never run late and they maximize your road hour completely. Excellent.' },
    { name: 'Nadine Booysen', text: 'Very happy clients right here. Polite staff, affordable rates, and pristine cars. Thank you Alfredo!' },
    { name: 'Mphathi Gxwala', text: 'Highly recommended for heavy vehicles. They teach you proper commercial road manners, not just passing tricks.' },
    { name: 'Esther van der Merwe', text: 'Passed my test today! Incredible patient framework. They treat you with absolute respect.' },
    { name: 'Lucretia Roman', text: 'The most patient crew in the area. Best booking decision I ever made for my career path.' }
  ];

  const totalSlides = Math.ceil(testimonials.length / 6);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [totalSlides]);

  // Track page scroll offset to toggle scroll styling effects dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleHireCheckboxChange = (tab, index, isChecked) => {
    setSelectedHireOptions(prev => ({
      ...prev,
      [`${tab}-${index}`]: isChecked
    }));
  };

  const generateWhatsAppLink = (category, hours, basePrice, cardIndex) => {
    let message = "";
    const activeCategory = pricing[category];
    const isHireSelected = !!selectedHireOptions[`${category}-${cardIndex}`];
    
    const totalPrice = isHireSelected && category !== 'learners' ? basePrice + activeCategory.hirePrice : basePrice;
    const formattedTotal = `R${totalPrice.toLocaleString('en-ZA')}`;
    const formattedBase = `R${basePrice.toLocaleString('en-ZA')}`;

    if (category === 'learners') {
      message = `Hi Driving Academy, I would like to book the Learner’s License Package (Study Pack + 2 Guided Sessions for R400). Please let me know available slots.`;
    } else {
      const formattedCategory = category === 'code8' ? 'Code 8 Manual' : 'Code 10 Manual';
      const vehicleType = category === 'code8' ? 'car hire' : 'truck hire';
      
      if (isHireSelected) {
        message = `Hi Mardons Driving Academy, I want to book the ${formattedCategory} package for ${hours} and include the test day ${vehicleType}. Total comes to ${formattedTotal} (${formattedBase} + R${activeCategory.hirePrice} hire). Please let me know how we can get started.`;
      } else {
        message = `Hi Mardons Driving Academy, I am interested in booking the ${formattedCategory} package for ${hours} (${formattedBase}). Please let me know how we can get started.`;
      }
    }

    return `https://wa.me/${contactInfo.whatsappNum}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white pt-[114px]">
      
      {/* INTEGRATED CUSTOM NAVIGATION HOUSING WRAPPER SYSTEM */}
      <div 
        id="header-navigation-wrapper" 
        className={isScrolled ? 'scrolled' : ''}
      >
        {/* MODULE 1: RED ANNOUNCEMENT MARQUEE */}
        <div id="nav-marquee-banner">
          <div className="nav-marquee-container">
            <div className="nav-marquee-track">
              <span className="nav-marquee-item"><i className="fa-solid fa-star"></i> 4.9 Google Rating</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-certificate"></i> Certified K53</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-shield-halved"></i> Fully Insured Vehicles</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-award"></i> Years in Business</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-face-smile"></i> 500+ Satisfied Drivers</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-location-dot"></i> #1 Rated Academy in Gqeberha</span>
            </div>
            <div className="nav-marquee-track">
              <span className="nav-marquee-item"><i className="fa-solid fa-star"></i> 4.9 Google Rating</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-certificate"></i> Certified K53</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-shield-halved"></i> Fully Insured Vehicles</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-award"></i> Years in Business</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-face-smile"></i> 500+ Satisfied Drivers</span>
              <span className="nav-marquee-item"><i className="fa-solid fa-location-dot"></i> #1 Rated Academy in Gqeberha</span>
            </div>
          </div>
        </div>

        {/* MODULE 2: LOWER NAVIGATION STRIP */}
        <nav id="main-nav">
          <div className="nav-container">
            <div className="nav-links-wrap">
              <a href="#features" className="nav-link">Core Features</a>
              <a href="#packages" className="nav-link">Rates & Packages</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative bg-slate-950 py-28 px-6 border-b border-slate-900 overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${bannerImg})` }} 
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.15),transparent_50%)] z-10" />
        
        <div className="max-w-5xl mx-auto text-center relative z-20">
          <span className="text-xs uppercase tracking-widest font-bold text-red-400 bg-red-950/60 border border-red-900/50 px-3 py-1 rounded-full">
            The Gold Standard in Gqeberha
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 mb-6 leading-tight drop-shadow-sm">
            Preparing You Fully For <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">The Road Ahead.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow">
            Professional, certified K53 driver training tailored for lasting confidence. We combine modern vehicles, highly disciplined training frameworks, and patient tuition to secure your licence smoothly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#packages" className="bg-slate-100 hover:bg-white text-slate-950 px-6 py-3 rounded-md font-bold transition-all flex items-center gap-2 shadow-lg text-sm">
              View Rates & Packages <ArrowRight className="w-4 h-4 text-red-600" />
            </a>
            <a href={`tel:${contactInfo.phone}`} className="bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 px-6 py-3 rounded-md font-semibold transition-all text-sm flex items-center gap-2 backdrop-blur-sm">
              <Phone className="w-4 h-4 text-red-500" /> Talk to an Instructor
            </a>
          </div>
        </div>
      </section>

      {/* Core Highlights Component */}
      <section id="features" className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🚘</span> Modern VW Polo Fleet
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We use new Volkswagen Polos for all light vehicle lessons. They’re safe, comfortable, and easy to handle — perfect for learning with confidence.
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>👩‍🏫</span> Patient, Certified Instructors
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our instructors are fully qualified and carefully selected. They teach with patience and structure, making sure every learner feels supported.
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🎯</span> Proven Pass Rates
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We’ve helped countless learners succeed. With our focus on building confidence and core skills, you’ll be ready to pass your test smoothly.
          </p>
        </div>
      </section>

      {/* Visual Fleet Presentation Showcase Grid Block */}
      <section className="bg-slate-900/10 border-t border-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Our Fleet in Action</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mt-2">Real Vehicles, Real Success</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-slate-800 shadow-xl bg-slate-900/50 group">
              <img 
                src={fleetAboutImg} 
                alt="Mardons Driving Academy VW Polo Fleet Lineup" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4 text-center border-t border-slate-800">
                <p className="text-xs font-semibold text-slate-400">Dual-controlled, late-model training fleet prepared daily.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800 shadow-xl bg-slate-900/50 group">
              <img 
                src={fleetHeroImg} 
                alt="Mardons Training Cars on Track Location" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4 text-center border-t border-slate-800">
                <p className="text-xs font-semibold text-slate-400">Our pristine instruction assets ready for yard and track routines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="packages" className="bg-slate-900/20 border-y border-slate-900/60 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">Cost Effective Packages To Suit Your Budget</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              We have custom packages that have been tailor made to suit all budgets. <br/>
              Get in touch today to discuss how we can help you succeed!
            </p>
            <p className="text-red-500 text-xs uppercase tracking-widest font-bold mt-6">
              Select your training category below:
            </p>
            
            <div className="inline-flex p-1 bg-slate-900 rounded-lg mt-6 border border-slate-800 flex-wrap justify-center gap-1 sm:gap-0">
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

            {/* Pricing Matrix Architecture */}
            {activeTab === 'learners' ? (
              <div className="max-w-xl mx-auto">
                {pricing.learners.packages.map((pkg, idx) => (
                  <div key={idx} className="bg-slate-900 border-2 border-red-900/40 p-8 rounded-2xl flex flex-col items-center text-center shadow-2xl">
                    <span className="text-[11px] uppercase tracking-widest font-black text-red-500 bg-red-950/60 border border-red-900/40 px-3 py-1 rounded-full mb-4">
                      🚗 Official Theory Course
                    </span>
                    <h4 className="text-2xl font-black text-white mb-2">{pkg.hours}</h4>
                    <div className="text-4xl font-black text-red-500 mb-6">R400</div>
                    
                    <div className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-md space-y-3 mb-8 border-t border-slate-800/80 pt-6 text-center">
                      {pkg.desc.map((line, lIdx) => (
                        <p key={lIdx} className="font-medium tracking-wide">{line}</p>
                      ))}
                    </div>

                    <a 
                      href={generateWhatsAppLink('learners', pkg.hours, pkg.price, idx)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full max-w-sm bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-md transition-colors shadow-lg shadow-red-900/20"
                    >
                      Secure Learners License Package
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 items-start md:grid-cols-3">
                {pricing[activeTab].packages.map((pkg, idx) => {
                  const isThisCardSelected = !!selectedHireOptions[`${activeTab}-${idx}`];
                  const hasAddon = isThisCardSelected;
                  const finalPrice = hasAddon ? pkg.price + pricing[activeTab].hirePrice : pkg.price;

                  return (
                    <div key={idx} className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 p-6 rounded-xl transition-all relative flex flex-col justify-between min-h-[380px]">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Duration</div>
                            <h4 className="text-xl font-bold text-white">{pkg.hours}</h4>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-red-400 shadow-inner">
                            {pkg.label}
                          </span>
                        </div>
                        
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
                      
                      <div className="space-y-4 pt-2">
                        <label className="flex items-center gap-2.5 bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/60 px-3 py-2 rounded-md cursor-pointer select-none transition-colors w-full">
                          <input 
                            type="checkbox" 
                            checked={isThisCardSelected} 
                            onChange={(e) => handleHireCheckboxChange(activeTab, idx, e.target.checked)}
                            className="w-3.5 h-3.5 rounded text-red-600 bg-slate-900 border-slate-700 focus:ring-0 cursor-pointer accent-red-600"
                          />
                          <span className="text-[11px] font-semibold text-slate-300 tracking-wide">
                            {pricing[activeTab].hireLabel}
                          </span>
                        </label>
                        
                        <a 
                          href={generateWhatsAppLink(activeTab, pkg.hours, pkg.price, idx)}
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
            )}

            {/* Inclusions elements */}
            <div className="mt-12 bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl">
              <div className="text-xs font-bold uppercase text-slate-400 mb-6 tracking-wider text-center">
                {activeTab === 'learners' ? "What you'll get:" : "Package Inclusions & Rates:"}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center text-center">
                {pricing[activeTab].extras.map((extra, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-3 bg-slate-950/40 border border-slate-900/80 p-4 rounded-lg flex-1 h-full text-center">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-slate-300 text-xs font-semibold leading-relaxed tracking-wide max-w-[220px]">
                      {extra}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Testimonial Carousel */}
      <section id="testimonials" className="max-w-7xl mx-auto py-24 px-6 relative group/carousel">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-white mb-3">Endorsed By Drivers in The Bay</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Real stories from learners who trained with us and proudly earned their licenses.
          </p>
        </div>

        <div 
          className="overflow-hidden relative px-2"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, slideIdx) => (
              <div key={slideIdx} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.slice(slideIdx * 6, (slideIdx * 6) + 6).map((t, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl flex flex-col justify-between shadow-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/60">
                    <div>
                      <div className="flex gap-1 text-amber-500 mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <p className="text-slate-300 text-xs italic leading-relaxed mb-4">
                        "{t.text}"
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider border-t border-slate-800/40 pt-3 block">
                      — {t.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-red-600 border border-slate-800 p-2.5 rounded-full text-slate-300 hover:text-white transition-all shadow-xl opacity-80 group-hover/carousel:opacity-100 hidden md:block"
          title="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setCurrentSlide(prev => (prev + 1) % totalSlides)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-red-600 border border-slate-800 p-2.5 rounded-full text-slate-300 hover:text-white transition-all shadow-xl opacity-80 group-hover/carousel:opacity-100 hidden md:block"
          title="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-red-600' : 'w-2 bg-slate-800 hover:bg-slate-700'}`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-slate-900/20 border-t border-slate-900 pt-16 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="flex justify-center items-center">
            <img 
              src={logoImg} 
              alt="MDA Footer Logo" 
              className="h-24 md:h-28 w-auto object-contain rounded"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="text-3xl font-black text-white tracking-widest uppercase">
            MDA
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-red-500 font-extrabold block mb-4 text-sm md:text-base uppercase tracking-widest">
              Guiding Gqeberha with Confidence
            </span>
            <div className="text-sm text-slate-300 leading-relaxed font-medium space-y-2">
              <p>Modern, safe vehicles. Patient, trusted instruction.</p>
              <p>At Mardons, every lesson builds skill, safety, and lifelong confidence.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-semibold text-slate-400 pt-2">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-red-500 fill-current" /> 
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-red-500" /> 
              <span>{contactInfo.email}</span>
            </a>
            <a href={contactInfo.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-red-500" /> 
              <span>Algoa Park, Gqeberha</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-5 pt-4 border-t border-slate-900/60 max-w-xs mx-auto">
            <a href={contactInfo.googleSearch} target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 hover:bg-slate-800 rounded-full flex items-center justify-center border border-slate-800 transition-colors" title="Google Search">
              <GoogleIcon className="w-4 h-4" />
            </a>
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-pink-500 rounded-full flex items-center justify-center border border-slate-800 transition-colors" title="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-500 rounded-full flex items-center justify-center border border-slate-800 transition-colors" title="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={contactInfo.globalWhatsappMsg} target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-green-500 rounded-full flex items-center justify-center border border-slate-800 transition-colors" title="WhatsApp">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="text-slate-600 text-[11px] pt-8 border-t border-slate-900">
            Copyright © {new Date().getFullYear()} Mardons Driving Academy. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* SINGLE FLOATING PHONE HOTLINE TRIGGER CONTROLLER */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <a 
          href={`tel:${contactInfo.phone}`}
          className="relative w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          title="Call Hotline Instantly"
        >
          <span className="absolute inset-0 rounded-full bg-red-600/40 animate-ping opacity-75 pointer-events-none" />
          <span className="absolute -inset-1 rounded-full bg-red-600/20 animate-pulse pointer-events-none" />
          
          <Phone className="w-6 h-6 fill-current text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>

    </div>
  );
}
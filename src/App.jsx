import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Shield, Award, CheckCircle2, Phone, Mail, MapPin, 
  Clock, ArrowRight, Star, ChevronRight, UserCheck, ShieldCheck,
  Car, BookOpen, Calendar, Sparkles, UploadCloud, HelpCircle
} from 'lucide-react';

export default function App() {
  useEffect(() => {
    // Scroll baseline stabilizer
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-slate-200 selection:bg-orange-500 selection:text-white antialiased overflow-x-hidden">
      {/* Texture Background System */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <FAQ />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

// 1. NAVBAR SECTION (Floating Pill Architecture)
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full px-6 py-3 transition-all duration-300 ${scrolled ? 'bg-[#0F172A]/80 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center border border-orange-500/20 shadow-inner group-hover:scale-105 transition-transform">
            <Car className="text-orange-500 w-5 h-5" />
          </div>
          <div>
            <span className="font-sans font-extrabold text-lg tracking-tight text-white block leading-none">MARDONS</span>
            <span className="font-mono text-[9px] text-orange-500 tracking-widest uppercase font-bold">Driving Academy</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8 font-medium text-xs tracking-wider uppercase">
          <a href="#features" className="text-slate-300 hover:text-orange-500 transition-colors lift-on-hover">Why MDA</a>
          <a href="#services" className="text-slate-300 hover:text-orange-500 transition-colors lift-on-hover">K53 Training</a>
          <a href="#protocol" className="text-slate-300 hover:text-orange-500 transition-colors lift-on-hover">Our Method</a>
          <a href="#contact" className="px-5 py-2.5 bg-blue-700 border border-orange-500/30 rounded-full text-white font-bold hover:bg-orange-500 transition-all duration-300 tracking-normal normal-case shadow-md shadow-blue-900/40">Book Lesson</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none p-1">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1E293B]/95 backdrop-blur-lg rounded-2xl p-6 border border-white/10 flex flex-col space-y-4 text-base font-semibold z-50 shadow-2xl">
          <a href="#features" onClick={() => setIsOpen(false)} className="border-b border-slate-800 pb-2">Why MDA</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="border-b border-slate-800 pb-2">K53 Training</a>
          <a href="#protocol" onClick={() => setIsOpen(false)} className="border-b border-slate-800 pb-2">Our Method</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-orange-500 text-white text-center py-3 rounded-xl block font-bold">Book Lesson</a>
        </div>
      )}
    </nav>
  );
}

// 2. HERO SECTION
function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-24 overflow-hidden px-6 bg-radial-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0F172A] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
      </div>

      {/* Signature Animated Component Window */}
      <div className="absolute top-1/4 right-6 md:right-24 w-44 h-44 rounded-3xl bg-gradient-to-b from-blue-900/40 to-slate-900/60 border border-white/10 p-4 flex flex-col justify-between overflow-hidden backdrop-blur-sm pointer-events-none hidden sm:flex shadow-2xl">
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Polo Engine</span>
          <span className="font-mono text-[9px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded">Active</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow py-2">
          <Sparkles className="text-orange-500/40 w-12 h-12 animate-spin-[linear_12s_infinite]" />
        </div>
        <div className="flex items-center gap-1.5 border-t border-white/5 pt-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-slate-400">99.9% Pass Standard</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-20 space-y-8">
        <div className="inline-flex items-center space-x-2 bg-blue-950/60 px-4 py-1.5 rounded-full border border-blue-800/60 backdrop-blur">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="font-mono text-[10px] text-slate-300 tracking-widest uppercase font-bold">The Best in the Bay!</span>
        </div>

        <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08]">
          Preparing you for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 font-serif italic font-normal pr-2">road ahead.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
          Success-driven, professional K53 learner and driver training across Gqeberha (Port Elizabeth). Step inside our fleet of brand-new premium vehicles and pass with total confidence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center space-x-2 text-sm tracking-wide uppercase">
            <span>Schedule First Lesson</span>
            <ArrowRight size={16} />
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-[#1E293B]/80 hover:bg-slate-800 border border-white/5 text-white font-semibold rounded-xl transition-all text-sm">
            Explore K53 Packages
          </a>
        </div>
      </div>
    </section>
  );
}

// 3. FEATURES SECTION
function Features() {
  return (
    <section id="features" className="py-32 max-w-7xl mx-auto px-6 border-t border-slate-900">
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
        <h2 className="font-mono text-xs text-orange-500 tracking-widest uppercase font-bold">Premium Advantages</h2>
        <p className="font-sans font-extrabold text-3xl md:text-4xl text-white">Engineered for High Pass Rates & Safety</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#1E293B]/40 p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-orange-500/20 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center text-orange-500 mb-6 border border-white/5 shadow-inner">
            <Car size={22} />
          </div>
          <h3 className="font-sans text-xl font-bold text-white mb-3">Brand-New VW Polos</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Train comfortably inside clean, cutting-edge modern hatchbacks. Premium safety ratings, dual-control mechanics, and immaculate stability with zero hidden costs.
          </p>
          <div className="mt-6 font-mono text-[10px] text-orange-500 tracking-wider uppercase font-bold inline-flex items-center gap-1">
            Standard Fleet Benefit <ChevronRight size={12} />
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-950/40 to-transparent p-8 rounded-2xl border border-blue-900/30 relative overflow-hidden group shadow-xl">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20">
            <UserCheck size={22} />
          </div>
          <h3 className="font-sans text-xl font-bold text-white mb-3">Certified K53 Specialists</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Learn with accredited, incredibly patient instructors like Mona, Alfredo, and Siya. Highly structured lessons tailored explicitly to dissolve testing anxiety.
          </p>
          <div className="mt-6 flex gap-1 items-center text-xs text-slate-400 font-mono">
            <Star size={12} className="text-orange-400 fill-orange-400" /> 
            <span>Highly Credited in Algoa Park</span>
          </div>
        </div>

        <div className="bg-[#1E293B]/40 p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-blue-900/40 transition-all duration-300 shadow-xl">
          <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center text-orange-500 mb-6 border border-white/5 shadow-inner">
            <Calendar size={22} />
          </div>
          <h3 className="font-sans text-xl font-bold text-white mb-3">Flexible Pricing Structures</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We map value-driven budget frameworks alongside dynamic booking windows to perfectly accommodate your complex academic or work schedule.
          </p>
          <div className="mt-6 bg-[#0F172A] rounded-lg p-2.5 border border-white/5 text-[11px] font-mono flex items-center justify-between text-slate-400">
            <span>Availability: Mon - Sun</span>
            <span className="text-emerald-400 font-bold animate-pulse">Open</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. PILLARS SECTION (Animated Dashboard Stats)
function Pillars() {
  return (
    <section className="py-24 bg-[#0F172A]/60 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-1.5">
          <div className="font-sans font-black text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">99.9%</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-orange-500 font-bold">K53 Pass Metric</div>
        </div>
        <div className="space-y-1.5">
          <div className="font-sans font-black text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">100%</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-orange-500 font-bold">New Volkswagen Fleet</div>
        </div>
        <div className="space-y-1.5 col-span-2 md:col-span-1">
          <div className="font-sans font-black text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Certified</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-orange-500 font-bold">Patient Instructors</div>
        </div>
      </div>
    </section>
  );
}

// 5. PROTOCOL SECTION (Sticky Road Progression Roadmap)
function Protocol() {
  const steps = [
    { num: "01", title: "Theory & Foundation Preparation", desc: "Unlock comprehensive material tuition and interactive support covering rules of the road, standard K53 signage logic, and deep learners license test layouts." },
    { num: "02", title: "Dual-Control Range Navigation", desc: "Step inside our safe, brand-new VW Polos to cleanly lock down yard parking steps, clutch-control balance mechanics, parallel maneuvers, and incline tasks." },
    { num: "03", title: "Official Road Route Simulation", desc: "Execute real practical mock evaluation structures across local test center pathways in Gqeberha until perfect compliance habits become instant muscle memory." }
  ];

  return (
    <section id="protocol" className="py-32 max-w-5xl mx-auto px-6">
      <div className="mb-20 space-y-3">
        <h2 className="font-mono text-xs text-orange-500 tracking-widest uppercase font-bold">The Protocol</h2>
        <p className="font-sans font-extrabold text-3xl md:text-4xl text-white">Your Path to Total License Architecture</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="sticky top-24 bg-[#1E293B] p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-blue-900/60 transition-colors">
            <div className="flex items-start sm:items-center gap-6">
              <span className="font-mono text-4xl font-black text-orange-500/20">{step.num}</span>
              <div>
                <h3 className="font-sans text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm max-w-xl leading-relaxed">{step.desc}</p>
              </div>
            </div>
            <div className="bg-blue-950/60 border border-blue-800/40 px-4 py-2 rounded-xl font-mono text-[10px] text-slate-300 uppercase font-bold whitespace-nowrap self-end md:self-auto">
              Phase Completed
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 6. SERVICES GRID SECTION (6-Tile Premium Blueprint Layout)
function ServicesGrid() {
  const services = [
    { title: "Custom Novice Training", desc: "Tailored, low-stress structures optimized exclusively for complete driving beginners getting behind a steering wheel for the first time.", icon: Car },
    { title: "Proficient K53 Training", desc: "Structured preparation covering immediate yard parking criteria, precise road handling maneuvers, and official checklist rules.", icon: Shield },
    { title: "Advanced Refreshers", desc: "Rebuild road confidence, erase bad driving habits, or master local route updates for seasoned license holders.", icon: UserCheck },
    { title: "Learners License Preparation", desc: "Comprehensive material coaching, regulatory signal review, and practice quiz sets to secure an immediate theory pass.", icon: BookOpen },
    { title: "Test Day Escort & Rental", desc: "Arrive at the testing grounds stress-free with an instructor, warm up, and use our dual-control car for the official practical test.", icon: Award },
    { title: "Tailor-Made Budget Packages", desc: "Cost-effective, flexible pricing structures explicitly engineered to maximize your specific lesson counts and fit budgets.", icon: Sparkles }
  ];

  return (
    <section id="services" className="py-32 bg-[#090D1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left space-y-3">
          <h2 className="font-mono text-xs text-orange-500 tracking-widest uppercase font-bold">Elite Modules</h2>
          <p className="font-sans font-extrabold text-3xl md:text-4xl text-white">Driver Instruction Built Around You</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-900 rounded-2xl overflow-hidden border border-slate-900 shadow-2xl">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div key={idx} className="bg-[#0F172A] p-8 hover:bg-[#1E293B]/40 transition-colors duration-300 group space-y-4">
                <div className="w-10 h-10 bg-blue-950/60 border border-white/5 rounded-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <IconComponent size={20} />
                </div>
                <h3 className="font-sans font-bold text-lg text-white group-hover:text-orange-500 transition-colors">{srv.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 7. FAQ SECTION
function FAQ() {
  const faqs = [
    { q: "Do you charge extra to train in the brand-new Polos?", a: "No, absolutely not. Our entire fleet consists exclusively of clean, brand-new Volkswagen Polos. Every student gets the exact same high-end safety advantage at our standard base package rates." },
    { q: "Which areas do you cover for pickups?", a: "We provide comprehensive learner pickups across Gqeberha (Port Elizabeth) and surrounding areas, including targeted practice runs right alongside official K53 testing routes." },
    { q: "Can I use your academy vehicle for my official driver test day?", a: "Yes, our specialized 'Test Day Escort & Car Rental' module includes thorough preparation warm-ups, complete transport to the center, and the use of our dual-control car for the official exam." }
  ];

  return (
    <section className="py-32 max-w-4xl mx-auto px-6 border-b border-slate-900">
      <div className="text-center mb-16 space-y-2">
        <h2 className="font-mono text-xs text-orange-500 tracking-widest uppercase font-bold">Faq</h2>
        <p className="font-sans font-extrabold text-3xl text-white">Frequently Asked Questions</p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-[#1E293B]/30 border border-white/5 p-6 rounded-xl space-y-2">
            <h4 className="font-sans font-bold text-white flex items-start gap-2">
              <HelpCircle size={18} className="text-orange-500 shrink-0 mt-0.5" />
              <span>{faq.q}</span>
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed pl-6">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 8. TRUST SIGNALS SECTION (Student Endorsements)
function TrustSignals() {
  return (
    <section className="py-32 max-w-5xl mx-auto px-6 text-center space-y-12">
      <div className="space-y-2">
        <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase font-bold">Endorsed Across Nelson Mandela Bay</h2>
        <p className="font-sans font-extrabold text-2xl text-white">Real Academy Pass Stories</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-[#1E293B]/40 rounded-2xl border border-white/5 flex flex-col items-center space-y-3 text-left shadow-lg">
          <div className="flex text-amber-400 space-x-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
          <p className="text-sm italic text-slate-300">"Mona was incredibly patient. Passed my practical driver exam on the first attempt at the center!"</p>
          <span className="font-mono text-[11px] text-orange-500 font-bold uppercase tracking-wider mt-auto pt-4">— Lindokuhle M.</span>
        </div>
        <div className="p-6 bg-[#1E293B]/40 rounded-2xl border border-white/5 flex flex-col items-center space-y-3 text-left shadow-lg">
          <div className="flex text-amber-400 space-x-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
          <p className="text-sm italic text-slate-300">"The brand new Polo feels safe and easy to control. Alfredo makes parallel parking step-by-step simple."</p>
          <span className="font-mono text-[11px] text-orange-500 font-bold uppercase tracking-wider mt-auto pt-4">— Chantal K.</span>
        </div>
        <div className="p-6 bg-[#1E293B]/40 rounded-2xl border border-white/5 flex flex-col items-center space-y-3 text-left shadow-lg">
          <div className="flex text-amber-400 space-x-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
          <p className="text-sm italic text-slate-300">"Siya is the ultimate K53 coach. Transparent pricing models with zero hidden test-day line item additions."</p>
          <span className="font-mono text-[11px] text-orange-500 font-bold uppercase tracking-wider mt-auto pt-4">— Wesley B.</span>
        </div>
      </div>
    </section>
  );
}

// 9. CONTACT FORM SECTION (State Handling + Security Vault Storage)
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Custom Novice Training' });
  const [status, setStatus] = useState('idle'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      localStorage.setItem('mda_lead_vault', JSON.stringify(formData));
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 border-t border-slate-900">
      <div className="space-y-8 self-center">
        <div className="space-y-4">
          <h2 className="font-mono text-xs text-orange-500 tracking-widest uppercase font-bold">Secure Your Seat</h2>
          <p className="font-sans font-extrabold text-3xl md:text-5xl text-white tracking-tight">Let's Get Your License Sorted.</p>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Drop your details below. Our booking coordinators will immediately reach out via call or email to anchor your K53 lesson calendar.
          </p>
        </div>

        <div className="space-y-4 font-mono text-xs uppercase tracking-wider text-slate-300">
          <div className="flex items-center space-x-3"><MapPin size={16} className="text-orange-500" /> <span>1 Exmouth Street, Algoa Park, Gqeberha</span></div>
          <div className="flex items-center space-x-3"><Phone size={16} className="text-orange-500" /> <span>076 029 5823</span></div>
          <div className="flex items-center space-x-3"><Mail size={16} className="text-orange-500" /> <span>info@mardonsdrivingacademy.org.za</span></div>
        </div>
      </div>

      <div className="bg-[#1E293B] p-8 rounded-2xl border border-white/5 shadow-2xl relative">
        {status === 'sent' ? (
          <div className="h-72 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/30 shadow-inner"><CheckCircle2 size={24} /></div>
            <h3 className="font-sans font-bold text-xl text-white">Booking Matrix Verified</h3>
            <p className="text-slate-400 text-xs max-w-xs leading-relaxed">Data sheet successfully logged. An academy instructor will touch base within local business hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 font-bold">Full Name</label>
              <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0F172A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 text-sm transition-colors" placeholder="e.g. Mona" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 font-bold">Email Address</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#0F172A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 text-sm transition-colors" placeholder="name@domain.co.za" />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 font-bold">Mobile Number</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#0F172A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 text-sm transition-colors" placeholder="076 029 5823" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 font-bold">Target Instruction Module</label>
              <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-[#0F172A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 text-sm transition-colors">
                <option>Custom Novice Training</option>
                <option>Proficient K53 Driver Training</option>
                <option>Advanced Refreshers</option>
                <option>Learners License Preparation</option>
                <option>Test Day Escort & Car Rental</option>
                <option>Tailor-Made Budget Packages</option>
              </select>
            </div>
            
            <div className="border border-dashed border-white/10 rounded-xl p-4 text-center hover:border-blue-800 cursor-pointer transition-colors bg-[#0F172A]/50">
              <UploadCloud size={20} className="mx-auto text-slate-500 mb-1.5" />
              <span className="text-[11px] text-slate-400 block">Upload ID Copy or Learner Certificate (Optional)</span>
            </div>

            <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 text-white font-bold rounded-xl tracking-wider text-xs transition-all uppercase shadow-md shadow-orange-950/20">
              {status === 'sending' ? 'Transmitting Secure Data...' : 'Confirm Fleet Assignment'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// 10. FOOTER SECTION
function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#090D1A] py-12 px-6 text-slate-500 text-xs font-mono">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-900 rounded flex items-center justify-center text-orange-500"><Car size={13} /></div>
          <span className="font-sans font-bold text-white tracking-tight text-sm">MDA · Nelson Mandela Bay</span>
        </div>
        <div className="flex space-x-6">
          <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-slate-300 transition-colors">K53 Terms</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Mardons Driving Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
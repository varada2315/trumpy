import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crosshair, 
  BlueprintMarker, 
  DesignGrid, 
  FloatingSphere, 
  GridLines,
  FlavorWheel,
  DecorativeCoordinates,
  VerticalRunningText,
  TechnicalSpecs
} from '../components/AbstractElements';

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Partnership() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    natureOfPartnership: 'Foreign Brand Expansion',
    overview: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSuccess(true);
      setFormData({
        fullName: '',
        organization: '',
        email: '',
        natureOfPartnership: 'Foreign Brand Expansion',
        overview: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full relative overflow-hidden bg-background">
      {/* Decorative Grid Lines */}
      <GridLines />
      <DesignGrid />

      {/* Floating sphere elements */}
      <FloatingSphere color="bg-secondary/5" size="w-[550px] h-[550px]" delay={0} duration={24} />
      <FloatingSphere color="bg-tertiary/10" size="w-[300px] h-[300px]" delay={4} duration={19} />

      {/* Side-running text */}
      <VerticalRunningText text="COLLABORATION GATEWAY // EXPANSION SYSTEM" className="top-48 left-6" />

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden hero-gradient-partnership border-b border-outline-variant/15">
          <Crosshair className="top-10 left-10" />
          <Crosshair className="bottom-10 right-10" />
          <BlueprintMarker label="PARTNERSHIPS // ACCESS SYSTEM" className="top-10 right-20" />
          <FlavorWheel className="top-1/4 right-[10%] text-secondary/15" />
          <DecorativeCoordinates className="absolute bottom-10 left-margin-desktop hidden lg:block" />

          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full py-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 text-left"
            >
              <motion.h1 
                variants={fadeInUp}
                className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight font-bold"
              >
                Your Gateway to the <br/>
                <span className="italic text-secondary">Indian Market</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12 text-sm md:text-base leading-relaxed"
              >
                TRUMPY provides an artisanal, one-stop ecosystem for foreign heritage brands and ambitious Indian startups to scale, collaborate, and conquer the world's most dynamic consumer landscape.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-6"
              >
                <a 
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest text-xs hover:bg-secondary transition-all duration-300 shadow-md relative z-10" 
                  href="#inquiry"
                >
                  Start Collaboration
                </a>
                <a 
                  className="border border-primary text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-all duration-300" 
                  href="#usp"
                >
                  Explore Solutions
                </a>
              </motion.div>
            </motion.div>

            {/* Local high-quality generated interior asset */}
            <motion.div 
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="lg:col-span-5 relative mt-12 lg:mt-0"
            >
              <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
                <img 
                  className="object-cover w-full h-full" 
                  alt="Luxury Indian interior design" 
                  src="/assets/interior_lobby.png"
                />
              </div>
            </motion.div>

          </div>
        </section>

        {/* USP Highlights */}
        <section className="py-24 bg-surface-container-low/40 backdrop-blur-sm border-b border-outline-variant/20" id="usp">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
            <Crosshair className="top-6 left-10" />
            <Crosshair className="bottom-6 right-10" />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-secondary mb-4 block text-xs font-bold">
                Strategic Advantage
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-semibold">
                Why Partner with TRUMPY?
              </h2>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left"
            >
              {/* USP 1 */}
              <motion.div 
                variants={fadeInUp}
                className="p-10 bg-surface border border-outline-variant/30 hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary-fixed text-on-tertiary-fixed-variant mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4 font-semibold">One Stop Solution</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                  From regulatory compliance and warehousing to high-end retail placement, we manage the entire value chain for your brand.
                </p>

                <TechnicalSpecs 
                  specs={["COMPLIANCE: 100%", "LICENSING: COMPLETE", "LOGISTICS: OWNED"]} 
                  className="text-outline/60" 
                />
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/15 pointer-events-none transition-colors"></div>
              </motion.div>
              
              {/* USP 2 */}
              <motion.div 
                variants={fadeInUp}
                className="p-10 bg-surface border border-outline-variant/30 hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary-fixed text-on-tertiary-fixed-variant mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">storefront</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4 font-semibold">Market Access</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                  Instant entry into tier-1 luxury segments and high-growth consumer clusters across India through our established networks.
                </p>

                <TechnicalSpecs 
                  specs={["REACH: PAN-INDIA", "SEGMENTS: METRO", "RETAIL OUTLETS: 150+"]} 
                  className="text-outline/60" 
                />
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/15 pointer-events-none transition-colors"></div>
              </motion.div>
              
              {/* USP 3 */}
              <motion.div 
                variants={fadeInUp}
                className="p-10 bg-surface border border-outline-variant/30 hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary-fixed text-on-tertiary-fixed-variant mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4 font-semibold">Brand Collaboration</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                  Synergistic partnerships between heritage global brands and modern Indian craftsmanship to create unique market propositions.
                </p>

                <TechnicalSpecs 
                  specs={["CO-LABS: ACTIVE", "INVESTMENT: SYNERGY", "EQUITY: CUSTOM"]} 
                  className="text-outline/60" 
                />
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/15 pointer-events-none transition-colors"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact & Form Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative" id="inquiry">
          <Crosshair className="top-10 left-10" />
          <Crosshair className="bottom-10 right-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start text-left">
            
            {/* Inquiry Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display-lg text-headline-md md:text-headline-md text-primary mb-6 font-bold">
                Let's craft the future of commerce together.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 text-sm md:text-base leading-relaxed">
                Whether you are a global brand looking for a foothold in India or a local startup ready for the next level, our team is ready to assist.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-surface-container-high rounded-full">
                    <span className="material-symbols-outlined text-secondary">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-1 text-[10px] font-bold">
                      Email us
                    </p>
                    <a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" href="mailto:connect@trumpy.in">
                      connect@trumpy.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-surface-container-high rounded-full">
                    <span className="material-symbols-outlined text-secondary">chat</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-1 text-[10px] font-bold">
                      WhatsApp
                    </p>
                    <a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" href="https://wa.me/917600467134">
                      +91 76004 67134
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-surface-container-high rounded-full">
                    <span className="material-symbols-outlined text-secondary">groups</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-1 text-[10px] font-bold">
                      Follow our journey
                    </p>
                    <a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" href="https://instagram.com/trumpy.in" target="_blank" rel="noopener noreferrer">
                      @trumpy.in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Inquiry Form Card (Framer-animated inputs and success overlay) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-surface-container p-8 md:p-16 relative border border-outline-variant/20 shadow-xl"
            >
              <h3 className="font-headline-sm text-headline-sm mb-12 text-center uppercase tracking-widest text-base font-bold">
                Partnership Inquiry
              </h3>
              
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="relative group">
                  <label className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2 group-focus-within:text-secondary transition-colors text-xs font-bold">
                    Full Name
                  </label>
                  <input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary focus:outline-none luxury-input font-body-md text-on-surface" 
                    placeholder="e.g. Julian Varma" 
                    required 
                    type="text"
                  />
                  <div className="luxury-underline"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2 group-focus-within:text-secondary transition-colors text-xs font-bold">
                      Organization
                    </label>
                    <input 
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary focus:outline-none luxury-input font-body-md text-on-surface" 
                      placeholder="Company Name" 
                      type="text"
                    />
                    <div className="luxury-underline"></div>
                  </div>
                  <div className="relative group">
                    <label className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2 group-focus-within:text-secondary transition-colors text-xs font-bold">
                      Email Address
                    </label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary focus:outline-none luxury-input font-body-md text-on-surface" 
                      placeholder="email@domain.com" 
                      required 
                      type="email"
                    />
                    <div className="luxury-underline"></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2 group-focus-within:text-secondary transition-colors text-xs font-bold">
                    Nature of Partnership
                  </label>
                  <select 
                    name="natureOfPartnership"
                    value={formData.natureOfPartnership}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary focus:outline-none luxury-input font-body-md text-on-surface appearance-none"
                  >
                    <option value="Foreign Brand Expansion">Foreign Brand Expansion</option>
                    <option value="Indian Startup Acceleration">Indian Startup Acceleration</option>
                    <option value="Retail Distribution">Retail Distribution</option>
                    <option value="Investment & Collaboration">Investment & Collaboration</option>
                  </select>
                  <div className="luxury-underline"></div>
                </div>
                
                <div className="relative group">
                  <label className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2 group-focus-within:text-secondary transition-colors text-xs font-bold">
                    Brief Overview
                  </label>
                  <textarea 
                    name="overview"
                    value={formData.overview}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary focus:outline-none luxury-input font-body-md text-on-surface resize-none" 
                    placeholder="How can we help you access the Indian consumer market?" 
                    rows="4"
                    required
                  ></textarea>
                  <div className="luxury-underline"></div>
                </div>

                {error && (
                  <p className="text-error text-xs font-bold transition-opacity duration-300">
                    {error}
                  </p>
                )}
                
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={submitting}
                  className="w-full bg-primary text-on-primary py-6 font-label-caps text-label-caps uppercase tracking-[0.3em] hover:bg-secondary transition-all duration-500 shadow-lg text-xs font-bold disabled:opacity-50" 
                  type="submit"
                >
                  {submitting ? 'Submitting...' : 'Request Consultation'}
                </motion.button>
              </form>

              {/* Form Success Message with Framer Motion fade-in */}
              {success && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-surface-container flex flex-col items-center justify-center text-center p-10 z-10"
                >
                  <span className="material-symbols-outlined text-secondary text-6xl mb-6">check_circle</span>
                  <h4 className="font-headline-md text-headline-md mb-4 text-primary">Inquiry Received</h4>
                  <p className="font-body-md text-on-surface-variant text-sm max-w-xs leading-relaxed">
                    A partnership specialist will reach out to you within 24 business hours.
                  </p>
                  <button 
                    className="mt-8 text-secondary font-label-caps text-label-caps underline uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors" 
                    onClick={() => setSuccess(false)}
                  >
                    Send another message
                  </button>
                </motion.div>
              )}

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

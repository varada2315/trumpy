import React from 'react';
import { Link } from 'react-router-dom';
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

// Animation variants
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
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden bg-background">
      {/* Abstract Blueprint Grid guides across the page */}
      <GridLines />
      <DesignGrid />

      {/* Floating abstract decorative background particles */}
      <FloatingSphere color="bg-secondary/5" size="w-[500px] h-[500px]" delay={0} duration={25} />
      <FloatingSphere color="bg-tertiary/10" size="w-[300px] h-[300px]" delay={5} duration={18} />

      {/* Vertical running brand identifier */}
      <VerticalRunningText text="TRUMPY FOOD & BEVERAGES PRIVATE LIMITED" className="top-40 left-6" />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden border-b border-outline-variant/20">
        {/* Background Image with local high-quality generated asset */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('/assets/hero_home.png')` 
            }}
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Abstract Rotating Schematic Overlay */}
        <FlavorWheel className="top-1/4 right-[10%] text-secondary-fixed-dim" />

        {/* Abstract Blueprint Crosshairs in Hero */}
        <Crosshair className="top-24 left-10" />
        <Crosshair className="bottom-12 right-10" />
        <BlueprintMarker label="HERO-GRID // max-1280px" className="top-24 right-20" />
        <DecorativeCoordinates className="absolute bottom-10 left-margin-desktop hidden lg:block" />
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full pt-20">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-left"
          >
            <motion.span 
              variants={fadeInUp}
              className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-[0.3em] block mb-6"
            >
              Heritage Artisanal Reserve
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-surface-bright mb-8 leading-[1.1]"
            >
              One Stop Solution from Formulation to Distribution
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="font-body-lg text-body-lg text-surface-container-highest mb-10 max-w-lg opacity-90"
            >
              Crafting excellence at every stage. From the initial spark of an idea to global shelf presence, we redefine the journey of luxury beverages.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-6"
            >
              <Link 
                to="/partnership" 
                className="bg-secondary text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              </Link>
              <Link 
                to="/services" 
                className="border border-surface-bright text-surface-bright px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-surface-bright hover:text-primary transition-all duration-300"
              >
                Our Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-surface-bright/50"
        >
          <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
        </motion.div>
      </header>

      {/* Expertise Bento Grid */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <Crosshair className="top-10 left-10" />
        <Crosshair className="bottom-10 right-10" />
        <BlueprintMarker label="BENTO GRID // SECTION 02" className="top-10 right-24" />
        <VerticalRunningText text="CRAFT ENGINE // BENTO SYSTEM" className="top-[30rem] right-0" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Expertise</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
        >
          {/* Big Item: Manufacturing */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-8 group relative overflow-hidden h-[600px] border border-outline-variant/30 bg-primary/20 cursor-pointer"
          >
            <div 
              className="w-full h-full bg-cover bg-center transition-slow group-hover:scale-105" 
              style={{ backgroundImage: `url('/assets/manufacturing.png')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 p-12 text-left z-10 w-full">
              <span className="font-label-caps text-[10px] text-secondary-fixed uppercase tracking-widest block mb-2">Facility Run</span>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-4">State-of-the-Art Manufacturing</h3>
              <p className="text-surface-container-highest max-w-md opacity-80 mb-6 text-sm">
                Our facilities merge traditional wisdom with modern industrial precision to guarantee consistency in every drop.
              </p>
              
              {/* Technical Specifications */}
              <TechnicalSpecs 
                specs={["VAT CAPACITY: 20,000L", "PURITY LEVEL: 100%", "AUTOMATION: 98.4%"]} 
                className="text-secondary-fixed-dim/70 mb-6" 
              />

              <Link 
                to="/services" 
                className="inline-flex items-center text-secondary-fixed-dim font-bold tracking-widest text-xs uppercase group/link"
              >
                Explore Facility 
                <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-2">arrow_right_alt</span>
              </Link>
            </div>
            {/* Grid blueprint border line overlay on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-colors duration-300 pointer-events-none"></div>
          </motion.div>
          
          {/* Side Item 1: Formulation */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-4 group relative overflow-hidden h-[600px] border border-outline-variant/30 cursor-pointer"
          >
            <div 
              className="w-full h-full bg-cover bg-center transition-slow group-hover:scale-105" 
              style={{ backgroundImage: `url('/assets/formulation.png')` }}
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/45 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-primary/80 to-transparent text-left z-10 w-full">
              <span className="font-label-caps text-[10px] text-secondary-fixed-dim uppercase tracking-widest block mb-2">Molecular Craft</span>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-2">Advanced Formulation</h3>
              <p className="text-surface-container-highest text-sm opacity-70 mb-4">
                Master blenders and food scientists working in harmony to craft unique flavor profiles.
              </p>

              <TechnicalSpecs 
                specs={["pH: 4.2 - 7.5", "STABILITY: 12M", "BOTANICALS: LOCAL"]} 
                className="text-secondary-fixed-dim/60" 
              />
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-colors duration-300 pointer-events-none"></div>
          </motion.div>
          
          {/* Bottom Item: Distribution */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-12 group relative h-[300px] border border-outline-variant/30 bg-surface-container/60 backdrop-blur-sm flex items-center overflow-hidden cursor-pointer"
          >
            <div className="w-full md:w-1/2 p-12 relative z-10 text-left">
              <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest block mb-2">Logistics</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Global Distribution</h3>
              <p className="text-on-surface-variant max-w-lg mb-6 text-sm leading-relaxed">
                Navigating complex international regulations to deliver premium beverages to enthusiasts worldwide.
              </p>

              <TechnicalSpecs 
                specs={["PORTS REACHED: 14+", "CUSTOMS TIME: 48H", "WAREHOUSING: INSULATED"]} 
                className="text-outline/70" 
              />
            </div>
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-2/3 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[300px] absolute right-10 top-1/2 -translate-y-1/2">public</span>
            </div>
            <div className="absolute right-20 top-1/2 -translate-y-1/2 flex gap-4">
              <div className="w-12 h-12 rounded-full border border-outline/30 flex items-center justify-center hover:border-secondary transition-colors group-hover:scale-105 duration-300">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-outline/30 flex items-center justify-center hover:border-secondary transition-colors group-hover:scale-105 duration-300">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-colors duration-300 pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trumpy Story Teaser */}
      <section className="py-32 bg-surface-container-low/40 backdrop-blur-sm relative overflow-hidden border-y border-outline-variant/20">
        <Crosshair className="top-12 left-10" />
        <Crosshair className="bottom-12 right-10" />
        <VerticalRunningText text="STRAY COMPANIONS CHARITY FUND // COEXISTENCE" className="top-44 left-6" />

        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Image Frame with hover scaling & Framer Motion reveal */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-secondary/30"></div>
              <div className="relative h-[600px] border-4 border-surface shadow-2xl overflow-hidden group">
                <img 
                  alt="Trumpy the companion" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="/assets/dog_companion.png"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 glass-card p-8 border border-outline-variant/30 shadow-xl"
              >
                <p className="font-headline-sm text-secondary font-semibold">The Original Companion</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-left"
            >
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] block mb-6 text-xs font-bold">
                Our Legacy
              </span>
              <h2 className="font-display-lg text-headline-md text-primary mb-8 leading-tight">
                The Trumpy Story: <br/>Loyalty, Heritage, Vision.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 text-sm md:text-base leading-relaxed">
                Named after our founding companion, TRUMPY embodies the same resilience, loyalty, and spirited nature found in the noble Indian Pariah. Like our namesake, we are rooted in the rich soil of India while possessing a vision that knows no borders.
              </p>
              <div className="space-y-6 italic font-headline-sm text-primary/80 border-l-2 border-secondary pl-8 mb-8 text-lg">
                "By India, From India, To World."
              </div>
              <p className="font-body-md text-on-surface-variant opacity-80 text-sm">
                We don't just export products; we export the essence of Indian craftsmanship and the uncompromising standard of modern luxury to every corner of the globe.
              </p>
              <Link 
                to="/story" 
                className="inline-flex mt-12 group items-center font-bold uppercase tracking-widest text-xs text-primary transition-all duration-300"
              >
                Discover Our Full Story
                <motion.div 
                  className="ml-4 w-12 h-[1px] bg-secondary"
                  whileHover={{ width: 80 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with clean animated blocks */}
      <section className="py-24 bg-primary text-surface-bright relative border-b border-outline-variant/10">
        {/* Schematic circles in background */}
        <FlavorWheel className="bottom-0 left-[5%] text-surface-bright/5 opacity-5" />
        
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter text-center"
          >
            {[
              { stat: "24+", label: "Countries Reached" },
              { stat: "150+", label: "Luxury Outlets" },
              { stat: "08+", label: "Global Awards" },
              { stat: "100%", label: "Purity Standard" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-10 border border-surface-bright/10 hover:border-surface-bright/35 hover:bg-surface-bright/[0.02] transition-all duration-500 cursor-pointer"
              >
                <div className="font-display-lg text-display-lg-mobile text-secondary-fixed mb-2 font-bold">{item.stat}</div>
                <div className="font-label-caps text-label-caps uppercase tracking-widest opacity-60 text-xs">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-40 bg-surface relative">
        <Crosshair className="top-10 left-10" />
        <Crosshair className="bottom-10 right-10" />
        <FlavorWheel className="top-12 left-[10%] text-secondary/15" />
        <FlavorWheel className="bottom-12 right-[10%] text-secondary/15" />

        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">
              Partner with TRUMPY
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 text-sm md:text-base leading-relaxed">
              Whether you are an established brand seeking scale or a visionary starting from scratch, we offer the technical prowess and distribution network to make your mark.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/partnership" 
                className="inline-block bg-primary text-white px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Start a Conversation</span>
                <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              </Link>
              <a 
                href="#" 
                className="inline-block border border-primary text-primary px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-300"
              >
                Download Brochure
              </a>
            </div>
            
            {/* Brand Accent Badges */}
            <div className="mt-20 flex justify-center gap-12 opacity-35 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="material-symbols-outlined text-4xl">verified</span>
              <span className="material-symbols-outlined text-4xl">eco</span>
              <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

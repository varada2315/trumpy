import React from 'react';
import { motion } from 'framer-motion';
import ThreeBottle from '../components/ThreeBottle';
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

// Animation configs
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

export default function Services() {
  return (
    <div className="w-full relative overflow-hidden bg-background">
      {/* Decorative Grid Guides */}
      <GridLines />
      <DesignGrid />

      {/* Floating sphere elements */}
      <FloatingSphere color="bg-secondary/5" size="w-[500px] h-[500px]" delay={1} duration={22} />
      <FloatingSphere color="bg-tertiary/10" size="w-[350px] h-[350px]" delay={3} duration={17} />

      {/* Side-running brand text */}
      <VerticalRunningText text="SERVICES // FORMULATION TO DISTRIBUTION" className="top-48 left-6" />

      {/* Hero Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-left pt-36 border-b border-outline-variant/10 relative">
        <Crosshair className="top-12 left-10" />
        <Crosshair className="bottom-6 right-10" />
        <BlueprintMarker label="SERVICES // CORE EXPERTISE" className="top-12 right-20" />
        <FlavorWheel className="top-12 right-[10%] text-secondary/15" />
        <DecorativeCoordinates className="absolute bottom-6 left-margin-desktop hidden lg:block" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span 
            variants={fadeInUp}
            className="font-label-caps text-label-caps text-secondary uppercase block mb-4 text-xs font-bold tracking-widest"
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight font-bold"
          >
            Elevating Global Palates Through Indigenous Heritage
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="font-body-lg text-body-lg text-on-surface-variant mb-12 text-sm md:text-base leading-relaxed"
          >
            TRUMPY offers a vertically integrated ecosystem for high-end food and beverage brands. From the initial spark of formulation to global distribution, we handle the complexities of artisanal manufacturing with precision.
          </motion.p>
        </motion.div>
      </section>

      {/* Service Pillars - Bento Layout */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-32 relative">
        <Crosshair className="top-10 left-10" />
        <Crosshair className="bottom-10 right-10" />
        <VerticalRunningText text="SERVICE STACK // MONO SYSTEM" className="top-[32rem] right-0" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-gutter text-left"
        >
          {/* 1. Formulation Section */}
          <motion.div 
            variants={fadeInUp}
            layout
            className="lg:col-span-8 group service-card card-lift border border-outline-variant/30 p-8 md:p-12 bg-surface-container-low/60 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">science</span>
                <h2 className="font-headline-md text-headline-md text-primary font-semibold">Formulation of New Product</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl text-sm leading-relaxed mb-6">
                Our R&D laboratory blends ancestral Indian knowledge with modern molecular gastronomy. We craft recipes that balance loyalty to heritage with resilience to global shipping standards.
              </p>

              <TechnicalSpecs 
                specs={["LAB: R&D CLASS 100", "FORMULAS TESTED: 420+", "SHIPPING RESILIENT"]} 
                className="text-secondary/80 mb-6" 
              />
              
              {/* React Motion Accordion Trigger on Hover */}
              <div className="reveal-content">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                    <span className="font-body-md text-body-md text-sm">Nutrient Profile Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                    <span className="font-body-md text-body-md text-sm">Shelf-life extension using natural antioxidants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                    <span className="font-body-md text-body-md text-sm">Global regulatory compliance testing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Three.js Interactive Container */}
            <div className="mt-12 h-80 rounded-xl overflow-hidden bg-surface-container-high/60 relative border border-outline-variant/20 shadow-inner group-hover:border-secondary/20 transition-colors">
              <div className="absolute inset-0 w-full h-full">
                <ThreeBottle />
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[9px] font-label-caps text-on-surface-variant/60 uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[12px]">touch_app</span>
                Interactive 3D Formulation Model
              </div>
            </div>
          </motion.div>

          {/* 2. Contract Manufacturing */}
          <motion.div 
            variants={fadeInUp}
            layout
            className="lg:col-span-4 group service-card card-lift border border-outline-variant/30 bg-primary text-on-primary p-8 md:p-10 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="relative z-10 w-full">
              <div className="mb-8 p-3 w-fit border border-on-primary/30 rounded-full">
                <span className="material-symbols-outlined text-secondary-fixed text-4xl">precision_manufacturing</span>
              </div>
              <h2 className="font-headline-md text-headline-md mb-6 font-semibold">Contract Manufacturing</h2>
              <p className="font-body-md text-body-md text-on-primary/70 mb-8 text-sm leading-relaxed">
                Boutique production runs with Low MOQ (Minimum Order Quantity), designed for luxury market testing and artisan scaling.
              </p>

              <TechnicalSpecs 
                specs={["MOQ: 500 UNITS", "ISO: 9001/22000", "AGILITY: HIGH"]} 
                className="text-secondary-fixed-dim/70 mb-6" 
              />
              
              <div className="reveal-content border-t border-on-primary/10 pt-6">
                <div className="text-secondary-fixed font-bold text-headline-sm mb-2 text-base">
                  Low MOQ Focus
                </div>
                <p className="text-body-md text-on-primary/60 text-sm">
                  Start small, scale with precision. Our facility supports agile production for premium startups.
                </p>
              </div>
            </div>
            
            {/* Replaced blurred with generated high-quality asset */}
            <div className="mt-8 h-48 rounded-lg overflow-hidden grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-md">
              <img 
                className="w-full h-full object-cover" 
                alt="Contract manufacturing facility" 
                src="/assets/manufacturing.png"
              />
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-colors pointer-events-none"></div>
          </motion.div>

          {/* 3. Brand Development */}
          <motion.div 
            variants={fadeInUp}
            layout
            className="lg:col-span-6 group service-card card-lift border border-outline-variant/30 p-8 md:p-12 bg-white relative flex flex-col justify-between"
          >
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-2 block text-xs font-bold tracking-wider">
                Storytelling
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mb-6 font-semibold">
                Brand Development
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant text-sm leading-relaxed mb-6">
                We don't just package products; we build heritage brands. Our design language uses the "By India, For World" narrative to create emotional resonance with global epicureans.
              </p>

              <TechnicalSpecs 
                specs={["STORY SYSTEM: COHESIVE", "ASSETS: LUXURY RADIUS", "DESIGNS: 15+"]} 
                className="text-outline/70" 
              />
            </div>
            
            <div className="flex gap-4 mt-8">
              <div className="w-1/3 aspect-[3/4] bg-surface-container-low border border-outline-variant/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-outline-variant">draw</span>
              </div>
              <div className="w-2/3 aspect-video bg-surface-container-low border border-outline-variant/20 flex flex-col p-6">
                <div className="h-1 w-12 bg-secondary mb-4"></div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Identity Design
                </div>
                <div className="mt-auto h-2 bg-outline-variant/30 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-secondary w-3/4"></div>
                </div>
              </div>
            </div>

            <div className="reveal-content mt-8">
              <p className="font-body-md text-body-md text-on-surface-variant italic text-sm">
                "Architecture of flavor meets visual narrative. We define the soul of your product before the first bottle is filled."
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-colors pointer-events-none"></div>
          </motion.div>

          {/* 4. Global Distribution */}
          <motion.div 
            variants={fadeInUp}
            layout
            className="lg:col-span-6 group service-card card-lift border border-outline-variant/30 p-8 md:p-12 bg-surface-container-highest/60 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="font-headline-md text-headline-md text-primary font-semibold">Global Distribution</h2>
                <span className="material-symbols-outlined text-secondary text-5xl opacity-40">public</span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 text-sm leading-relaxed">
                Access a curated network of luxury retailers and boutique distributors across Europe, North America, and Southeast Asia.
              </p>

              <TechnicalSpecs 
                specs={["RETAILERS: LUXURY BRAND", "TRANSIT TIME: 7-14D", "COURIERS: PREMIUM"]} 
                className="text-outline/70 mb-8" 
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-surface border border-outline-variant/20">
                  <div className="text-headline-sm text-primary font-bold">24+</div>
                  <div className="text-[10px] font-label-caps uppercase text-secondary font-bold">Countries</div>
                </div>
                <div className="p-6 bg-surface border border-outline-variant/20">
                  <div className="text-headline-sm text-primary font-bold">150+</div>
                  <div className="text-[10px] font-label-caps uppercase text-secondary font-bold">Luxury Outlets</div>
                </div>
              </div>
            </div>

            <div className="reveal-content mt-8">
              <button className="w-full py-4 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-300">
                Review Network Map
              </button>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-colors pointer-events-none"></div>
          </motion.div>

        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-on-primary">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-lg text-display-lg mb-8 text-display-lg-mobile md:text-display-lg font-bold">
            Ready to Build Your Heritage?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/70 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
            Our team of artisanal experts and manufacturing specialists is ready to translate your vision into a global sensation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity duration-300">
              Request Partnership
            </button>
            <button className="border border-on-primary/30 text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-xs hover:border-on-primary transition-colors duration-300">
              Download Ecosystem Deck
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

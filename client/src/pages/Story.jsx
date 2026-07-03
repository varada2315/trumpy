import React from 'react';
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

// Animation configs
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
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

export default function Story() {
  return (
    <div className="w-full relative overflow-hidden bg-background">
      {/* Decorative Grid Lines & Guides */}
      <GridLines />
      <DesignGrid />

      {/* Background elements */}
      <FloatingSphere color="bg-secondary/5" size="w-[600px] h-[600px]" delay={0} duration={25} />
      <FloatingSphere color="bg-tertiary/10" size="w-[250px] h-[250px]" delay={2} duration={15} />

      {/* Side-running brand text */}
      <VerticalRunningText text="BY INDIA, FROM INDIA, TO WORLD" className="top-48 left-6" />

      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden border-b border-outline-variant/20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img 
            alt="Trumpy in his corporate office environment" 
            className="w-full h-full object-cover" 
            src="/assets/dog_office.png"
          />
        </motion.div>
        
        {/* Abstract schematic overlay */}
        <FlavorWheel className="top-1/4 left-[10%] text-surface-bright" />
        <DecorativeCoordinates className="absolute bottom-10 left-margin-desktop text-surface-variant hidden lg:block" />

        <div className="absolute inset-0 hero-gradient-story flex flex-col justify-end pb-32 px-margin-mobile md:px-margin-desktop text-left z-10">
          <div className="max-w-container-max mx-auto w-full">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-label-caps text-label-caps text-secondary-fixed mb-4 tracking-widest uppercase text-xs font-bold"
            >
              The Noble Lineage
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary max-w-3xl mb-8 leading-tight font-bold"
            >
              By India, From India, To World.
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <div className="h-px w-24 bg-secondary mt-4 hidden sm:block"></div>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-xl text-sm md:text-base leading-relaxed">
                Inspired by Trumpy, an adopted Indian breed from the streets of Vadodara, we are crafting a heritage that honors resilience and indigenous loyalty.
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* The Origin Narrative */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative border-b border-outline-variant/10">
        <Crosshair className="top-10 left-10" />
        <Crosshair className="bottom-10 right-10" />
        <BlueprintMarker label="SECTION 02 // THE ORIGIN" className="top-10 right-20" />
        <VerticalRunningText text="VADODARA ORIGIN STORY // COMPANION" className="top-40 right-0" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          
          {/* Asymmetric Image Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] border border-outline-variant/30 overflow-hidden group shadow-xl">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="A loyal Indian Pariah dog" 
                src="/assets/dog_companion.png"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden md:block w-48 h-48 bg-primary p-8 text-on-primary text-left shadow-2xl">
              <span className="font-display-lg text-display-lg leading-none font-bold">01</span>
              <p className="font-label-caps text-label-caps uppercase mt-2 tracking-widest text-[9px] font-bold">
                Heritage Origin
              </p>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-7 md:pl-20 text-left mt-12 md:mt-0"
          >
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-6 text-xs font-bold">
              The Soul of the Brand
            </span>
            <h2 className="font-headline-md text-display-lg-mobile md:text-headline-md text-primary mb-8 font-semibold">
              From Vadodara Streets to Global Palates.
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg leading-relaxed text-sm md:text-base mb-8">
              <p>
                Trumpy wasn't born into royalty. He was found on the vibrant, bustling streets of Vadodara—a testament to the fierce resilience and quiet dignity of India's indigenous breeds.
              </p>
              <p>
                His adoption wasn't just a rescue; it was a revelation. We saw in Trumpy the same qualities we wanted for the Indian beverage market: unshakeable loyalty, local strength, and an authenticity that cannot be manufactured by global conglomerates.
              </p>
            </div>

            <TechnicalSpecs 
              specs={["BREED: INDIGENOUS PARIAH", "FOUNDING: VADODARA, 2024", "ATTRIBUTES: LOYALTY, RESILIENCE"]} 
              className="text-outline/70 mb-6" 
            />

            <div className="pt-4 flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                pets
              </span>
              <span className="font-label-caps text-label-caps uppercase text-primary text-xs font-bold tracking-wider">
                Named after our founding companion
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision Bento Grid */}
      <section className="bg-surface-container-low/40 backdrop-blur-sm py-32 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/20 relative">
        <Crosshair className="top-10 left-10" />
        <Crosshair className="bottom-10 right-10" />
        
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter text-left">
            
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 bg-surface p-12 border border-outline-variant/20 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <h3 className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-12 text-xs font-bold">
                Our Mission
              </h3>
              <p className="font-display-lg text-headline-md md:text-display-lg text-primary leading-tight italic mb-8">
                "By India, From India, To World."
              </p>
              
              <TechnicalSpecs 
                specs={["CHALLENGING MONOPOLIES", "100% LOCAL PROCUREMENT", "ARTISANAL FLAVORS"]} 
                className="text-secondary/80 mb-12" 
              />
              
              <div className="mt-12 flex flex-col md:flex-row gap-12 text-on-surface-variant font-body-lg">
                <div className="flex-1">
                  <h4 className="font-bold text-primary mb-4 uppercase text-label-caps tracking-widest text-xs">
                    Homegrown Excellence
                  </h4>
                  <p className="text-sm leading-relaxed">
                    We are here to challenge the dominance of the two foreign giants that have long controlled the Indian beverage narrative.
                  </p>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-primary mb-4 uppercase text-label-caps tracking-widest text-xs">
                    Global Ambition
                  </h4>
                  <p className="text-sm leading-relaxed">
                    Using indigenous ingredients and artisanal techniques, we are taking the true flavor of Indian craft to the global elite.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-4 bg-primary p-12 text-on-primary flex flex-col justify-between"
            >
              <div>
                <h3 className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-[0.2em] mb-8 text-xs font-bold">
                  Our Vision
                </h3>
                <p className="font-headline-md text-headline-md mb-8">
                  Empowering the Street-Life.
                </p>
              </div>
              <div className="border-t border-on-primary/20 pt-8">
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-display-lg font-display-lg leading-none text-secondary-fixed font-bold">5%</span>
                </div>
                <p className="font-body-md text-on-primary/80 uppercase tracking-widest leading-loose text-xs font-bold mb-6">
                  Of every bill we generate is dedicated to the charity of stray companions across the nation.
                </p>

                <TechnicalSpecs 
                  specs={["CHARITY RATIO: 5%", "SPONSOR: STREET VETS"]} 
                  className="text-secondary-fixed-dim/60" 
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Narrative Section: Challenging the Giants */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden relative">
        <Crosshair className="top-10 left-10" />
        <Crosshair className="bottom-10 right-10" />
        <FlavorWheel className="bottom-1/4 right-[10%] text-secondary/10" />

        <div className="flex flex-col lg:flex-row gap-20 items-center text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2"
          >
            <h2 className="font-headline-md text-headline-md text-primary mb-8 font-semibold">
              The David vs. Goliath of Beverages
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base">
              For decades, the Indian beverage landscape has been a playground for two global entities. We believe the Indian palate deserves more than just "imported ideas."
            </p>
            <ul className="space-y-6 mb-8">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">verified</span>
                <div>
                  <strong className="block font-label-caps text-primary uppercase mb-1 text-xs font-bold">
                    Indigenous Craft
                  </strong>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Using ingredients sourced from local Indian farms, mirroring the resilience of the local breeds.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">verified</span>
                <div>
                  <strong className="block font-label-caps text-primary uppercase mb-1 text-xs font-bold">
                    Tactile Luxury
                  </strong>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Bottled in bespoke glassware that feels like a piece of history in your hand.
                  </p>
                </div>
              </li>
            </ul>

            <TechnicalSpecs 
              specs={["GLASS: 100% RECYCLABLE", "CRAFT FACTOR: HANDMADE", "PRINT: ORGANIC INKS"]} 
              className="text-outline/70" 
            />
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="pt-12"
            >
              <img 
                className="w-full h-auto border border-outline-variant/30 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg" 
                alt="Beverage bottle with dog silhouette" 
                src="/assets/bottle_label.png"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <img 
                className="w-full h-auto border border-outline-variant/30 hover:shadow-2xl transition-shadow duration-500 shadow-md" 
                alt="Artisanal ingredients" 
                src="/assets/ingredients.png"
              />
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}

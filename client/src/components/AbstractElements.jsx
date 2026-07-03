import React from 'react';
import { motion } from 'framer-motion';

export function Crosshair({ className = '', color = 'text-secondary/40' }) {
  return (
    <span className={`absolute select-none pointer-events-none font-body-md text-xs z-20 ${color} ${className}`}>
      +
    </span>
  );
}

export function BlueprintMarker({ label, className = '' }) {
  return (
    <div className={`absolute flex items-center select-none pointer-events-none z-10 opacity-30 ${className}`}>
      <div className="h-[1px] w-8 bg-outline-variant"></div>
      <span className="font-label-caps text-[9px] uppercase tracking-[0.2em] px-2 text-outline">
        {label}
      </span>
      <div className="h-[1px] w-8 bg-outline-variant"></div>
    </div>
  );
}

export function DesignGrid() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
      {/* Horizontal Line Guides */}
      <div className="absolute left-0 right-0 top-1/4 h-[1px] bg-outline-variant/10"></div>
      <div className="absolute left-0 right-0 top-2/4 h-[1px] bg-outline-variant/10"></div>
      <div className="absolute left-0 right-0 top-3/4 h-[1px] bg-outline-variant/10"></div>

      {/* Vertical Line Guides */}
      <div className="absolute top-0 bottom-0 left-[15%] w-[1px] bg-outline-variant/10"></div>
      <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-outline-variant/10"></div>
      <div className="absolute top-0 bottom-0 left-[85%] w-[1px] bg-outline-variant/10"></div>
    </div>
  );
}

export function FloatingSphere({ color = 'bg-secondary/5', size = 'w-96 h-96', delay = 0, duration = 20 }) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -40, 20, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={`absolute rounded-full filter blur-[80px] pointer-events-none -z-10 ${size} ${color}`}
    />
  );
}

export function GridLines() {
  return (
    <div className="absolute inset-0 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-full w-full grid grid-cols-12 gap-gutter pointer-events-none z-0">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-full border-x border-outline-variant/[0.04] w-full col-span-1" />
      ))}
    </div>
  );
}

export function FlavorWheel({ className = '' }) {
  return (
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className={`absolute select-none pointer-events-none opacity-10 z-0 ${className}`}
    >
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" />
        <line x1="150" y1="10" x2="150" y2="290" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="0.5" />
        <line x1="51" y1="51" x2="249" y2="249" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="249" y1="51" x2="51" y2="249" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M 150 50 A 100 100 0 0 1 250 150" stroke="#ab3600" strokeWidth="1.5" />
        <path d="M 150 250 A 100 100 0 0 1 50 150" stroke="#ab3600" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

export function DecorativeCoordinates({ className = '' }) {
  return (
    <div className={`font-mono text-[9px] tracking-[0.25em] uppercase text-outline/55 select-none pointer-events-none ${className}`}>
      VADODARA, IN // 22.3072° N, 73.1812° E
    </div>
  );
}

export function VerticalRunningText({ text = "TRUMPY BEVERAGE SOLUTIONS", className = '' }) {
  return (
    <div className={`absolute origin-top-left rotate-90 select-none pointer-events-none font-label-caps text-[9px] tracking-[0.35em] text-outline/35 uppercase z-10 hidden lg:block ${className}`}>
      {text}
    </div>
  );
}

export function TechnicalSpecs({ specs = [], className = '' }) {
  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] text-outline/65 select-none pointer-events-none ${className}`}>
      {specs.map((spec, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
          {spec}
        </span>
      ))}
    </div>
  );
}


import React from 'react';

export default function BrandLogo({ className = '', size = 48 }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size} 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20,80 Q50,20 80,80" 
        stroke="currentColor" 
        strokeWidth="8" 
        fill="none" 
      />
      <circle cx="50" cy="40" r="15" fill="#ab3600" />
      <text 
        x="50" 
        y="95" 
        fontFamily="Playfair Display, serif" 
        fontSize="12" 
        textAnchor="middle" 
        fontWeight="bold" 
        fill="currentColor"
      >
        TRUMPY
      </text>
    </svg>
  );
}

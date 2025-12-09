import React from 'react';

// Simple Gear Icon
export const GearIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="5" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="19" />
    <line x1="5" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="19" y2="12" />
    <line x1="6.5" y1="6.5" x2="7.8" y2="7.8" />
    <line x1="16.2" y1="16.2" x2="17.5" y2="17.5" />
    <line x1="16.2" y1="7.8" x2="17.5" y2="6.5" />
    <line x1="6.5" y1="17.5" x2="7.8" y2="16.2" />
  </svg>
);

// Heart with WiFi signal waves (positioned lower, slightly to the right)
export const HeartWifiIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Heart shape */}
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    {/* WiFi signal waves at lower-right of heart - larger */}
    <path d="M17 17 Q19.5 14.5 22.5 17" strokeLinecap="round" />
    <path d="M16.5 15.5 Q20 12 23.5 15.5" strokeLinecap="round" />
    <path d="M16 14 Q20 9.5 24 14" strokeLinecap="round" />
  </svg>
);


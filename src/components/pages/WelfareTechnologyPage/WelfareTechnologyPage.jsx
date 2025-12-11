import React from 'react';
import { WelfareTechnologyHero } from '../../sections/WelfareTechnologyHero/WelfareTechnologyHero';
import { WelfareTechnologySolutions } from '../../sections/WelfareTechnologySolutions/WelfareTechnologySolutions';
import { WelfareTechnologyCTA } from '../../sections/WelfareTechnologyCTA/WelfareTechnologyCTA';

export function WelfareTechnologyPage() {
  return (
    <div>
      <WelfareTechnologyHero />
      <WelfareTechnologySolutions />
      <WelfareTechnologyCTA />
    </div>
  );
}

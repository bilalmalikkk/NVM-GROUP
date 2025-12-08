import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { BusinessAreas } from './BusinessAreas';
import { WhyChooseUs } from './WhyChooseUs';
import { ProjectShowcase } from './ProjectShowcase';
import { ContactCTA } from './ContactCTA';

export function HomePage({ language = 'no' }) {
  return (
    <div>
      <Hero language={language} />
      <About language={language} />
      <BusinessAreas language={language} />
      <WhyChooseUs language={language} />
      <ProjectShowcase language={language} />
      <ContactCTA language={language} />
    </div>
  );
}


import React from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { BusinessAreas } from '../../sections/BusinessAreas/BusinessAreas';
import { WhyChooseUs } from '../../sections/WhyChooseUs/WhyChooseUs';
import { ProjectShowcase } from '../../sections/ProjectShowcase/ProjectShowcase';
import { ContactCTA } from '../../sections/ContactCTA/ContactCTA';

export function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <BusinessAreas />
      <WhyChooseUs />
      <ProjectShowcase />
      <ContactCTA />
    </div>
  );
}


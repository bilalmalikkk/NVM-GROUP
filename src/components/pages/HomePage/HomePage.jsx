import React from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { BusinessAreas } from '../../sections/BusinessAreas/BusinessAreas';
import { WhyChooseUs } from '../../sections/WhyChooseUs/WhyChooseUs';
import { News } from '../../sections/News/News';
import { ProjectShowcase } from '../../sections/ProjectShowcase/ProjectShowcase';
import { ContactCTA } from '../../sections/ContactCTA/ContactCTA';
import { ScrollToTop } from '../../common/ScrollToTop/ScrollToTop';

export function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <BusinessAreas />
      <WhyChooseUs />
      <News />
      <ProjectShowcase />
      <ContactCTA />
      <ScrollToTop />
    </div>
  );
}


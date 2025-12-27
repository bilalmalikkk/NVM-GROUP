import React, { useEffect } from 'react';
import { ProjectHero } from '../../sections/ProjectHero/ProjectHero';
import { ProjectContent } from '../../sections/ProjectContent/ProjectContent';
import { ProcessFlow } from '../../sections/ProcessFlow/ProcessFlow';
import { Technologies } from '../../sections/Technologies/Technologies';
import { TechnologiesDetail } from '../../sections/TechnologiesDetail/TechnologiesDetail';
import { TechnologiesAdditional } from '../../sections/TechnologiesAdditional/TechnologiesAdditional';
import { ProductionLine } from '../../sections/ProductionLine/ProductionLine';
import { ProductReferences } from '../../sections/ProductReferences/ProductReferences';
import { ProjectCTA } from '../../sections/ProjectCTA/ProjectCTA';
import { ScrollToTop } from '../../common/ScrollToTop/ScrollToTop';

export function ProjectPage() {
  useEffect(() => {
    // Check if we need to scroll to product references section
    const shouldScroll = sessionStorage.getItem('scrollToProductReferences');
    if (shouldScroll === 'true') {
      // Clear the flag
      sessionStorage.removeItem('scrollToProductReferences');
      
      // Wait for the page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById('product-references');
        if (element) {
          const headerOffset = 100; // Adjust for sticky header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      <ProjectHero />
      <ProjectContent />
      <ProcessFlow />
      <Technologies />
      <TechnologiesDetail />
      <TechnologiesAdditional />
      <ProductionLine />
      <ProductReferences />
      <ProjectCTA />
      <ScrollToTop />
    </div>
  );
}


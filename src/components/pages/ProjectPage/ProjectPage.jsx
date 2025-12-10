import React from 'react';
import { ProjectHero } from '../../sections/ProjectHero/ProjectHero';
import { ProjectContent } from '../../sections/ProjectContent/ProjectContent';
import { ProcessFlow } from '../../sections/ProcessFlow/ProcessFlow';
import { Technologies } from '../../sections/Technologies/Technologies';
import { TechnologiesDetail } from '../../sections/TechnologiesDetail/TechnologiesDetail';
import { TechnologiesAdditional } from '../../sections/TechnologiesAdditional/TechnologiesAdditional';
import { ProductionLine } from '../../sections/ProductionLine/ProductionLine';
import { ProductReferences } from '../../sections/ProductReferences/ProductReferences';
import { ProjectCTA } from '../../sections/ProjectCTA/ProjectCTA';

export function ProjectPage() {
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
    </div>
  );
}


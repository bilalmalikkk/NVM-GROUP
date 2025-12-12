import React from 'react';
import { AutomotiveHero } from '../../sections/AutomotiveHero/AutomotiveHero';
import { AutomotiveContent } from '../../sections/AutomotiveContent/AutomotiveContent';
import { AutomotivePartners } from '../../sections/AutomotivePartners/AutomotivePartners';
import { AutomotiveProductsHeader } from '../../sections/AutomotiveProductsHeader/AutomotiveProductsHeader';
import { AutomotiveMainController } from '../../sections/AutomotiveMainController/AutomotiveMainController';
import { AutomotiveIONodes } from '../../sections/AutomotiveIONodes/AutomotiveIONodes';
import { AutomotiveLevelSensors } from '../../sections/AutomotiveLevelSensors/AutomotiveLevelSensors';

export function AutomotivePage() {
  return (
    <div>
      <AutomotiveHero />
      <AutomotiveContent />
      <AutomotivePartners />
      <AutomotiveProductsHeader />
      <AutomotiveMainController />
      <AutomotiveIONodes />
      <AutomotiveLevelSensors />
    </div>
  );
}

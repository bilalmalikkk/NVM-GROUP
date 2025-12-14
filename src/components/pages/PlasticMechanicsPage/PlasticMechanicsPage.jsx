import React from 'react';
import { PlasticMechanicsHero } from '../../sections/PlasticMechanicsHero/PlasticMechanicsHero';
import { PlasticMechanicsContent } from '../../sections/PlasticMechanicsContent/PlasticMechanicsContent';
import { PlasticMechanicsCollaboration } from '../../sections/PlasticMechanicsCollaboration/PlasticMechanicsCollaboration';
import { PlasticMechanicsDelivery } from '../../sections/PlasticMechanicsDelivery/PlasticMechanicsDelivery';
import { PlasticMechanicsCTA } from '../../sections/PlasticMechanicsCTA/PlasticMechanicsCTA';

export function PlasticMechanicsPage() {
  return (
    <div>
      <PlasticMechanicsHero />
      <PlasticMechanicsContent />
      <PlasticMechanicsCollaboration />
      <PlasticMechanicsDelivery />
      <PlasticMechanicsCTA />
    </div>
  );
}


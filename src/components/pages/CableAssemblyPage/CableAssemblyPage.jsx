import React from 'react';
import { CableAssemblyHero } from '../../sections/CableAssemblyHero/CableAssemblyHero';
import { CableAssemblySolutions } from '../../sections/CableAssemblySolutions/CableAssemblySolutions';
import { CableAssemblyWhyChooseUs } from '../../sections/CableAssemblyWhyChooseUs/CableAssemblyWhyChooseUs';
import { CableAssemblyProcess } from '../../sections/CableAssemblyProcess/CableAssemblyProcess';
import { CableAssemblyReferences } from '../../sections/CableAssemblyReferences/CableAssemblyReferences';
import { CableAssemblyCTA } from '../../sections/CableAssemblyCTA/CableAssemblyCTA';

export function CableAssemblyPage() {
  return (
    <div>
      <CableAssemblyHero />
      <CableAssemblySolutions />
      <CableAssemblyWhyChooseUs />
      <CableAssemblyProcess />
      <CableAssemblyReferences />
      <CableAssemblyCTA />
    </div>
  );
}


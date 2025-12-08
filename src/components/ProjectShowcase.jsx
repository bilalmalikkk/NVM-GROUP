import React from 'react';
import { Heart, Car, Cpu, ArrowRight } from 'lucide-react';

export function ProjectShowcase({ language = 'no' }) {
  const content = {
    no: {
      title: 'Referanser & Prosjekter',
      subtitle: 'Eksempler fra våre tre hovedområder',
      projects: [
        {
          icon: Heart,
          category: 'VELFERDSTEKNOLOGI',
          title: 'Cam-X2 Falldeteksjon',
          description: 'Kamerasystem med dobbel falldeteksjon for eldreomsorg. Radar og AI-teknologi sikrer maksimal trygghet uten å krenke personvernet.',
          link: '#'
        },
        {
          icon: Car,
          category: 'AUTOMOTIVE',
          title: 'RV-Control 500',
          description: 'Komplett styresystem for bobil og campingvogn med kontroll av belysning, oppvarming, vann og batteri. Intuitiv touchskjerm med app-styring.',
          link: '#'
        },
        {
          icon: Cpu,
          category: 'R&D & PRODUKSJON',
          title: 'SmartHub IoT Gateway',
          description: 'Kraftig IoT-gateway for smarte hjem. Støtter WiFi, Zigbee og Z-Wave med integrert cloud-kommunikasjon og remote management.',
          link: '#'
        }
      ],
      viewMore: 'Se flere prosjekter',
      learnMore: 'Les mer'
    },
    en: {
      title: 'References & Projects',
      subtitle: 'Examples from our three main areas',
      projects: [
        {
          icon: Heart,
          category: 'WELFARE TECHNOLOGY',
          title: 'Cam-X2 Fall Detection',
          description: 'Camera system with dual fall detection for elderly care. Radar and AI technology ensure maximum safety without violating privacy.',
          link: '#'
        },
        {
          icon: Car,
          category: 'AUTOMOTIVE',
          title: 'RV-Control 500',
          description: 'Complete control system for motorhomes and caravans with control of lighting, heating, water and battery. Intuitive touchscreen with app control.',
          link: '#'
        },
        {
          icon: Cpu,
          category: 'R&D & PRODUCTION',
          title: 'SmartHub IoT Gateway',
          description: 'Powerful IoT gateway for smart homes. Supports WiFi, Zigbee and Z-Wave with integrated cloud communication and remote management.',
          link: '#'
        }
      ],
      viewMore: 'View more projects',
      learnMore: 'Learn more'
    }
  };

  const t = content[language];

  return (
    <section className="references-section">
      <div className="references-header">
        <h2 className="references-title">{t.title}</h2>
        <p className="references-subtitle">{t.subtitle}</p>
      </div>
      <div className="projects-grid">
        {t.projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div key={index} className="project-card">
              <div className="project-card-top">
                <IconComponent size={80} className="project-icon" strokeWidth={1.5} />
              </div>
              <div className="project-card-bottom">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <a href={project.link} className="project-link">
                  {t.learnMore} <ArrowRight size={18} className="arrow" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="view-more-container">
        <button className="view-more-btn">
          {t.viewMore} <ArrowRight size={20} className="arrow" />
        </button>
      </div>
    </section>
  );
}


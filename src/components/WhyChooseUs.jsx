import React from 'react';
import { Zap, Box, Award, Users, Lightbulb, Cog } from 'lucide-react';
import { GearIcon } from './CustomIcons';

export function WhyChooseUs({ language = 'no' }) {
  const content = {
    no: {
      title: 'Hvorfor velge oss?',
      subtitle: 'Vi leverer komplette løsninger med kvalitet og innovasjon i hvert steg',
      values: [
        {
          icon: Users,
          title: 'Tverrfaglig kompetanse',
          description: 'Vårt team behersker elektronikk, software, mekanikk og design – alt under ett tak.'
        },
        {
          icon: Box,
          title: 'Fra konsept til ferdig produkt',
          description: '30 års erfaring med å realisere ideer fra første skisse til produksjonsklar løsning.'
        },
        {
          icon: Award,
          title: 'Innovasjon og kvalitet',
          description: 'Vi setter høye standarder i alle ledd og leverer banebrytende teknologi.'
        },
        {
          icon: Zap,
          title: 'Rask realisering',
          description: 'Egen produksjonslinje for prototyper og småserier – fra idé til produkt på rekordtid.'
        },
        {
          icon: Lightbulb,
          title: 'Skreddersydde løsninger',
          description: 'Vi tilpasser hver løsning til dine spesifikke behov og utfordringer.'
        },
        {
          icon: Cog,
          title: 'Komplett verdikjede',
          description: 'Fra R&D og prototyping til produksjon og sertifisering – vi håndterer alt.'
        }
      ]
    },
    en: {
      title: 'Why choose us?',
      subtitle: 'We deliver complete solutions with quality and innovation in every step',
      values: [
        {
          icon: Users,
          title: 'Multidisciplinary expertise',
          description: 'Our team masters electronics, software, mechanics and design – all under one roof.'
        },
        {
          icon: Box,
          title: 'From concept to finished product',
          description: '30 years of experience realizing ideas from first sketch to production-ready solution.'
        },
        {
          icon: Award,
          title: 'Innovation and quality',
          description: 'We set high standards in all aspects and deliver groundbreaking technology.'
        },
        {
          icon: Zap,
          title: 'Rapid realization',
          description: 'Own production line for prototypes and small series – from idea to product in record time.'
        },
        {
          icon: Lightbulb,
          title: 'Customized solutions',
          description: 'We tailor each solution to your specific needs and challenges.'
        },
        {
          icon: Cog,
          title: 'Complete value chain',
          description: 'From R&D and prototyping to production and certification – we handle it all.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="why-choose-section">
      <div className="why-choose-header">
        <h2 className="why-choose-title">{t.title}</h2>
        <p className="why-choose-subtitle">
          {t.subtitle}
        </p>
      </div>
      <div className="why-choose-grid">
        {t.values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div key={index} className="feature-card">
              <div className="feature-icon-box">
                <IconComponent size={32} className="feature-icon" />
              </div>
              <h3 className="feature-title">{value.title}</h3>
              <p className="feature-description">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


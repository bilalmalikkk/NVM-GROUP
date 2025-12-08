import React from 'react';
import iconsImage from '../assets/business-icons.png';

export function BusinessAreas({ language = 'no' }) {
  const content = {
    no: {
      title: 'VÅRE FORRETNINGSOMRÅDER',
      areas: [
        {
          iconPosition: '0%',
          title: 'Utvikling & prototyper',
          description: 'Fra idé til ferdig prototype – elektronikk, mekanikk, og plastdeler',
        },
        {
          iconPosition: '50%',
          title: 'Velferdsteknologi',
          subtitle: '(Nordic Medical Technologies)',
          description: 'Medisinske sensorer og trygghetsystemer for omsorg',
        },
        {
          iconPosition: '100%',
          title: 'Automotive styringssystemer',
          description: 'Smart styring for bobiler og campingvogner',
        },
      ]
    },
    en: {
      title: 'OUR BUSINESS AREAS',
      areas: [
        {
          iconPosition: '0%',
          title: 'Development & prototypes',
          description: 'From idea to finished prototype – electronics, mechanics, and plastic parts',
        },
        {
          iconPosition: '50%',
          title: 'Welfare technology',
          subtitle: '(Nordic Medical Technologies)',
          description: 'Medical sensors and safety systems for care',
        },
        {
          iconPosition: '100%',
          title: 'Automotive control systems',
          description: 'Smart control for RVs and caravans',
        },
      ]
    }
  };

  const t = content[language] || content['no']; // Fallback to Norwegian if language not found

  return (
    <section id="business" className="business-areas-section">
      <div className="business-areas-wrapper">
        <h2 className="business-areas-title">
          {t.title}
        </h2>
        <div className="business-areas-grid">
          {t.areas.map((area, index) => {
            return (
              <div key={index} className="business-area-item">
                <div className="business-icon-wrapper">
                  <img
                    src={iconsImage}
                    alt={language === 'no' ? 'Forretningsområder ikoner' : 'Business areas icons'}
                    className="business-icon-img"
                    style={{
                      objectFit: 'none',
                      objectPosition: `${area.iconPosition} center`,
                      width: '180px',
                    }}
                  />
                </div>
                <h3 className="business-area-title">{area.title}</h3>
                {area.subtitle && (
                  <p className="business-area-subtitle">{area.subtitle}</p>
                )}
                <p className="business-area-description">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

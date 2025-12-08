import React from 'react';

export function About({ language = 'no' }) {
  const content = {
    no: {
      title: 'OM NORDIC RVM GROUP',
      text: 'Vi er en talentfull gruppe entreprenører, ingeniører og partnere som støtter helse- og medisinsk virksomhet med banebrytende ideer og produkter. Vi tilbyr smarte løsninger og produkter for bedrifter i alle størrelser og er stolte av vår unike, dedikerte service. Hos Nordic Medtek tror vi at riktig forståelse og teknologisk forsprang kan lede oss og våre partnere mot en vellykket fremtid.'
    },
    en: {
      title: 'ABOUT NORDIC RVM GROUP',
      text: 'We are a talented group of entrepreneurs, engineers and partners who support health and medical businesses with groundbreaking ideas and products. We offer smart solutions and products for companies of all sizes and are proud of our unique, dedicated service. At Nordic Medtek, we believe that proper understanding and technological advantage can lead us and our partners towards a successful future.'
    }
  };

  const t = content[language];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">{t.title}</h2>
          <p className="about-text">
            {t.text}
          </p>
        </div>
        <div className="about-card">
          <div className="card-header">
            <span className="card-title">Nordic Medtek team</span>
          </div>
          <div className="card-placeholder">
            {/* Placeholder for image */}
          </div>
        </div>
      </div>
    </section>
  );
}


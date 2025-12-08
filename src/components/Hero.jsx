import React from 'react';

export function Hero({ language = 'no' }) {
  const content = {
    no: {
      tagline: 'Fra idé til ferdig produkt – teknologi for mennesker, mobilitet og innovasjon.',
      description: 'Vi utvikler løsninger innen velferdsteknologi, mobile kontrollsystemer og tilbyr fullskala R&D-design.',
      button1: 'Utforsk våre løsninger',
      button2: 'Kontakt oss'
    },
    en: {
      tagline: 'From idea to finished product – technology for people, mobility and innovation.',
      description: 'We develop solutions in welfare technology, mobile control systems and offer full-scale R&D design.',
      button1: 'Explore our solutions',
      button2: 'Contact us'
    }
  };

  const t = content[language];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">
          {t.tagline}
        </h1>
        <p className="hero-subheading">
          {t.description}
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">{t.button1}</button>
          <button className="btn-secondary">{t.button2}</button>
        </div>
      </div>
    </section>
  );
}


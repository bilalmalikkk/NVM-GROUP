import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Footer({ language = 'no' }) {
  const content = {
    no: {
      tagline: 'Innovasjon for helse og mobilitet – fra idé til ferdig produkt',
      contact: 'Kontakt',
      services: 'Tjenester',
      service1: 'Elektronikkutvikling',
      service2: 'Prototyping',
      service3: 'Velferdsteknologi',
      service4: 'Automotive systemer',
      copyright: 'Alle rettigheter reservert.'
    },
    en: {
      tagline: 'Innovation for health and mobility – from idea to finished product',
      contact: 'Contact',
      services: 'Services',
      service1: 'Electronics development',
      service2: 'Prototyping',
      service3: 'Welfare technology',
      service4: 'Automotive systems',
      copyright: 'All rights reserved.'
    }
  };

  const t = content[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-heading">Nordic RVM Group</h3>
          <p className="footer-description">
            {t.tagline}
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">{t.contact}</h3>
          <div className="footer-contact-item">
            <Mail size={18} className="footer-icon" />
            <span>post@nordicrvm.no</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} className="footer-icon" />
            <span>+47 XXX XX XXX</span>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">{t.services}</h3>
          <ul className="footer-services">
            <li>{t.service1}</li>
            <li>{t.service2}</li>
            <li>{t.service3}</li>
            <li>{t.service4}</li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        <p>&copy; 2024 Nordic RVM Group. {t.copyright}</p>
      </div>
    </footer>
  );
}


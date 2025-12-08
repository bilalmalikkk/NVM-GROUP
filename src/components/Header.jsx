import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header({ currentPage, setCurrentPage, language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    const newLang = language === 'no' ? 'en' : 'no';
    setLanguage(newLang);
    
    // Update current page to match new language
    if (newLang === 'en') {
      const pageMap = {
        'Hjem': 'Home',
        'prosjekt': 'project',
        'Velferds teknologi': 'Welfare technology',
        'automotive': 'Automotive',
        'Plast & Mekanikk': 'Plastic & Mechanics',
        'Kabel konfeksjon': 'Cable assembly',
        'Resurser': 'Resources',
        'Ikonkatalog': 'Icon catalog'
      };
      setCurrentPage(pageMap[currentPage] || 'Home');
    } else {
      const pageMap = {
        'Home': 'Hjem',
        'project': 'prosjekt',
        'Welfare technology': 'Velferds teknologi',
        'Automotive': 'automotive',
        'Plastic & Mechanics': 'Plast & Mekanikk',
        'Cable assembly': 'Kabel konfeksjon',
        'Resources': 'Resurser',
        'Icon catalog': 'Ikonkatalog'
      };
      setCurrentPage(pageMap[currentPage] || 'Hjem');
    }
  };

  const topMenuItems = language === 'no' 
    ? [
        { label: 'Om oss', href: '#about' },
        { label: 'Våre produkter', href: '#products' },
        { label: 'Book demo', href: '#demo' },
        { label: 'Kontakt oss', href: '#contact' },
        { label: 'Ikonkatalog', page: 'Ikonkatalog' },
        { label: 'Personvern erklæring', href: '#privacy' },
      ]
    : [
        { label: 'About us', href: '#about' },
        { label: 'Our products', href: '#products' },
        { label: 'Book demo', href: '#demo' },
        { label: 'Contact us', href: '#contact' },
        { label: 'Icon catalog', page: 'Icon catalog' },
        { label: 'Privacy policy', href: '#privacy' },
      ];

  const bottomMenuItems = language === 'no'
    ? [
        { label: 'Hjem', href: '#hero' },
        { label: 'prosjekt', href: '#about' },
        { label: 'Velferds teknologi', href: '#products' },
        { label: 'automotive', href: '#business' },
        { label: 'Plast & Mekanikk', href: '#plastic' },
        { label: 'Kabel konfeksjon', href: '#cable' },
        { label: 'Resurser', href: '#resources' },
      ]
    : [
        { label: 'Home', href: '#hero' },
        { label: 'project', href: '#about' },
        { label: 'Welfare technology', href: '#products' },
        { label: 'Automotive', href: '#business' },
        { label: 'Plastic & Mechanics', href: '#plastic' },
        { label: 'Cable assembly', href: '#cable' },
        { label: 'Resources', href: '#resources' },
      ];

  return (
    <header className="header">
      <nav className="secondary-nav">
        <div className="secondary-nav-links">
          {topMenuItems.map((item, index) => (
            item.page ? (
              <button
                key={index}
                onClick={() => setCurrentPage(item.page)}
                className={`secondary-nav-link ${currentPage === item.page ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={index}
                href={item.href}
                className="secondary-nav-link"
              >
                {item.label}
              </a>
            )
          ))}
          <button
            onClick={handleLanguageChange}
            className="language-selector"
          >
            {language === 'no' ? 'ENGLISH' : 'NORSK'}
          </button>
        </div>
      </nav>
      <nav className="primary-nav">
        <div className="primary-nav-links">
          {bottomMenuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={currentPage === item.label ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}


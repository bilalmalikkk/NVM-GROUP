import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './Header.module.css';

export function Header({ currentPage, setCurrentPage }) {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getTranslations(language);

  const handleLanguageChange = () => {
    toggleLanguage();
    
    // Update current page to match new language
    const pageMap = language === 'no' 
      ? {
          'Hjem': 'Home',
          'prosjekt': 'project',
          'automotive': 'Automotive',
          'Plast & Mekanikk': 'Plastic & Mechanics',
          'Kabel konfeksjon': 'Cable assembly',
          'Resurser': 'Resources'
        }
      : {
          'Home': 'Hjem',
          'project': 'prosjekt',
          'Automotive': 'automotive',
          'Plastic & Mechanics': 'Plast & Mekanikk',
          'Cable assembly': 'Kabel konfeksjon',
          'Resources': 'Resurser'
        };
    setCurrentPage(pageMap[currentPage] || (language === 'no' ? 'Home' : 'Hjem'));
  };

  const topMenuItems = t.header.topMenu;
  const bottomMenuItems = t.header.bottomMenu;

  return (
    <header className={styles.header}>
      <nav className={styles.secondaryNav}>
        <div className={styles.secondaryNavLinks}>
          {topMenuItems.map((item, index) => (
            item.page ? (
              <button
                key={index}
                onClick={() => setCurrentPage(item.page)}
                className={`${styles.secondaryNavLink} ${currentPage === item.page ? styles.active : ''}`}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={index}
                href={item.href}
                className={styles.secondaryNavLink}
              >
                {item.label}
              </a>
            )
          ))}
          <button
            onClick={handleLanguageChange}
            className={styles.languageSelector}
          >
            {t.header.languageToggle}
          </button>
        </div>
      </nav>
      <nav className={styles.primaryNav}>
        <div className={styles.primaryNavContainer}>
          <button
            onClick={() => setCurrentPage(language === 'no' ? 'Hjem' : 'Home')}
            className={styles.logoContainer}
            aria-label="Home"
          >
            <img 
              src="/NordicRVM_Logo_R2.png" 
              alt="Nordic RVM Logo" 
              className={styles.logo}
            />
          </button>
          <div className={styles.primaryNavLinks}>
            {bottomMenuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(item.label);
                  setMobileMenuOpen(false);
                }}
                className={currentPage === item.label ? styles.active : ''}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className={styles.mobileMenuDropdown}>
            {bottomMenuItems.map((item, index) => (
              <button
                key={`bottom-${index}`}
                onClick={() => {
                  setCurrentPage(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`${styles.mobileMenuItem} ${currentPage === item.label ? styles.active : ''}`}
              >
                {item.label}
              </button>
            ))}
            <div className={styles.mobileMenuDivider}></div>
            <div className={styles.mobileSubmenu}>
              {topMenuItems.map((item, index) => (
                item.page ? (
                  <button
                    key={`top-${index}`}
                    onClick={() => {
                      setCurrentPage(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className={`${styles.mobileSubmenuItem} ${currentPage === item.page ? styles.active : ''}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={`top-${index}`}
                    href={item.href}
                    className={styles.mobileSubmenuItem}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <button
                onClick={() => {
                  handleLanguageChange();
                  setMobileMenuOpen(false);
                }}
                className={styles.mobileSubmenuItem}
              >
                {t.header.languageToggle}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


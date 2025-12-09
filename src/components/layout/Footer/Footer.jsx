import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './Footer.module.css';

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Nordic RVM Group</h3>
          <p className={styles.footerDescription}>
            {t.footer.tagline}
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t.footer.contact}</h3>
          <div className={styles.footerContactItem}>
            <Mail size={18} className={styles.footerIcon} />
            <span>post@nordicrvm.no</span>
          </div>
          <div className={styles.footerContactItem}>
            <Phone size={18} className={styles.footerIcon} />
            <span>+47 XXX XX XXX</span>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t.footer.services}</h3>
          <ul className={styles.footerServices}>
            <li>{t.footer.service1}</li>
            <li>{t.footer.service2}</li>
            <li>{t.footer.service3}</li>
            <li>{t.footer.service4}</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerDivider}></div>
      <div className={styles.footerCopyright}>
        <p>&copy; 2024 Nordic RVM Group. {t.footer.copyright}</p>
      </div>
    </footer>
  );
}


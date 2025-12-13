import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import remoteServiceImage from '../../../assets/photo-1590408867096-a6f7a9de19c0.jpeg';
import styles from './AutomotiveRemoteService.module.css';

export function AutomotiveRemoteService() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.remoteServiceSection}>
      <div className={styles.remoteServiceContainer}>
        <div className={styles.remoteServiceText}>
          <h2 className={styles.remoteServiceHeading}>
            {t.automotiveRemoteService.heading}
          </h2>
          <h3 className={styles.remoteServiceSubheading}>
            {t.automotiveRemoteService.subheading}
          </h3>
          {t.automotiveRemoteService.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.remoteServiceParagraph}>
              {paragraph}
            </p>
          ))}
          <ul className={styles.remoteServiceList}>
            {t.automotiveRemoteService.features.map((feature, index) => (
              <li key={index} className={styles.remoteServiceListItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.remoteServiceImage}>
          <img 
            src={remoteServiceImage} 
            alt={t.automotiveRemoteService.imageAlt}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

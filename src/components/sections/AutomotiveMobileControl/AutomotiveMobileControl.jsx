import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import mobileControlImage from '../../../assets/photo-1758411898021-ef0dadaaa295.jpeg';
import styles from './AutomotiveMobileControl.module.css';

export function AutomotiveMobileControl() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.mobileControlSection}>
      <div className={styles.mobileControlContainer}>
        <div className={styles.mobileControlImage}>
          <img 
            src={mobileControlImage} 
            alt={t.automotiveMobileControl.imageAlt}
            className={styles.image}
          />
        </div>
        <div className={styles.mobileControlText}>
          <h2 className={styles.mobileControlHeading}>
            {t.automotiveMobileControl.heading}
          </h2>
          <h3 className={styles.mobileControlSubheading}>
            {t.automotiveMobileControl.subheading}
          </h3>
          {t.automotiveMobileControl.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.mobileControlParagraph}>
              {paragraph}
            </p>
          ))}
          <ul className={styles.mobileControlList}>
            {t.automotiveMobileControl.features.map((feature, index) => (
              <li key={index} className={styles.mobileControlListItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

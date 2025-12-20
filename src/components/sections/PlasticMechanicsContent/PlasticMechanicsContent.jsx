import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import moldImage from '../../../assets/mold_picture.jpg';
import styles from './PlasticMechanicsContent.module.css';

export function PlasticMechanicsContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.contentSection}>
      <div className={styles.contentContainer}>
        <div className={styles.contentText}>
          <h2 className={styles.contentHeading}>
            {t.plasticMechanicsContent.heading}
          </h2>
          <p className={styles.contentParagraph}>
            {t.plasticMechanicsContent.paragraph1}
          </p>
          <p className={styles.contentParagraph}>
            {t.plasticMechanicsContent.paragraph2}
          </p>
          <ul className={styles.featuresList}>
            {t.plasticMechanicsContent.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contentImage}>
          <img 
            src={moldImage} 
            alt={t.plasticMechanicsContent.imageAlt}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}


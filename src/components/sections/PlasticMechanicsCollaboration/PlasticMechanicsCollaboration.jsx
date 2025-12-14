import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import collaborationImage from '../../../assets/photo-1586868538513-51335a0c5337.jpeg';
import styles from './PlasticMechanicsCollaboration.module.css';

export function PlasticMechanicsCollaboration() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.collaborationSection}>
      <div className={styles.collaborationContainer}>
        <div className={styles.collaborationImage}>
          <img 
            src={collaborationImage} 
            alt={t.plasticMechanicsCollaboration.imageAlt}
            className={styles.image}
          />
        </div>
        <div className={styles.collaborationText}>
          <h2 className={styles.collaborationHeading}>
            {t.plasticMechanicsCollaboration.heading}
          </h2>
          <p className={styles.collaborationParagraph}>
            {t.plasticMechanicsCollaboration.paragraph1}
          </p>
          <p className={styles.collaborationParagraph}>
            {t.plasticMechanicsCollaboration.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}


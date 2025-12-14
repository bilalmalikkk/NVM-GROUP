import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './PlasticMechanicsHero.module.css';

export function PlasticMechanicsHero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          {t.plasticMechanicsHero.heading}
        </h1>
        <p className={styles.heroDescription}>
          {t.plasticMechanicsHero.description}
        </p>
      </div>
    </section>
  );
}


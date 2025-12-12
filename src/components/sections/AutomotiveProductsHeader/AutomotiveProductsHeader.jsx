import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './AutomotiveProductsHeader.module.css';

export function AutomotiveProductsHeader() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.productsHeaderSection}>
      <div className={styles.productsHeaderContainer}>
        <h2 className={styles.productsHeading}>
          {t.automotiveProductsHeader.heading}
        </h2>
        <p className={styles.productsSubheading}>
          {t.automotiveProductsHeader.subheading}
        </p>
      </div>
    </section>
  );
}

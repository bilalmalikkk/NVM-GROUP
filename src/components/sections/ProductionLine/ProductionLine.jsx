import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './ProductionLine.module.css';

export function ProductionLine() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.productionLineSection}>
      <div className={styles.productionLineContainer}>
        <div className={styles.productionLineImage}>
          <img 
            src={t.productionLine.imageUrl} 
            alt={t.productionLine.imageAlt}
            className={styles.productionImage}
          />
        </div>
        <div className={styles.productionLineContent}>
          <h2 className={styles.productionLineTitle}>
            {t.productionLine.title}
          </h2>
          <div className={styles.productionLineText}>
            {t.productionLine.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.productionParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


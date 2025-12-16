import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { Cable } from 'lucide-react';
import styles from './CableAssemblySolutions.module.css';

export function CableAssemblySolutions() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.solutionsWrapper}>
        <div className={styles.solutionsHeader}>
          <h2 className={styles.solutionsTitle}>
            {t.cableAssemblySolutions.title}
          </h2>
          <p className={styles.solutionsSubtitle}>
            {t.cableAssemblySolutions.subtitle}
          </p>
        </div>
        <div className={styles.solutionsGrid}>
          {t.cableAssemblySolutions.solutions.map((solution, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.solutionIconBox}>
                <Cable size={24} className={styles.solutionIcon} />
              </div>
              <h3 className={styles.solutionTitle}>{solution.title}</h3>
              <p className={styles.solutionDescription}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


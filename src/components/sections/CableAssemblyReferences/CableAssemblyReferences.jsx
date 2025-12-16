import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { Cable } from 'lucide-react';
import styles from './CableAssemblyReferences.module.css';

export function CableAssemblyReferences() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.referencesSection}>
      <div className={styles.referencesWrapper}>
        <div className={styles.referencesHeader}>
          <h2 className={styles.referencesTitle}>
            {t.cableAssemblyReferences.title}
          </h2>
          <p className={styles.referencesSubtitle}>
            {t.cableAssemblyReferences.subtitle}
          </p>
        </div>
        <div className={styles.referencesGrid}>
          {t.cableAssemblyReferences.applications.map((application, index) => (
            <div key={index} className={styles.referenceCard}>
              <div className={styles.cardHeader}>
                <Cable size={48} className={styles.cardIcon} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{application.title}</h3>
                <p className={styles.cardDescription}>
                  {application.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


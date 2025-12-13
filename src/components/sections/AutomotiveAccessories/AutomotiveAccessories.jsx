import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import accessoriesImage from '../../../assets/bd00a3bf-0523-4606-98f0-1cf7345c65ef.png';
import styles from './AutomotiveAccessories.module.css';

export function AutomotiveAccessories() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.accessoriesSection}>
      <div className={styles.accessoriesContainer}>
        <div className={styles.accessoriesText}>
          <h2 className={styles.accessoriesHeading}>
            {t.automotiveAccessories.heading}
          </h2>
          <p className={styles.accessoriesIntro}>
            {t.automotiveAccessories.intro}
          </p>
          <p className={styles.accessoriesDescription}>
            {t.automotiveAccessories.description}
          </p>
          <ul className={styles.accessoriesList}>
            {t.automotiveAccessories.components.map((component, index) => (
              <li key={index} className={styles.accessoriesListItem}>
                <strong>{component.name}</strong> - {component.description}
              </li>
            ))}
          </ul>
          <p className={styles.accessoriesConclusion}>
            {t.automotiveAccessories.conclusion}
          </p>
        </div>
        <div className={styles.accessoriesImage}>
          <img 
            src={accessoriesImage} 
            alt={t.automotiveAccessories.imageAlt}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

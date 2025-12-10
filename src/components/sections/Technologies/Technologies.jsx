import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { Wrench, Cpu, Monitor } from 'lucide-react';
import styles from './Technologies.module.css';

export function Technologies() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const iconMap = {
    Wrench: Wrench,
    Cpu: Cpu,
    Monitor: Monitor,
  };

  return (
    <section className={styles.technologiesSection}>
      <div className={styles.technologiesContainer}>
        <h2 className={styles.technologiesTitle}>{t.technologies.title}</h2>
        <p className={styles.technologiesIntro}>{t.technologies.intro}</p>
        <div className={styles.technologiesGrid}>
          {t.technologies.categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Cpu;
            return (
              <div key={index} className={styles.technologyCategory}>
                <div className={styles.categoryHeader}>
                  <IconComponent className={styles.categoryIcon} size={24} />
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <ul className={styles.technologyList}>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.technologyItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


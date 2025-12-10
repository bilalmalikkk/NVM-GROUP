import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { Radio, Cloud, Code } from 'lucide-react';
import styles from './TechnologiesAdditional.module.css';

export function TechnologiesAdditional() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const iconMap = {
    Radio: Radio,
    Cloud: Cloud,
    Code: Code,
  };

  return (
    <section className={styles.technologiesAdditionalSection}>
      <div className={styles.technologiesAdditionalContainer}>
        <div className={styles.technologiesAdditionalGrid}>
          {t.technologiesAdditional.categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code;
            return (
              <div key={index} className={styles.technologyAdditionalCategory}>
                <div className={styles.categoryAdditionalHeader}>
                  <IconComponent className={styles.categoryAdditionalIcon} size={24} />
                  <h3 className={styles.categoryAdditionalTitle}>{category.title}</h3>
                </div>
                <ul className={styles.technologyAdditionalList}>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.technologyAdditionalItem}>
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


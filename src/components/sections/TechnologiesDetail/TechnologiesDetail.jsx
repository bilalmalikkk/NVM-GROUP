import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Network, Cog } from 'lucide-react';
import styles from './TechnologiesDetail.module.css';

export function TechnologiesDetail() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const iconMap = {
    Network: Network,
    Cog: Cog,
  };

  return (
    <section ref={ref} className={`${styles.technologiesDetailSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.technologiesDetailContainer}>
        <div className={styles.technologiesDetailGrid}>
          {t.technologiesDetail.categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Cog;
            return (
              <div key={index} className={styles.technologyDetailCategory}>
                <div className={styles.categoryDetailHeader}>
                  <IconComponent className={styles.categoryDetailIcon} size={24} />
                  <h3 className={styles.categoryDetailTitle}>{category.title}</h3>
                </div>
                <ul className={styles.technologyDetailList}>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.technologyDetailItem}>
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


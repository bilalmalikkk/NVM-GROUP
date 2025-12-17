import React from 'react';
import iconsImage from '../../../assets/business-icons.png';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './BusinessAreas.module.css';

export function BusinessAreas() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="business" ref={ref} className={`${styles.businessAreasSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.businessAreasWrapper}>
        <h2 className={styles.businessAreasTitle}>
          {t.businessAreas.title}
        </h2>
        <div className={styles.businessAreasGrid}>
          {t.businessAreas.areas.map((area, index) => {
            return (
              <div key={index} className={styles.businessAreaItem}>
                <div className={styles.iconCircle}>
                  <img
                    src={iconsImage}
                    alt={t.businessAreas.iconAlt}
                    style={{
                      objectFit: 'none',
                      objectPosition: `${area.iconPosition} center`,
                      width: '180px',
                      height: '48px',
                    }}
                  />
                </div>
                <h3 className={styles.businessAreaTitle}>{area.title}</h3>
                {area.subtitle && (
                  <p className={styles.businessAreaSubtitle}>{area.subtitle}</p>
                )}
                <p className={styles.businessAreaDescription}>
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


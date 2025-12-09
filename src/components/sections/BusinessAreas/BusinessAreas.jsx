import React from 'react';
import iconsImage from '../../../assets/business-icons.png';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './BusinessAreas.module.css';

export function BusinessAreas() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="business" className={styles.businessAreasSection}>
      <div className={styles.businessAreasWrapper}>
        <h2 className={styles.businessAreasTitle}>
          {t.businessAreas.title}
        </h2>
        <div className={styles.businessAreasGrid}>
          {t.businessAreas.areas.map((area, index) => {
            return (
              <div key={index} className={styles.businessAreaItem}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '96px',
                    height: '96px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    marginBottom: '24px',
                    overflow: 'hidden',
                  }}
                >
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


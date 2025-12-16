import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { TrendingUp, Award, Shield, Zap } from 'lucide-react';
import styles from './CableAssemblyWhyChooseUs.module.css';

const iconMap = {
  TrendingUp,
  Award,
  Shield,
  Zap,
};

export function CableAssemblyWhyChooseUs() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.whyChooseUsWrapper}>
        <div className={styles.whyChooseUsHeader}>
          <h2 className={styles.whyChooseUsTitle}>
            {t.cableAssemblyWhyChooseUs.title}
          </h2>
          <p className={styles.whyChooseUsSubtitle}>
            {t.cableAssemblyWhyChooseUs.subtitle}
          </p>
        </div>
        <div className={styles.whyChooseUsGrid}>
          {t.cableAssemblyWhyChooseUs.values.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div key={index} className={styles.whyChooseUsCard}>
                <div className={styles.whyChooseUsIconBox}>
                  <IconComponent size={24} className={styles.whyChooseUsIcon} />
                </div>
                <h3 className={styles.whyChooseUsCardTitle}>{value.title}</h3>
                <p className={styles.whyChooseUsCardDescription}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { Zap, Box, Award, Users, Lightbulb, Cog } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './WhyChooseUs.module.css';

const iconMap = {
  Users,
  Box,
  Award,
  Zap,
  Lightbulb,
  Cog,
};

export function WhyChooseUs() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className={`${styles.whyChooseSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.whyChooseHeader}>
        <h2 className={styles.whyChooseTitle}>{t.whyChooseUs.title}</h2>
        <p className={styles.whyChooseSubtitle}>
          {t.whyChooseUs.subtitle}
        </p>
      </div>
      <div className={styles.whyChooseGrid}>
        {t.whyChooseUs.values.map((value, index) => {
          const IconComponent = iconMap[value.icon];
          return (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <IconComponent size={32} className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>{value.title}</h3>
              <p className={styles.featureDescription}>
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


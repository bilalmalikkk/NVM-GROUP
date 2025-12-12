import React from 'react';
import { Heart, Wifi, Activity, Shield, Users, Smartphone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './WelfareTechnologySolutions.module.css';

const iconMap = {
  Heart,
  Wifi,
  Activity,
  Shield,
  Users,
  Smartphone,
};

export function WelfareTechnologySolutions() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.solutionsWrapper}>
        <h2 className={styles.solutionsTitle}>
          {t.welfareTechnologySolutions.title}
        </h2>
        <div className={styles.solutionsGrid}>
          {t.welfareTechnologySolutions.solutions.map((solution, index) => {
            const IconComponent = iconMap[solution.icon];
            return (
              <div key={index} className={styles.solutionCard}>
                <div className={styles.solutionIconBox}>
                  <IconComponent size={24} className={styles.solutionIcon} />
                </div>
                <h3 className={styles.solutionTitle}>{solution.title}</h3>
                <p className={styles.solutionDescription}>
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.seeMoreContainer}>
          <a 
            href="https://www.nordicmedtek.no/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.seeMoreButton}
          >
            <span>{t.welfareTechnologyCTA.seeMoreText}</span>
            <ArrowRight size={18} className={styles.arrowIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Heart, Car, Cpu, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './ProjectShowcase.module.css';

const iconMap = {
  Heart,
  Car,
  Cpu,
};

export function ProjectShowcase({ setCurrentPage }) {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const handleViewMoreClick = () => {
    // Set flag to scroll to product references section
    sessionStorage.setItem('scrollToProductReferences', 'true');
    // Navigate to projects page
    const projectPageName = language === 'no' ? 'prosjekt' : 'project';
    if (setCurrentPage) {
      setCurrentPage(projectPageName);
    }
  };

  return (
    <section ref={ref} className={`${styles.referencesSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.referencesHeader}>
        <h2 className={styles.referencesTitle}>{t.projectShowcase.title}</h2>
        <p className={styles.referencesSubtitle}>{t.projectShowcase.subtitle}</p>
      </div>
      <div className={styles.projectsGrid}>
        {t.projectShowcase.projects.map((project, index) => {
          const IconComponent = iconMap[project.icon];
          return (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectCardTop}>
                <IconComponent size={80} className={styles.projectIcon} strokeWidth={1.5} />
              </div>
              <div className={styles.projectCardBottom}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <a href={project.link} className={styles.projectLink}>
                  {t.projectShowcase.learnMore} <ArrowRight size={18} className={styles.arrow} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.viewMoreContainer}>
        <button className={styles.viewMoreBtn} onClick={handleViewMoreClick}>
          {t.projectShowcase.viewMore} <ArrowRight size={20} className={styles.arrow} />
        </button>
      </div>
    </section>
  );
}


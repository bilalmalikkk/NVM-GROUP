import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import ioBoxImage from '../../../assets/io_box_1.avif';
import styles from './AutomotiveIONodes.module.css';

export function AutomotiveIONodes() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.ioNodesSection}>
      <div className={styles.ioNodesContainer}>
        <div className={styles.ioNodesText}>
          <h2 className={styles.ioNodesHeading}>
            {t.automotiveIONodes.heading}
          </h2>
          <h3 className={styles.ioNodesSubheading}>
            {t.automotiveIONodes.subheading}
          </h3>
          <p className={styles.ioNodesParagraph}>
            {t.automotiveIONodes.description}
          </p>
          <ul className={styles.ioNodesList}>
            {t.automotiveIONodes.features.map((feature, index) => (
              <li key={index} className={styles.ioNodesListItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.ioNodesImage}>
          <img 
            src={ioBoxImage} 
            alt={t.automotiveIONodes.imageAlt}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

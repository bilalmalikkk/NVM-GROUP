import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import mainControllerImage from '../../../assets/0dba83_cd04785e83c64a2b81d1b00d442bee08~mv2.gif';
import styles from './AutomotiveMainController.module.css';

export function AutomotiveMainController() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.mainControllerSection}>
      <div className={styles.mainControllerContainer}>
        <div className={styles.mainControllerImage}>
          <img 
            src={mainControllerImage} 
            alt={t.automotiveMainController.imageAlt}
            className={styles.image}
          />
        </div>
        <div className={styles.mainControllerText}>
          <h2 className={styles.mainControllerHeading}>
            {t.automotiveMainController.heading}
          </h2>
          <h3 className={styles.mainControllerSubheading}>
            {t.automotiveMainController.subheading}
          </h3>
          {t.automotiveMainController.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.mainControllerParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

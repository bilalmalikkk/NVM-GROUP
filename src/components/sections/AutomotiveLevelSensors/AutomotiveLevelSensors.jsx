import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import levelSensorImage from '../../../assets/0dba83_3ffb0c644690477f87de9a3f81d4905b~mv2.gif';
import styles from './AutomotiveLevelSensors.module.css';

export function AutomotiveLevelSensors() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.levelSensorsSection}>
      <div className={styles.levelSensorsContainer}>
        <div className={styles.levelSensorsImage}>
          <img 
            src={levelSensorImage} 
            alt={t.automotiveLevelSensors.imageAlt}
            className={styles.image}
          />
        </div>
        <div className={styles.levelSensorsText}>
          <h2 className={styles.levelSensorsHeading}>
            {t.automotiveLevelSensors.heading}
          </h2>
          <h3 className={styles.levelSensorsSubheading}>
            {t.automotiveLevelSensors.subheading}
          </h3>
          {t.automotiveLevelSensors.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.levelSensorsParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

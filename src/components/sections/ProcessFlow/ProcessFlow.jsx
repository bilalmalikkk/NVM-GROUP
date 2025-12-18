import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './ProcessFlow.module.css';

export function ProcessFlow() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className={`${styles.processFlowSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.processFlowContainer}>
        <h2 className={styles.processFlowTitle}>{t.processFlow.title}</h2>
        <div className={styles.processSteps}>
          {t.processFlow.steps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { Settings, Package, Truck } from 'lucide-react';
import styles from './CableAssemblyProcess.module.css';

const iconMap = {
  Settings,
  Package,
  Truck,
};

export function CableAssemblyProcess() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.processSection}>
      <div className={styles.processWrapper}>
        <div className={styles.processHeader}>
          <h2 className={styles.processTitle}>
            {t.cableAssemblyProcess.title}
          </h2>
          <p className={styles.processSubtitle}>
            {t.cableAssemblyProcess.subtitle}
          </p>
        </div>
        <div className={styles.processSteps}>
          {t.cableAssemblyProcess.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            const isLast = index === t.cableAssemblyProcess.steps.length - 1;
            return (
              <div key={index} className={styles.processStepContainer}>
                <div className={styles.processStep}>
                  <div className={styles.stepCard}>
                    <div className={styles.stepNumberCircle}>
                      <span className={styles.stepNumber}>{index + 1}</span>
                    </div>
                    <div className={styles.stepIconBox}>
                      <IconComponent size={24} className={styles.stepIcon} />
                    </div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
                {!isLast && (
                  <div className={styles.stepArrow}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


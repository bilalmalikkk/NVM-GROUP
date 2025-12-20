import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './PlasticMechanicsDelivery.module.css';

export function PlasticMechanicsDelivery() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.deliverySection}>
      <div className={styles.deliveryWrapper}>
        <div className={styles.deliveryHeader}>
          <h2 className={styles.deliveryTitle}>
            {t.plasticMechanicsDelivery.title}
          </h2>
          <p className={styles.deliverySubtitle}>
            {t.plasticMechanicsDelivery.subtitle}
          </p>
        </div>
        <div className={styles.deliveryContainer}>
          <div className={styles.deliveryImage}>
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80"
              alt={t.plasticMechanicsDelivery.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.deliveryContent}>
            <h3 className={styles.contentHeading}>
              {t.plasticMechanicsDelivery.contentHeading}
            </h3>
            <div className={styles.cardsGrid}>
              {t.plasticMechanicsDelivery.cards.map((card, index) => (
                <div key={index} className={styles.deliveryCard}>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


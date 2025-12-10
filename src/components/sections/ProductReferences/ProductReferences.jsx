import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { ExternalLink } from 'lucide-react';
import styles from './ProductReferences.module.css';

// Import product images
import camX2Image from '../../../assets/Cam-X2.jpeg';
import healthMonitorImage from '../../../assets/HealthMonitor Pro.jpeg';
import smartHubImage from '../../../assets/SmartHub IoT.jpeg';
import rvControlImage from '../../../assets/RV-Control.jpeg';
import tempSenseImage from '../../../assets/TempSense.jpeg';
import powerControlImage from '../../../assets/PowerControlMC.jpeg';
import airQualityImage from '../../../assets/AirQuality-Pro.jpeg';
import smartLockImage from '../../../assets/SmartLock.jpeg';
import vibrationMonitorImage from '../../../assets/VibrationMonitor.jpeg';
import powerMeterImage from '../../../assets/PowerMeter.jpeg';

// Map product titles to images
const productImageMap = {
  'Cam-X2': camX2Image,
  'HealthMonitor Pro': healthMonitorImage,
  'SmartHub IoT': smartHubImage,
  'RV-Control 500': rvControlImage,
  'TempSense-X': tempSenseImage,
  'PowerControl MC': powerControlImage,
  'AirQuality-Pro': airQualityImage,
  'SmartLock-Z3': smartLockImage,
  'VibrationMonitor-I': vibrationMonitorImage,
  'PowerMeter-3P': powerMeterImage,
};

export function ProductReferences() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.productReferencesSection}>
      <div className={styles.productReferencesContainer}>
        <div className={styles.productReferencesHeader}>
          <h2 className={styles.productReferencesTitle}>{t.productReferences.title}</h2>
          <p className={styles.productReferencesSubtitle}>{t.productReferences.subtitle}</p>
        </div>
        <div className={styles.productGrid}>
          {t.productReferences.products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.productImageWrapper}>
                <img 
                  src={productImageMap[product.title] || product.imageUrl} 
                  alt={product.title}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productId}>ID: {product.id}</p>
                <div className={styles.productShortDescription}>
                  <p className={styles.productTagline}>{product.tagline}</p>
                  <p className={styles.productFeature}>{product.feature}</p>
                </div>
                <p className={styles.productDescription}>{product.description}</p>
                <button className={styles.productButton}>
                  <ExternalLink size={18} />
                  {t.productReferences.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


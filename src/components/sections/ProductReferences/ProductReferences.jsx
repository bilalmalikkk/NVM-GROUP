import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';
import styles from './ProductReferences.module.css';

// Import product images
import camX2Image from '../../../assets/processed-file-1761299462516-596848665.png';
import healthMonitorImage from '../../../assets/analogScreen.png';
import smartHubImage from '../../../assets/SmartHub IoT.jpeg';
import coreHubImage from '../../../assets/processed-file-1761298871370-131557591.png';
import rvControlImage from '../../../assets/polar_screen.jpg';
import tempSenseImage from '../../../assets/io_box_1.avif';
import powerControlImage from '../../../assets/PowerControlMC.jpeg';
import mobileAppImage from '../../../assets/processed-file-1761638936492-650159908.png';
import airQualityImage from '../../../assets/processed-file-1762595898165-411757193.jpg';
import smartLockImage from '../../../assets/processed-file-1761299724628-718362341.jpg';
import vibrationMonitorImage from '../../../assets/VibrationMonitor.jpeg';
import powerMeterImage from '../../../assets/PowerMeter.jpeg';
import vaktrommetImage from '../../../assets/processed-file-1761298836713-939324797.png';

// Map product titles to images
const productImageMap = {
  'Cam-X2': camX2Image,
  'Enkel Smart Klokke': healthMonitorImage,
  'Simple Smart Watch': healthMonitorImage,
  'CoreHub+': coreHubImage,
  'SmartHub IoT': smartHubImage,
  'RV-Control 500': rvControlImage,
  'CAN NODE': tempSenseImage,
  'Mobil App': mobileAppImage,
  'Mobile App': mobileAppImage,
  'PowerControl MC': powerControlImage,
  'easeBlink Privat': airQualityImage,
  'easeBlink Private': airQualityImage,
  'AirQuality-Pro': airQualityImage,
  'Alarm Knapp (4G)': smartLockImage,
  'Alarm Button (4G)': smartLockImage,
  'SmartLock-Z3': smartLockImage,
  'VibrationMonitor-I': vibrationMonitorImage,
  'PowerMeter-3P': powerMeterImage,
  'Vaktrommet – Trygghet i sanntid': vaktrommetImage,
  'Vaktrommet – Safety in real-time': vaktrommetImage,
};

export function ProductReferences() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className={`${styles.productReferencesSection} ${isVisible ? styles.visible : ''}`}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


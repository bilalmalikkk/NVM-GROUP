import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './ContactCTA.module.css';

export function ContactCTA() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.contactCTA.submitSuccess);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className={`${styles.contactSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.contactHeader}>
        <h2 className={styles.contactMainTitle}>{t.contactCTA.title}</h2>
        <p className={styles.contactSubtitle}>
          {t.contactCTA.subtitle}
        </p>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactFormCard}>
          <h3 className={styles.formTitle}>{t.contactCTA.formTitle}</h3>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contactCTA.namePlaceholder}
              required
              className={styles.formInput}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contactCTA.emailPlaceholder}
              required
              className={styles.formInput}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.contactCTA.phonePlaceholder}
              className={styles.formInput}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contactCTA.messagePlaceholder}
              required
              rows={5}
              className={styles.formTextarea}
            />
            <button
              type="submit"
              className={styles.btnSend}
            >
              <Send size={18} className={styles.btnIcon} />
              {t.contactCTA.sendButton}
            </button>
          </form>

          <div className={styles.formButtons}>
            <div className={styles.formSeparator}>
              <span>{t.contactCTA.orText}</span>
            </div>
            <button type="button" className={styles.btnBook}>
              <Calendar size={18} className={styles.btnIcon} />
              {t.contactCTA.bookMeeting}
            </button>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactInfoHeader}>
            <h3 className={styles.contactInfoTitle}>{t.contactCTA.contactInfo}</h3>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetailItem}>
              <MapPin size={24} className={styles.detailIcon} />
              <div className={styles.detailContent}>
                <p style={{ whiteSpace: 'pre-line' }}>{t.contactCTA.addressText}</p>
              </div>
            </div>
            <div className={styles.contactDetailItem}>
              <Mail size={24} className={styles.detailIcon} />
              <div className={styles.detailContent}>
                <p>{t.contactCTA.emailText}</p>
              </div>
            </div>
            <div className={styles.contactDetailItem}>
              <Phone size={24} className={styles.detailIcon} />
              <div className={styles.detailContent}>
                <p>{t.contactCTA.phoneText}</p>
              </div>
            </div>
          </div>
          <p className={styles.contactNote}>
            {t.contactCTA.note}
          </p>
        </div>
      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

export function ContactCTA({ language = 'no' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const content = {
    no: {
      title: 'La oss realisere ditt neste prosjekt',
      subtitle: 'Kontakt oss for en uforpliktende samtale om hvordan vi kan hjelpe deg.',
      formTitle: 'Send oss en melding',
      namePlaceholder: 'Ditt navn',
      emailPlaceholder: 'Din e-post',
      phonePlaceholder: 'Telefonnummer (valgfritt)',
      messagePlaceholder: 'Fortell oss om ditt prosjekt...',
      sendButton: 'Send melding',
      orText: 'Eller',
      bookMeeting: 'Book et møte',
      contactInfo: 'Kontaktinformasjon',
      addressText: 'Nordic RVM Group AS\nTeknologiveien 1\n1234 Oslo, Norge',
      emailText: 'kontakt@nordicrvm.no',
      phoneText: '+47 123 45 678',
      note: 'Vi svarer vanligvis innen 24 timer på hverdager. For hastesaker, vennligst ring oss direkte.'
    },
    en: {
      title: 'Let us realize your next project',
      subtitle: 'Contact us for a non-binding conversation about how we can help you.',
      formTitle: 'Send us a message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      phonePlaceholder: 'Phone number (optional)',
      messagePlaceholder: 'Tell us about your project...',
      sendButton: 'Send message',
      orText: 'Or',
      bookMeeting: 'Book a meeting',
      contactInfo: 'Contact information',
      addressText: 'Nordic RVM Group AS\nTeknologiveien 1\n1234 Oslo, Norway',
      emailText: 'contact@nordicrvm.no',
      phoneText: '+47 123 45 678',
      note: 'We usually respond within 24 hours on weekdays. For urgent matters, please call us directly.'
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'no' ? 'Takk for din henvendelse! Vi tar kontakt snart.' : 'Thank you for your inquiry! We will be in touch soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-main-title">{t.title}</h2>
        <p className="contact-subtitle">
          {t.subtitle}
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-form-card">
          <h3 className="form-title">{t.formTitle}</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              required
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.phonePlaceholder}
              className="form-input"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              required
              rows={5}
              className="form-textarea"
            />
            <button
              type="submit"
              className="btn-send"
            >
              <Send size={18} className="btn-icon" />
              {t.sendButton}
            </button>
          </form>

          <div className="form-buttons">
            <div className="form-separator">
              <span>{t.orText}</span>
            </div>
            <button type="button" className="btn-book">
              <Calendar size={18} className="btn-icon" />
              {t.bookMeeting}
            </button>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-info-header">
            <h3 className="contact-info-title">{t.contactInfo}</h3>
          </div>
          <div className="contact-details">
            <div className="contact-detail-item">
              <MapPin size={24} className="detail-icon" />
              <div className="detail-content">
                <p style={{ whiteSpace: 'pre-line' }}>{t.addressText}</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <Mail size={24} className="detail-icon" />
              <div className="detail-content">
                <p>{t.emailText}</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <Phone size={24} className="detail-icon" />
              <div className="detail-content">
                <p>{t.phoneText}</p>
              </div>
            </div>
          </div>
          <p className="contact-note">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}


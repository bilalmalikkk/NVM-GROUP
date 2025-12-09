// Centralized translations for the entire application

export const translations = {
  no: {
    // Header
    header: {
      topMenu: [
        { label: 'Om oss', href: '#about' },
        { label: 'Våre produkter', href: '#products' },
        { label: 'Book demo', href: '#demo' },
        { label: 'Kontakt oss', href: '#contact' },
        { label: 'Personvern erklæring', href: '#privacy' },
      ],
      bottomMenu: [
        { label: 'Hjem', href: '#hero' },
        { label: 'prosjekt', href: '#about' },
        { label: 'Velferds teknologi', href: '#products' },
        { label: 'automotive', href: '#business' },
        { label: 'Plast & Mekanikk', href: '#plastic' },
        { label: 'Kabel konfeksjon', href: '#cable' },
        { label: 'Resurser', href: '#resources' },
      ],
      languageToggle: 'ENGLISH',
    },
    // Hero
    hero: {
      tagline: 'Fra idé til ferdig produkt – teknologi for mennesker, mobilitet og innovasjon.',
      description: 'Vi utvikler løsninger innen velferdsteknologi, mobile kontrollsystemer og tilbyr fullskala R&D-design.',
      button1: 'Utforsk våre løsninger',
      button2: 'Kontakt oss',
    },
    // About
    about: {
      title: 'OM NORDIC RVM GROUP',
      text: 'Vi er en talentfull gruppe entreprenører, ingeniører og partnere som støtter helse- og medisinsk virksomhet med banebrytende ideer og produkter. Vi tilbyr smarte løsninger og produkter for bedrifter i alle størrelser og er stolte av vår unike, dedikerte service. Hos Nordic Medtek tror vi at riktig forståelse og teknologisk forsprang kan lede oss og våre partnere mot en vellykket fremtid.',
      cardTitle: 'Nordic Medtek team',
    },
    // Business Areas
    businessAreas: {
      title: 'VÅRE FORRETNINGSOMRÅDER',
      areas: [
        {
          iconPosition: '0%',
          title: 'Utvikling & prototyper',
          description: 'Fra idé til ferdig prototype – elektronikk, mekanikk, og plastdeler',
        },
        {
          iconPosition: '50%',
          title: 'Velferdsteknologi',
          subtitle: '(Nordic Medical Technologies)',
          description: 'Medisinske sensorer og trygghetsystemer for omsorg',
        },
        {
          iconPosition: '100%',
          title: 'Automotive styringssystemer',
          description: 'Smart styring for bobiler og campingvogner',
        },
      ],
      iconAlt: 'Forretningsområder ikoner',
    },
    // Why Choose Us
    whyChooseUs: {
      title: 'Hvorfor velge oss?',
      subtitle: 'Vi leverer komplette løsninger med kvalitet og innovasjon i hvert steg',
      values: [
        {
          icon: 'Users',
          title: 'Tverrfaglig kompetanse',
          description: 'Vårt team behersker elektronikk, software, mekanikk og design – alt under ett tak.'
        },
        {
          icon: 'Box',
          title: 'Fra konsept til ferdig produkt',
          description: '30 års erfaring med å realisere ideer fra første skisse til produksjonsklar løsning.'
        },
        {
          icon: 'Award',
          title: 'Innovasjon og kvalitet',
          description: 'Vi setter høye standarder i alle ledd og leverer banebrytende teknologi.'
        },
        {
          icon: 'Zap',
          title: 'Rask realisering',
          description: 'Egen produksjonslinje for prototyper og småserier – fra idé til produkt på rekordtid.'
        },
        {
          icon: 'Lightbulb',
          title: 'Skreddersydde løsninger',
          description: 'Vi tilpasser hver løsning til dine spesifikke behov og utfordringer.'
        },
        {
          icon: 'Cog',
          title: 'Komplett verdikjede',
          description: 'Fra R&D og prototyping til produksjon og sertifisering – vi håndterer alt.'
        }
      ]
    },
    // Project Showcase
    projectShowcase: {
      title: 'Referanser & Prosjekter',
      subtitle: 'Eksempler fra våre tre hovedområder',
      viewMore: 'Se flere prosjekter',
      learnMore: 'Les mer',
      projects: [
        {
          icon: 'Heart',
          category: 'VELFERDSTEKNOLOGI',
          title: 'Cam-X2 Falldeteksjon',
          description: 'Kamerasystem med dobbel falldeteksjon for eldreomsorg. Radar og AI-teknologi sikrer maksimal trygghet uten å krenke personvernet.',
          link: '#'
        },
        {
          icon: 'Car',
          category: 'AUTOMOTIVE',
          title: 'RV-Control 500',
          description: 'Komplett styresystem for bobil og campingvogn med kontroll av belysning, oppvarming, vann og batteri. Intuitiv touchskjerm med app-styring.',
          link: '#'
        },
        {
          icon: 'Cpu',
          category: 'R&D & PRODUKSJON',
          title: 'SmartHub IoT Gateway',
          description: 'Kraftig IoT-gateway for smarte hjem. Støtter WiFi, Zigbee og Z-Wave med integrert cloud-kommunikasjon og remote management.',
          link: '#'
        }
      ]
    },
    // Contact CTA
    contactCTA: {
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
      note: 'Vi svarer vanligvis innen 24 timer på hverdager. For hastesaker, vennligst ring oss direkte.',
      submitSuccess: 'Takk for din henvendelse! Vi tar kontakt snart.',
    },
    // Footer
    footer: {
      tagline: 'Innovasjon for helse og mobilitet – fra idé til ferdig produkt',
      contact: 'Kontakt',
      services: 'Tjenester',
      service1: 'Elektronikkutvikling',
      service2: 'Prototyping',
      service3: 'Velferdsteknologi',
      service4: 'Automotive systemer',
      copyright: 'Alle rettigheter reservert.',
    },
  },
  en: {
    // Header
    header: {
      topMenu: [
        { label: 'About us', href: '#about' },
        { label: 'Our products', href: '#products' },
        { label: 'Book demo', href: '#demo' },
        { label: 'Contact us', href: '#contact' },
        { label: 'Privacy policy', href: '#privacy' },
      ],
      bottomMenu: [
        { label: 'Home', href: '#hero' },
        { label: 'project', href: '#about' },
        { label: 'Welfare technology', href: '#products' },
        { label: 'Automotive', href: '#business' },
        { label: 'Plastic & Mechanics', href: '#plastic' },
        { label: 'Cable assembly', href: '#cable' },
        { label: 'Resources', href: '#resources' },
      ],
      languageToggle: 'NORSK',
    },
    // Hero
    hero: {
      tagline: 'From idea to finished product – technology for people, mobility and innovation.',
      description: 'We develop solutions in welfare technology, mobile control systems and offer full-scale R&D design.',
      button1: 'Explore our solutions',
      button2: 'Contact us',
    },
    // About
    about: {
      title: 'ABOUT NORDIC RVM GROUP',
      text: 'We are a talented group of entrepreneurs, engineers and partners who support health and medical businesses with groundbreaking ideas and products. We offer smart solutions and products for companies of all sizes and are proud of our unique, dedicated service. At Nordic Medtek, we believe that proper understanding and technological advantage can lead us and our partners towards a successful future.',
      cardTitle: 'Nordic Medtek team',
    },
    // Business Areas
    businessAreas: {
      title: 'OUR BUSINESS AREAS',
      areas: [
        {
          iconPosition: '0%',
          title: 'Development & prototypes',
          description: 'From idea to finished prototype – electronics, mechanics, and plastic parts',
        },
        {
          iconPosition: '50%',
          title: 'Welfare technology',
          subtitle: '(Nordic Medical Technologies)',
          description: 'Medical sensors and safety systems for care',
        },
        {
          iconPosition: '100%',
          title: 'Automotive control systems',
          description: 'Smart control for RVs and caravans',
        },
      ],
      iconAlt: 'Business areas icons',
    },
    // Why Choose Us
    whyChooseUs: {
      title: 'Why choose us?',
      subtitle: 'We deliver complete solutions with quality and innovation in every step',
      values: [
        {
          icon: 'Users',
          title: 'Multidisciplinary expertise',
          description: 'Our team masters electronics, software, mechanics and design – all under one roof.'
        },
        {
          icon: 'Box',
          title: 'From concept to finished product',
          description: '30 years of experience realizing ideas from first sketch to production-ready solution.'
        },
        {
          icon: 'Award',
          title: 'Innovation and quality',
          description: 'We set high standards in all aspects and deliver groundbreaking technology.'
        },
        {
          icon: 'Zap',
          title: 'Rapid realization',
          description: 'Own production line for prototypes and small series – from idea to product in record time.'
        },
        {
          icon: 'Lightbulb',
          title: 'Customized solutions',
          description: 'We tailor each solution to your specific needs and challenges.'
        },
        {
          icon: 'Cog',
          title: 'Complete value chain',
          description: 'From R&D and prototyping to production and certification – we handle it all.'
        }
      ]
    },
    // Project Showcase
    projectShowcase: {
      title: 'References & Projects',
      subtitle: 'Examples from our three main areas',
      viewMore: 'View more projects',
      learnMore: 'Learn more',
      projects: [
        {
          icon: 'Heart',
          category: 'WELFARE TECHNOLOGY',
          title: 'Cam-X2 Fall Detection',
          description: 'Camera system with dual fall detection for elderly care. Radar and AI technology ensure maximum safety without violating privacy.',
          link: '#'
        },
        {
          icon: 'Car',
          category: 'AUTOMOTIVE',
          title: 'RV-Control 500',
          description: 'Complete control system for motorhomes and caravans with control of lighting, heating, water and battery. Intuitive touchscreen with app control.',
          link: '#'
        },
        {
          icon: 'Cpu',
          category: 'R&D & PRODUCTION',
          title: 'SmartHub IoT Gateway',
          description: 'Powerful IoT gateway for smart homes. Supports WiFi, Zigbee and Z-Wave with integrated cloud communication and remote management.',
          link: '#'
        }
      ]
    },
    // Contact CTA
    contactCTA: {
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
      note: 'We usually respond within 24 hours on weekdays. For urgent matters, please call us directly.',
      submitSuccess: 'Thank you for your inquiry! We will be in touch soon.',
    },
    // Footer
    footer: {
      tagline: 'Innovation for health and mobility – from idea to finished product',
      contact: 'Contact',
      services: 'Services',
      service1: 'Electronics development',
      service2: 'Prototyping',
      service3: 'Welfare technology',
      service4: 'Automotive systems',
      copyright: 'All rights reserved.',
    },
  },
};

// Helper function to get translations for a specific language
export const getTranslations = (language = 'no') => {
  return translations[language] || translations.no;
};


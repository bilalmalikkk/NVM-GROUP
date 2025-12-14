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
    // Project Page
    projectPage: {
      title: 'Prosjekter',
      metaDescription: 'Utforsk våre prosjekter og løsninger. Fra konsept til ferdig produkt med 30 års erfaring innen elektronikkutvikling.',
    },
    // Project Hero
    projectHero: {
      heading: 'VI GIR LIV TIL DINE IDÉER',
      description: 'Med 30 års erfaring og hundrevis av fullførte prosjekter leverer vi komplette løsninger inkludert elektronikk, firmware, mekanikk, plastdeler, sensorer og kabelkonfeksjon. Fra idé til ferdig produkt – alt koordinert fra én partner.',
      button1: 'VÅR EKSPERTISE',
      button2: 'KONTAKT OSS',
    },
    // Project Content
    projectContent: {
      heading: 'Fra konsept til ferdig produkt – eller optimalisering av eksisterende løsninger?',
      description: 'Med 30 års erfaring innen elektronikkutvikling tilbyr vi komplett produktrealisering. Vårt team behersker hele verdikjeden: elektronikk, firmware, mekanikk, plastdeler, sensorikk og kabelkonfeksjon. Vi utformer designspesifikasjoner basert på dine krav, og leverer testede, produksjonsklare løsninger.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      imageAlt: 'Produktutvikling',
    },
    // Process Flow
    processFlow: {
      title: 'FRA IDÉ TIL PRODUKT',
      steps: [
        {
          title: 'Konsept',
          description: 'Vi starter med å forstå dine behov og utvikler konseptet sammen med deg',
        },
        {
          title: 'Design & Utvikling',
          description: 'Komplett R&D med elektronikk, firmware, mekanikk og plastdesign',
        },
        {
          title: 'Prototyping',
          description: 'Rask prototypeutvikling for testing og validering av konseptet',
        },
        {
          title: 'Produksjon',
          description: 'Vi leverer raske småserier fra egen produksjon. Volumproduksjon kan tilbys via vår partner WestControl AS',
        },
      ],
    },
    // Technologies
    technologies: {
      title: 'TEKNOLOGIER & KOMPETANSE',
      intro: 'Etter 30 år i bransjen er det nær sagt ikke noe vi ikke har vært innom. Her er et utvalg av teknologier og områder vi behersker.',
      categories: [
        {
          icon: 'Wrench',
          title: 'Design & Prototyping',
          items: [
            'PCB Design & Layout',
            'CAD-modellering',
            '3D-printing og Rapid Prototyping',
            'Prototypeutvikling',
            'Testing og Validering',
            'Embedded Software Development',
            'Hardware Engineering',
            'Sensorintegrasjon',
            'Brukerorientert Design',
            'Materialvalg og Produksjonsoptimalisering',
            'Design for Manufacturing (DFM)',
            'App- og Webutvikling',
            'Skyintegrasjon og IoT-plattformer',
            'Sanntidskommunikasjon',
            'CE-merking og EMC-testing',
            'Sikkerhetsstandarder og Sertifisering (ISO, IEC)',
          ],
        },
        {
          icon: 'Cpu',
          title: 'Embedded Systems',
          items: [
            'Mikrocontroller (uC) teknologi',
            'ARM Cortex',
            'ESP32/ESP8266',
            'STM32',
            'NXP',
            'ST',
            'Microchip',
            'Skylabs',
            'Silicon Labs',
            'Espressif',
            'Arduino-baserte løsninger',
          ],
        },
        {
          icon: 'Monitor',
          title: 'Operating Systems',
          items: [
            'Linux-baserte systemer',
            'Embedded Linux',
            'RTOS (Real-Time Operating Systems)',
            'Yocto Project',
          ],
        },
      ],
    },
    // Technologies Detail
    technologiesDetail: {
      categories: [
        {
          icon: 'Network',
          title: 'Nettverks- og Internettprotokoller',
          items: [
            'TCP/IP',
            'UDP',
            'HTTP / HTTPS',
            'FTP / SFTP',
            'SMTP / IMAP / POP3',
            'DNS',
            'DHCP',
            'SNMP',
          ],
        },
        {
          icon: 'Cog',
          title: 'Teknologier',
          items: [
            'Personregistrering med radar',
            'Fall registrering med radar',
            'Kamerateknologi (videoanalyse, termisk kamera, dybdekamera)',
            'Maskinlæring',
            'AI-teknologi (Computer Vision, NLP, prediktiv analyse)',
            'Lydsystemer (mikrofoner, DSP, beamforming)',
            'Power Supply & Power Management',
            'Channel Sounding & RF-teknologi',
            'Smartklokker og Wearables',
            'Velferdsteknologi',
            'Medisinske sensorer (EKG, SpO2, temperatur, blodtrykk)',
            'Industrielle IoT-noder',
            'CAN-baserte systemer',
            'Analoge systemer',
            'Digitale systemer',
            'Bluetooth / BLE',
            'Wi-Fi og WLAN',
            'LoRaWAN og LPWAN-teknologi',
            'Zigbee / Thread / Z-Wave',
            'NB-IoT og LTE-M',
            'GPS / GNSS-teknologi',
          ],
        },
        {
          icon: 'Cog',
          title: 'Teknologier',
          items: [
            'RFID og NFC',
            'Sensorfusjon (IMU, akselerometer, gyroskop)',
            'Edge Computing',
            'Cloud-integrasjon og IoT-plattformer',
            'Kommunikasjonsprotokoller (MQTT, CoAP, Modbus, OPC UA)',
            'Embedded Systems og MCU-programmering',
            'FPGA-teknologi',
            'Signalbehandling (DSP)',
            'Audio- og videokoding (Codec)',
            'Sikkerhetsprotokoller (TLS, SSL, kryptering)',
            'Maskinvareakselerasjon (GPU, TPU)',
            'Energioptimalisering og lavstrømsdesign',
            'Trådløs lading og batteriteknologi',
            'HMI (Human-Machine Interface)',
            'AR/VR-teknologi',
            'Robotikk og aktuatorstyring',
            'Maskinvisjon og bildegjenkjenning',
            'Big Data og Analytics',
            'Sanntidsoperativsystemer (RTOS)',
            'Firmware-oppdatering OTA (Over-The-Air)',
            'Sertifisering og EMC-testing',
          ],
        },
      ],
    },
    // Technologies Additional
    technologiesAdditional: {
      categories: [
        {
          icon: 'Radio',
          title: 'Industrielle og IoT-protokoller',
          items: [
            'Modbus (RTU, TCP)',
            'CAN bus (Controller Area Network)',
            'PROFINET',
            'EtherCAT',
            'BACnet',
            'OPC UA',
            'MQTT (Message Queuing Telemetry Transport)',
            'LoRaWAN',
            'Zigbee',
            'Z-Wave',
            'Thread',
            'UART',
            'LIN',
            'Ethernet',
            'I2C',
            'SPI',
          ],
        },
        {
          icon: 'Cloud',
          title: 'Cloud & IoT',
          items: [
            'AWS IoT',
            'Azure IoT',
            'Google Cloud Platform',
            'MQTT Broker',
            'Edge Computing',
          ],
        },
        {
          icon: 'Code',
          title: 'Programvareutvikling',
          items: [
            'C/C++',
            'Python',
            'JavaScript/Node.js',
            'Firmware development',
            'Web-baserte grensesnitt',
          ],
        },
      ],
    },
    // Production Line
    productionLine: {
      title: 'EGEN PRODUKSJONSLINJE FOR RASK REALISERING',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      imageAlt: 'Produksjonslinje',
      paragraphs: [
        'Vår egen elektronikkproduksjonslinje gir deg en unik fordel i utviklingsprosessen. Med moderne pick & place-maskiner, optisk inspeksjon (AOI) og avansert testutstyr leverer vi prototyper og småserier raskt og kostnadseffektivt.',
        'Vår komplette SMD-produksjonslinje muliggjør en rask overgang fra design til ferdig produkt, noe som gir deg mulighet til rask markeds-testing, konseptvalidering og salgsstart.',
        'Når produksjonsvolumet og etterspørselen øker, går prosessen sømløst over til vår erfarne partner WestControl for storskala masseproduksjon. Dette gir deg fordelen av både rask oppstart og skalerbar volumproduksjon.',
      ],
    },
    // Product References
    productReferences: {
      title: 'Produktreferanser',
      subtitle: 'Utvalgte produkter vi har utviklet og produsert for våre kunder',
      buttonText: 'Se Datablad',
      products: [
        {
          title: 'Cam-X2',
          id: '11508',
          tagline: 'Kamera med dobbel falldeteksjon',
          feature: 'maksimal trygghet og presisjon',
          description: 'Enkel å installere og enkel å bruke radarsensor som oppdager farlige hendelser som fall, uten å krenke personvernet til individet. For eksempel, i et eldreomsorg scenario, kan sensoren oppdage status som gående eller sittende, samt oppdage farlige hendelser som fall.',
          imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
        },
        {
          title: 'HealthMonitor Pro',
          id: '12340',
          tagline: 'Medisinsk sensor for kontinuerlig overvåking',
          feature: 'presisjon og pålitelighet',
          description: 'Kompakt medisinsk sensorenhet som kontinuerlig overvåker vitale parametere. Trådløs datatransmisjon via Bluetooth LE til sentral enhet. Utviklet i samarbeid med ledende aktører innen helsesektoren.',
          imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
        },
        {
          title: 'SmartHub IoT',
          id: '13256',
          tagline: 'Sentral IoT-gateway for smarte hjem',
          feature: 'sømløs integrasjon',
          description: 'Kraftig IoT-gateway som samler data fra flere sensorer og enheter. Støtter WiFi, Zigbee og Z-Wave. Integrert med AWS IoT Core for sikker cloud-kommunikasjon og remote management.',
          imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: 'RV-Control 500',
          id: '14782',
          tagline: 'Avansert styresystem for bobil',
          feature: 'komfort på reise',
          description: 'Komplett styresystem for bobil og campingvogn. Kontrollerer belysning, oppvarming, vann og batteri. Intuitiv touchskjerm med mulighet for app-styring via Bluetooth.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'TempSense-X',
          id: '15094',
          tagline: 'Trådløs temperatursensor',
          feature: 'nøyaktig måling',
          description: 'Høypresisjon temperatursensor med langvarig batterilevetid. Ideell for kaldtlager, laboratorier og industrielle miljøer. Sender data via LoRaWAN med opptil 10 km rekkevidde.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'PowerControl MC',
          id: '16521',
          tagline: 'Industriell kontrollmodul',
          feature: 'robust og pålitelig',
          description: 'Kraftig kontrollmodul for industrielle applikasjoner. Støtter CAN bus, Modbus og Ethernet kommunikasjon. Designet for tøffe miljøer med IP67 klassifisering og utvidet temperaturområde.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'AirQuality-Pro',
          id: '17338',
          tagline: 'Luftkvalitetssensor for inneklima',
          feature: 'frisk luft hele dagen',
          description: 'Avansert sensor som måler CO2, VOC, temperatur og luftfuktighet. Perfekt for kontorer, skoler og offentlige bygg. Wireless tilkobling og integrasjon med bygningsautomatiseringssystemer.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'SmartLock-Z3',
          id: '18445',
          tagline: 'Intelligent adgangskontroll',
          feature: 'sikkerhet og fleksibilitet',
          description: 'Trådløs smartlås med app-styring, nøkkelkort og PIN-kode. Integrert med BLE og NFC teknologi. Batteridrevet med opptil 2 års levetid. Komplett loggføring av alle hendelser.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'VibrationMonitor-I',
          id: '19567',
          tagline: 'Industrisensor for vibrasjonsovervåking',
          feature: 'prediktivt vedlikehold',
          description: 'Avansert vibrasjonssensor for maskinovervåking. Detekterer tidlige tegn på slitasje og feil. 4G LTE tilkobling for sanntidsdata til cloud. Batteri eller 24V forsyning.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'PowerMeter-3P',
          id: '20198',
          tagline: 'Trefase energimåler',
          feature: 'energioptimalisering',
          description: 'Presis energimåler for trefase systemer. Måler aktiv, reaktiv og tilsynelatende effekt. Modbus RTU og Ethernet kommunikasjon. DIN-skinne montering for enkel installasjon.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
      ],
    },
    // Project CTA
    projectCTA: {
      title: 'HAR DU ET PROSJEKT?',
      description: 'Vi hjelper deg med å realisere dine ideer. Kontakt oss for en uforpliktende samtale om hvordan vi kan bistå med ditt neste prosjekt.',
      buttonText: 'Kontakt oss',
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
    // Welfare Technology Hero
    welfareTechnologyHero: {
      heading: 'VELFERDSTEKNOLOGI',
      description: 'Vi utvikler innovative løsninger for helse og velferd som gjør en forskjell i hverdagen. Med fokus på brukervennlighet og pålitelighet leverer vi produkter som kombinerer avansert teknologi med praktisk anvendelighet.',
    },
    // Welfare Technology Solutions
    welfareTechnologySolutions: {
      title: 'VÅRE LØSNINGER',
      solutions: [
        {
          icon: 'Heart',
          title: 'Medisinske Sensorer',
          description: 'Presise sensorer for overvåking av vitale parametere med fokus på pålitelighet og nøyaktighet.',
        },
        {
          icon: 'Wifi',
          title: 'Trådløs Kommunikasjon',
          description: 'Sikre og stabile IoT-løsninger som kobler enheter og systemer sammen.',
        },
        {
          icon: 'Activity',
          title: 'Sanntidsovervåking',
          description: 'Kontinuerlig monitorering med varslingsfunksjoner for trygghet døgnet rundt.',
        },
        {
          icon: 'Shield',
          title: 'Datasikkerhet',
          description: 'GDPR-compliant løsninger med kryptering og sikker databehandling.',
        },
        {
          icon: 'Users',
          title: 'Brukervennlig Design',
          description: 'Intuitive grensesnitt tilpasset både brukere, pårørende og helsepersonell.',
        },
        {
          icon: 'Smartphone',
          title: 'App-integrasjon',
          description: 'Mobile løsninger for enkel tilgang til data og styring hvor som helst.',
        },
      ],
    },
    // Welfare Technology CTA
    welfareTechnologyCTA: {
      title: 'INTERESSERT I VELFERDSTEKNOLOGI?',
      description: 'Kontakt oss for å lære mer om våre løsninger innen velferdsteknologi og hvordan vi kan hjelpe med ditt neste prosjekt.',
      buttonText: 'Kontakt oss',
      seeMoreText: 'Se mer',
    },
    // Plastic Mechanics Hero
    plasticMechanicsHero: {
      heading: 'Plastdesign og mekanisk konstruksjon',
      description: 'Vi er en komplett leverandør som designer mekanikk og plastdeler parallelt med elektronikkutvikling – og sikrer optimale løsninger fra starten.',
    },
    // Plastic Mechanics Content
    plasticMechanicsContent: {
      heading: 'Unik ekspertise i helhetlig produktutvikling',
      paragraph1: 'Med 30 års erfaring designer vi optimale og produksjonsklare løsninger. Vår unike ekspertise ligger i å forstå samspillet mellom plastdeler, mekanikk og elektronikk fra prosjektets aller første start.',
      paragraph2: 'Denne erfaringen sikrer at produktet til slutt kan monteres så effektivt som mulig – og sparer tid og kostnader i produksjonsfasen.',
      features: [
        'Parallell utvikling: Mekanikk og plastdeler designes samtidig med elektronikkutvikling',
        'Produksjonsbarhet i fokus: 30 års erfaring sikrer at løsningene er optimale for produksjon',
        'Effektiv montering: Designet fra starten for optimal montering og produksjon',
      ],
      imageAlt: 'Mekaniske komponenter og deler',
    },
    // Plastic Mechanics Collaboration
    plasticMechanicsCollaboration: {
      heading: 'Samarbeid med designbyråer',
      paragraph1: 'I prosjekter med høye krav til design og visuelt uttrykk samarbeider vi med flere utmerkede designbyråer som bidrar til å skape det estetiske uttrykket.',
      paragraph2: 'Men det er fortsatt vi som sikrer at designet – med plastdeler, mekanikk og elektronikk – blir optimalt utført. Vi sikrer at vakre design også blir produksjonsklare og kostnadseffektive løsninger.',
      imageAlt: 'Samarbeid med designbyråer',
    },
    // Plastic Mechanics Delivery
    plasticMechanicsDelivery: {
      title: 'Fra design til ferdig produkt',
      subtitle: 'Vi leverer hele verdikjeden – fra idé til ferdig plastprodukt i alle størrelser',
      contentHeading: 'Vår komplette leveranse',
      cards: [
        {
          title: 'Design og konstruksjon',
          description: 'Vi designer plastdeler og mekanikk optimalisert for produksjon og montering',
        },
        {
          title: 'Plaststøpeformer og verktøy',
          description: 'Vi lager høykvalitets plaststøpeformer for kostnadseffektiv produksjon',
        },
        {
          title: 'Prototyper',
          description: 'Raske prototyper for testing og validering før produksjon',
        },
        {
          title: 'Produksjon i alle størrelser',
          description: 'Fra småserier til volumproduksjon – vi leverer i den skalaen du trenger',
        },
      ],
      imageAlt: 'Produksjonsprosess',
    },
    // Plastic Mechanics CTA
    plasticMechanicsCTA: {
      title: 'Klar til å realisere din produktidé?',
      description: 'Kontakt oss for en uforpliktende samtale om ditt prosjekt',
      buttonText: 'Kontakt oss',
    },
    // Automotive Hero
    automotiveHero: {
      heading: 'NORDICRVM AUTOMOTIVE',
      description: '',
    },
    // Automotive Content
    automotiveContent: {
      heading: 'PROJECT-BASED B2B SERVICE',
      paragraphs: [
        'After developing industrial control systems and automotive control nodes over CAN since the early 90s, and supplementing with smart home solutions in recent years, we entered the RV and caravan industry in 2018.',
        'We have developed a modern and scalable system ready to adapt to rapid market changes. The system handles all functions – from turning on lights and playing music, to flushing the toilet and heating the floor.',
        'Our experience from industrial automation combined with modern IoT technology gives us a unique competitive advantage in delivering reliable and innovative solutions.',
      ],
      imageAlt: 'Modern RV with custom control system',
    },
    // Automotive Partners
    automotivePartners: {
      heading: 'Geografisk eksklusivitet',
      subheading: 'B TO B BUSINESS',
      description: 'Når vi inngår partnerskap, tilbyr vi geografisk eksklusivitet til ditt hovedmarked. Dette betyr at vi ikke vil selge våre produkter til dine direkte konkurrenter. Vi er klar over at dette begrenser antall partnere vi kan ha, men vi tror dette er den beste løsningen for å bygge sterke og langsiktige samarbeidsforhold.',
      contactLink: 'Kontakt oss',
      imageAlt: 'Business partnership handshake',
    },
    // Automotive Products Header
    automotiveProductsHeader: {
      heading: 'PRODUKTENE VÅRE',
      subheading: 'En smarthjemløsning for campingvogner og bobiler.',
    },
    // Automotive Main Controller
    automotiveMainController: {
      heading: 'HOVEDKONTROLLER',
      subheading: 'Kontrollsentralen',
      paragraphs: [
        'Hovedkontrolleren håndterer alle funksjoner som oppvarming, dimming av lys, musikkavspilling, nivellering, vannivå og mer. Kort sagt, all kontroll og innstillinger gjøres fra den 7-tommers berøringsskjermen.',
        'Alle funksjoner er også tilgjengelige på din mobile enhet via skyen, noe som gjør det mulig å fjernstyre systemet.',
        'Fra tid til annen lanserer vi ny programvare med flere funksjoner. Dette installeres automatisk fra skyen.',
      ],
      imageAlt: 'Main controller interface and hardware',
    },
    // Automotive IO Nodes
    automotiveIONodes: {
      heading: 'IO NODER',
      subheading: 'Distribuerte kontrollenheter',
      description: 'Flere IO-noder kan distribueres inne i kjøretøyet for å redusere kabelinstallasjon. IO-noden har en konfigurasjon optimalisert for campingvogner og bobiler.',
      features: [
        'Alle utgangsporter kan reguleres fra 0 til 100%, og leverer 7 Amp',
        'Seriell nivåsensor for vanntanker',
        'CAN-porter',
        'Digitale innganger',
        'LIN-porter',
        'PIR-sensor',
        'og mer',
      ],
      imageAlt: 'CAN IO Module Model SIO2x',
    },
    // Automotive Level Sensors
    automotiveLevelSensors: {
      heading: 'NIVÅSENSORER',
      subheading: 'Vann- og avfallstanker',
      paragraphs: [
        'Denne sensoren monteres fra toppen for å redusere risiko for lekkasje og forenkle installasjonen. Bare bor et 20 mm hull på toppen av tanken og installer sensoren.',
        'Analog eller seriell utgang gir indikasjon av tanknivå fra 0-100%.',
        'Sensoren kan enkelt justeres til enhver tankstørrelse.',
      ],
      imageAlt: 'Level sensor for water and waste tanks',
    },
    // Automotive Accessories
    automotiveAccessories: {
      heading: 'TILLEGGSUTSTYR & KOMPONENTER',
      intro: 'Alt du trenger for en komplett elektrisk installasjon',
      description: 'For å sikre en optimal og pålitelig installasjon, tilbyr vi et komplett sortiment av tilleggsutstyr og komponenter:',
      components: [
        {
          name: 'Temperatursensorer',
          description: 'Presis overvåking av temperatur i ulike soner',
        },
        {
          name: 'Kabelproduksjon',
          description: 'Skreddersydde kabelløsninger tilpasset ditt kjøretøy',
        },
        {
          name: 'Antenner',
          description: 'For sikker og stabil kommunikasjon med skyen',
        },
        {
          name: 'Kontakter og tilkoblinger',
          description: 'Robust utstyr for pålitelig drift',
        },
        {
          name: 'Montasjeutstyr',
          description: 'Alt nødvendig for profesjonell installasjon',
        },
      ],
      conclusion: 'Vi leverer komplette løsninger som sikrer at alle komponenter fungerer sømløst sammen.',
      imageAlt: 'Electrical accessories and components for vehicle installation',
    },
    // Automotive Mobile Control
    automotiveMobileControl: {
      heading: 'FULL KONTROLL FRA MOBILEN',
      subheading: 'Styr campingvognen fra hvor som helst',
      paragraphs: [
        'Med vår mobilapp har du full kontroll over campingvognen din, uansett hvor du befinner deg. Alle funksjoner som er tilgjengelige på hovedkontrolleren, er også tilgjengelige i appen.',
        'Skru på oppvarmingen før du ankommer, sjekk vannivået, kontroller om lyset er slått av, eller juster temperaturen - alt fra mobilen din. Applikasjonens skybaserte arkitektur sikrer at du alltid har kontroll, selv når du ikke er i nærheten av kjøretøyet.',
        'Systemet varsler deg også automatisk om viktige hendelser, som lavt batteri, full avfallstank eller temperaturer utenfor normalområdet.',
      ],
      features: [
        'Tilgjengelig for iOS og Android',
        'Sanntidsoppdateringer fra kjøretøyet',
        'Automatiske varsler og notifikasjoner',
        'Brukervennlig og intuitiv design',
        'Sikker sky-tilkobling',
      ],
      imageAlt: 'Mobile app for controlling camping trailer from smartphone',
    },
    // Automotive Remote Service
    automotiveRemoteService: {
      heading: 'WEBBASERT REMOTE SERVICE',
      subheading: 'Ekspertdiagnostikk fra skyen',
      paragraphs: [
        'Med vår webbaserte serviceplattform kan våre eksperter utføre komplett feilsøking og diagnose av campingvognen din, uansett hvor den befinner seg. Når eieren aktiverer \'Remote Service\', får våre spesialiserte teknikere full tilgang til å teste og verifisere alle systemfunksjoner.',
        'Dette revolusjonerer servicebransjen ved at personer med dyp systemkunnskap kan utføre like grundige kontroller eksternt som om de var fysisk til stede. Resultatet er raskere problemløsning, færre feildiagnoser og betydelig reduserte servicekostnader.',
        'I mange tilfeller kan problemer løses uten at kjøretøyet trenger å besøke verksted. Når verkstedbesøk er nødvendig, er diagnosen allerede satt, og riktig deler og kompetanse er klar.',
      ],
      features: [
        'Eliminerer unødvendige verkstedbesøk',
        'Reduserer servicetid med opptil 70%',
        'Sparer kostnader for både forhandler og kunde',
        'Ekspertstøtte uavhengig av geografisk beliggenhet',
        'Sikker og autorisert tilgang via skyplattform',
      ],
      imageAlt: 'Web-based remote service platform for expert diagnostics',
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
    // Project Page
    projectPage: {
      title: 'Projects',
      metaDescription: 'Explore our projects and solutions. From concept to finished product with 30 years of experience in electronics development.',
    },
    // Project Hero
    projectHero: {
      heading: 'WE BRING YOUR IDEAS TO LIFE',
      description: 'With 30 years of experience and hundreds of completed projects, we deliver complete solutions including electronics, firmware, mechanics, plastic parts, sensors and cable assembly. From idea to finished product - all coordinated from one partner.',
      button1: 'OUR EXPERTISE',
      button2: 'CONTACT US',
    },
    // Project Content
    projectContent: {
      heading: 'From concept to finished product – or optimization of existing solutions?',
      description: 'With 30 years of experience in electronics development, we offer complete product realization. Our team masters the entire value chain: electronics, firmware, mechanics, plastic parts, sensor technology, and cable assembly. We design specifications based on your requirements and deliver tested, production-ready solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      imageAlt: 'Product development',
    },
    // Process Flow
    processFlow: {
      title: 'FROM IDEA TO PRODUCT',
      steps: [
        {
          title: 'Concept',
          description: 'We start by understanding your needs and develop the concept together with you',
        },
        {
          title: 'Design & Development',
          description: 'Complete R&D with electronics, firmware, mechanics, and plastic design',
        },
        {
          title: 'Prototyping',
          description: 'Rapid prototype development for testing and validation of the concept',
        },
        {
          title: 'Production',
          description: 'We deliver fast small series from our own production. Volume production can be offered via our partner WestControl AS',
        },
      ],
    },
    // Technologies
    technologies: {
      title: 'TECHNOLOGIES & COMPETENCE',
      intro: 'After 30 years in the industry, there is almost nothing we haven\'t touched upon. Here is a selection of technologies and areas we master.',
      categories: [
        {
          icon: 'Wrench',
          title: 'Design & Prototyping',
          items: [
            'PCB Design & Layout',
            'CAD modeling',
            '3D printing and Rapid Prototyping',
            'Prototype development',
            'Testing and Validation',
            'Embedded Software Development',
            'Hardware Engineering',
            'Sensor integration',
            'User-oriented Design',
            'Material selection and Production optimization',
            'Design for Manufacturing (DFM)',
            'App and Web development',
            'Cloud integration and IoT platforms',
            'Real-time communication',
            'CE marking and EMC testing',
            'Safety standards and Certification (ISO, IEC)',
          ],
        },
        {
          icon: 'Cpu',
          title: 'Embedded Systems',
          items: [
            'Microcontroller (uC) technology',
            'ARM Cortex',
            'ESP32/ESP8266',
            'STM32',
            'NXP',
            'ST',
            'Microchip',
            'Skylabs',
            'Silicon Labs',
            'Espressif',
            'Arduino-based solutions',
          ],
        },
        {
          icon: 'Monitor',
          title: 'Operating Systems',
          items: [
            'Linux-based systems',
            'Embedded Linux',
            'RTOS (Real-Time Operating Systems)',
            'Yocto Project',
          ],
        },
      ],
    },
    // Technologies Detail
    technologiesDetail: {
      categories: [
        {
          icon: 'Network',
          title: 'Network and Internet Protocols',
          items: [
            'TCP/IP',
            'UDP',
            'HTTP / HTTPS',
            'FTP / SFTP',
            'SMTP / IMAP / POP3',
            'DNS',
            'DHCP',
            'SNMP',
          ],
        },
        {
          icon: 'Cog',
          title: 'Technologies',
          items: [
            'Person registration with radar',
            'Fall registration with radar',
            'Camera technology (video analysis, thermal camera, depth camera)',
            'Machine Learning',
            'AI technology (Computer Vision, NLP, predictive analysis)',
            'Audio systems (microphones, DSP, beamforming)',
            'Power Supply & Power Management',
            'Channel Sounding & RF technology',
            'Smartwatches and Wearables',
            'Welfare technology',
            'Medical sensors (ECG, SpO2, temperature, blood pressure)',
            'Industrial IoT nodes',
            'CAN-based systems',
            'Analog systems',
            'Digital systems',
            'Bluetooth / BLE',
            'Wi-Fi and WLAN',
            'LoRaWAN and LPWAN technology',
            'Zigbee / Thread / Z-Wave',
            'NB-IoT and LTE-M',
            'GPS / GNSS technology',
          ],
        },
        {
          icon: 'Cog',
          title: 'Technologies',
          items: [
            'RFID and NFC',
            'Sensor fusion (IMU, accelerometer, gyroscope)',
            'Edge Computing',
            'Cloud integration and IoT platforms',
            'Communication protocols (MQTT, CoAP, Modbus, OPC UA)',
            'Embedded Systems and MCU programming',
            'FPGA technology',
            'Signal processing (DSP)',
            'Audio and video coding (Codec)',
            'Security protocols (TLS, SSL, encryption)',
            'Hardware acceleration (GPU, TPU)',
            'Energy optimization and low-power design',
            'Wireless charging and battery technology',
            'HMI (Human-Machine Interface)',
            'AR/VR technology',
            'Robotics and actuator control',
            'Machine vision and image recognition',
            'Big Data and Analytics',
            'Real-time operating systems (RTOS)',
            'Firmware update OTA (Over-The-Air)',
            'Certification and EMC testing',
          ],
        },
      ],
    },
    // Technologies Additional
    technologiesAdditional: {
      categories: [
        {
          icon: 'Radio',
          title: 'Industrial and IoT Protocols',
          items: [
            'Modbus (RTU, TCP)',
            'CAN bus (Controller Area Network)',
            'PROFINET',
            'EtherCAT',
            'BACnet',
            'OPC UA',
            'MQTT (Message Queuing Telemetry Transport)',
            'LoRaWAN',
            'Zigbee',
            'Z-Wave',
            'Thread',
            'UART',
            'LIN',
            'Ethernet',
            'I2C',
            'SPI',
          ],
        },
        {
          icon: 'Cloud',
          title: 'Cloud & IoT',
          items: [
            'AWS IoT',
            'Azure IoT',
            'Google Cloud Platform',
            'MQTT Broker',
            'Edge Computing',
          ],
        },
        {
          icon: 'Code',
          title: 'Software Development',
          items: [
            'C/C++',
            'Python',
            'JavaScript/Node.js',
            'Firmware development',
            'Web-based interfaces',
          ],
        },
      ],
    },
    // Production Line
    productionLine: {
      title: 'OWN PRODUCTION LINE FOR RAPID REALIZATION',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      imageAlt: 'Production line',
      paragraphs: [
        'Our own electronics production line gives you a unique advantage in the development process. With modern pick & place machines, optical inspection (AOI), and advanced test equipment, we deliver prototypes and small series quickly and cost-effectively.',
        'Our complete SMD production line enables a rapid transition from design to finished product, giving you the opportunity for quick market testing, concept validation, and sales launch.',
        'When production volume and demand increase, the process seamlessly transitions to our experienced partner WestControl for large-scale mass production. This gives you the advantage of both rapid startup and scalable volume production.',
      ],
    },
    // Product References
    productReferences: {
      title: 'Product References',
      subtitle: 'Selected products we have developed and produced for our customers',
      buttonText: 'See Datasheet',
      products: [
        {
          title: 'Cam-X2',
          id: '11508',
          tagline: 'Camera with double fall detection',
          feature: 'maximum safety and precision',
          description: 'Easy to install and easy to use radar sensor that detects dangerous events such as falls, without violating individual privacy. For example, in an elderly care scenario, the sensor can detect status such as walking or sitting, as well as detect dangerous events such as falls.',
          imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
        },
        {
          title: 'HealthMonitor Pro',
          id: '12340',
          tagline: 'Medical sensor for continuous monitoring',
          feature: 'precision and reliability',
          description: 'Compact medical sensor unit that continuously monitors vital parameters. Wireless data transmission via Bluetooth LE to a central unit. Developed in collaboration with leading actors in the health sector.',
          imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
        },
        {
          title: 'SmartHub IoT',
          id: '13256',
          tagline: 'Central IoT-gateway for smart homes',
          feature: 'seamless integration',
          description: 'Powerful IoT-gateway that collects data from multiple sensors and devices. Supports WiFi, Zigbee and Z-Wave. Integrated with AWS IoT Core for secure cloud communication and remote management.',
          imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        },
        {
          title: 'RV-Control 500',
          id: '14782',
          tagline: 'Advanced control system for motorhome',
          feature: 'comfort on travel',
          description: 'Complete control system for motorhome and caravan. Controls lighting, heating, water and battery. Intuitive touchscreen with possibility for app control via Bluetooth.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'TempSense-X',
          id: '15094',
          tagline: 'Wireless temperature sensor',
          feature: 'accurate measurement',
          description: 'High-precision temperature sensor with long battery life. Ideal for cold storage, laboratories, and industrial environments. Sends data via LoRaWAN with up to 10 km range.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'PowerControl MC',
          id: '16521',
          tagline: 'Industrial control module',
          feature: 'robust and reliable',
          description: 'Powerful control module for industrial applications. Supports CAN bus, Modbus, and Ethernet communication. Designed for harsh environments with IP67 classification and extended temperature range.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'AirQuality-Pro',
          id: '17338',
          tagline: 'Air quality sensor for indoor climate',
          feature: 'fresh air all day',
          description: 'Advanced sensor that measures CO2, VOC, temperature, and humidity. Perfect for offices, schools, and public buildings. Wireless connectivity and integration with building automation systems.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'SmartLock-Z3',
          id: '18445',
          tagline: 'Intelligent access control',
          feature: 'security and flexibility',
          description: 'Wireless smart lock with app control, key card, and PIN code. Integrated with BLE and NFC technology. Battery-powered with up to 2 years of battery life. Complete logging of all events.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'VibrationMonitor-I',
          id: '19567',
          tagline: 'Industrial sensor for vibration monitoring',
          feature: 'predictive maintenance',
          description: 'Advanced vibration sensor for machine monitoring. Detects early signs of wear and failure. 4G LTE connection for real-time data to cloud. Battery or 24V power supply.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
        {
          title: 'PowerMeter-3P',
          id: '20198',
          tagline: 'Three-phase energy meter',
          feature: 'energy optimization',
          description: 'Precise energy meter for three-phase systems. Measures active, reactive and apparent power. Modbus RTU and Ethernet communication. DIN-rail mounting for easy installation.',
          imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        },
      ],
    },
    // Project CTA
    projectCTA: {
      title: 'DO YOU HAVE A PROJECT?',
      description: 'We help you realize your ideas. Contact us for a non-binding conversation about how we can assist with your next project.',
      buttonText: 'Contact us',
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
    // Welfare Technology Hero
    welfareTechnologyHero: {
      heading: 'WELFARE TECHNOLOGY',
      description: 'We develop innovative solutions for health and welfare that make a difference in everyday life. With a focus on user-friendliness and reliability, we deliver products that combine advanced technology with practical applicability.',
    },
    // Welfare Technology Solutions
    welfareTechnologySolutions: {
      title: 'OUR SOLUTIONS',
      solutions: [
        {
          icon: 'Heart',
          title: 'Medical Sensors',
          description: 'Precise sensors for monitoring vital parameters with a focus on reliability and accuracy.',
        },
        {
          icon: 'Wifi',
          title: 'Wireless Communication',
          description: 'Secure and stable IoT solutions that connect devices and systems together.',
        },
        {
          icon: 'Activity',
          title: 'Real-time Monitoring',
          description: 'Continuous monitoring with alert functions for safety around the clock.',
        },
        {
          icon: 'Shield',
          title: 'Data Security',
          description: 'GDPR-compliant solutions with encryption and secure data processing.',
        },
        {
          icon: 'Users',
          title: 'User-friendly Design',
          description: 'Intuitive interfaces adapted for users, relatives, and healthcare personnel.',
        },
        {
          icon: 'Smartphone',
          title: 'App Integration',
          description: 'Mobile solutions for easy data access and control anywhere.',
        },
      ],
    },
    // Welfare Technology CTA
    welfareTechnologyCTA: {
      title: 'INTERESTED IN WELFARE TECHNOLOGY?',
      description: 'Contact us to learn more about our welfare technology solutions and how we can help with your next project.',
      buttonText: 'Contact us',
      seeMoreText: 'See more',
    },
    // Plastic Mechanics Hero
    plasticMechanicsHero: {
      heading: 'Plastic design and mechanical engineering',
      description: 'We are a complete provider that designs mechanics and plastic parts in parallel with electronics development – ensuring optimal solutions from the start.',
    },
    // Plastic Mechanics Content
    plasticMechanicsContent: {
      heading: 'Unique expertise in holistic product development',
      paragraph1: 'With 30 years of experience, we design optimal and manufacturable solutions. Our unique expertise lies in understanding the interaction between plastic parts, mechanics and electronics from the very beginning of the project.',
      paragraph2: 'This experience ensures that the product can ultimately be assembled as efficiently as possible – saving time and costs in the production phase.',
      features: [
        'Parallel development: Mechanics and plastic parts are designed simultaneously with electronics development',
        'Manufacturability in focus: 30 years of experience ensures solutions are optimal for production',
        'Efficient assembly: Designed from the start for optimal mounting and production',
      ],
      imageAlt: 'Mechanical components and parts',
    },
    // Plastic Mechanics Collaboration
    plasticMechanicsCollaboration: {
      heading: 'Collaboration with design agencies',
      paragraph1: 'In projects with high demands for design and visual expression, we collaborate with several excellent design agencies that contribute to creating the aesthetic expression.',
      paragraph2: 'But it is still we who ensure that the design – with plastic parts, mechanics and electronics – is optimally executed. We ensure that beautiful designs also become production-ready and cost-effective solutions.',
      imageAlt: 'Collaboration with design agencies',
    },
    // Plastic Mechanics Delivery
    plasticMechanicsDelivery: {
      title: 'From design to finished product',
      subtitle: 'We deliver the entire value chain - from idea to finished plastic product in all sizes',
      contentHeading: 'Our complete delivery',
      cards: [
        {
          title: 'Design and engineering',
          description: 'We design plastic parts and mechanics optimized for production and assembly',
        },
        {
          title: 'Plastic molds and tools',
          description: 'We create high-quality plastic molds for cost-effective production',
        },
        {
          title: 'Prototypes',
          description: 'Rapid prototypes for testing and validation before production',
        },
        {
          title: 'Production in all sizes',
          description: 'From small series to volume production - we deliver at the scale you need',
        },
      ],
      imageAlt: 'Production process',
    },
    // Plastic Mechanics CTA
    plasticMechanicsCTA: {
      title: 'Ready to realize your product idea?',
      description: 'Contact us for a non-binding conversation about your project',
      buttonText: 'Contact us',
    },
    // Automotive Hero
    automotiveHero: {
      heading: 'NORDICRVM AUTOMOTIVE',
      description: '',
    },
    // Automotive Content
    automotiveContent: {
      heading: 'PROJECT-BASED B2B SERVICE',
      paragraphs: [
        'After developing industrial control systems and automotive control nodes over CAN since the early 90s, and supplementing with smart home solutions in recent years, we entered the RV and caravan industry in 2018.',
        'We have developed a modern and scalable system ready to adapt to rapid market changes. The system handles all functions – from turning on lights and playing music, to flushing the toilet and heating the floor.',
        'Our experience from industrial automation combined with modern IoT technology gives us a unique competitive advantage in delivering reliable and innovative solutions.',
      ],
      imageAlt: 'Modern RV with custom control system',
    },
    // Automotive Partners
    automotivePartners: {
      heading: 'Geographical exclusivity',
      subheading: 'B TO B BUSINESS',
      description: 'When we enter into partnerships, we offer geographical exclusivity to your main market. This means that we will not sell our products to your direct competitors. We are aware that this limits the number of partners we can have, but we believe this is the best solution for building strong and long-term collaborative relationships.',
      contactLink: 'Contact us',
      imageAlt: 'Business partnership handshake',
    },
    // Automotive Products Header
    automotiveProductsHeader: {
      heading: 'OUR PRODUCTS',
      subheading: 'A smart home solution for caravans and motorhomes.',
    },
    // Automotive Main Controller
    automotiveMainController: {
      heading: 'MAIN CONTROLLER',
      subheading: 'Control Central',
      paragraphs: [
        'The main controller handles all functions such as heating, light dimming, music playback, leveling, water level and more. In short, all control and settings are done from the 7-inch touchscreen.',
        'All functions are also available on your mobile device via the cloud, which makes it possible to remotely control the system.',
        'From time to time we release new software with more functions. This is installed automatically from the cloud.',
      ],
      imageAlt: 'Main controller interface and hardware',
    },
    // Automotive IO Nodes
    automotiveIONodes: {
      heading: 'IO NODES',
      subheading: 'Distributed control units',
      description: 'Multiple IO-nodes can be distributed inside the vehicle to reduce cable installation. The IO-node has a configuration optimized for caravans and motorhomes.',
      features: [
        'All output ports can be regulated from 0 to 100%, and deliver 7 Amp',
        'Serial level sensor for water tanks',
        'CAN-ports',
        'Digital inputs',
        'LIN-ports',
        'PIR-sensor',
        'and more',
      ],
      imageAlt: 'CAN IO Module Model SIO2x',
    },
    // Automotive Level Sensors
    automotiveLevelSensors: {
      heading: 'LEVEL SENSORS',
      subheading: 'Water and waste tanks',
      paragraphs: [
        'This sensor is mounted from the top to reduce the risk of leakage and simplify installation. Just drill a 20 mm hole on top of the tank and install the sensor.',
        'Analog or serial output provides tank level indication from 0-100%.',
        'The sensor can be easily adjusted to any tank size.',
      ],
      imageAlt: 'Level sensor for water and waste tanks',
    },
    // Automotive Accessories
    automotiveAccessories: {
      heading: 'ACCESSORIES & COMPONENTS',
      intro: 'Everything you need for a complete electrical installation',
      description: 'To ensure an optimal and reliable installation, we offer a complete assortment of accessories and components:',
      components: [
        {
          name: 'Temperature sensors',
          description: 'Precise monitoring of temperature in various zones',
        },
        {
          name: 'Cable production',
          description: 'Custom cable solutions adapted to your vehicle',
        },
        {
          name: 'Antennas',
          description: 'For secure and stable communication with the cloud',
        },
        {
          name: 'Contacts and connections',
          description: 'Robust equipment for reliable operation',
        },
        {
          name: 'Mounting equipment',
          description: 'Everything necessary for professional installation',
        },
      ],
      conclusion: 'We deliver complete solutions that ensure all components work seamlessly together.',
      imageAlt: 'Electrical accessories and components for vehicle installation',
    },
    // Automotive Mobile Control
    automotiveMobileControl: {
      heading: 'FULL CONTROL FROM THE MOBILE',
      subheading: 'Control your camping trailer from anywhere',
      paragraphs: [
        'With our mobile app, you have full control over your camping trailer, no matter where you are. All functions available on the main controller are also available in the app.',
        'Turn on the heating before you arrive, check the water level, control if the light is off, or adjust the temperature - all from your mobile. The application\'s cloud-based architecture ensures you always have control, even when you are not near the vehicle.',
        'The system also automatically alerts you about important events, such as low battery, full waste tank, or temperatures outside the normal range.',
      ],
      features: [
        'Available for iOS and Android',
        'Real-time updates from the vehicle',
        'Automatic alerts and notifications',
        'User-friendly and intuitive design',
        'Secure cloud connection',
      ],
      imageAlt: 'Mobile app for controlling camping trailer from smartphone',
    },
    // Automotive Remote Service
    automotiveRemoteService: {
      heading: 'WEB-BASED REMOTE SERVICE',
      subheading: 'Expert diagnostics from the cloud',
      paragraphs: [
        'With our web-based service platform, our experts can perform complete troubleshooting and diagnostics of your camping trailer, regardless of where it is located. When the owner activates \'Remote Service\', our specialized technicians get full access to test and verify all system functions.',
        'This revolutionizes the service industry by allowing people with deep system knowledge to perform equally thorough checks remotely as if they were physically present. The result is faster problem solving, fewer misdiagnoses, and significantly reduced service costs.',
        'In many cases, problems can be solved without the vehicle needing to visit a workshop. When a workshop visit is necessary, the diagnosis is already set, and the right parts and expertise are ready.',
      ],
      features: [
        'Eliminates unnecessary workshop visits',
        'Reduces service time by up to 70%',
        'Saves costs for both dealer and customer',
        'Expert support regardless of geographical location',
        'Secure and authorized access via cloud platform',
      ],
      imageAlt: 'Web-based remote service platform for expert diagnostics',
    },
  },
};

// Helper function to get translations for a specific language
export const getTranslations = (language = 'no') => {
  return translations[language] || translations.no;
};


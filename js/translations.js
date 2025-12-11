// ============================================
// ERP Monitoring - Translations
// ============================================

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started'
    },

    // Hero Section
    hero: {
      badge: 'Zabbix Certified Partner',
      title: 'Enterprise Monitoring',
      titleHighlight: 'Solutions',
      description: 'Professional monitoring templates, scripts, and consulting for mission-critical ERP systems. Powered by Zabbix.',
      cta: 'Explore Solutions',
      ctaSecondary: 'Contact Us'
    },

    // Platforms Bar
    platforms: {
      title: 'Trusted monitoring for leading enterprise platforms'
    },

    // Solutions Section
    solutions: {
      title: 'Monitoring Solutions',
      subtitle: 'Comprehensive monitoring for your entire enterprise stack. From ERP to cloud infrastructure.',
      viewAll: 'View All Solutions',
      learnMore: 'Learn More',
      filterAll: 'All',
      filterOracle: 'Oracle',
      filterSAP: 'SAP',
      filterPLM: 'PLM',
      filterCloud: 'Cloud',

      // Oracle Solutions
      oracleApex: {
        name: 'Oracle APEX Monitoring',
        description: 'Comprehensive monitoring for Oracle Application Express environments with real-time performance metrics.',
        category: 'Oracle'
      },
      oracleDB: {
        name: 'Oracle Database Monitoring',
        description: 'Deep visibility into Oracle Database instances including RAC, Data Guard, and performance analytics.',
        category: 'Oracle'
      },
      oracleNetsuite: {
        name: 'Oracle NetSuite Monitoring',
        description: 'End-to-end monitoring for NetSuite ERP with transaction tracking and SLA compliance.',
        category: 'Oracle'
      },

      // SAP Solutions
      sapS4hana: {
        name: 'SAP S/4HANA Monitoring',
        description: 'Intelligent monitoring for SAP S/4HANA systems with predictive analytics and automated alerting.',
        category: 'SAP'
      },
      sapEcc: {
        name: 'SAP ECC 6.0 Monitoring',
        description: 'Comprehensive monitoring for SAP ECC environments including RFC, batch jobs, and system health.',
        category: 'SAP'
      },
      sapHana: {
        name: 'SAP HANA Database Monitoring',
        description: 'In-depth monitoring for SAP HANA with memory analytics, backup status, and replication monitoring.',
        category: 'SAP'
      },

      // PLM Solutions
      dassault: {
        name: 'Dassault 3DEXPERIENCE Monitoring',
        description: 'Full-stack monitoring for 3DEXPERIENCE platform including ENOVIA, CATIA, and SIMULIA services.',
        category: 'Dassault'
      },
      teamcenter: {
        name: 'Siemens Teamcenter Monitoring',
        description: 'Enterprise PLM monitoring for Teamcenter with workflow tracking and service health checks.',
        category: 'Siemens'
      },

      // Cloud Solutions
      gcp: {
        name: 'Google Cloud Platform Monitoring',
        description: 'Native GCP monitoring integration with Zabbix for compute, storage, and managed services.',
        category: 'GCP'
      },
      aws: {
        name: 'Amazon Web Services Monitoring',
        description: 'Comprehensive AWS monitoring for EC2, RDS, Lambda, and 50+ AWS services.',
        category: 'AWS'
      }
    },

    // Features Section
    features: {
      title: 'Why Choose ERP Monitoring?',
      subtitle: 'Built by experts, trusted by enterprises worldwide.',
      feature1: {
        title: 'Zabbix Native',
        description: 'Built specifically for Zabbix with native templates, low-level discovery, and automated configuration.'
      },
      feature2: {
        title: 'Enterprise Ready',
        description: 'Production-tested templates used by Fortune 500 companies with 24/7 reliability requirements.'
      },
      feature3: {
        title: 'Expert Support',
        description: 'Direct access to certified Zabbix consultants with deep ERP and database expertise.'
      },
      feature4: {
        title: 'Rapid Deployment',
        description: 'Go from installation to monitoring in hours, not weeks. Comprehensive documentation included.'
      }
    },

    // CTA Section
    cta: {
      title: 'Ready to Transform Your Monitoring?',
      description: 'Get in touch with our team to discuss your monitoring requirements and receive a customized solution.',
      button: 'Contact Us Today'
    },

    // About Page
    about: {
      pageTitle: 'About Us',
      pageSubtitle: 'Learn more about ERP Monitoring',
      title: 'Experts in Enterprise Monitoring',
      description1: 'ERP Monitoring is a specialized consulting firm focused on delivering world-class monitoring solutions for enterprise systems. Our team brings decades of combined experience in ERP, database administration, and infrastructure monitoring.',
      description2: 'As certified Zabbix partners, we develop and maintain premium monitoring templates that provide deep visibility into critical business systems including SAP, Oracle, Siemens, and major cloud platforms.',
      stats: {
        clients: 'Enterprise Clients',
        templates: 'Monitoring Templates',
        metrics: 'Metrics Monitored',
        uptime: 'Uptime SLA'
      },
      mission: {
        title: 'Our Mission',
        description: 'To provide enterprises with the monitoring tools and expertise needed to ensure their critical business systems operate at peak performance, minimizing downtime and maximizing operational efficiency.'
      },
      values: {
        title: 'Our Values',
        value1: {
          title: 'Excellence',
          description: 'We strive for excellence in everything we deliver, from code quality to customer support.'
        },
        value2: {
          title: 'Reliability',
          description: 'Our solutions are built to run 24/7/365 in the most demanding enterprise environments.'
        },
        value3: {
          title: 'Partnership',
          description: 'We work as an extension of your team, invested in your long-term success.'
        }
      },
      team: {
        title: 'Our Team',
        member1: { name: 'Dr. Klaus Weber', role: 'Founder & CEO' },
        member2: { name: 'Sarah Mueller', role: 'Head of Engineering' },
        member3: { name: 'Thomas Schneider', role: 'Senior Consultant' }
      }
    },

    // Contact Page
    contact: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'Get in touch with our team',
      title: 'Let\'s Discuss Your Monitoring Needs',
      description: 'Whether you need a custom monitoring solution, consulting services, or have questions about our templates, we\'re here to help.',
      info: {
        email: {
          title: 'Email',
          value: 'info@erpmonitoring.de'
        },
        phone: {
          title: 'Phone',
          value: '+49 123 456 7890'
        },
        address: {
          title: 'Address',
          value: 'Munich, Germany'
        },
        hours: {
          title: 'Business Hours',
          value: 'Mon - Fri: 9:00 - 18:00 CET'
        }
      },
      form: {
        title: 'Send Us a Message',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        company: 'Company',
        subject: 'Subject',
        subjectOptions: {
          select: 'Select a topic',
          sales: 'Sales Inquiry',
          support: 'Technical Support',
          consulting: 'Consulting Services',
          other: 'Other'
        },
        message: 'Message',
        messagePlaceholder: 'Tell us about your monitoring requirements...',
        submit: 'Send Message',
        success: 'Thank you! Your message has been sent.',
        error: 'Oops! Something went wrong. Please try again.'
      }
    },

    // Solution Detail Pages
    solutionDetail: {
      overview: 'Overview',
      features: 'Key Features',
      metrics: 'Monitored Metrics',
      benefits: 'Benefits',
      getStarted: 'Get Started',
      documentation: 'Documentation',
      requestDemo: 'Request Demo',
      backToSolutions: 'Back to Solutions',

      // Common metrics labels
      metricsCount: 'Metrics',
      triggers: 'Triggers',
      dashboards: 'Dashboards',
      templates: 'Templates',

      // Common benefits
      benefit1: 'Reduced Downtime',
      benefit2: 'Proactive Alerting',
      benefit3: 'Performance Insights',
      benefit4: 'Easy Integration'
    },

    // Footer
    footer: {
      description: 'Professional monitoring solutions for enterprise systems. Powered by Zabbix.',
      solutions: 'Solutions',
      company: 'Company',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      imprint: 'Imprint',
      copyright: '2024 ERP Monitoring. All rights reserved.'
    }
  },

  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      solutions: 'Lösungen',
      about: 'Über uns',
      contact: 'Kontakt',
      getStarted: 'Loslegen'
    },

    // Hero Section
    hero: {
      badge: 'Zabbix Zertifizierter Partner',
      title: 'Enterprise Monitoring',
      titleHighlight: 'Lösungen',
      description: 'Professionelle Monitoring-Vorlagen, Skripte und Beratung für unternehmenskritische ERP-Systeme. Powered by Zabbix.',
      cta: 'Lösungen entdecken',
      ctaSecondary: 'Kontaktieren Sie uns'
    },

    // Platforms Bar
    platforms: {
      title: 'Vertrauenswürdiges Monitoring für führende Enterprise-Plattformen'
    },

    // Solutions Section
    solutions: {
      title: 'Monitoring-Lösungen',
      subtitle: 'Umfassendes Monitoring für Ihren gesamten Enterprise-Stack. Von ERP bis Cloud-Infrastruktur.',
      viewAll: 'Alle Lösungen anzeigen',
      learnMore: 'Mehr erfahren',
      filterAll: 'Alle',
      filterOracle: 'Oracle',
      filterSAP: 'SAP',
      filterPLM: 'PLM',
      filterCloud: 'Cloud',

      // Oracle Solutions
      oracleApex: {
        name: 'Oracle APEX Monitoring',
        description: 'Umfassendes Monitoring für Oracle Application Express-Umgebungen mit Echtzeit-Leistungsmetriken.',
        category: 'Oracle'
      },
      oracleDB: {
        name: 'Oracle Database Monitoring',
        description: 'Tiefe Einblicke in Oracle-Datenbankinstanzen inkl. RAC, Data Guard und Performance-Analysen.',
        category: 'Oracle'
      },
      oracleNetsuite: {
        name: 'Oracle NetSuite Monitoring',
        description: 'End-to-End-Monitoring für NetSuite ERP mit Transaktionsverfolgung und SLA-Compliance.',
        category: 'Oracle'
      },

      // SAP Solutions
      sapS4hana: {
        name: 'SAP S/4HANA Monitoring',
        description: 'Intelligentes Monitoring für SAP S/4HANA-Systeme mit prädiktiver Analytik und automatisierter Alarmierung.',
        category: 'SAP'
      },
      sapEcc: {
        name: 'SAP ECC 6.0 Monitoring',
        description: 'Umfassendes Monitoring für SAP ECC-Umgebungen inkl. RFC, Batch-Jobs und Systemzustand.',
        category: 'SAP'
      },
      sapHana: {
        name: 'SAP HANA Database Monitoring',
        description: 'Tiefgehendes Monitoring für SAP HANA mit Speicheranalysen, Backup-Status und Replikationsüberwachung.',
        category: 'SAP'
      },

      // PLM Solutions
      dassault: {
        name: 'Dassault 3DEXPERIENCE Monitoring',
        description: 'Full-Stack-Monitoring für die 3DEXPERIENCE-Plattform inkl. ENOVIA, CATIA und SIMULIA-Dienste.',
        category: 'Dassault'
      },
      teamcenter: {
        name: 'Siemens Teamcenter Monitoring',
        description: 'Enterprise PLM-Monitoring für Teamcenter mit Workflow-Verfolgung und Service-Gesundheitsprüfungen.',
        category: 'Siemens'
      },

      // Cloud Solutions
      gcp: {
        name: 'Google Cloud Platform Monitoring',
        description: 'Native GCP-Monitoring-Integration mit Zabbix für Compute, Storage und verwaltete Dienste.',
        category: 'GCP'
      },
      aws: {
        name: 'Amazon Web Services Monitoring',
        description: 'Umfassendes AWS-Monitoring für EC2, RDS, Lambda und über 50 AWS-Services.',
        category: 'AWS'
      }
    },

    // Features Section
    features: {
      title: 'Warum ERP Monitoring wählen?',
      subtitle: 'Von Experten entwickelt, von Unternehmen weltweit vertraut.',
      feature1: {
        title: 'Zabbix Nativ',
        description: 'Speziell für Zabbix entwickelt mit nativen Templates, Low-Level-Discovery und automatisierter Konfiguration.'
      },
      feature2: {
        title: 'Enterprise-fähig',
        description: 'Produktionserprobte Templates, die von Fortune-500-Unternehmen mit 24/7-Zuverlässigkeitsanforderungen eingesetzt werden.'
      },
      feature3: {
        title: 'Experten-Support',
        description: 'Direkter Zugang zu zertifizierten Zabbix-Beratern mit tiefgreifender ERP- und Datenbank-Expertise.'
      },
      feature4: {
        title: 'Schnelle Bereitstellung',
        description: 'Von der Installation zum Monitoring in Stunden, nicht Wochen. Umfassende Dokumentation inklusive.'
      }
    },

    // CTA Section
    cta: {
      title: 'Bereit, Ihr Monitoring zu transformieren?',
      description: 'Kontaktieren Sie unser Team, um Ihre Monitoring-Anforderungen zu besprechen und eine maßgeschneiderte Lösung zu erhalten.',
      button: 'Kontaktieren Sie uns'
    },

    // About Page
    about: {
      pageTitle: 'Über uns',
      pageSubtitle: 'Erfahren Sie mehr über ERP Monitoring',
      title: 'Experten für Enterprise Monitoring',
      description1: 'ERP Monitoring ist ein spezialisiertes Beratungsunternehmen, das sich auf die Bereitstellung erstklassiger Monitoring-Lösungen für Unternehmenssysteme konzentriert. Unser Team bringt jahrzehntelange kombinierte Erfahrung in ERP, Datenbankadministration und Infrastruktur-Monitoring mit.',
      description2: 'Als zertifizierte Zabbix-Partner entwickeln und pflegen wir Premium-Monitoring-Templates, die tiefe Einblicke in kritische Geschäftssysteme wie SAP, Oracle, Siemens und große Cloud-Plattformen bieten.',
      stats: {
        clients: 'Enterprise-Kunden',
        templates: 'Monitoring-Templates',
        metrics: 'Überwachte Metriken',
        uptime: 'Uptime SLA'
      },
      mission: {
        title: 'Unsere Mission',
        description: 'Unternehmen die Monitoring-Tools und das Fachwissen zu bieten, die erforderlich sind, um sicherzustellen, dass ihre kritischen Geschäftssysteme mit Höchstleistung arbeiten, Ausfallzeiten minimiert und die betriebliche Effizienz maximiert werden.'
      },
      values: {
        title: 'Unsere Werte',
        value1: {
          title: 'Exzellenz',
          description: 'Wir streben nach Exzellenz in allem, was wir liefern, von der Codequalität bis zum Kundensupport.'
        },
        value2: {
          title: 'Zuverlässigkeit',
          description: 'Unsere Lösungen sind für den 24/7/365-Betrieb in den anspruchsvollsten Enterprise-Umgebungen gebaut.'
        },
        value3: {
          title: 'Partnerschaft',
          description: 'Wir arbeiten als Erweiterung Ihres Teams und investieren in Ihren langfristigen Erfolg.'
        }
      },
      team: {
        title: 'Unser Team',
        member1: { name: 'Dr. Klaus Weber', role: 'Gründer & CEO' },
        member2: { name: 'Sarah Mueller', role: 'Leiterin Entwicklung' },
        member3: { name: 'Thomas Schneider', role: 'Senior Berater' }
      }
    },

    // Contact Page
    contact: {
      pageTitle: 'Kontakt',
      pageSubtitle: 'Nehmen Sie Kontakt mit unserem Team auf',
      title: 'Lassen Sie uns über Ihre Monitoring-Anforderungen sprechen',
      description: 'Ob Sie eine maßgeschneiderte Monitoring-Lösung, Beratungsleistungen benötigen oder Fragen zu unseren Templates haben - wir helfen Ihnen gerne.',
      info: {
        email: {
          title: 'E-Mail',
          value: 'info@erpmonitoring.de'
        },
        phone: {
          title: 'Telefon',
          value: '+49 123 456 7890'
        },
        address: {
          title: 'Adresse',
          value: 'München, Deutschland'
        },
        hours: {
          title: 'Geschäftszeiten',
          value: 'Mo - Fr: 9:00 - 18:00 MEZ'
        }
      },
      form: {
        title: 'Senden Sie uns eine Nachricht',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        company: 'Unternehmen',
        subject: 'Betreff',
        subjectOptions: {
          select: 'Thema auswählen',
          sales: 'Verkaufsanfrage',
          support: 'Technischer Support',
          consulting: 'Beratungsleistungen',
          other: 'Sonstiges'
        },
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie uns von Ihren Monitoring-Anforderungen...',
        submit: 'Nachricht senden',
        success: 'Vielen Dank! Ihre Nachricht wurde gesendet.',
        error: 'Ups! Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.'
      }
    },

    // Solution Detail Pages
    solutionDetail: {
      overview: 'Übersicht',
      features: 'Hauptfunktionen',
      metrics: 'Überwachte Metriken',
      benefits: 'Vorteile',
      getStarted: 'Loslegen',
      documentation: 'Dokumentation',
      requestDemo: 'Demo anfordern',
      backToSolutions: 'Zurück zu Lösungen',

      // Common metrics labels
      metricsCount: 'Metriken',
      triggers: 'Trigger',
      dashboards: 'Dashboards',
      templates: 'Vorlagen',

      // Common benefits
      benefit1: 'Reduzierte Ausfallzeiten',
      benefit2: 'Proaktive Alarmierung',
      benefit3: 'Leistungseinblicke',
      benefit4: 'Einfache Integration'
    },

    // Footer
    footer: {
      description: 'Professionelle Monitoring-Lösungen für Unternehmenssysteme. Powered by Zabbix.',
      solutions: 'Lösungen',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      imprint: 'Impressum',
      copyright: '2024 ERP Monitoring. Alle Rechte vorbehalten.'
    }
  }
};

// Solution details data
const solutionDetails = {
  'oracle-apex': {
    icon: 'oracle',
    category: 'oracle',
    metricsCount: '150+',
    triggersCount: '45',
    dashboardsCount: '8',
    templatesCount: '3',
    features: {
      en: [
        'Real-time APEX session monitoring',
        'Page performance and response time tracking',
        'Workspace utilization and quotas',
        'REST API endpoint health checks',
        'Application error rate monitoring',
        'Concurrent user tracking',
        'Custom component monitoring'
      ],
      de: [
        'Echtzeit-APEX-Sitzungsüberwachung',
        'Seitenleistung und Reaktionszeitverfolgung',
        'Workspace-Nutzung und Kontingente',
        'REST-API-Endpunkt-Gesundheitsprüfungen',
        'Anwendungsfehlerrate-Überwachung',
        'Gleichzeitige Benutzerverfolgung',
        'Benutzerdefinierte Komponentenüberwachung'
      ]
    },
    benefits: {
      en: [
        { title: 'Reduced Downtime', description: 'Proactive monitoring prevents APEX application outages before they impact users.' },
        { title: 'Performance Optimization', description: 'Identify slow pages and optimize database queries for better user experience.' },
        { title: 'Capacity Planning', description: 'Track resource usage trends to plan for growth and prevent bottlenecks.' },
        { title: 'Compliance Ready', description: 'Audit trails and historical data for regulatory compliance requirements.' }
      ],
      de: [
        { title: 'Reduzierte Ausfallzeiten', description: 'Proaktives Monitoring verhindert APEX-Anwendungsausfälle, bevor sie Benutzer beeinträchtigen.' },
        { title: 'Leistungsoptimierung', description: 'Identifizieren Sie langsame Seiten und optimieren Sie Datenbankabfragen für bessere Benutzererfahrung.' },
        { title: 'Kapazitätsplanung', description: 'Verfolgen Sie Ressourcennutzungstrends, um Wachstum zu planen und Engpässe zu vermeiden.' },
        { title: 'Compliance-fähig', description: 'Audit-Trails und historische Daten für regulatorische Compliance-Anforderungen.' }
      ]
    }
  },
  'oracle-database': {
    icon: 'oracle',
    category: 'oracle',
    metricsCount: '300+',
    triggersCount: '85',
    dashboardsCount: '12',
    templatesCount: '5',
    features: {
      en: [
        'Tablespace and storage monitoring',
        'Session and connection tracking',
        'Performance metrics (AWR/ASH)',
        'RAC cluster health monitoring',
        'Data Guard replication status',
        'Backup and recovery monitoring',
        'SQL execution plan analysis'
      ],
      de: [
        'Tablespace- und Speicherüberwachung',
        'Sitzungs- und Verbindungsverfolgung',
        'Leistungsmetriken (AWR/ASH)',
        'RAC-Cluster-Gesundheitsüberwachung',
        'Data Guard-Replikationsstatus',
        'Backup- und Wiederherstellungsüberwachung',
        'SQL-Ausführungsplananalyse'
      ]
    },
    benefits: {
      en: [
        { title: 'Database Health', description: 'Complete visibility into Oracle database health and performance.' },
        { title: 'Proactive Alerts', description: 'Get notified before issues become critical with intelligent thresholds.' },
        { title: 'HA Monitoring', description: 'Monitor RAC and Data Guard for maximum availability.' },
        { title: 'Cost Optimization', description: 'Identify unused resources and optimize licensing costs.' }
      ],
      de: [
        { title: 'Datenbankgesundheit', description: 'Vollständige Transparenz über Oracle-Datenbankgesundheit und -leistung.' },
        { title: 'Proaktive Warnungen', description: 'Werden Sie benachrichtigt, bevor Probleme kritisch werden, mit intelligenten Schwellenwerten.' },
        { title: 'HA-Überwachung', description: 'Überwachen Sie RAC und Data Guard für maximale Verfügbarkeit.' },
        { title: 'Kostenoptimierung', description: 'Identifizieren Sie ungenutzte Ressourcen und optimieren Sie Lizenzkosten.' }
      ]
    }
  },
  'oracle-netsuite': {
    icon: 'oracle',
    category: 'oracle',
    metricsCount: '120+',
    triggersCount: '35',
    dashboardsCount: '6',
    templatesCount: '2',
    features: {
      en: [
        'SuiteTalk API monitoring',
        'SuiteScript execution tracking',
        'Transaction processing metrics',
        'Integration endpoint health',
        'User activity monitoring',
        'Saved search performance',
        'Workflow execution status'
      ],
      de: [
        'SuiteTalk-API-Überwachung',
        'SuiteScript-Ausführungsverfolgung',
        'Transaktionsverarbeitungsmetriken',
        'Integrationsendpunkt-Gesundheit',
        'Benutzeraktivitätsüberwachung',
        'Gespeicherte Suchleistung',
        'Workflow-Ausführungsstatus'
      ]
    },
    benefits: {
      en: [
        { title: 'Integration Health', description: 'Monitor all NetSuite integrations and API connections.' },
        { title: 'Transaction Tracking', description: 'Track transaction processing times and identify bottlenecks.' },
        { title: 'SLA Compliance', description: 'Ensure NetSuite performance meets your SLA requirements.' },
        { title: 'User Experience', description: 'Monitor end-user experience and response times.' }
      ],
      de: [
        { title: 'Integrationsgesundheit', description: 'Überwachen Sie alle NetSuite-Integrationen und API-Verbindungen.' },
        { title: 'Transaktionsverfolgung', description: 'Verfolgen Sie Transaktionsverarbeitungszeiten und identifizieren Sie Engpässe.' },
        { title: 'SLA-Compliance', description: 'Stellen Sie sicher, dass die NetSuite-Leistung Ihre SLA-Anforderungen erfüllt.' },
        { title: 'Benutzererfahrung', description: 'Überwachen Sie Endbenutzer-Erfahrung und Antwortzeiten.' }
      ]
    }
  },
  'sap-s4hana': {
    icon: 'sap',
    category: 'sap',
    metricsCount: '400+',
    triggersCount: '120',
    dashboardsCount: '15',
    templatesCount: '8',
    features: {
      en: [
        'Fiori application monitoring',
        'ABAP work process tracking',
        'Background job monitoring',
        'RFC connection health',
        'IDoc processing status',
        'Memory and CPU utilization',
        'Transport and change tracking'
      ],
      de: [
        'Fiori-Anwendungsüberwachung',
        'ABAP-Arbeitsprozessverfolgung',
        'Hintergrundjob-Überwachung',
        'RFC-Verbindungsgesundheit',
        'IDoc-Verarbeitungsstatus',
        'Speicher- und CPU-Auslastung',
        'Transport- und Änderungsverfolgung'
      ]
    },
    benefits: {
      en: [
        { title: 'Business Continuity', description: 'Ensure S/4HANA systems are always available for business operations.' },
        { title: 'Performance Insights', description: 'Deep visibility into system performance and bottlenecks.' },
        { title: 'Fiori Monitoring', description: 'Monitor Fiori launchpad and application performance.' },
        { title: 'Integration Health', description: 'Track all RFC, IDoc, and API integrations.' }
      ],
      de: [
        { title: 'Geschäftskontinuität', description: 'Stellen Sie sicher, dass S/4HANA-Systeme für den Geschäftsbetrieb immer verfügbar sind.' },
        { title: 'Leistungseinblicke', description: 'Tiefe Transparenz über Systemleistung und Engpässe.' },
        { title: 'Fiori-Überwachung', description: 'Überwachen Sie Fiori Launchpad und Anwendungsleistung.' },
        { title: 'Integrationsgesundheit', description: 'Verfolgen Sie alle RFC-, IDoc- und API-Integrationen.' }
      ]
    }
  },
  'sap-ecc': {
    icon: 'sap',
    category: 'sap',
    metricsCount: '350+',
    triggersCount: '95',
    dashboardsCount: '12',
    templatesCount: '6',
    features: {
      en: [
        'Basis system monitoring',
        'Batch job scheduling and status',
        'Spool and print management',
        'Update process monitoring',
        'Lock and enqueue tracking',
        'CCMS integration',
        'System log analysis'
      ],
      de: [
        'Basis-Systemüberwachung',
        'Batch-Job-Planung und -Status',
        'Spool- und Druckverwaltung',
        'Update-Prozessüberwachung',
        'Sperr- und Enqueue-Verfolgung',
        'CCMS-Integration',
        'Systemprotokollanalyse'
      ]
    },
    benefits: {
      en: [
        { title: 'Legacy Support', description: 'Comprehensive monitoring for ECC 6.0 environments.' },
        { title: 'Batch Monitoring', description: 'Never miss a failed batch job with proactive alerting.' },
        { title: 'System Health', description: 'Complete visibility into ECC system health.' },
        { title: 'Migration Ready', description: 'Baseline monitoring for S/4HANA migration planning.' }
      ],
      de: [
        { title: 'Legacy-Unterstützung', description: 'Umfassendes Monitoring für ECC 6.0-Umgebungen.' },
        { title: 'Batch-Überwachung', description: 'Verpassen Sie nie einen fehlgeschlagenen Batch-Job mit proaktiver Alarmierung.' },
        { title: 'Systemgesundheit', description: 'Vollständige Transparenz über ECC-Systemgesundheit.' },
        { title: 'Migrationsbereit', description: 'Baseline-Monitoring für S/4HANA-Migrationsplanung.' }
      ]
    }
  },
  'sap-hana': {
    icon: 'sap',
    category: 'sap',
    metricsCount: '280+',
    triggersCount: '75',
    dashboardsCount: '10',
    templatesCount: '4',
    features: {
      en: [
        'Memory utilization and allocation',
        'Column store and row store metrics',
        'Backup and recovery status',
        'System replication monitoring',
        'SQL statement analysis',
        'Service availability checks',
        'License and resource tracking'
      ],
      de: [
        'Speichernutzung und -zuweisung',
        'Column-Store- und Row-Store-Metriken',
        'Backup- und Wiederherstellungsstatus',
        'Systemreplikationsüberwachung',
        'SQL-Anweisungsanalyse',
        'Dienstverfügbarkeitsprüfungen',
        'Lizenz- und Ressourcenverfolgung'
      ]
    },
    benefits: {
      en: [
        { title: 'Memory Management', description: 'Optimize HANA memory usage and prevent OOM issues.' },
        { title: 'HA/DR Ready', description: 'Monitor system replication for disaster recovery.' },
        { title: 'Performance Tuning', description: 'Identify expensive SQL and optimize queries.' },
        { title: 'Backup Assurance', description: 'Ensure backups complete successfully every time.' }
      ],
      de: [
        { title: 'Speicherverwaltung', description: 'Optimieren Sie die HANA-Speichernutzung und verhindern Sie OOM-Probleme.' },
        { title: 'HA/DR-bereit', description: 'Überwachen Sie die Systemreplikation für Disaster Recovery.' },
        { title: 'Leistungstuning', description: 'Identifizieren Sie teure SQL-Abfragen und optimieren Sie diese.' },
        { title: 'Backup-Sicherheit', description: 'Stellen Sie sicher, dass Backups jedes Mal erfolgreich abgeschlossen werden.' }
      ]
    }
  },
  'dassault-3dexperience': {
    icon: 'dassault',
    category: 'dassault',
    metricsCount: '200+',
    triggersCount: '55',
    dashboardsCount: '8',
    templatesCount: '4',
    features: {
      en: [
        '3DSpace server monitoring',
        'ENOVIA application health',
        'CATIA connection tracking',
        'License server monitoring',
        'Collaborative session tracking',
        'FCS (File Collaboration Server)',
        'Search index health'
      ],
      de: [
        '3DSpace-Serverüberwachung',
        'ENOVIA-Anwendungsgesundheit',
        'CATIA-Verbindungsverfolgung',
        'Lizenzserverüberwachung',
        'Kollaborative Sitzungsverfolgung',
        'FCS (File Collaboration Server)',
        'Suchindex-Gesundheit'
      ]
    },
    benefits: {
      en: [
        { title: 'PLM Uptime', description: 'Ensure 3DEXPERIENCE platform is always available for engineering teams.' },
        { title: 'License Optimization', description: 'Track license usage and optimize costs.' },
        { title: 'Collaboration Health', description: 'Monitor collaborative sessions and file sharing.' },
        { title: 'Performance Tracking', description: 'Identify and resolve performance issues quickly.' }
      ],
      de: [
        { title: 'PLM-Verfügbarkeit', description: 'Stellen Sie sicher, dass die 3DEXPERIENCE-Plattform für Engineering-Teams immer verfügbar ist.' },
        { title: 'Lizenzoptimierung', description: 'Verfolgen Sie die Lizenznutzung und optimieren Sie Kosten.' },
        { title: 'Kollaborationsgesundheit', description: 'Überwachen Sie kollaborative Sitzungen und Dateifreigabe.' },
        { title: 'Leistungsverfolgung', description: 'Identifizieren und beheben Sie Leistungsprobleme schnell.' }
      ]
    }
  },
  'siemens-teamcenter': {
    icon: 'siemens',
    category: 'siemens',
    metricsCount: '180+',
    triggersCount: '50',
    dashboardsCount: '7',
    templatesCount: '3',
    features: {
      en: [
        'Teamcenter server pool monitoring',
        'FSC volume management',
        'Workflow process tracking',
        'Active Workspace health',
        'Dispatcher and translator status',
        'Database connection pooling',
        'Session and user tracking'
      ],
      de: [
        'Teamcenter-Serverpool-Überwachung',
        'FSC-Volumenverwaltung',
        'Workflow-Prozessverfolgung',
        'Active Workspace-Gesundheit',
        'Dispatcher- und Translator-Status',
        'Datenbankverbindungs-Pooling',
        'Sitzungs- und Benutzerverfolgung'
      ]
    },
    benefits: {
      en: [
        { title: 'PLM Availability', description: 'Keep Teamcenter available for product development teams.' },
        { title: 'Workflow Monitoring', description: 'Track workflow execution and identify bottlenecks.' },
        { title: 'Resource Management', description: 'Monitor FSC volumes and prevent storage issues.' },
        { title: 'User Experience', description: 'Ensure optimal Active Workspace performance.' }
      ],
      de: [
        { title: 'PLM-Verfügbarkeit', description: 'Halten Sie Teamcenter für Produktentwicklungsteams verfügbar.' },
        { title: 'Workflow-Überwachung', description: 'Verfolgen Sie Workflow-Ausführung und identifizieren Sie Engpässe.' },
        { title: 'Ressourcenverwaltung', description: 'Überwachen Sie FSC-Volumen und verhindern Sie Speicherprobleme.' },
        { title: 'Benutzererfahrung', description: 'Stellen Sie optimale Active Workspace-Leistung sicher.' }
      ]
    }
  },
  'gcp': {
    icon: 'gcp',
    category: 'gcp',
    metricsCount: '250+',
    triggersCount: '70',
    dashboardsCount: '10',
    templatesCount: '5',
    features: {
      en: [
        'Compute Engine instance monitoring',
        'Cloud SQL database metrics',
        'GKE cluster health',
        'Cloud Storage utilization',
        'Cloud Functions execution',
        'BigQuery job monitoring',
        'Network and load balancer health'
      ],
      de: [
        'Compute Engine-Instanzüberwachung',
        'Cloud SQL-Datenbankmetriken',
        'GKE-Cluster-Gesundheit',
        'Cloud Storage-Nutzung',
        'Cloud Functions-Ausführung',
        'BigQuery-Job-Überwachung',
        'Netzwerk- und Load-Balancer-Gesundheit'
      ]
    },
    benefits: {
      en: [
        { title: 'Unified View', description: 'See all GCP resources in your Zabbix dashboard.' },
        { title: 'Cost Monitoring', description: 'Track resource usage and optimize cloud spending.' },
        { title: 'GKE Insights', description: 'Deep visibility into Kubernetes workloads.' },
        { title: 'Native Integration', description: 'Seamless integration with GCP monitoring APIs.' }
      ],
      de: [
        { title: 'Einheitliche Ansicht', description: 'Sehen Sie alle GCP-Ressourcen in Ihrem Zabbix-Dashboard.' },
        { title: 'Kostenüberwachung', description: 'Verfolgen Sie die Ressourcennutzung und optimieren Sie Cloud-Ausgaben.' },
        { title: 'GKE-Einblicke', description: 'Tiefe Transparenz in Kubernetes-Workloads.' },
        { title: 'Native Integration', description: 'Nahtlose Integration mit GCP-Monitoring-APIs.' }
      ]
    }
  },
  'aws': {
    icon: 'aws',
    category: 'aws',
    metricsCount: '350+',
    triggersCount: '90',
    dashboardsCount: '12',
    templatesCount: '7',
    features: {
      en: [
        'EC2 instance monitoring',
        'RDS database health',
        'Lambda function metrics',
        'S3 bucket analytics',
        'ECS/EKS container monitoring',
        'CloudWatch integration',
        'Auto Scaling group tracking'
      ],
      de: [
        'EC2-Instanzüberwachung',
        'RDS-Datenbankgesundheit',
        'Lambda-Funktionsmetriken',
        'S3-Bucket-Analysen',
        'ECS/EKS-Container-Überwachung',
        'CloudWatch-Integration',
        'Auto-Scaling-Gruppenverfolgung'
      ]
    },
    benefits: {
      en: [
        { title: 'Multi-Service View', description: 'Monitor 50+ AWS services from Zabbix.' },
        { title: 'Cost Control', description: 'Track usage and prevent unexpected charges.' },
        { title: 'Serverless Ready', description: 'Full Lambda and serverless monitoring support.' },
        { title: 'Hybrid Cloud', description: 'Unified monitoring for on-prem and AWS.' }
      ],
      de: [
        { title: 'Multi-Service-Ansicht', description: 'Überwachen Sie über 50 AWS-Services von Zabbix aus.' },
        { title: 'Kostenkontrolle', description: 'Verfolgen Sie die Nutzung und vermeiden Sie unerwartete Gebühren.' },
        { title: 'Serverless-fähig', description: 'Volle Lambda- und Serverless-Monitoring-Unterstützung.' },
        { title: 'Hybrid Cloud', description: 'Einheitliches Monitoring für On-Prem und AWS.' }
      ]
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, solutionDetails };
}

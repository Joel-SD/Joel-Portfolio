export const portfolioData = {
  personalInfo: {
    name: 'Joel Carrasco',
    title: {
      en: 'Software Engineer',
      es: 'Ingeniero de Software',
    },
    location: {
      en: 'Panama',
      es: 'Panamá',
    },
    bio: {
      en: 'I own data-heavy backends and the UIs that sit on them.',
      es: 'Me hago cargo de backends con mucha data y de las interfaces que viven encima.',
    },
    aboutMe: {
      en: "I'm Joel. I work across web, mobile, APIs, and databases — and I care as much about the business as the code. I've shipped Android and iOS apps, built APIs from scratch, and mentored junior developers. Hard problems, finishing them, and making the product usable: that's the part I like.",
      es: 'Soy Joel. Trabajo en web, móvil, APIs y bases de datos — y me importa el negocio tanto como el código. He lanzado apps en Android e iOS, creado APIs desde cero y mentoreado a juniors. Problemas difíciles, terminarlos y que el producto se pueda usar: esa es la parte que me gusta.',
    },
    socialLinks: [
      { name: 'github', url: 'https://github.com/Joel-SD' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/joel-carrasco-cubilla' },
    ],
  },

  experience: [
    {
      company: {
        en: 'Infotree Global Solutions - Dell',
        es: 'Infotree Global Solutions - Dell',
      },
      website: 'https://www.infotreeglobal.com/',
      logo: '/assets/companies/infotree_global_solutions_logo.jpeg',
      position: {
        en: 'Senior Software Engineer',
        es: 'Ingeniero de Software Senior',
      },
      period: {
        en: 'June 2026 - Present',
        es: 'Junio 2026 - Presente',
      },
      description: {
        en: "• Maintain and develop disaster recovery analytics platform for Dell's enterprise infrastructure, processing real-time data from mission-critical recovery systems.\n• Built high-performance Node.js services and Angular frontend using Redis caching, complex data structures (graphs, trees), and sophisticated business logic patterns.\n• Collaborated with Principal Engineer on system design, code quality standards, and architectural decisions for enterprise-scale applications.",
        es: "• Mantengo y desarrollo la plataforma de análisis de recuperación de desastres de la infraestructura empresarial de Dell, procesando datos en tiempo real de sistemas de recuperación de misión crítica.\n• Construí servicios de alto rendimiento en Node.js y frontend Angular utilizando Redis caching, estructuras de datos complejas (grafos, árboles) y patrones sofisticados de lógica de negocio.\n• Colaboré con Ingeniero Principal en diseño de sistemas, estándares de calidad de código y decisiones arquitectónicas para aplicaciones a escala empresarial.",
      },
    },
    {
      company: {
        en: 'Hypernova Labs',
        es: 'Hypernova Labs',
      },
      website: 'https://www.hypernovalabs.com/',
      logo: '/assets/companies/hypernova_labs_logo.jpg',
      position: {
        en: 'Full Stack Developer',
        es: 'Desarrollador Full Stack',
      },
      period: {
        en: 'April 2024 - June 2026',
        es: 'Abril 2024 - Junio 2026',
      },
      description: {
        en: "• Led end-to-end migration of multi-tenant SaaS platform from Node.js + MongoDB to Go + SQL Server, achieving 40%+ latency reduction on high-traffic endpoints.\n• Shipped production REST APIs using C#/.NET 6 and Go with hexagonal architecture, serving 10+ enterprise tenants.\n• Optimized SQL Server stored procedures on 25M+ record tables through execution plan analysis and index tuning.\n• Maintained CI/CD pipelines (Azure Pipelines, GitHub Actions) with automated testing (NUnit, xUnit, Jest, SonarQube).",
        es: "• Lideré la migración end-to-end de una plataforma SaaS multi-tenant de Node.js + MongoDB a Go + SQL Server, logrando una reducción de latencia del 40%+ en endpoints de alto tráfico.\n• Implementé APIs REST en producción usando C#/.NET 6 y Go con arquitectura hexagonal, sirviendo a 10+ clientes empresariales.\n• Optimicé procedimientos almacenados en SQL Server en tablas de 25M+ registros mediante análisis de planes de ejecución y ajuste de índices.\n• Mantuve pipelines de CI/CD (Azure Pipelines, GitHub Actions) con pruebas automatizadas (NUnit, xUnit, Jest, SonarQube).",
      },
    },
    {
      company: {
        en: 'Banco General',
        es: 'Banco General',
      },
      website: 'https://www.bgeneral.com/',
      logo: '/assets/companies/banco_general_logo.png',
      position: {
        en: 'Software Developer',
        es: 'Desarrollador de Software',
      },
      period: {
        en: 'January 2024 - April 2024',
        es: 'Enero 2024 - Abril 2024',
      },
      description: {
        en: '• Developed enterprise application modules using Java, Angular, TypeScript in a hybrid Agile environment.\n• Integrated third-party REST APIs and internal services; implemented unit tests and contributed to code quality.',
        es: '• Desarrollé módulos de aplicaciones empresariales usando Java, Angular, TypeScript en un entorno Agile híbrido.\n• Integré APIs REST de terceros y servicios internos; implementé pruebas unitarias y contribuí a la calidad del código.',
      },
    },
    {
      company: {
        en: 'RednBlue',
        es: 'RednBlue',
      },
      website: 'https://rednbluepty.com/en/',
      logo: '/assets/companies/rednblue_logo.jpg',
      position: {
        en: 'Software Developer',
        es: 'Desarrollador de Software',
      },
      period: {
        en: 'June 2022 - January 2024',
        es: 'Junio 2022 - Enero 2024',
      },
      description: {
        en: '• Built cross-platform mobile features in React and React Native (Android/iOS), including dark mode, i18n, deep linking, and OAuth integrations (Google/Facebook/Apple).\n• Integrated Google Analytics and third-party APIs; created animations with React Native Reanimated.',
        es: '• Construí funcionalidades móviles multiplataforma en React y React Native (Android/iOS), incluyendo modo oscuro, i18n, deep linking, e integraciones OAuth (Google/Facebook/Apple).\n• Integré Google Analytics y APIs de terceros; creé animaciones con React Native Reanimated.',
      },
    },
  ],

  skills: {
    technologies: [
      { name: 'React', category: 'Frontend', icon: 'SiReact' },
      { name: 'Angular', category: 'Frontend', icon: 'SiAngular' },
      { name: 'React Native', category: 'Frontend', icon: 'SiReact' },
      { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs' },
      { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript' },
      { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs' },
      { name: 'Go', category: 'Backend', icon: 'SiGo' },
      { name: 'C#/.NET', category: 'Backend', icon: 'SiCsharp' },
      { name: 'Java', category: 'Backend', icon: 'FaJava' },
      { name: 'SQL Server', category: 'Database', icon: 'SiMicrosoftsqlserver' },
      { name: 'PostgreSQL', category: 'Database', icon: 'SiPostgresql' },
      { name: 'MongoDB', category: 'Database', icon: 'SiMongodb' },
      { name: 'Redis', category: 'Database', icon: 'SiRedis' },
      { name: 'Docker', category: 'DevOps', icon: 'SiDocker' },
      { name: 'Azure', category: 'DevOps', icon: 'VscAzure' },
      { name: 'GitHub Actions', category: 'DevOps', icon: 'SiGithubactions' },
      { name: 'SonarQube', category: 'DevOps', icon: 'SiSonarqube' },
    ],
  },

  stats: [
    {
      value: '5+',
      label: {
        en: 'Years shipping',
        es: 'Años en producción',
      },
    },
    {
      value: '15+',
      label: {
        en: 'Projects',
        es: 'Proyectos',
      },
    },
  ],

  resume: {
    fileName: 'Joel Carrasco Resume.pdf'
  },

  contact: {
    email: 'joelcarrasco.sd@gmail.com',
    phone: '+507 62575381',
    location: {
      en: 'Panama City, Panama',
      es: 'Ciudad de Panamá, Panamá',
    },
  },
};

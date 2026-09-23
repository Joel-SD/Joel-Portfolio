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
        en: "• Maintain and develop a large-scale analytics platform for enterprise infrastructure, with real-time data and graph-shaped relationships.\n• Built Node.js services and Angular screens using Redis caching, graph and tree structures, and business rules for how that data is shown.\n• Collaborated with a Principal Engineer on system design, code quality, and architecture for enterprise-scale applications.",
        es: "• Mantengo y desarrollo una plataforma de analítica a gran escala para infraestructura empresarial, con data en tiempo real y relaciones en forma de grafo.\n• Construí servicios en Node.js y pantallas en Angular usando Redis, estructuras de grafos y árboles, y reglas de negocio para cómo se muestra esa data.\n• Colaboré con un Ingeniero Principal en diseño de sistemas, calidad de código y arquitectura para aplicaciones a escala empresarial.",
      },
      technologies: ['Node.js', 'Angular', 'Redis'],
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
        en: "• Led end-to-end migration of PIM data — catalogs, product attributes, and attribute groups — from Node.js + MongoDB to Go + SQL Server, with hexagonal architecture and a microservices split, serving 10+ enterprise tenants.\n• Shipped production REST APIs using C#/.NET 6 and Go.\n• Optimized SQL Server stored procedures and search on 25M+ row price-list tables through execution plan analysis and index tuning, cutting latency 40%+ on those large lists.\n• Maintained CI/CD pipelines (Azure Pipelines, GitHub Actions) with automated testing (NUnit, xUnit, Jest, SonarQube).",
        es: "• Lideré la migración end-to-end de data de PIM — catálogos, atributos de producto y grupos de atributos — de Node.js + MongoDB a Go + SQL Server, con arquitectura hexagonal y un split a microservicios, sirviendo a 10+ clientes empresariales.\n• Implementé APIs REST en producción usando C#/.NET 6 y Go.\n• Optimicé stored procedures y la búsqueda en SQL Server sobre tablas de listas de precios de 25M+ filas mediante análisis de planes de ejecución e índices, bajando 40%+ la latencia en esas listas grandes.\n• Mantuve pipelines de CI/CD (Azure Pipelines, GitHub Actions) con pruebas automatizadas (NUnit, xUnit, Jest, SonarQube).",
      },
      technologies: ['Go', 'SQL Server', 'C#/.NET', 'Node.js', 'MongoDB'],
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
      technologies: ['Java', 'Angular', 'TypeScript'],
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
      technologies: ['React Native', 'React', 'TypeScript'],
    },
  ],

  caseStudies: [
    {
      id: 'dell-status-graph',
      company: {
        en: 'Infotree · Dell',
        es: 'Infotree · Dell',
      },
      title: {
        en: 'Status and relationships at large scale',
        es: 'Estado y relaciones a gran escala',
      },
      problem: {
        en: 'A large-scale system has to show the status of thousands of entities and how they connect. That data only makes sense as a graph, with business rules about how it should be structured on screen.',
        es: 'Un sistema a gran escala tiene que mostrar el estado de miles de entidades y cómo se conectan. Esa data solo se entiende como grafo, con reglas de negocio sobre cómo estructurarla en pantalla.',
      },
      did: {
        en: 'I built the Node services, Angular screens, Redis layer, and the graph visualizations. The hard part was not drawing the graph. It was the rules: how to model the data so statuses and connections read as a system, not a dump.',
        es: 'Construí los servicios en Node, las pantallas en Angular, Redis y las visualizaciones de grafos. Lo difícil no era dibujar el grafo. Eran las reglas: cómo modelar los datos para que estados y conexiones se lean como un sistema, no como un dump.',
      },
      result: {
        en: 'Status and connections sit in one place, including graph views, without dumping the raw data.',
        es: 'Estado y conexiones quedan en un solo lugar, incluyendo vistas de grafo, sin tirar la data cruda.',
      },
      stack: ['Node.js', 'Angular', 'Redis'],
    },
    {
      id: 'hypernova-catalogs',
      company: {
        en: 'Hypernova Labs',
        es: 'Hypernova Labs',
      },
      title: {
        en: 'PIM catalogs and attributes, off Mongo onto SQL',
        es: 'Catálogos y atributos de PIM, de Mongo a SQL',
      },
      problem: {
        en: 'The PIM lived in Mongo behind Node: catalogs, product attributes, and groups of attributes — color, and everything else you would hang off a product. A customer needed that model on SQL. Scale, structure, cost, and an architecture you can keep clean were all on the line.',
        es: 'El PIM vivía en Mongo detrás de Node: catálogos, atributos de producto y grupos de atributos — color, y todo lo demás que cuelga de un producto. Un cliente necesitaba ese modelo en SQL. Escala, estructura, costo y una arquitectura que se pudiera mantener limpia: todo estaba en juego.',
      },
      did: {
        en: 'I owned the migration end-to-end: that PIM model from Node.js + MongoDB onto Go + SQL Server, hexagonal services, and a microservices split. Data model, APIs, and the cutover.',
        es: 'Me hice cargo de la migración de extremo a extremo: ese modelo de PIM de Node.js + MongoDB a Go + SQL Server, servicios hexagonales y un split a microservicios. Modelo de datos, APIs y el corte.',
      },
      result: {
        en: 'Catalogs, attributes, and attribute groups sit on SQL with a cleaner architecture, on a platform serving 10+ enterprise tenants.',
        es: 'Catálogos, atributos y grupos de atributos quedaron en SQL con una arquitectura más limpia, en una plataforma que sirve a 10+ tenants empresariales.',
      },
      stack: ['Go', 'SQL Server', 'Node.js', 'MongoDB'],
    },
    {
      id: 'hypernova-pricelists',
      company: {
        en: 'Hypernova Labs',
        es: 'Hypernova Labs',
      },
      title: {
        en: 'Price lists on 25 million rows',
        es: 'Listas de precios sobre 25 millones de filas',
      },
      problem: {
        en: 'Search and large price lists on a 25M-row table were crawling. Bad indexes, stored procedures that were structured poorly, and the usual bad habits around them — including other procs that touched the same data.',
        es: 'La búsqueda y las listas grandes de precios sobre una tabla de 25M de filas iban a duras. Índices malos, stored procedures mal estructurados y las malas prácticas de siempre — incluyendo otros SPs que tocaban los mismos datos.',
      },
      did: {
        en: 'Execution-plan analysis, index work, and rewriting the procedures around that price-list table so search and those lists were not fighting the schema.',
        es: 'Análisis de planes de ejecución, índices y reescritura de los procedimientos alrededor de esa tabla de listas de precios para que la búsqueda y esas listas no pelearan con el schema.',
      },
      result: {
        en: '40%+ lower latency on those large price-list endpoints. Search on that table became something people could actually use.',
        es: '40%+ menos latencia en esos endpoints de listas grandes de precios. La búsqueda sobre esa tabla pasó a ser algo que la gente podía usar de verdad.',
      },
      stack: ['SQL Server', 'T-SQL'],
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
      value: '4+',
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
    fileName: 'Joel Carrasco Resume.pdf',
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

import AboutMe from "../components/sections/aboutMe/AboutMe";

export const portfolioData = {
  personalInfo: {
    name: 'Joel Carrasco',
    title: {
      en: 'Software Developer',
      es: 'Desarrollador de Software',
    },
    location: {
      en: 'Panama',
      es: 'Panamá',
    },
    bio: {
      en: "Full Stack Developer with 3+ years of experience developing robust web and mobile applications. Focused on end-to-end development using React, C#/.NET, and SQL Server. Passionate about agile methodologies and performance optimization in every project.\n\nSpecialized in creating scalable solutions with modern technologies including React Native, Angular, and TypeScript. Experience with Azure DevOps, automated testing, and API integrations. Always committed to delivering high-quality code and exceptional user experiences.",
      es: 'Desarrollador Full Stack con más de 3 años de experiencia desarrollando aplicaciones web y móviles robustas. Enfocado en desarrollo end-to-end usando React, C#/.NET y SQL Server. Apasionado por las metodologías ágiles y la optimización del rendimiento en cada proyecto.\n\nEspecializado en crear soluciones escalables con tecnologías modernas incluyendo React Native, Angular y TypeScript. Experiencia con Azure DevOps, pruebas automatizadas e integraciones de APIs. Siempre comprometido con entregar código de alta calidad y experiencias de usuario excepcionales.',
    },
    aboutMe: {
      en: "I'm Joel, a 25-year-old Full Stack Developer based in Panama with 3+ years of building software that actually works. My day-to-day involves everything from crafting frontends web and mobile apps to optimizing database stored procedures. I've shipped projects for both Android and iOS, created APIs from scratch, and spent considerable time mentoring junior developers. I love taking on challenging projects and have built up serious resilience when it comes to finishing things and making the impossible possible. I get excited about creating extravagant animations that take way too much time to perfect, but honestly, understanding the business from its core foundations is often far more interesting. I genuinely enjoy every part of the development process – from that first line of code to seeing users interact with the final product, no matter how many obstacles I encounter along the way.",
      es: "Soy Joel, un Desarrollador Full Stack de 25 años con sede en Panamá y más de 3 años construyendo software que realmente funciona. Mi día a día incluye desde crear aplicaciones móviles y webs, hasta optimizar procedimientos almacenados en bases de datos. He lanzado proyectos tanto para Android como iOS, creado APIs desde cero, y dedicado tiempo considerable mentoreando desarrolladores junior. Me encantan los proyectos desafiantes y he desarrollado una gran resistencia para terminar las cosas y hacer posible lo imposible. Me emociono creando animaciones extravagantes que toman demasiado tiempo perfeccionar, pero honestamente, entender el negocio desde sus fundamentos centrales es a menudo mucho más interesante. Genuinamente disfruto cada parte del proceso de desarrollo – desde esa primera línea de código hasta ver usuarios interactuar con el producto final, sin importar cuántos obstáculos encuentre en el camino."
    },
    socialLinks: [
      { name: 'github', url: 'https://github.com/Joel-SD' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/joel-carrasco-cubilla' },
      { name: 'twitter', url: 'https://twitter.com/yourusername' },
      { name: 'instagram', url: 'https://instagram.com/yourusername' },
    ],
  },

  skills: [
    { name: 'JavaScript', icon: 'JS', category: 'frontend' },
    { name: 'TypeScript', icon: 'TS', category: 'frontend' },
    { name: 'React', icon: 'React', category: 'frontend' },
    { name: 'Next.js', icon: 'Next', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'Tailwind', category: 'frontend' },
    { name: 'Sass/SCSS', icon: 'Sass', category: 'frontend' },
    { name: 'Storybook', icon: 'Storybook', category: 'tools' },
    { name: 'Git', icon: 'Git', category: 'tools' },
    { name: 'Socket.io', icon: 'Socket', category: 'backend' },
  ],

  experience: [
    {
      company: {
        en: 'Hypernova Labs',
        es: 'Hypernova Labs',
      },
      website: 'https://www.hypernovalabs.com/',
      logo: '/Joel-Portfolio/assets/companies/hypernova_labs_logo.jpg',
      position: {
        en: 'Full Stack Developer',
        es: 'Desarrollador Full Stack',
      },
      period: {
        en: 'April 2024 - Present',
        es: 'Abril 2024 - Presente',
      },
      description: {
        en: "• Develop end-to-end features for web and mobile applications with React, React Native, and Angular using TypeScript.\n• Improved stored procedures reducing query response times.\n• Implementation of APIs and business logic in C# .NET with SQL Server (stored procedures).\n• API consumption and backend collaboration with C# .NET and SQL Server.\n• Unit and integration testing with C# .NET (SonarQube, NUnit, xUnit, Jest).\n• Pipeline configuration in Azure DevOps (CI/CD, builds, releases, artifacts) and collaborated with deployments.\n• Participation in projects under Agile methodologies.",
        es: '• Desarrollo de funcionalidades end-to-end para aplicaciones web y móviles con React, React Native, y Angular usando TypeScript.\n• Mejoré procedimientos almacenados reduciendo tiempos de respuesta de consultas.\n• Implementación de APIs y lógica de negocio en C# .NET con SQL Server (procedimientos almacenados).\n• Consumo de APIs y colaboración backend con C# .NET y SQL Server.\n• Pruebas unitarias e integración con C# .NET (SonarQube, NUnit, xUnit, Jest).\n• Configuración de pipelines en Azure DevOps (CI/CD, builds, releases, artifacts) y colaboré con deployments.\n• Participación en proyectos bajo metodologías Agile.',
      },
    },
    {
      company: {
        en: 'Banco General',
        es: 'Banco General',
      },
      website: 'https://www.bgeneral.com/',
      logo: '/Joel-Portfolio/assets/companies/banco_general_logo.png',
      position: {
        en: 'Software Developer',
        es: 'Desarrollador de Software',
      },
      period: {
        en: 'January 2024 - April 2024',
        es: 'Enero 2024 - Abril 2024',
      },
      description: {
        en: '• Module development with Java, Angular, and TypeScript.\n• Integration of external APIs (third-party).\n• Unit test automation with Java and testing frameworks.\n• Work in hybrid environments with Agile.',
        es: '• Desarrollo de módulos con Java, Angular, y TypeScript.\n• Integración de APIs externas (third-party).\n• Automatización de pruebas unitarias con Java y frameworks de testing.\n• Trabajo en entornos híbridos con Agile.',
      },
    },
    {
      company: {
        en: 'RednBlue',
        es: 'RednBlue',
      },
      website: 'https://rednbluepty.com/en/',
      logo: '/Joel-Portfolio/assets/companies/rednblue_logo.jpg',
      position: {
        en: 'Software Developer',
        es: 'Desarrollador de Software',
      },
      period: {
        en: 'June 2022 - January 2024',
        es: 'Junio 2022 - Enero 2024',
      },
      description: {
        en: '• Developed modules and features in React and React Native for Android and iOS.\n• Implementation of dark mode and multi-language in web portal and mobile app.\n• Integration of Google Analytics, deep linking, and third-party APIs (Google Maps, login with Google/Facebook/Apple).\n• Creation of animations and interactive interfaces with React Native Reanimated.',
        es: '• Desarrollé módulos y funcionalidades en React y React Native para Android e iOS.\n• Implementación de modo oscuro y multi-idioma en portal web y app móvil.\n• Integración de Google Analytics, deep linking, y APIs de terceros (Google Maps, login con Google/Facebook/Apple).\n• Creación de animaciones e interfaces interactivas con React Native Reanimated.',
      },
    },
  ],

  skills: {
    technologies: [
      { name: 'React', category: 'Frontend', icon: 'SiReact' },
      { name: 'React Native', category: 'Frontend', icon: 'SiReact' },
      { name: 'Angular', category: 'Frontend', icon: 'SiAngular' },
      { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs' },
      { name: 'Redux', category: 'Frontend', icon: 'SiRedux' },
      { name: 'JavaScript', category: 'Frontend', icon: 'SiJavascript' },
      { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript' },
      { name: 'Tailwind', category: 'Frontend', icon: 'SiTailwindcss' },
      { name: 'Sass', category: 'Frontend', icon: 'SiSass' },
      { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs' },
      { name: 'C#', category: 'Backend', icon: 'SiCsharp' },
      { name: 'Java', category: 'Backend', icon: 'FaJava' },
      { name: 'SQL Server', category: 'Database', icon: 'SiMicrosoftsqlserver' },
      { name: 'Git', category: 'Tools', icon: 'FaGitAlt' },
      { name: 'Azure', category: 'Tools', icon: 'VscAzure' },
      { name: 'Figma', category: 'Tools', icon: 'SiFigma' },
      { name: 'Postman', category: 'Tools', icon: 'SiPostman' },
      { name: 'Testing', category: 'Tools', icon: 'SiTestinglibrary' }
    ]
  },

  stats: [
    {
      value: '3+',
      label: {
        en: 'Years Experience',
        es: 'Años de Experiencia'
      }
    },
    {
      value: '15+',
      label: {
        en: 'Projects',
        es: 'Proyectos'
      }
    },
    {
      value: '∞',
      label: {
        en: 'Coffee Cups',
        es: 'Tazas de Café'
      }
    }
  ],

  resume: {
    fileName: {
      en: 'Joel_Carrasco_Resume.pdf',
      es: 'Joel_Carrasco_CV.pdf'
    }
  },

  projects: [
    {
      title: {
        en: 'E-commerce Platform',
        es: 'Plataforma de Comercio Electrónico',
      },
      description: {
        en: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
        es: 'Una plataforma de comercio electrónico completa construida con React, Node.js y MongoDB.',
      },
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      imageUrl: '/path/to/image.jpg',
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.com',
    },
    {
      title: {
        en: 'Task Management App',
        es: 'Aplicación de Gestión de Tareas',
      },
      description: {
        en: 'A productivity tool for managing tasks and projects with collaborative features.',
        es: 'Una herramienta de productividad para gestionar tareas y proyectos con características colaborativas.',
      },
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      imageUrl: '/path/to/image.jpg',
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.com',
    },
  ],

  contact: {
    email: 'joelcarrasco.sd@gmail.com',
    phone: '+507 62575381',
    location: {
      en: 'Panama City, Panama',
      es: 'Ciudad de Panamá, Panamá',
    },
  },
};

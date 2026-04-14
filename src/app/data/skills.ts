import { Skill } from '../types/skill';

export const initialSkills: Skill[] = [
  {
    id: '1',
    name: 'Programación Full-Stack',
    description: 'Domina el desarrollo web moderno con JavaScript, React, Node.js y bases de datos.',
    fullDescription: 'Conviértete en un desarrollador completo capaz de construir aplicaciones web desde cero. Aprende a crear interfaces de usuario dinámicas, desarrollar APIs robustas y gestionar bases de datos complejas.',
    imageUrl: 'https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW4lMjBkYXJrfGVufDF8fHx8MTc3NDEzMzA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tecnología',
    objectives: [
      'Construir aplicaciones web completas desde cero',
      'Dominar React y arquitecturas de componentes',
      'Crear APIs RESTful con Node.js y Express',
      'Implementar autenticación y seguridad',
      'Gestionar bases de datos SQL y NoSQL'
    ],
    careerPaths: [
      'Desarrollador Full-Stack Senior',
      'Arquitecto de Software',
      'Tech Lead',
      'Freelancer especializado'
    ]
  },
  {
    id: '2',
    name: 'Oratoria y Presentaciones',
    description: 'Desarrolla habilidades de comunicación pública y presentaciones impactantes.',
    fullDescription: 'Aprende a hablar en público con confianza, estructurar presentaciones convincentes y conectar emocionalmente con tu audiencia. Ideal para líderes, emprendedores y profesionales.',
    imageUrl: 'https://images.unsplash.com/photo-1772419216340-fd8abb4f55de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHByZXNlbnRhdGlvbiUyMHN0YWdlfGVufDF8fHx8MTc3NDEzMzA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Comunicación',
    objectives: [
      'Hablar en público sin miedo',
      'Estructurar presentaciones persuasivas',
      'Dominar el lenguaje corporal',
      'Conectar emocionalmente con la audiencia',
      'Manejar preguntas difíciles con confianza'
    ],
    careerPaths: [
      'Speaker profesional',
      'Coach de comunicación',
      'Líder empresarial',
      'Consultor estratégico'
    ]
  },
  {
    id: '3',
    name: 'Ventas Estratégicas',
    description: 'Aprende técnicas avanzadas de ventas B2B y negociación para cerrar grandes contratos.',
    fullDescription: 'Domina el arte de las ventas profesionales. Aprende a identificar oportunidades, construir relaciones, manejar objeciones y cerrar negocios de alto valor.',
    imageUrl: 'https://images.unsplash.com/photo-1758691736764-2a88e313b1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGJ1c2luZXNzJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQxMzMwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Negocios',
    objectives: [
      'Dominar el proceso de venta consultiva',
      'Identificar y calificar prospectos de alto valor',
      'Construir relaciones duraderas con clientes',
      'Manejar objeciones efectivamente',
      'Cerrar contratos complejos'
    ],
    careerPaths: [
      'Director de Ventas',
      'Account Executive Senior',
      'Consultor de negocios',
      'Emprendedor'
    ]
  },
  {
    id: '4',
    name: 'Ciencia de Datos',
    description: 'Analiza datos complejos y crea modelos predictivos con Python y Machine Learning.',
    fullDescription: 'Conviértete en un científico de datos capaz de extraer insights valiosos de grandes volúmenes de información. Aprende Python, estadística, visualización de datos y machine learning.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzQxMTc2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tecnología',
    objectives: [
      'Dominar Python para análisis de datos',
      'Crear visualizaciones impactantes',
      'Construir modelos de Machine Learning',
      'Aplicar estadística avanzada',
      'Comunicar insights efectivamente'
    ],
    careerPaths: [
      'Data Scientist Senior',
      'ML Engineer',
      'Analytics Manager',
      'Consultor de IA'
    ]
  },
  {
    id: '5',
    name: 'Diseño UX/UI',
    description: 'Crea experiencias digitales memorables y diseños centrados en el usuario.',
    fullDescription: 'Aprende a diseñar productos digitales que los usuarios aman. Domina investigación UX, wireframing, prototipado y diseño de interfaces modernas con Figma.',
    imageUrl: 'https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRvb2xzfGVufDF8fHx8MTc3NDEzMzA5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Diseño',
    objectives: [
      'Realizar investigación de usuarios',
      'Crear wireframes y prototipos',
      'Diseñar interfaces modernas en Figma',
      'Aplicar principios de diseño visual',
      'Realizar pruebas de usabilidad'
    ],
    careerPaths: [
      'UX Designer Senior',
      'Product Designer',
      'Design Lead',
      'Freelancer de diseño'
    ]
  },
  {
    id: '6',
    name: 'Idiomas: Inglés Avanzado',
    description: 'Alcanza fluidez profesional en inglés para negocios y conversación.',
    fullDescription: 'Lleva tu inglés al siguiente nivel. Aprende a comunicarte con confianza en entornos profesionales, presentaciones de negocios y conversaciones cotidianas.',
    imageUrl: 'https://images.unsplash.com/photo-1628130418598-1a49759201f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwYm9va3MlMjBpbnRlcm5hdGlvbmFsfGVufDF8fHx8MTc3NDEzMzA5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Idiomas',
    objectives: [
      'Hablar con fluidez en conversaciones profesionales',
      'Escribir emails y documentos de negocios',
      'Presentar proyectos en inglés',
      'Comprender acentos variados',
      'Negociar en inglés con confianza'
    ],
    careerPaths: [
      'Profesional internacional',
      'Traductor/Intérprete',
      'Profesor de inglés',
      'Consultor global'
    ]
  }
];

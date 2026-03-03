import { WorkExperience, Certificate, Education, Skill } from './types';

export const workExperience: WorkExperience[] = [
  {
    id: 'neoshare-senior',
    company: 'neoshare',
    position: 'Senior Technical Product Manager',
    startDate: 'Jan 2025',
    endDate: 'Present',
    description: 'Senior Technical Product Manager driving platform optimization and product strategy',
    achievements: [
      'Conducted in-depth discoveries to optimize platform workflow and collaboration features, focusing on key areas such as dashboards, task management (to-do) systems, notification systems, and user invite flows',
      'Lead key initiatives including the implementation of a product intake flow, the introduction of Jira Advanced Roadmaps, and the establishment of product management ceremonies',
      'Contributed to the growth of the product team by actively participating in the hiring process for Product Managers, Product Operations Managers, and UX Researcher',
    ],
    technologies: [],
  },
  {
    id: 'prodvio',
    company: 'Prodvio',
    position: 'Founder',
    startDate: 'Oct 2023',
    endDate: 'Present',
    description: 'Boutique, self-employed product management consultancy',
    achievements: [
      'Founded a boutique, self-employed product management consultancy dedicated to delivering expert, on-demand product management and leadership for startups, scale-ups, and established teams needing flexible support',
    ],
    technologies: [],
    companyUrl: '',
  },
  {
    id: 'finalsite',
    company: 'FinalSite',
    position: 'Platform Product Manager',
    startDate: 'Jan 2023',
    endDate: 'Dec 2023',
    description: 'Platform Product Manager overseeing CRM product lifecycle',
    achievements: [
      'Oversaw the entire product lifecycle for the CRM, from ideation and development to launch and continuous improvement. Successfully launch alpha and beta releases as well as multiple user feedback sessions',
      'Fostered a culture of collaboration and innovation across other product lines, ensuring that the CRM integrates seamlessly with our clients\' broader product ecosystem',
    ],
    technologies: [],
    companyUrl: '',
  },
  {
    id: 'ascent-senior',
    company: 'Ascent',
    position: 'Senior Product Manager (Promoted)',
    startDate: 'Jun 2022',
    endDate: 'Oct 2023',
    description: 'Senior Product Manager leading product strategy and development',
    achievements: [
      'Conducted user research to identify customer needs and preferences, which informed product development decisions',
      'Managed product launch timelines and coordinated with senior stakeholders to ensure successful product releases',
    ],
    technologies: [],
    companyUrl: '',
  },
  {
    id: 'ascent',
    company: 'Ascent',
    position: 'Product Manager',
    startDate: 'Sep 2020',
    endDate: 'Jun 2022',
    description: 'Product Manager collaborating across cross-functional teams',
    achievements: [
      'Collaborated closely with cross-functional teams, including engineering, design, marketing, and support, to define and communicate product requirements',
      'Monitored platform performance, gathered user feedback, and iterated on features to continuously improve user experience and drive engagement',
      'Led the preparation and execution of product launches, coordinating marketing, sales, and customer support efforts',
    ],
    technologies: [],
    companyUrl: '',
  },
  {
    id: 'factset',
    company: 'Factset',
    position: 'Product Owner',
    startDate: 'Jun 2019',
    endDate: 'Sep 2020',
    description: 'Product Owner defining product requirements and roadmap',
    achievements: [
      'Defined and prioritized product requirements, user stories, and use cases, considering both technical feasibility and business value',
      'Worked closely with the engineering team to ensure timely and high-quality delivery of features, while managing technical trade-offs',
      'Developed and maintained a comprehensive product roadmap, clearly communicating updates and progress to internal stakeholders',
    ],
    technologies: [],
    companyUrl: '',
  },
  {
    id: 'siteground',
    company: 'SiteGround Web Hosting Company',
    position: 'Product Owner',
    startDate: 'Sep 2018',
    endDate: 'Mar 2019',
    description: 'Product Owner optimizing web hosting product experience',
    achievements: [
      'Continuously optimized the web hosting product\'s user experience, performance, and features to meet or exceed customer expectations',
      'Created and maintained a clear product roadmap that prioritized features and enhancements based on customer needs, competitive analysis, and business objectives',
      'Monitored product performance, tracked key metrics (e.g., uptime, load times, customer satisfaction), and took proactive measures to address issues and maximize product success',
    ],
    technologies: [],
    companyUrl: '',
  },
  {
    id: 'experian',
    company: 'Experian',
    position: 'Senior Solutions Analyst',
    startDate: 'Jun 2017',
    endDate: 'May 2018',
    description: 'Senior Solutions Analyst planning business processes and workflows',
    achievements: [
      'Planned, designed, and recommended business processes and workflows to improve and support business activities',
      'Identified, created, and facilitated process design changes and improvements by conducting business and systems process analysis',
      'Provided Level 2 support for internal applications, acting as a key contact point for users, handling implementation requests and troubleshooting',
    ],
    technologies: [],
    companyUrl: '',
  },
  {
    id: 'sbtech',
    company: 'SBTech',
    position: 'Software Developer',
    startDate: 'Oct 2015',
    endDate: 'May 2017',
    description: 'Software Developer collaborating on software solutions',
    achievements: [
      'Collaborated with senior software engineers and cross-functional teams to design, develop, test, and maintain software solutions',
      'Participated in code reviews to ensure code quality and shared knowledge with team members',
      'Assisted in the identification and resolution of software defects and issues, including debugging and troubleshooting',
    ],
    technologies: [],
    companyUrl: '',
  },
];

export const skills: Skill[] = [
  {
    id: 'core-pm',
    category: 'Core PM Skills',
    skills: ['Product Strategy', 'Roadmapping', 'User Research', 'Market Analysis', 'OKRs', 'Agile'],
  },
  {
    id: 'growth',
    category: 'Growth & Analytics',
    skills: ['Data Analysis', 'A/B Testing', 'User Retention', 'Funnel Optimization', 'Growth Strategy', 'SQL'],
  },
  {
    id: 'technical',
    category: 'Technical Skills',
    skills: ['API Design', 'SQL', 'Jira', 'Figma', 'Analytics Platforms', 'Web Development'],
  },
  {
    id: 'expertise',
    category: 'Domain Expertise',
    skills: ['Fintech', 'Payments', 'B2B', 'B2C', 'Cloud', 'Enterprise Software'],
  },
];

export const certificates: Certificate[] = [
  {
    id: 'pm-cert',
    name: 'Reforge Product Management Certificate',
    issuer: 'Reforge',
    date: '2021',
    credentialUrl: 'https://reforge.com',
  },
  {
    id: 'analytics-cert',
    name: 'Google Analytics Certification',
    issuer: 'Google',
    date: '2020',
    credentialUrl: 'https://google.com',
  },
];

export const education: Education[] = [
  {
    id: 'durham',
    school: 'Durham University',
    degree: 'Bachelor of Science',
    field: 'Mathematics',
    graduationYear: '',
  },
  {
    id: 'telerik',
    school: 'Telerik Academy',
    degree: 'Coding and Digital Training',
    field: '',
    graduationYear: '',
  },
];

import { WorkExperience, Certificate, Education, Skill } from './types';

export const workExperience: WorkExperience[] = [
  {
    id: 'ascent',
    company: 'Ascent',
    position: 'Product Manager',
    startDate: 'Nov 2022',
    endDate: 'Present',
    description: 'Leading product strategy and development for enterprise software platform',
    achievements: [
      'Increased user retention by 35% through feature optimization',
      'Launched 5+ major features impacting 50k+ users',
      'Led cross-functional team of 8+ engineers and designers',
      'Established product roadmap and OKR framework',
    ],
    technologies: ['Jira', 'Figma', 'SQL', 'Analytics', 'User Research'],
    companyUrl: 'https://ascentapp.com',
  },
  {
    id: 'neoshare',
    company: 'Neoshare',
    position: 'Senior Product Manager',
    startDate: 'Jun 2020',
    endDate: 'Oct 2022',
    description: 'Owned product strategy and execution for fintech platform',
    achievements: [
      'Grew user base from 100k to 500k in 18 months',
      'Implemented data-driven product discovery process',
      'Built and scaled product team from 2 to 6 PMs',
      'Led successful Series B fundraising process',
    ],
    technologies: ['Product Strategy', 'User Research', 'A/B Testing', 'Growth', 'Agile'],
    companyUrl: 'https://neoshare.com',
  },
  {
    id: 'stripe',
    company: 'Stripe',
    position: 'Product Manager, Payment Flows',
    startDate: 'Jan 2019',
    endDate: 'May 2020',
    description: 'Managed payment processing and checkout experiences',
    achievements: [
      'Reduced checkout abandonment by 12% through UX improvements',
      'Launched new payment method supporting 30+ currencies',
      'Improved developer experience for 10k+ API users',
      'Conducted extensive user research across 5 countries',
    ],
    technologies: ['Payments', 'API Design', 'Analytics', 'Compliance', 'International Growth'],
    companyUrl: 'https://stripe.com',
  },
  {
    id: 'google',
    company: 'Google',
    position: 'Associate Product Manager',
    startDate: 'Jul 2017',
    endDate: 'Dec 2018',
    description: 'Worked on Google Cloud Platform products and developer tools',
    achievements: [
      'Led launch of 2 new developer-facing products',
      'Improved platform adoption by 25% through onboarding redesign',
      'Conducted user research with 50+ enterprise customers',
      'Collaborated with engineering on technical strategy',
    ],
    technologies: ['Cloud', 'Developer Products', 'B2B', 'Product Strategy', 'Analytics'],
    companyUrl: 'https://google.com',
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
    id: 'stanford',
    school: 'Stanford University',
    degree: 'Master of Science',
    field: 'Computer Science',
    graduationYear: '2017',
  },
  {
    id: 'berkeley',
    school: 'UC Berkeley',
    degree: 'Bachelor of Science',
    field: 'Engineering',
    graduationYear: '2015',
  },
];

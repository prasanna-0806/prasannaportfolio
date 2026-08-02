export const personalInfo = {
  name: 'Prasanna RDL',
  tagline: 'Full-Stack Developer & AI Engineer',
  roles: [
    'Full-Stack Developer',
    'Backend Systems Builder',
    'AI Integration Engineer',
    'API Designer',
  ],
  bio: 'Third-year CS student at GITAM University building production-grade full-stack systems with secure APIs and scalable architecture, while using AI where it adds clear product value.',
  email: 'eduprasanna0013@gmail.com',
  phone: '+91 9989296024',
  github: 'https://github.com/prasanna-0806',
  linkedin: 'https://linkedin.com/in/prasanna-rdl',
  gpa: '8.77',
  university: 'GITAM University',
  degree: 'B.Tech, Computer Science Engineering',
  graduationYear: '2027',
  location: 'Visakhapatnam, India',
}

export const skillCategories = [
  {
    name: 'Programming',
    icon: 'ph:code',
    color: '#00d4ff',
    skills: ['Python', 'C', 'Java'],
  },
  {
    name: 'Web',
    icon: 'ph:layout',
    color: '#FB9B8F',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    name: 'Backend',
    icon: 'ph:terminal-window',
    color: '#3b82f6',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    name: 'Databases',
    icon: 'ph:database',
    color: '#10b981',
    skills: ['SQL', 'PostgreSQL', 'Supabase'],
  },
  {
    name: 'AI/ML',
    icon: 'ph:brain',
    color: '#f59e0b',
    skills: ['Scikit-learn', 'LLM API Integration'],
  },
  {
    name: 'Tools',
    icon: 'ph:toolbox',
    color: '#8b5cf6',
    skills: ['Git', 'GitHub', 'Postman', 'Swagger'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Finance Dashboard System',
    period: 'Mar 2026 – Apr 2026',
    description:
      'Developed a full-stack financial management platform using Node.js, Express.js, PostgreSQL, and JavaScript with role-based access for different user types.',
    impact: 'Built REST APIs for financial record CRUD operations, search/filtering, and dashboard analytics. Implemented JWT-based authentication and role-based authorization using Express middleware, with Swagger for API documentation and testing.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JavaScript', 'JWT', 'Swagger'],
    github: 'https://github.com/prasanna-0806',
    demo: null,
    color: '#00d4ff',
    icon: 'ph:chart-line-up',
  },
  {
    id: 2,
    title: 'Smart Air Monitor',
    period: 'Mar 2026',
    description:
      'Built an IoT air-quality monitoring system using ESP32, DHT22, and MQ135 sensors, sending environmental readings to Supabase via HTTP.',
    impact: 'Developed a React dashboard to visualize temperature, humidity, gas levels, and near-real-time air-quality readings. Integrated a FastAPI prediction service using a pre-trained scikit-learn model to provide gas-level predictions and air-quality insights.',
    tech: ['React', 'FastAPI', 'ESP32', 'DHT22', 'MQ135', 'Supabase', 'Scikit-learn'],
    github: 'https://github.com/prasanna-0806/air-monitor-website',
    demo: null,
    color: '#FB9B8F',
    icon: 'ph:wind',
  },
  {
    id: 3,
    title: 'Dark Sky Finder',
    period: 'Dec 2025 – Jan 2026',
    description:
      'Developed a React and Leaflet-based stargazing application integrating AQI, sky-viewability, and light-pollution data for location-based analysis.',
    impact: 'Implemented a combined scoring system to evaluate stargazing suitability based on environmental and atmospheric conditions. Integrated Gemini 2.0 Flash through an Express backend for astronomy-related conversational assistance and location-based queries.',
    tech: ['React', 'Leaflet', 'Express', 'Gemini 2.0 Flash', 'AQI', 'REST APIs'],
    github: 'https://github.com/prasanna-0806',
    demo: 'https://dark-sky-finder.vercel.app/',
    color: '#7c3aed',
    icon: 'ph:moon-stars',
  },
]

export const experience = [
  {
    role: 'Developer Intern',
    company: 'Patch ID',
    period: 'May 2026 – July 2026',
    bullets: [
      'Contributed to frontend development of dashboard interfaces using React, Next.js, and TypeScript based on Figma designs.',
      'Developed reusable UI components for contributor analytics, project tracking, and onboarding workflows.',
      'Worked with Supabase-backed application data to integrate dynamic content into dashboard interfaces.',
      'Collaborated with the development team using Git, GitHub, pull requests, and code reviews.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Git', 'GitHub'],
    color: '#00d4ff',
  },
]

export const leadershipRoles = [
  {
    role: 'President',
    organization: 'GITAM Aero Astro Club',
    period: 'Present',
    bullets: [
      'Leading a 20+ member team in organizing technical workshops, hackathons, astronomy activities, and outreach programs.',
      'Coordinating club teams across event planning, technical activities, promotions, and member engagement.',
    ],
    icon: 'ph:rocket-launch',
  },
  {
    role: 'Technical Member',
    organization: 'SHORe Fest, GITAM',
    period: '2026',
    bullets: ['Contributed to the planning and coordination of technical workshops, hackathons, and student events.'],
    icon: 'ph:gear-six',
  },
  {
    role: 'Recreational Member',
    organization: 'SHORe Fest, GITAM',
    period: '2025',
    bullets: ['Supported recreational activities, event logistics, and on-ground coordination.'],
    icon: 'ph:target',
  },
]

export const hackathons = [
  { name: 'InnovAIthon 2026 (AdaFit — AI-assisted fitness application)', host: 'IIT Hyderabad', result: 'Top 5', icon: 'ph:trophy' },
  { name: 'Idea Sprint 3.0 2026', host: 'Directorate of Training, Mentoring & Career Guidance, GCGC GITAM', result: 'Participant', icon: 'ph:lightbulb-filament' },
  { name: 'AP Space Tech Summit 2026 (Showcased Dark Sky Finder)', host: 'Vignan University, Guntur', result: 'Participant', icon: 'ph:planet' },
  { name: 'TechXcelerate 2025', host: 'BITS Hyderabad', result: 'Participant', icon: 'ph:lightning' },
]

export const certifications = [
  { name: 'Technology Job Simulation', issuer: 'Deloitte (via Forage)', icon: 'ph:briefcase', credentialUrl: '/certificates/deloittecertificate.pdf' },
  { name: 'Full-Stack Web Development', issuer: 'Udemy', icon: 'ph:globe', credentialUrl: '/certificates/webd%20course%20certificiate%20(1).pdf' },
  { name: 'Networking Fundamentals', issuer: 'Cisco', icon: 'ph:wifi-high', credentialUrl: '/certificates/networking_basics.pdf' },
  { name: 'Java Programming', issuer: 'Coursera', icon: 'ph:coffee', credentialUrl: '/certificates/introduction_to_java.pdf' },
  { name: 'Python Programming', issuer: 'Internshala', icon: 'ph:code', credentialUrl: '/certificates/programming_with_python.pdf' }
]

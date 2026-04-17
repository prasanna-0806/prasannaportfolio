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
  gpa: '8.73',
  university: 'GITAM University',
  degree: 'B.Tech Computer Science Engineering',
  graduationYear: '2027',
  location: 'Visakhapatnam, India',
}

export const skillCategories = [
  {
    name: 'Languages',
    icon: 'ph:code',
    color: '#00d4ff',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C'],
  },
  {
    name: 'Frontend',
    icon: 'ph:layout',
    color: '#FB9B8F',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Recharts'],
  },
  {
    name: 'Backend',
    icon: 'ph:terminal-window',
    color: '#3b82f6',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'JWT Auth', 'RBAC'],
  },
  {
    name: 'Databases',
    icon: 'ph:database',
    color: '#10b981',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Redis'],
  },
  {
    name: 'Machine Learning',
    icon: 'ph:brain',
    color: '#f59e0b',
    skills: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Model Evaluation'],
  },
  {
    name: 'AI & Deep Learning',
    icon: 'ph:robot',
    color: '#D44070',
    skills: ['TensorFlow', 'PyTorch', 'Ultralytics YOLO', 'OpenCV', 'Computer Vision', 'LLM Integration'],
  },
  {
    name: 'IoT & Embedded',
    icon: 'ph:cpu',
    color: '#ef4444',
    skills: ['ESP32', 'Arduino IDE', 'MQ135', 'DHT22', 'UART'],
  },
  {
    name: 'Tools & Platforms',
    icon: 'ph:toolbox',
    color: '#8b5cf6',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'Render', 'Swagger'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'FinanceOS Dashboard',
    period: 'Mar – Apr 2026',
    description:
      'A full-stack financial platform featuring strict role-based access control (RBAC), secure record management, and real-time analytics. Built to handle complex, multi-tier user permissions securely.',
    impact: 'Engineered custom JWT middleware and automated PostgreSQL triggers to enforce strict multi-tier authorization.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    github: 'https://github.com/prasanna-0806',
    demo: 'https://finance-dashboard-system-5noe.onrender.com/html/login.html',
    color: '#00d4ff',
    icon: 'ph:chart-line-up',
  },
  {
    id: 2,
    title: 'Smart Air Monitor',
    period: 'Mar 2026',
    description:
      'An end-to-end IoT and machine learning system. Custom ESP32 hardware streams live environmental data to a cloud database, powering a real-time React dashboard and predictive API.',
    impact: 'Deployed a Random Forest ML model via FastAPI, achieving 97.5% accuracy in predicting future gas levels.',
    tech: ['React', 'FastAPI', 'ESP32', 'Supabase', 'Scikit-learn'],
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
      'A geospatial web application for stargazers. It aggregates real-time Air Quality Index (AQI), light pollution metrics, and astronomical weather to score the ultimate stargazing locations.',
    impact: 'Integrated Gemini 2.0 Flash to create a context-aware conversational AI for dynamic astronomical recommendations.',
    tech: ['React', 'Express', 'Gemini AI', 'Leaflet', 'REST APIs'],
    github: 'https://github.com/prasanna-0806',
    demo: 'https://dark-sky-finder.vercel.app/',
    color: '#7c3aed',
    icon: 'ph:moon-stars',
  },
]

export const experience = [
  {
    role: 'AI/ML Intern',
    company: 'Avalanche Labs',
    period: 'Aug – Oct 2025',
    bullets: [
      'Built a real-time traffic analytics pipeline with Ultralytics YOLO + OpenCV for object detection, tracking, and class-wise vehicle counting from video streams.',
      'Developed scenario-based traffic intelligence modules for queue density, lane-level congestion clustering, and ETA estimation to support signal planning decisions.',
      'Implemented phased signal-control reconstruction workflows on TFRecord traffic scenarios, including preprocessing, configurable phase logic, and visual simulation outputs.',
    ],
    tech: ['Python', 'OpenCV', 'Ultralytics YOLO', 'TensorFlow', 'NumPy', 'Matplotlib'],
    color: '#00d4ff',
  },
]

export const leadershipRoles = [
  {
    role: 'President',
    organization: 'GITAM Aero Astro Club',
    period: 'Present',
    bullets: [
      'Set the club vision and strategic direction, ensuring initiatives align with GAAC goals and values.',
      'Lead and coordinate the executive team, delegate responsibilities, and oversee end-to-end execution of events, workshops, and flagship initiatives.',
      'Represent GAAC in official forums and build collaborations with external organizations, campus bodies, and partners.',
      'Maintain clear communication across members, faculty, and stakeholders while fostering an inclusive, high-participation culture.',
      'Drive continuous improvement through post-event reviews, process refinement, and operational planning for sustained club growth.',
    ],
    icon: 'ph:rocket-launch',
  },
  {
    role: 'Technical Member',
    organization: "SHORe Fest, GITAM",
    period: '2026',
    bullets: ["Supported execution of technical events at GITAM's flagship fest"],
    icon: 'ph:gear-six',
  },
  {
    role: 'Recreational Member',
    organization: "SHORe Fest, GITAM",
    period: '2025',
    bullets: ['Assisted in coordinating recreational event segments'],
    icon: 'ph:target',
  },
]

export const hackathons = [
  { name: 'InnovAIthon 2026', host: 'IIT Hyderabad', result: 'Top 5th', icon: 'ph:trophy' },
  { name: 'Idea Sprint 3.0 2026', host: 'Directorate of Training, Mentoring & Career Guidance, GCGC GITAM', result: 'Participant', icon: 'ph:lightbulb-filament' },
  { name: 'AP Space Tech Summit 2026', host: 'Vignan University, Guntur', result: 'Participant', icon: 'ph:planet' },
  { name: 'TechXcelerate 2025', host: 'BITS Hyderabad', result: 'Participant', icon: 'ph:lightning' },
]

export const certifications = [
  { name: 'Full-Stack Web Development', issuer: 'Udemy', icon: 'ph:globe', credentialUrl: '/certificates/webd%20course%20certificiate%20(1).pdf' },
  { name: 'Networking Fundamentals', issuer: 'Cisco', icon: 'ph:wifi-high', credentialUrl: '/certificates/networking_basics.pdf' },
  { name: 'Java Programming', issuer: 'Coursera', icon: 'ph:coffee', credentialUrl: '/certificates/introduction_to_java.pdf' },
  { name: 'Python Programming', issuer: 'Internshala', icon: 'ph:code', credentialUrl: '/certificates/programming_with_python.pdf' },
]

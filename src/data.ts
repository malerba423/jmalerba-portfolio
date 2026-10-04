export interface Job {
  company: string
  title: string
  location: string
  dates: string
  tech: string[]
  bullets: string[]
}

export interface Project {
  title: string
  context: string
  description: string
  tech: string[]
  github: string | null
  live: string | null
  proprietary: boolean
}

export const experience: Job[] = [
  {
    company: 'Transition Bike Company',
    title: 'Software Engineer',
    location: 'Bellingham, WA',
    dates: 'Apr 2021 – Sep 2026',
    tech: ['React', 'NodeJS', 'Adobe ColdFusion', 'Socket.IO', 'Stripe', 'PostgreSQL'],
    bullets: [
      'Primary engineer on a two-person team alongside the owner — owned systems such as the food truck POS and a centralized print service end to end: development, deployment, SSL certificate issuance and renewal, and ongoing support.',
      'Built and maintained customer-facing and internal web applications using React and NodeJS alongside Adobe ColdFusion legacy services.',
      'Built a full POS and kitchen order ticketing system from scratch — React/Node with Socket.IO for real-time order status between the cashier screen and kitchen display.',
      'Implemented PCI-compliant payment processing for both the food truck POS and the Transition Bikes e-commerce platform.',
      'Built a centralized NodeJS print service, hosted on an on-premises server, used across the business to send receipts and labels to multiple thermal receipt and label printers.',
      'Wrote scheduled PowerShell and Bash health checks for the POS front end, POS back end, and print service that polled each uptime endpoint and automatically restarted any service that failed to respond.',
      'Worked closely with product and marketing to ship features and improvements across the e-commerce platform and dealer-facing portal.',
    ],
  },
  {
    company: 'Travelers Insurance',
    title: 'Software Engineer I',
    location: 'Hartford, CT (remote)',
    dates: 'Dec 2020 – Apr 2021',
    tech: ['JavaScript', 'React', 'NodeJS'],
    bullets: [
      'Built internal tooling and web applications within a large enterprise engineering organization.',
      'Gained experience working at scale — large codebases, formal code review, and enterprise-grade organizational patterns.',
    ],
  },
  {
    company: 'Mobile22',
    title: 'Fullstack Engineer & Team Lead',
    location: 'Madison, WI',
    dates: 'Jan 2020 – Dec 2020',
    tech: ['React', 'Redux', 'NodeJS', 'Jest', 'PostgreSQL', 'AWS', 'Azure DevOps'],
    bullets: [
      'Full-stack development across applications and microservices in an electric rideshare platform — DB design, APIs, and UI/state management.',
      'Implemented SSO, single-use password-reset tokens, reCAPTCHA, and server-sent events for real-time data delivery to client applications.',
      'Practiced test-driven development with Jest — responsible for writing the test cases at the start of each feature, before implementation began.',
      'Promoted to team lead: backlog ownership, developer/intern management, deadline delivery, tech debt tracking, and SLA response.',
      'Set up CI/CD pipelines in Azure DevOps with automated unit test execution and pass/fail reporting on every build.',
    ],
  },
  {
    company: 'Trek Bicycle Co.',
    title: 'PLM Software Engineer',
    location: 'Waterloo, WI',
    dates: 'Apr 2015 – Aug 2019',
    tech: ['Java', 'TCL', 'MQL', 'MSSQL', 'Jenkins', 'Subversion'],
    bullets: [
      'Extended enterprise PLM software (Dassault 3DExperience) for engineering, product development, and supply chain teams.',
      'Led a major version upgrade — new server architecture, schema and custom code changes, licensing restructure, and data migration.',
      'Built ETL pipelines and reporting tools to give teams real-time and scheduled access to production data across the business.',
    ],
  },
  {
    company: 'Epic Systems',
    title: 'BI Software Developer',
    location: 'Madison, WI',
    dates: 'Aug 2013 – Apr 2015',
    tech: ['Java', 'MSSQL'],
    bullets: [
      'Developed specialized reports for aggregated healthcare data spanning all phases of the SDLC.',
      'Built tools used by healthcare organizations to recognize, track, and address trends in patient registration data.',
    ],
  },
]

export const education = {
  school: 'University of Miami',
  year: '2013',
  degree: 'Bachelors in Computer Science, Finance',
  details: 'Minor in Graphic Design · GPA 3.9/4.0',
}

export const skills: Record<string, string[]> = {
  'Languages & Frameworks': [
    'JavaScript / ES6', 'TypeScript', 'React', 'Redux / Redux Toolkit',
    'NodeJS', 'Express', 'Adobe ColdFusion',
    'Socket.IO', 'Stripe', 'Knex',
    'Jest', 'Test-Driven Development',
    'PostgreSQL', 'MSSQL', 'Java',
    'Bash', 'PowerShell', 'TCL / MQL',
  ],
  'DevOps & Infrastructure': [
    'Docker', 'AWS (RDS, S3, Elastic Beanstalk)',
    'Azure DevOps', 'Jenkins CI',
    'Git / Subversion', 'Apache / Tomcat',
    'AI-Assisted Development (Claude Code)',
  ],
  'Domain Expertise': [
    'POS Systems Design', 'PCI-Compliant Payments',
    'Order Management Systems', 'E-Commerce Platforms',
    'Warehousing & Inventory', 'Dealer & B2B Portals',
    'Product Lifecycle Management', 'ETL & Business Reporting',
    'Real-Time Event Systems', 'RESTful API Design',
  ],
}

export const projects: Project[] = [
  {
    title: 'Food Truck POS & Kitchen Ticketing',
    context: 'Transition Bike Company',
    description: 'Greenfield point-of-sale and kitchen order display system. Orders flow from cashier to kitchen in real time via Socket.IO. PCI-compliant card processing via Stripe Terminal.',
    tech: ['NodeJS', 'React', 'Socket.IO', 'Stripe', 'PostgreSQL'],
    github: null,
    live: null,
    proprietary: true,
  },
  {
    title: 'Rideshare Rider & Driver Apps',
    context: 'Mobile22',
    description: 'React/Redux SPAs for booking electric vehicle rides and managing driver workflows, backed by a NodeJS/Express service layer deployed on AWS Elastic Beanstalk with CI/CD via Azure DevOps.',
    tech: ['React', 'Redux', 'NodeJS', 'Jest', 'PostgreSQL', 'AWS'],
    github: null,
    live: null,
    proprietary: true,
  },
]

export const profile = {
  name: 'Joel Malerba',
  title: 'Full-Stack Software Engineer',
  email: 'malerba423@gmail.com',
  website: 'jmalerba.dev',
  bio: '13 years building production systems across e-commerce, transportation, healthcare, and the bike industry. React & Node on the daily — with a solid grounding in the messy back-office systems that actually run businesses.',
}

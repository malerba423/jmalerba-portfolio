export interface Job {
  company: string;
  title: string;
  location: string;
  dates: string;
  /** First and last month in the role, as YYYY-MM. Drives the timeline chart. */
  start: string;
  end: string;
  tech: string[];
  /** Entries from `skills` that were in use in this role. Highlighted on the timeline. */
  skills: string[];
  bullets: string[];
}

export interface Project {
  title: string;
  context: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  proprietary: boolean;
}

export const experience: Job[] = [
  {
    company: 'Transition Bicycle Company',
    title: 'Fullstack Software Engineer',
    location: 'Bellingham, WA',
    dates: 'Apr 2021 – Sep 2026',
    start: '2021-04',
    end: '2026-09',
    tech: [
      'React',
      'NodeJS',
      'Adobe ColdFusion',
      'Socket.IO',
      'Stripe',
      'MSSQL',
      'PostgreSQL',
      'AI-Assisted Development',
    ],
    skills: [
      'JavaScript',
      'React',
      'NodeJS',
      'Adobe ColdFusion',
      'Socket.IO',
      'Stripe',
      'PostgreSQL',
      'MSSQL',
      'Bash',
      'PowerShell',
      'AI-Assisted Development (Claude Code)',
      'POS Systems Design',
      'PCI-Compliant Payments',
      'E-Commerce Platforms',
      'Dealer & B2B Portals',
      'Real-Time Event Systems',
      'RESTful API Design',
      'Warehousing & Inventory',
      'Order Management Systems',
      'Git / Subversion',
    ],
    bullets: [
      'Led development of the e-commerce webstore checkout. Owned the purchase flow from checkout to payment processing and order entry as well as to order fulfillment and shipping integrations.',
      'Sole developer of the food truck’s point-of-sale and kitchen order ticketing system. Designed, built and maintained it end to end, from order entry and payment to real-time ticket routing to the kitchen.',
      'Owned the inventory count workflow from design through rollout, replacing manual counts with a system that improved stock accuracy.',
      'Built and owned the return merchandise (RMA) process, which streamlined how returns were logged, tracked and restocked for customer service and warehouse staff.',
      'Acted as the primary technical owner across several business-critical systems. Gathered requirements directly from stakeholders, made datastructure and architecture decisions, and supported the systems in production.',
    ],
  },
  {
    company: 'Travelers Insurance',
    title: 'Software Engineer I',
    location: 'Hartford, CT (remote)',
    dates: 'Dec 2020 – Apr 2021',
    start: '2020-12',
    end: '2021-04',
    tech: ['JavaScript', 'React', 'NodeJS'],
    skills: ['JavaScript', 'React', 'NodeJS'],
    bullets: [
      'Built internal tooling and web applications within a large enterprise engineering organization.',
      'Gained further experience working at scale with larger codebases, more formal code review processes, and enterprise-grade organizational patterns.',
    ],
  },
  {
    company: 'Mobile22',
    title: 'Fullstack Engineer & Team Lead',
    location: 'Madison, WI',
    dates: 'Jan 2020 – Dec 2020',
    start: '2020-01',
    end: '2020-12',
    tech: [
      'React',
      'Redux',
      'NodeJS',
      'Jest',
      'PostgreSQL',
      'AWS',
      'Azure DevOps',
    ],
    skills: [
      'JavaScript',
      'React',
      'Redux / Redux Toolkit',
      'NodeJS',
      'Express',
      'Jest',
      'Test-Driven Development',
      'PostgreSQL',
      'AWS (RDS, S3, Elastic Beanstalk)',
      'Azure DevOps',
      'Real-Time Event Systems',
      'RESTful API Design',
    ],
    bullets: [
      'Full-stack development across applications and microservices in an electric rideshare platform — DB design, APIs, and UI/state management.',
      'Implemented SSO, single-use password-reset tokens, reCAPTCHA, and server-sent events for real-time data delivery to client applications.',
      'Practiced test-driven development with Jest — responsible for writing the test cases at the start of each feature, before implementation began.',
      'Promoted to team lead: backlog ownership, developer/intern management, deadline delivery, tech debt tracking, and SLA response.',
      'Set up CI/CD pipelines in Azure DevOps with automated unit test execution and pass/fail reporting on every build.',
    ],
  },
  {
    company: 'Trek Bicycle Company',
    title: 'PLM Software Engineer',
    location: 'Waterloo, WI',
    dates: 'Apr 2015 – Aug 2019',
    start: '2015-04',
    end: '2019-08',
    tech: ['Java', 'TCL', 'MQL', 'MSSQL', 'Jenkins', 'Subversion'],
    skills: [
      'Java',
      'TCL / MQL',
      'MSSQL',
      'Jenkins CI',
      'Git / Subversion',
      'Product Lifecycle Management',
      'ETL & Business Reporting',
    ],
    bullets: [
      'Extended enterprise enterprise product lifecycle management software (Dassault 3DExperience) for engineering, product development, and supply chain teams.',
      'Led a major version upgrade — new server architecture, schema and custom code changes, licensing restructure, and data migration.',
      'Built ETL pipelines and reporting tools to give teams real-time and scheduled access to production data across business platforms.',
    ],
  },
  {
    company: 'Epic Systems',
    title: 'Business Intelligence Software Developer',
    location: 'Madison, WI',
    dates: 'Aug 2013 – Apr 2015',
    start: '2013-08',
    end: '2015-04',
    tech: ['Java', 'MSSQL'],
    skills: ['Java', 'MSSQL', 'ETL & Business Reporting'],
    bullets: [
      'Developed specialized reports for aggregated healthcare data spanning all phases of the software development lifecycle.',
      'Built tools used by healthcare organizations to recognize and track trends in patient registration data to better serve patient populations and better steer decision-making.',
    ],
  },
];

export const education = {
  school: 'University of Miami',
  year: '2013',
  degree: 'B.S. in Computer Science and Finance',
  details: 'Minor in Graphic Design · GPA 3.9/4.0',
};

export const skills: Record<string, string[]> = {
  'Languages & Frameworks': [
    'JavaScript',
    'TypeScript',
    'React',
    'Redux / Redux Toolkit',
    'NodeJS',
    'Express',
    'Adobe ColdFusion',
    'Socket.IO',
    'Stripe',
    'Knex',
    'Jest',
    'Test-Driven Development',
    'PostgreSQL',
    'MSSQL',
    'Java',
    'Bash',
    'PowerShell',
    'TCL / MQL',
  ],
  'DevOps & Infrastructure': [
    'Docker',
    'AWS (RDS, S3, Elastic Beanstalk)',
    'Azure DevOps',
    'Jenkins CI',
    'Git / Subversion',
    'Apache / Tomcat',
    'AI-Assisted Development (Claude Code)',
  ],
  'Domain Expertise': [
    'POS Systems Design',
    'PCI-Compliant Payments',
    'Order Management Systems',
    'E-Commerce Platforms',
    'Warehousing & Inventory',
    'Dealer & B2B Portals',
    'Product Lifecycle Management',
    'ETL & Business Reporting',
    'Real-Time Event Systems',
    'RESTful API Design',
  ],
};

export const projects: Project[] = [
  {
    title: "Joel's Garage & Tinkerings",
    context: 'Personal project',
    description:
      'A catalog of furniture and other things I build in my garage. Each piece has a photo gallery, a part number, and its sale status, and visitors can claim a piece or send a commission request without a backend: the forms open a pre-filled email.',
    tech: ['React', 'TypeScript', 'React Router', 'Vite', 'Render'],
    github: 'https://github.com/malerba423/joels-garage-and-tinkerings',
    live: 'https://jmalerba.dev/projects/garage',
    proprietary: false,
  },
  {
    title: 'Window Seat',
    context: 'Personal project',
    description:
      'Tells you which side of the plane to sit on for the view. Computes the flight path, nearby landmarks, and sun position for a route and departure time. Unit-tested TypeScript core, hosted on Azure Static Web Apps with infrastructure defined in Bicep.',
    tech: ['React', 'TypeScript', 'Vitest', 'Azure Static Web Apps', 'Bicep'],
    github: 'https://github.com/malerba423/window-seat',
    live: 'https://jmalerba.dev/projects/windowseat',
    proprietary: false,
  },
  {
    title: 'Food Truck POS & Kitchen Ticketing',
    context: 'Transition Bike Company',
    description:
      'Greenfield point-of-sale and kitchen order display system. Orders flow from cashier to kitchen in real time via Socket.IO. PCI-compliant card processing via Stripe Terminal.',
    tech: ['NodeJS', 'React', 'Socket.IO', 'Stripe', 'PostgreSQL'],
    github: null,
    live: null,
    proprietary: true,
  },
  {
    title: 'Rideshare Rider & Driver Apps',
    context: 'Mobile22',
    description:
      'React/Redux SPAs for booking electric vehicle rides and managing driver workflows, backed by a NodeJS/Express service layer deployed on AWS Elastic Beanstalk with CI/CD via Azure DevOps.',
    tech: ['React', 'Redux', 'NodeJS', 'Jest', 'PostgreSQL', 'AWS'],
    github: null,
    live: null,
    proprietary: true,
  },
];

export const profile = {
  name: 'Joel Malerba',
  title: 'Full-Stack Software Engineer',
  email: 'malerba423@gmail.com',
  phone: '(518) 881-8563',
  website: 'jmalerba.dev',
  headline: { emphasis: '13 years', rest: 'building production systems.' },
  intro:
    'Across e-commerce, transportation, healthcare, and the bike industry. React & Node on the daily — with a solid grounding in the messy back-office systems that actually run businesses.',
  bio: '13 years building production systems across e-commerce, transportation, healthcare, and the bike industry. React & Node on the daily — with a solid grounding in the messy back-office systems that actually run businesses.',
};

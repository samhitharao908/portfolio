// gitprofile.config.ts
// Paste this over the file in your forked repo, then commit to main.

const CONFIG = {
  github: {
    username: 'samhitharao908', // only required field
  },

  /**
   * URL rules:
   * - Repo named samhitharao908.github.io  →  base: '/'
   *   Live site: https://samhitharao908.github.io/
   * - Repo named portfolio                 →  base: '/portfolio/'
   *   Live site: https://samhitharao908.github.io/portfolio/
   */
  base: '/portfolio/',

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic', // switch to 'manual' once you pin specific repos
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
          // later you can hide old coursework, e.g.:
          // projects: ['samhitharao908/Data-visualisation-using-tableau'],
        },
      },
      manual: {
        projects: [
          // Fill these after the repos exist, then set mode: 'manual'
          // 'samhitharao908/graph-rag-hybrid-retrieval',
          // 'samhitharao908/mini-orchestrator',
          // 'samhitharao908/gentute',
        ],
      },
    },
    external: {
      header: 'Featured Work',
      projects: [
        {
          title: 'Graph-RAG Hybrid Retrieval',
          description:
            'Knowledge graph + vector search architecture (Neo4j, FAISS, LangChain) with advanced chunking. Built to raise factual accuracy and reduce LLM hallucinations in production workflows.',
          imageUrl:
            'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
          link: 'https://github.com/samhitharao908',
        },
        {
          title: 'Mini Orchestrator',
          description:
            'Lightweight multi-agent framework with LangGraph / CrewAI, FastAPI, Redis-backed state, tool calling, Docker, and human-in-the-loop support for reliable LLM agents.',
          imageUrl:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
          link: 'https://github.com/samhitharao908',
        },
        {
          title: 'GENTUTE',
          description:
            'End-to-end NLP pipeline that turns unstructured text into structured JSON and visual tutorials. Published conference paper (INOCON 2023).',
          imageUrl:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
          link: 'https://github.com/samhitharao908',
        },
      ],
    },
  },

  seo: {
    title: 'N R Samhitha Rao | AI Engineer',
    description:
      'AI Engineer specializing in production RAG pipelines, LLM multi-agent systems, and Kubernetes-orchestrated microservices. 3+ years building GenAI platforms at PwC.',
    imageURL: '',
  },

  social: {
    linkedin: 'samhitharaonr',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'samhitharao908@gmail.com',
  },

  resume: {
    // After you upload Resume.pdf into the repo `public/` folder, use:
    // fileUrl: 'https://samhitharao908.github.io/portfolio/Resume.pdf',
    // Leave empty to hide the Download Resume button for now.
    fileUrl: '',
  },

  skills: [
    'Python',
    'RAG Pipelines',
    'LangChain',
    'LangGraph',
    'CrewAI',
    'Hybrid Retrieval',
    'FAISS',
    'OpenSearch',
    'Pinecone',
    'Neo4j',
    'Prompt Engineering',
    'Guardrails',
    'LLM Evaluation',
    'Multi-Agent Systems',
    'gRPC',
    'FastAPI',
    'Kubernetes',
    'Amazon EKS',
    'Helm',
    'Docker',
    'AWS',
    'Redis',
    'SQL',
    'Azure',
    'Terraform-ready / IaC curiosity',
  ],

  experiences: [
    {
      company: 'PwC',
      position: 'Senior Associate | AI Engineer (RAG & LLM Integrations)',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://www.pwc.com',
    },
    {
      company: 'PwC',
      position: 'Data Scientist',
      from: 'January 2023',
      to: 'July 2023',
      companyLink: 'https://www.pwc.com',
    },
    {
      company: 'Basel Practitioners Private Ltd',
      position: 'Data Analyst',
      from: 'August 2022',
      to: 'December 2022',
      companyLink: '',
    },
  ],

  certifications: [],

  educations: [
    {
      institution: 'PES University, Bengaluru',
      degree: 'B.E. Computer Science (CGPA 8.02)',
      from: '2019',
      to: '2023',
    },
  ],

  publications: [
    {
      title: 'GENTUTE: NLP Pipeline for Text-to-Visual Tutorials',
      conferenceName: 'INOCON 2023',
      journalName: '',
      authors: 'N R Samhitha Rao et al.',
      link: '',
      description:
        'End-to-end Python NLP pipeline that converts unstructured text into structured JSON and visual tutorials using custom parsing and synthesis techniques.',
    },
  ],

  blog: {
    source: 'dev',
    username: '', // keep empty until you have a Medium or dev.to
    limit: 3,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'night',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'night',
      'business',
      'corporate',
      'dim',
      'nord',
      'dracula',
      'lofi',
      'winter',
    ],
  },

  footer:
    'Built with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>',

  enablePWA: true,
};

export default CONFIG;

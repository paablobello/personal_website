export const siteConfig = {
  name: "Pablo Bello",
  description: "Software Engineer & AI Student. I turn complex challenges into elegant and efficient solutions.",
  url: "https://pablobello.me",
  
  // Personal information
  personal: {
    name: "Pablo Bello",
    title: "Software Engineer & AI Student",
    email: "pablobellobarcon@gmail.com",
    location: "Boston, USA",
    timezone: "America/New_York",
    workingHours: "8:00–23:00 ET",
    bio: [
      "I'm a Master's in AI student at Boston University (merit scholarship), with a builder's mentality.",
      "My journey into software began at 16, building automation systems to acquire exclusive items. That early experience was my true introduction to software, sparking a passion for turning ideas into reality through code and building solutions to complex problems.",
      "Today, I channel that passion into an obsession with quality and detail. My goal is to combine my academic training in AI with a practical builder's mentality to create software that is both intelligent and genuinely delightful to use."
    ],
  },
  
  // Map locations
  locations: {
    from: {
      name: "A Coruña",
      country: "Spain",
      flag: "🇪🇸",
      coordinates: {
        longitude: -8.4115,
        latitude: 43.3623,
        zoom: 11
      }
    },
    current: {
      name: "Boston",
      country: "USA",
      flag: "🇺🇸",
      coordinates: {
        longitude: -71.0589,
        latitude: 42.3601,
        zoom: 11
      }
    }
  },
  
  // Social links
  links: {
    github: "https://github.com/paablobello",
    linkedin: "https://www.linkedin.com/in/pablo-bello-barcon/",
    email: "mailto:pablobellobarcon@gmail.com",
    cv: "/PabloBelloResume.pdf",
    x: "https://x.com/Paablobelloo",
  },
  
  // Skills
  skills: [
    "Python",
    "Machine Learning & AI",
    "Web Scraping",
    "Automation",
    "API Reverse Engineering",
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ],
  
  // Education
  education: [
    {
      title: "M.S. in Artificial Intelligence",
      institution: "Boston University",
      location: "Boston, USA",
      period: "Sep 2025 - Expected Dec 2026",
      description: "Master's in Artificial Intelligence. A graduate program centered on the theory and practical application of modern artificial intelligence. Awarded a merit-based scholarship for academic excellence.",
      highlights: [

      ]
    },
    {
      title: "B.S. in Computer Science",
      institution: "Universidad de Vigo",
      location: "Ourense, Spain",
      period: "2020 - 2024",
      description: "Bachelor's in Computer Science. A solid foundation in computer science fundamentals, including algorithms, data structures, database systems, software engineering principles, computer networks, and operating systems.",
      highlights: [
        "Ranked in the top 10% of the Computer Science School for outstanding academic performance.",
        "Thesis with Distinction (9.8/10): Developed 'Fake News Detector', a full-stack AI platform to combat social media misinformation.",
      ]
    },
  ],
  
  // Work experience
  experience: [
    {
      title: "AI Research Assistant",
      company: "University of Vigo (Remote)",
      period: "July 2025 - Present",
      description: "Contributing to a research paper on combating social media misinformation. I'm designing and building the core infrastructure for automated claim verification and evidence‑based response generation.",
      highlights: [
        "Engineering a Retrieval‑Augmented Generation (RAG) pipeline to perform automated claim verification on posts flagged as potential misinformation",
        "Building a scalable vector knowledge base using FAISS to index thousands of fact‑checked claims, enabling real‑time semantic search for evidence retrieval",
        "Integrating Large Language Models (LLMs) to synthesize retrieved evidence and generate concise, accurate rebuttal messages with source citations",
        "Developing data ingestion and end‑to‑end evaluation scripts to ensure the system's robustness and accuracy"
      ]
    },
    {
      title: "Freelance Automation Engineer",
      company: "Self‑employed (Remote)",
      period: "Dec 2020 - Sept 2024",
      description: "I design and build custom software solutions with a focus on high‑throughput process automation in competitive web environments. My work centers on engineering systems that operate with speed, reliability, and precision under massive traffic.",
      highlights: [
        "Engineered and deployed purchase‑automation bots for leading e‑commerce platforms, covering the full flow from product monitoring to checkout in milliseconds",
        "Implemented advanced anti‑bot evasion: CAPTCHA solving, browser‑fingerprint controls, and virtual‑queue navigation",
        "Created high‑speed monitors for drops and stock changes in real time using web scraping and reverse‑engineering of private APIs",
        "Managed network infrastructure with residential/datacenter proxy rotation to ensure high availability and avoid blocks"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "NTT Data",
      location: "",
      period: "Sep. 2023 - Dec. 2023",
      description: "Contributed to the modernization of CENPOS, a large-scale healthcare management platform. Focus on backend optimizations to improve scalability and data processing speed for critical operations.",
      highlights: [
        "Optimized and refactored microservices with J2EE and Spring, reducing average API response time by 30% and improving overall performance",
        "Engineered a high‑performance search solution with Elasticsearch, cutting average query latency from several seconds to under 200ms for complex datasets"
      ]
    },
  ],
  
  // Interests
  interests: {
    intro: "A few books, articles, and people I've enjoyed and think are worth checking out.",
    books: [
      {
        title: "The Mom Test",
        author: "Rob Fitzpatrick",
        url: "https://www.amazon.com/Mom-Test-customers-business-everyone/dp/1492180742"
      },
      {
        title: "The Hard Thing About Hard Things",
        author: "Ben Horowitz",
        url: "https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205"
      },
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        url: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555"
      },
      {
        title: "Superintelligence: Paths, Dangers, Strategies",
        author: "Nick Bostrom",
        url: "https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834"
      },
      {
        title: "The Changing World Order",
        author: "Ray Dalio",
        url: "https://www.amazon.com/Changing-World-Order-Nations-Succeed/dp/1982160276"
      },
      {
        title: "More Money Than God",
        author: "Sebastian Mallaby",
        url: "https://www.amazon.com/More-Money-Than-God-Relations/dp/0143119419"
      },
    ],
    articles: [
      {
        title: "How to Do Great Work",
        author: "Paul Graham",
        url: "http://paulgraham.com/greatwork.html"
      },
      {
        title: "The Cognition Stack for AI-native Companies",
        author: "Scott Belsky",
        url: "https://www.implications.com/p/the-cognition-stack-for-ai-native"
      },
      {
        title: "Do Things That Don't Scale",
        author: "Paul Graham",
        url: "http://paulgraham.com/ds.html"
      },
      {
        title: "Attention Is All You Need",
        author: "Vaswani et al.",
        url: "https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf"
      },
      {
        title: "AI Snake Oil",
        author: "Arvind Narayanan",
        url: "https://www.cs.princeton.edu/~arvindn/talks/MIT-STS-AI-snakeoil.pdf"
      },
      {
        title: "Stripe's Annual Letters",
        author: "Patrick & John Collison",
        url: "https://stripe.com/annual-updates/2024"
      },
    ],
    people: [
      {
        name: "Paul Graham",
        handle: "@paulg",
        url: "https://x.com/paulg",
        description: "Co-founder of Y Combinator; his essays are the essential playbook for building startups."
      },
      {
        name: "Patrick Collison",
        handle: "@patrickc",
        url: "https://x.com/patrickc",
        description: "Co-founder & CEO of Stripe, building the economic infrastructure for the internet."
      },
      {
        name: "Andrew Chen",
        handle: "@andrewchen",
        url: "https://x.com/andrewchen",
        description: "General Partner at a16z and a leading expert on startup growth and network effects."
      },
      {
        name: "Andrej Karpathy",
        handle: "@karpathy",
        url: "https://x.com/karpathy",
        description: "Leading AI researcher and educator, known for his work on deep learning at OpenAI and Tesla."
      },
      {
        name: "Sam Altman",
        handle: "@sama",
        url: "https://x.com/sama",
        description: "CEO of OpenAI, leading the development and deployment of advanced artificial intelligence."
      },
      {
        name: "Elad Gil",
        handle: "@eladgil",
        url: "https://x.com/eladgil",
        description: "Advisor and investor who specializes in scaling high-growth companies; author of the 'High Growth Handbook'."
      },
      {
        name: "Eugene Wei",
        handle: "@eugenewei",
        url: "https://x.com/eugenewei",
        description: "Product veteran (Amazon, Oculus) and essayist who provides sharp, analytical frameworks on user psychology."
      },
      {
        name: "Alex Danco",
        handle: "@Alex_Danco",
        url: "https://x.com/Alex_Danco",
        description: "Investor and writer who explains the evolution of tech and markets through unique, systems-level mental models."
      },
      {
        name: "Michael Nielsen",
        handle: "@michael_nielsen",
        url: "https://x.com/michael_nielsen",
        description: "Physicist and author who writes about open science and how cognitive tools, including AI, can augment human intellect."
      },
    ],
    hobbies: "I recharge through tennis,surfing, traveling, reading, and spending time with the people I care about.",
  },
  
  // Projects
  projects: [
    {
      title: "AI Fake News Detector Model & Dashboard",
      description: "A full-stack, AI-powered platform that combats misinformation on social media using a hybrid RoBERT-LSTM model, multi-source fact-checking, AI-generated refutations sourced by a web scraping agent, and an interactive real-time analytics dashboard.",
      tech:["Next.js", "TypeScript", "FastAPI", "PyTorch", "Transformers", "OpenAI API", "Tailwind CSS", "Supabase", "Docker", "Google Fact Check API"],
      github: "https://github.com/paablobello/FakeNewsDetector",
      demo: "https://github.com/paablobello/FakeNewsDetector",
    },
    {
      title: "Statement AI",
      description: "A Web App that uses specialized AI to transform the writing process for university admission essays. (currently on waitlist)",
      highlights: [
        "Generates and improves text using fine-tuned GPT-4o models for superior quality",
        "Automatically extracts information from the user's existing drafts,documents... ",
        "Integrates a pay-per-use system with Stripe to process each document generation or improvement"
      ],
      tech: ["Next.js", "Supabase", "OpenAI Fine-Tuning", "Stripe", "Tailwind CSS"],
      github: "https://www.statement-ai.com/",
      demo: "https://www.statement-ai.com/",
    },
    {
      title: "EasyRead - Chrome Extension",
      description: "A lightweight Chrome Extension that helps English learners improve reading comprehension by simplifying complex words into easier synonyms with a double-click.",
      tech: ["JavaScript", "Chrome Manifest V3", "Custom REST API", "HTML & CSS"],
      github: "https://www.easyreads.app/",
      demo: "https://www.easyreads.app/",
    },
  ],
}


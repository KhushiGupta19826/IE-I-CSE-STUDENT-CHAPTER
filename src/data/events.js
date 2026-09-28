/**
 * Events Data
 * To add a new event, copy the structure below and add to this array.
 * For posters, add the image to /public/assets/posters/ and set the poster field.
 * Status: "upcoming" | "ongoing" | "completed"
 */

export const events = [
  {
    id: "code-or-creeper",
    title: "Code or Creeper",
    category: "Competition",
    date: "27 August 2026",
    dateISO: "2026-08-27",
    time: "09:30 AM – 04:00 PM",
    venue: "Henry Ford Hall, Block C",
    description:
      "A thrilling debugging and pattern-recognition competition where participants must identify whether a given code snippet is legitimate logic or a cleverly disguised bug. Test your ability to spot edge cases, logic flaws, and syntactic traps under time pressure.",
    poster: "/assets/posters/code-or-creeper.jpg",
    status: "upcoming",
    tags: ["Debugging", "Competition", "Technical", "Problem Solving"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "Multi-round elimination format with increasing difficulty",
      "Real-world code snippets from open-source projects",
      "Live leaderboard and instant feedback system",
      "Prizes worth ₹15,000 for top performers",
    ],
    gallery: [],
    registrationLink: "#",
  },
  {
    id: "web-forge-workshop",
    title: "WebForge: Full-Stack Fundamentals",
    category: "Workshop",
    date: "14 September 2026",
    dateISO: "2026-09-14",
    time: "10:00 AM – 01:00 PM",
    venue: "Innovation Lab, Block A",
    description:
      "A hands-on workshop covering the fundamentals of modern web development. From HTML/CSS to React and REST APIs, participants will build a complete mini-project by the end of the session. Ideal for beginners and intermediate learners.",
    poster: "/assets/posters/web-forge.jpg",
    status: "upcoming",
    tags: ["Web Development", "Workshop", "React", "Frontend"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "Build a functional project from scratch in 3 hours",
      "Expert-led sessions by industry practitioners",
      "Take-home project template and resource pack",
      "Certificate of participation for all attendees",
    ],
    gallery: [],
    registrationLink: "#",
  },
  {
    id: "ai-ml-conclave",
    title: "AI/ML Conclave 2026",
    category: "Seminar",
    date: "05 October 2026",
    dateISO: "2026-10-05",
    time: "11:00 AM – 03:00 PM",
    venue: "Seminar Hall, Block B",
    description:
      "A curated seminar exploring the latest advancements in Artificial Intelligence and Machine Learning. Industry speakers, research paper presentations, and panel discussions on AI ethics, career pathways, and emerging tools in the AI landscape.",
    poster: "/assets/posters/ai-ml-conclave.jpg",
    status: "upcoming",
    tags: ["AI", "Machine Learning", "Seminar", "Research"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "Keynote by leading AI researchers and practitioners",
      "Live demos of cutting-edge ML models",
      "Panel discussion: AI Ethics and the Future of Work",
      "Networking session with industry professionals",
    ],
    gallery: [],
    registrationLink: "#",
  },
  {
    id: "hackathon-build-2026",
    title: "BuildSprint 2026",
    category: "Hackathon",
    date: "18 October 2026",
    dateISO: "2026-10-18",
    time: "09:00 AM – 09:00 AM (24 hours)",
    venue: "CS Department, All Labs",
    description:
      "A 24-hour hackathon challenging participants to build innovative solutions to real-world problems. Teams of 2–4 will conceptualize, design, and deploy a working prototype, with expert mentors available throughout the event.",
    poster: "/assets/posters/buildsprint-2026.jpg",
    status: "upcoming",
    tags: ["Hackathon", "Innovation", "Teamwork", "Development"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "24-hour build sprint with expert mentors",
      "Problem statements from industry partners",
      "Prizes worth ₹50,000 across categories",
      "Best UI/UX, Best Technical Solution, and Best Social Impact awards",
    ],
    gallery: [],
    registrationLink: "#",
  },
  {
    id: "git-and-github-bootcamp",
    title: "Git & GitHub Bootcamp",
    category: "Workshop",
    date: "10 July 2026",
    dateISO: "2026-07-10",
    time: "02:00 PM – 05:00 PM",
    venue: "Computer Lab 3, Block C",
    description:
      "A practical bootcamp on version control with Git and collaborative development using GitHub. Participants will learn branching strategies, pull requests, CI/CD basics, and open-source contribution workflows.",
    poster: "/assets/posters/git-bootcamp.jpg",
    status: "completed",
    tags: ["Git", "GitHub", "Version Control", "Workshop"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "Hands-on exercises with real repositories",
      "Understanding branching, merging, and rebase",
      "Contributing to open-source step-by-step",
      "Participants receive a GitHub profile review",
    ],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "dsa-sprint",
    title: "DSA Sprint — Competitive Coding Challenge",
    category: "Competition",
    date: "22 June 2026",
    dateISO: "2026-06-22",
    time: "10:00 AM – 01:00 PM",
    venue: "Henry Ford Hall, Block C",
    description:
      "A competitive coding challenge focused on Data Structures and Algorithms. Participants will solve problems across arrays, graphs, dynamic programming, and more on a live competitive programming platform.",
    poster: "/assets/posters/dsa-sprint.jpg",
    status: "completed",
    tags: ["DSA", "Competitive Programming", "Algorithms", "Competition"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "30+ participants from across departments",
      "Problems curated by senior members and alumni",
      "Ranked leaderboard with real-time updates",
      "Winner received a premium coding platform subscription",
    ],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "linux-workshop",
    title: "Linux & Shell Scripting Workshop",
    category: "Workshop",
    date: "15 May 2026",
    dateISO: "2026-05-15",
    time: "10:00 AM – 12:30 PM",
    venue: "Computer Lab 1, Block A",
    description:
      "An introductory workshop on the Linux operating system and shell scripting for automation. Participants set up a Linux environment, navigate the file system, write shell scripts, and learn process management fundamentals.",
    poster: "/assets/posters/linux-workshop.jpg",
    status: "completed",
    tags: ["Linux", "Shell Scripting", "Automation", "Workshop"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "Live Linux environment setup on participant machines",
      "Practical scripting exercises for real use cases",
      "Introduction to cron jobs and task automation",
      "Resource guide shared with all participants",
    ],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "tech-talk-career-paths",
    title: "Tech Talk: Navigating Your CS Career",
    category: "Seminar",
    date: "02 April 2026",
    dateISO: "2026-04-02",
    time: "03:00 PM – 05:00 PM",
    venue: "Seminar Hall, Block B",
    description:
      "A candid talk series featuring alumni and industry professionals sharing insights on career paths in technology — from software engineering and research to product management and entrepreneurship.",
    poster: "/assets/posters/tech-talk-career.jpg",
    status: "completed",
    tags: ["Career", "Seminar", "Industry", "Alumni"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [
      "Speakers from top product and service companies",
      "Q&A session with direct industry interaction",
      "Resume and LinkedIn review tips",
      "Exclusive mentorship opportunities for students",
    ],
    gallery: [],
    registrationLink: null,
  },
];

/**
 * Returns events filtered by status
 */
export const getEventsByStatus = (status) =>
  events.filter((e) => e.status === status);

/**
 * Returns events filtered by category
 */
export const getEventsByCategory = (category) =>
  events.filter((e) => e.category.toLowerCase() === category.toLowerCase());

/**
 * Returns a single event by ID
 */
export const getEventById = (id) => events.find((e) => e.id === id);

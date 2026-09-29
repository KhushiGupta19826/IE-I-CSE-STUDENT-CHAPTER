/**
 * Events Data
 * To add a new event, copy the structure below and add to this array.
 * For posters, add the image to /public/assets/posters/ and set the poster field.
 * Status: "upcoming" | "ongoing" | "completed"
 *
 * displayName — short name used in the carousel/compact UI.
 * title       — full title used on Event Details and Event Cards.
 */

export const events = [
  {
    id: "code-parliament",
    displayName: "Code Parliament",
    title: "Code Parliament: Where Ideas Code the Future",
    category: "Competition",
    date: "31st July, 2025",
    dateISO: "2025-07-31",
    time: "09:00 AM – 04:00 PM",
    venue: "Faraday Hall, Edison Block",
    description:
      "A flagship competitive event where participants channelled their ideas into code, engaging in structured parliamentary-style rounds to debate, build, and present technical solutions to real-world problems.",
    poster: "/assets/posters/code-parliament.jpg",
    status: "completed",
    tags: ["Competition", "Technical", "Coding", "Ideas"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "creovate",
    displayName: "Creovate",
    title: "Creovate: Igniting Creativity, Driving Innovation",
    category: "Competition",
    date: "8th October, 2025",
    dateISO: "2025-10-08",
    time: "09:00 AM – 04:00 PM",
    venue: "Carnegie Hall, Rockefeller Block",
    description:
      "Creovate brought together creative minds to ideate, prototype, and present innovative solutions — a celebration of creativity fused with technical rigour, pushing participants to think beyond conventional boundaries.",
    poster: "/assets/posters/creovate.jpg",
    status: "completed",
    tags: ["Competition", "Innovation", "Creativity", "Prototype"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "the-visionui",
    displayName: "VisionUI",
    title: "VisionUI: Where Innovation Meets Collaboration",
    category: "Competition",
    date: "15th October, 2025",
    dateISO: "2025-10-15",
    time: "09:00 AM",
    venue: "Faraday Hall, Edison Block",
    description:
      "VisionUI was an immersive UI/UX design competition that united developers and designers under one roof to collaborate, craft, and showcase user-centric digital experiences.",
    poster: "/assets/posters/the-visionui.jpg",
    status: "completed",
    tags: ["Competition", "UI/UX", "Design", "Collaboration"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "the-cvpov",
    displayName: "The CVPOV",
    title: "The CVPOV: Innovate, Validate, Elevate",
    category: "Workshop",
    date: "29th October, 2025",
    dateISO: "2025-10-29",
    time: "09:00 AM – 01:00 PM",
    venue: "Pierre Hall, Le Corbusier Block",
    description:
      "The CVPOV was an intensive session designed to help students craft compelling resumes and portfolios — guiding them from raw drafts to polished, industry-ready professional profiles.",
    poster: "/assets/posters/the-cvpov.jpg",
    status: "completed",
    tags: ["Workshop", "Resume", "Career", "Professional Development"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "the-prompt-lab",
    displayName: "The Prompt Lab",
    title: "The Prompt Lab: Innovation Starts With the Right Prompt",
    category: "Seminar",
    date: "4th November, 2025",
    dateISO: "2025-11-04",
    time: "09:00 AM onwards",
    venue: "Einstein Hall, Galileo Block",
    description:
      "The Prompt Lab explored the art and science of prompt engineering — teaching participants how to interact effectively with AI models to generate precise, creative, and high-quality outputs.",
    poster: "/assets/posters/the-prompt-lab.jpg",
    status: "completed",
    tags: ["Seminar", "AI", "Prompt Engineering", "Generative AI"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "hire-horizon",
    displayName: "Hire Horizon 3.0",
    title: "Hire Horizon 3.0: Innovate, Recruit, Grow",
    category: "Hiring",
    date: "6th – 7th November, 2025",
    dateISO: "2025-11-06",
    time: "09:30 AM",
    venue: "Pierre Hall, Le Corbusier Block",
    description:
      "Hire Horizon 3.0 was a two-day hiring and industry-connect event bridging students and recruiters — featuring mock interviews, placement insights, resume reviews, and direct interactions with hiring professionals.",
    poster: "/assets/posters/hire-horizon.jpg",
    status: "completed",
    tags: ["Hiring", "Placement", "Industry", "Recruitment"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "nep-panel-discussion",
    displayName: "NEP Panel Discussion",
    title: "NEP Based Panel Discussion",
    category: "Seminar",
    date: "20th November, 2025",
    dateISO: "2025-11-20",
    time: "09:00 AM – 12:00 PM",
    venue: "TG-411, Turing Block",
    description:
      "A structured panel discussion examining the implications of the National Education Policy (NEP) on engineering education — featuring faculty, industry experts, and student representatives.",
    poster: "/assets/posters/nep-panel-discussion.jpg",
    status: "completed",
    tags: ["Seminar", "NEP", "Education Policy", "Panel Discussion"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "ignite-25",
    displayName: "Ignite'25",
    title: "Ignite'25: Spark the Innovation",
    category: "Orientation",
    date: "21st November, 2025",
    dateISO: "2025-11-21",
    time: "09:00 AM – 04:00 PM",
    venue: "Faraday Hall, Edison Block",
    description:
      "Ignite'25 was the official orientation and induction event for newly recruited IE(I) CSE Student Chapter members — sparking their journey with inspiring sessions, introductions, and a glimpse into what the chapter stands for.",
    poster: "/assets/posters/ignite'25.jpg",
    status: "completed",
    tags: ["Orientation", "Induction", "Members", "IE(I)"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
    gallery: [],
    registrationLink: null,
  },
  {
    id: "code-or-creeper",
    displayName: "Code Or Creeper",
    title: "Code Or Creeper: Mine Your Ways Through Bugs",
    category: "Competition",
    date: "27th August, 2026",
    dateISO: "2026-08-27",
    time: "09:00 AM – 04:00 PM",
    venue: "Henry Ford Hall, Martin Luther Block",
    description:
      "A Minecraft-themed debugging and logic challenge where participants hunted down bugs and navigated tricky code mines — testing their ability to identify errors, fix logic flaws, and survive the toughest code traps under pressure.",
    poster: "/assets/posters/code-or-creeper.jpg",
    status: "completed",
    tags: ["Competition", "Debugging", "Technical", "Problem Solving"],
    organizers: ["IE(I) CSE Student Chapter"],
    highlights: [],
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

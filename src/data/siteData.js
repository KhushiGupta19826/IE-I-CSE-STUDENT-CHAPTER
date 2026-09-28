/**
 * Site-wide configuration and content data.
 * Update these values to change content across the entire site.
 */

export const siteConfig = {
  name: "IE(I) CSE Student Chapter",
  shortName: "IE(I) CSE",
  tagline: "Engineering Ideas. Building Impact.",
  description:
    "The Institution of Engineers (India) Computer Science & Engineering Student Chapter — fostering technical excellence, innovation, and professional development.",
  email: "ieicse@college.edu",
  instagram: "https://instagram.com/iei_cse",
  linkedin: "https://linkedin.com/company/iei-cse",
  location: "Department of CSE, College Campus",
  year: "2026",
  founded: "2019",
};

export const stats = [
  { id: "events", label: "Events Conducted", value: 40, suffix: "+" },
  { id: "students", label: "Students Reached", value: 1200, suffix: "+" },
  { id: "workshops", label: "Workshops", value: 18, suffix: "" },
  { id: "competitions", label: "Competitions", value: 12, suffix: "" },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Posters", path: "/posters" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

export const whyIEI = [
  {
    id: "innovation",
    icon: "Lightbulb",
    title: "Innovation Culture",
    description:
      "We cultivate an environment where creative problem-solving and experimental thinking thrive alongside technical rigor.",
  },
  {
    id: "learning",
    icon: "BookOpen",
    title: "Continuous Learning",
    description:
      "Through workshops, seminars, and hands-on events, we bridge the gap between academic theory and industry practice.",
  },
  {
    id: "collaboration",
    icon: "Users",
    title: "Peer Collaboration",
    description:
      "Build lasting professional relationships with like-minded engineers and expand your network beyond the classroom.",
  },
  {
    id: "leadership",
    icon: "TrendingUp",
    title: "Leadership Growth",
    description:
      "Take ownership of events, teams, and initiatives that develop your organizational and leadership capabilities.",
  },
];

export const aboutContent = {
  iei: {
    title: "About IE(I)",
    body: [
      "The Institution of Engineers (India) is the largest multi-disciplinary professional engineering society in India, established in 1920. With over 800,000 members, IE(I) plays a pivotal role in shaping engineering education, research, and professional standards across the country.",
      "As a statutory body, IE(I) is empowered to grant corporate membership equivalent to a degree in engineering, and its Fellows are recognized internationally across 106 countries through bilateral agreements.",
    ],
  },
  chapter: {
    title: "About the CSE Student Chapter",
    body: [
      "The IE(I) CSE Student Chapter operates under the official umbrella of the Institution of Engineers (India) and is dedicated to advancing the technical and professional capabilities of Computer Science and Engineering students.",
      "Since its establishment, the chapter has consistently organized high-quality technical workshops, competitive events, seminars, and hackathons that prepare students for the demands of the modern technology industry.",
    ],
  },
  vision:
    "To be the most impactful student engineering body in the region, recognized for technical excellence, collaborative spirit, and a commitment to shaping future-ready engineers.",
  mission:
    "To bridge the gap between academic learning and industry practice by creating meaningful opportunities for skill development, innovation, and professional networking.",
  objectives: [
    "Organize technical workshops, seminars, and hands-on training programs",
    "Conduct competitive events that challenge and develop problem-solving skills",
    "Facilitate industry-academia interaction through expert talks and mentorship",
    "Promote research culture and interdisciplinary collaboration",
    "Develop leadership skills through active participation in chapter governance",
    "Build a strong alumni network for career guidance and mentorship",
  ],
  whatWeDo: [
    {
      icon: "Code",
      title: "Technical Workshops",
      description: "Hands-on sessions covering modern technologies, frameworks, and development tools.",
    },
    {
      icon: "Trophy",
      title: "Competitions",
      description: "Coding contests, hackathons, and problem-solving challenges for all skill levels.",
    },
    {
      icon: "Mic",
      title: "Seminars & Talks",
      description: "Expert-led sessions on industry trends, research, and career development.",
    },
    {
      icon: "Network",
      title: "Networking Events",
      description: "Opportunities to connect with peers, alumni, and industry professionals.",
    },
  ],
};

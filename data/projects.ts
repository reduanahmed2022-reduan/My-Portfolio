export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "booknook",
    name: "BookNook",
    category: "Full-stack web application",
    summary: "A small online library for discovering, adding, borrowing and returning books.",
    description: "BookNook is an online library project focused on making book discovery and borrowing simple. Visitors can explore books, while signed-in users can manage their own listings and borrowing activity.",
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Better Auth"],
    image: "/projects/booknook.png",
    liveUrl: "https://book-nook-reduan.vercel.app/",
    githubUrl: "https://github.com/reduanahmed2022-reduan/Book-Nook",
    challenges: [
      "Designing private routes and keeping the signed-in experience consistent after a page reload.",
      "Managing book copies and preventing the same user from borrowing the same book more than once.",
      "Connecting the frontend to a REST API and handling loading, success and error states."
    ],
    improvements: [
      "Add stronger search, filtering and pagination for a larger book collection.",
      "Improve accessibility and add automated tests for important borrowing flows.",
      "Add book recommendations and richer reading-history features."
    ]
  },
  {
    slug: "bazardor",
    name: "BazarDor",
    category: "Market information platform",
    summary: "A web project for presenting market-price information in a clear, accessible way.",
    description: "BazarDor is a market-price focused web application concept. It aims to make everyday price information easier to browse through a clean interface and organized content.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    image: "/projects/bazardor.png",
    liveUrl: "https://bazardorweb.vercel.app",
    githubUrl: "https://github.com/reduanahmed2022-reduan/Bazardorweb",
    challenges: [
      "Organizing market information so users can scan important details quickly.",
      "Building reusable UI components and connecting authentication to the application.",
      "Handling deployment configuration and environment-specific settings."
    ],
    improvements: [
      "Add a verified price-update workflow and show the date of each update.",
      "Introduce location-based filtering and historical price comparisons.",
      "Improve the data dashboard for easier administration."
    ]
  },
 {
  slug: "fit-log",
  name: "Fit-Log",
  category: "React Frontend Project",
  summary: "A fitness tracking application for managing workouts and monitoring fitness activities.",
  description:
    "Fit-Log is a fitness tracking application designed to help users organize workout activities and monitor their fitness progress. This project helps demonstrate my React development and frontend design skills.",
  stack: ["React", "JavaScript", "HTML", "CSS"],
  image: "/projects/fitlog.png",
  liveUrl: "https://fit-log-reduan1.vercel.app/",
  githubUrl: "https://github.com/reduanahmed2022-reduan/Fit-log",
  challenges: [
    "Creating a clean and user-friendly fitness dashboard.",
    "Managing workout information and application state.",
    "Making the interface responsive across different devices."
  ],
  improvements: [
    "Add workout history and progress tracking.",
    "Add fitness goals and activity summaries.",
    "Improve the dashboard with charts and additional features."
  ]
}
];

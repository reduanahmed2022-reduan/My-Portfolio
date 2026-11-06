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
    image: "/projects/booknook.svg",
    liveUrl: "",
    githubUrl: "https://github.com/reduanahmed2022-reduan",
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
    image: "/projects/bazardor.svg",
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
    slug: "simple-crud",
    name: "Simple CRUD App",
    category: "Full-stack practice project",
    summary: "A practical CRUD application for creating, reading, updating and deleting records.",
    description: "This project helped strengthen my understanding of frontend and backend communication, REST API routes and MongoDB operations.",
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    image: "/projects/crud.svg",
    liveUrl: "",
    githubUrl: "https://github.com/reduanahmed2022-reduan",
    challenges: [
      "Connecting a frontend form to backend API endpoints.",
      "Validating incoming data and returning useful API responses.",
      "Keeping the interface updated after create, edit and delete actions."
    ],
    improvements: [
      "Add form validation and clearer empty and error states.",
      "Add authentication and user-specific records.",
      "Add automated tests and deploy the frontend and backend."
    ]
  }
];

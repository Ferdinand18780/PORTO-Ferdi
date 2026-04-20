import Navbar from "./component/page";
import "./home.css";
import ProjectCard from './component/card';
import TimelineExperience from './component/timeline';
import SkillsSection from './component/skills';

const projects = [
  {
    title: "Distributed Database Engine",
    description:
      "Custom relational database built from scratch with a team of 20. Handled the Storage Engine layer for binary file I/O and page management.",
    image: "/project/dbms.png",
    tags: ["Database", "Storage Engine", "Transactions"],
    repoUrl: "https://github.com/InfedmixDBMS/",
  },
  {
    title: "RAFT Consensus Model",
    description:
      "Distributed consensus algorithm using Java and gRPC across multiple nodes. Used Docker to simulate network partitions conditions.",
    image: "/project/raft.png",
    tags: ["Java", "gRPC", "Docker", "Distributed Systems"],
    repoUrl: "https://github.com/labsister22/tugas-besar-if3130-sistem-paralel-dan-terdistribusi-apala",
  },
  {
    title: "Nimonspedia eCommerce",
    description:
      "Full-stack marketplace in pure PHP, JS, HTML & CSS — no framework. Built real-time chat and live auction via WebSocket.",
    image: "/project/nimonspedia.png",
    tags: ["PHP", "PostgreSQL", "WebSocket", "Docker"],
    repoUrl: "https://github.com/Labpro-22/milestone-1-tugas-besar-if-3110-web-based-development-k01-04",
  },
  {
    title: "Rush Hour Solver",
    description:
      "Automated solver for the Rush Hour puzzle using UCS, A*, and Greedy Best-First Search.",
    image: "/project/rushhour.jpeg",
    tags: ["Algorithms", "A*", "UCS", "Pathfinding"],
    repoUrl: "https://github.com/henry204xx/RushHour-Solver",
  },
  {
    title: "Alchemist Web Application",
    description:
      "Little Alchemy 2-inspired web app built with Next.js and Golang. Scrapes element recipes and finds combination paths via BFS and DFS",
    image: "/project/liltleAlchemy.png",
    tags: ["Next.js", "Golang", "BFS", "DFS"],
    repoUrl: "https://github.com/henry204xx/LittleAlchemy2-Solver",
  },
  {
    title: "Nimons360",
    description:
      "Android family tracker with real-time GPS and interactive maps. Supports in-map live streaming via VideoSDK Server.",
    image: "/project/nimons360.png",
    tags: ["Android", "Jetpack Compose", "VideoSDK"],
    repoUrl: "https://github.com/Labpro-22/ms1-k01-jmo",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 1. SECTION HOME */}
        <section id="home" className="pt-40 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <img
                className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-white/20 object-cover"
                src="/Foto.jpg"
                alt="Foto Profil"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="text-white font-bold text-2xl mb-2">Hello I&apos;m</div>
              <div className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                Ferdinand Gabe Tua Sinaga
              </div>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                I am a student at ITB with a strong interest in web development,
                particularly in front-end. My passion for front-end stems from a
                desire to create engaging and functional user interfaces. I enjoy
                bringing ideas to life in a way that users can access and appreciate.
              </p>
            </div>
          </div>
        </section>

        {/* 2. SECTION PROJECTS */}
        <section id="projects" className="mt-20 scroll-mt-24">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="font-bold text-3xl md:text-6xl text-white">
              Projects
            </h2>
            <p className="max-w-xl leading-normal text-gray-400 sm:text-lg sm:leading-7">
              Showcasing impactful projects and technical achievements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* 3. SECTION SKILLS */}
        <div id="techstack" className="scroll-mt-24">
          <SkillsSection />
        </div>

        {/* 4. SECTION EXPERIENCE */}
        <section id="experience" className="mt-20 scroll-mt-24">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="font-bold text-3xl md:text-5xl text-white">Experience</h2>
            <p className="text-gray-400">My professional and volunteer journey.</p>
          </div>
          <TimelineExperience />
        </section>

        {/* 5. FOOTER / CONTACT */}
        <footer id="contact" className="py-20 border-t border-white/10 text-center scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-white">My Contact</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <img className="w-5 h-5 brightness-0 invert" src="/email.png" alt="email" />
              <span className="text-white">ferdinandgts5@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <img className="w-5 h-5 brightness-0 invert" src="/linkedin.png" alt="linkedin" />
              <span className="text-white">Ferdinand Gabe Tua Sinaga</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Copyright © 2023 Ferdinand Gabe Tua Sinaga. All Rights Reserved
          </p>
        </footer>

      </div>
    </div>
  );
}
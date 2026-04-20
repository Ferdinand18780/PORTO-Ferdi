import React from 'react';

const skillsData = [
  {
    name: "Next.js",
    description: "Building dynamic web applications with Server-Side Rendering (SSR) and performance optimization within the ITB ecosystem.",
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg", 
    rating: 5
  },
  {
    name: "React",
    description: "Developing interactive user interfaces using component-based architecture and efficient state management.",
    icon: "./react.svg",
    rating: 5
  },
  {
    name: "TypeScript",
    description: "Enhancing JavaScript code quality with static typing for reliable and scalable software development.",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    rating: 5
  },
  {
    name: "Tailwind",
    description: "Crafting modern and responsive user interfaces using a utility-first CSS methodology.",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    rating: 4
  },
  {
    name: "Express.js",
    description: "Building fast and scalable RESTful APIs using a minimalist Node.js web framework.",
    icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    rating: 5
  },
  {
    name: "Node.js",
    description: "Executing JavaScript on the server-side to power responsive and real-time web applications.",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    rating: 4
  },
  {
    name: "Golang",
    description: "Developing high-performance backends and complex rendering logic for distributed web applications.",
    icon: "https://cdn.worldvectorlogo.com/logos/golang-gopher.svg",
    rating: 4
  },
  {
    name: "PHP",
    description: "Developing server-side logic and managing database integration for various web-based systems.",
    icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
    rating: 5
  },
  {
    name: "MongoDB",
    description: "Managing flexible NoSQL databases for high-volume data storage in large-scale applications.",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    rating: 4
  },
  {
    name: "PostgreSQL",
    description: "Managing relational databases with a strong focus on data integrity, ACID compliance, and complex queries.",
    icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    rating: 4
  },
  {
    name: "Python",
    description: "Proficient in data structures and algorithms; served as a Teaching Assistant for Computational Thinking at ITB.",
    icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    rating: 5
  },
  {
    name: "Docker",
    description: "Containerizing applications and simulating network partitions for distributed systems validation.",
    icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    rating: 4
  },
];

const SkillCard = ({ skill }: { skill: typeof skillsData[0] }) => (
  <div className="bg-white rounded-xl p-8 flex flex-col items-start shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="mb-4">
      <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-4 text-left">
      {skill.description}
    </p>
    <div className="flex gap-1 mt-auto">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < skill.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (

    <section id="techstack" className="mt-32 pb-24 scroll-mt-20 px-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">Skills</h2>
          
          <p className="text-gray-300 text-lg">
            The main technical skill that I have mastered is in software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
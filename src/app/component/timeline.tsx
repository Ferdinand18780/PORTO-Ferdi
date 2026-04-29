const TimelineExperience = () => {
  const experiences = [
    {
      company: "ITB E-Facility Digital Transformation",
      role: "Software Engineer (Project-Based)",
      type: "Project Experience",
      period: "2026 – Present",
      description: "Collaborated in an Agile environment to develop dynamic modules and optimize system architecture for the ITB E-Facility ecosystem.",
      color: "bg-transparent text-blue-300 border-blue-500/50",
      dotColor: "border-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)]",
    },
    {
      company: "Computational Thinking ITB",
      role: "Practicum Assistant",
      type: "Work Experience",
      period: "Sept 2025 – Dec 2025",
      description: "Supervised and mentored 60+ students in mastering algorithmic thinking and logic formulation through structured practicum sessions.",
      color: "bg-transparent text-blue-300 border-blue-500/50",
      dotColor: "border-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)]",
    },
    {
      company: "Olimpiade KM ITB",
      role: "Staff of Extracampus Division",
      type: "Volunteer Experience",
      period: "Sept 2024 – Oct 2024",
      description: "Coordinated external campus relations and managed stakeholder communication to facilitate university-wide student participation.",
      color: "bg-transparent text-purple-300 border-purple-500/50",
      dotColor: "border-purple-400 shadow-[0_0_10px_2px_rgba(192,132,252,0.6)]",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="relative border-l-2 border-gray-700 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 ml-10 relative">
            <div
              className={`absolute -left-[52px] top-1 w-5 h-5 bg-black border-[3px] rounded-full z-10 ${exp.dotColor}`}
            />
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                  {exp.company}
                </h3>
                <span className={`px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider border rounded-full ${exp.color}`}>
                  {exp.type}
                </span>
              </div>
              <span className="text-gray-500 font-serif italic text-sm md:text-base whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <h4 className="text-lg font-bold text-gray-200 mb-4">{exp.role}</h4>
            <p className="text-gray-400 font-serif leading-relaxed text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineExperience;
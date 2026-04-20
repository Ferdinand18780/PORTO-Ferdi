type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
};

const ProjectCard = ({ title, description, image, tags, repoUrl }: ProjectCardProps) => {
  return (
    <div className="relative p-5 w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="pt-5 flex flex-col flex-grow">
        <h5 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
          {title}
        </h5>
        <p className="line-clamp-3 text-sm font-normal text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-[11px] font-semibold border border-gray-100 rounded-lg text-slate-600 bg-gray-50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-2 flex items-center justify-between">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all active:scale-95"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View Repo
        </a>

        <div className="w-10 h-10 flex items-center justify-center border border-gray-100 rounded-full text-slate-400">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
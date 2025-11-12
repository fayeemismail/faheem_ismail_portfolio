import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Celoura Travels",
      description: `<strong>Celoura</strong> is a travel guide web application that connects users with verified 
      local guides, showcases destinations with rich visuals, supports real-time chat, and offers secure payments — all built using the <strong>MERN stack with TypeScript</strong> and clean architecture principles.`,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Razorpay"],
      github: "https://github.com/fayeemismail/celoura-server",
      image: "/images/celoura.webp"
    },
    {
      title: "Meehaf eCommerce",
      description: `<strong>Meehaf</strong> is a modern <strong>eCommerce web application</strong> built using the <strong>MERN stack</strong>. 
      It allows users to browse, search, and purchase sports products seamlessly. 
      The platform includes features like product management, user authentication, secure payments, and a responsive interface for a smooth shopping experience.`,
      technologies: ["HTML", "CSS", "Express.js", "Node.js", "Bootstrap", "Razorpay"],
      github: "https://github.com/fayeemismail/meehaf",
      live: "https://meehaf.onrender.com/",
      image: "/images/ecommerce.webp"
    },
    {
      title: "Netflix Clone React",
      description: `A <strong>Netflix-inspired streaming platform clone</strong> that focuses on clean code, 
      responsive design, and real-world functionality using <strong>React</strong> and <strong>Firebase</strong>. 
      It showcases modern frontend practices and serves as a demonstration of UI precision and development workflow.`,
      technologies: ["React", "Firebase", "Toast", "React Router", "Firebase Authentication", "TMDb API Integration"],
      github: "https://github.com/fayeemismail/NETFLIX-clone-REACT",
      live: "https://netflix-clone-app5.vercel.app/",
      image: "/images/netflix.webp"
    }
  ];

  const handleProjectClick = (project, type) => {
    if (type === 'github' && project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    } else if (type === 'live' && project.live) {
      window.open(project.live, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-[#F5EEDC]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-[#406008] mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group flex flex-col h-full"
            >
              {/* Clickable Image Area */}
              <div 
                className="h-48 relative overflow-hidden group flex-shrink-0"
                onClick={() => project.live && handleProjectClick(project, 'live')}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    {project.live && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project, 'live');
                        }}
                        className="bg-[#406008] text-white px-4 py-2 rounded-lg hover:bg-[#345006] transition-colors"
                      >
                        Live Demo
                      </button>
                    )}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project, 'github');
                      }}
                      className="bg-white text-[#406008] px-4 py-2 rounded-lg hover:bg-[#F5EEDC] transition-colors border border-[#406008]"
                    >
                      View Code
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#406008] mb-3">{project.title}</h3>
                  <p 
                    className="text-[#000000] mb-4 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#F5EEDC] text-[#406008] px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4 mt-auto pt-4">
                  <button
                    onClick={() => handleProjectClick(project, 'github')}
                    className="flex items-center text-[#406008] hover:text-[#345006] font-medium transition-colors duration-300 flex-1 justify-center py-2 border border-[#406008] rounded-lg hover:bg-[#F5EEDC]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </button>
                  {project.live && (
                    <button
                      onClick={() => handleProjectClick(project, 'live')}
                      className="flex items-center text-white bg-[#406008] hover:bg-[#345006] font-medium transition-colors duration-300 flex-1 justify-center py-2 rounded-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

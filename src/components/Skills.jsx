import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'Redux',
        'HTML5',
        'CSS3',
        'Axios'
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'WebSockets',
        'MVC',
        'Clean Architecture',
        'Redis'
      ]
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      title: 'DevOps',
      skills: [
        'AWS (EC2, S3)',
        'Nginx',
        'PM2',
        'Git',
        'GitHub Actions',
        'Cloudinary',
        'CI/CD Pipelines',
        'Reverse Proxy',
        'Load Balancing'
      ]
    },
    {
      title: 'Tools',
      skills: [
        'Figma',
        'Postman',
        'Socket.IO',
        'JWT',
        'OAuth',
        'Razorpay',
        'Multer',
        'NodeMailer',
        'ESLint',
        'Jest'
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Problem-Solving',
        'Communication',
        'Leadership',
        'Team Collaboration',
        'Time Management'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#F5EEDC]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-[#406008] mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#406008] hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-[#406008] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[#F5EEDC] text-[#406008] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
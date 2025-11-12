import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#406008] mb-12 text-center">Work Experience</h2>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#8E9B6D] transform -translate-x-1/2"></div>
          
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-[#406008] rounded-full transform -translate-x-1/2 -translate-y-2"></div>
              
              <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 ml-12 md:ml-0">
                <h3 className="text-2xl font-bold text-[#406008]">Full-Stack Developer</h3>
                <p className="text-lg text-[#8E9B6D] font-semibold">WebEyeCraft</p>
                <p className="text-[#000000]">2025 • Kozhikode, Kerala</p>
              </div>
              
              <div className="md:w-1/2 md:pl-12 ml-12 md:ml-0">
                <ul className="list-disc list-inside text-[#000000] space-y-2">
                  <li>Designed, developed, and deployed two scalable full-stack web applications using Next.js, Node.js, and TypeScript</li>
                  <li>Built and optimized responsive, mobile-first UIs with cross-browser compatibility</li>
                  <li>Integrated backend services with RESTful APIs and managed data persistence using MongoDB</li>
                  <li>Implemented authentication workflows to enhance application security</li>
                  <li>Conducted code reviews and maintained Git-based version control</li>
                  <li>Achieved up to 25% faster page loads through performance optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
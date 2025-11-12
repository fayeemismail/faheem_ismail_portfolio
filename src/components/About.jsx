import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#406008] mb-12 text-center">About Me</h2>
        
        <div className="prose prose-lg max-w-none text-[#000000]">
          <p className="text-lg leading-relaxed mb-6">
            I’m aself-taught MERN Stack Developer with over two years of practical experience 
            in buildingscalable, high-performance web applications. My focus lies in crafting 
            clean, maintainable code using modern development principles and clean architecture.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I’m deeply passionate about creatingintuitive, user-centric interfaces and 
            developingrobust backend systems that power seamless digital experiences. 
            With a strong eye for detail and a problem-solving mindset, I enjoy turning complex challenges into 
            elegant, functional solutions.
          </p>

          <p className="text-lg leading-relaxed">
            I’m always eager tolearn, innovate, and grow—staying ahead with emerging 
            technologies and best practices. Currently, I’m seeking exciting opportunities to contribute to 
            forward-thinking teams, build impactful products, and continue evolving as a professional developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#406008] mb-4">
              Muhammed Faheem
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#8E9B6D] mb-6">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-[#000000] mb-8 leading-relaxed">
              Full-Stack Developer with 2+ years of hands-on experience in the MERN stack, 
              TypeScript, and modern web technologies. Passionate about building scalable, 
              high-performance web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-[#406008] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#345006] transition-colors duration-300 text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-[#406008] text-[#406008] px-8 py-3 rounded-lg font-semibold hover:bg-[#406008] hover:text-white transition-colors duration-300 text-center"
              >
                View My Work
              </a>
            </div>
          </div>
          
          {/* Profile Image - Zoom on hover */}
          <div className="md:w-1/3">
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#8E9B6D] shadow-2xl mx-auto relative group">
                <img 
                  src="/images/fayeem.webp" 
                  alt="Muhammed Faheem - MERN Stack Developer"
                  className="w-full h-full object-cover object-top scale-110 transition-transform duration-700 group-hover:scale-125"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#406008] rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#8E9B6D] rounded-full opacity-50"></div>
              
              {/* Floating tech badges */}
              <div className="absolute -bottom-4 -right-4 bg-white px-3 py-1 rounded-full shadow-lg border border-[#8E9B6D]">
                <span className="text-xs font-bold text-[#406008]">MERN</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-white px-3 py-1 rounded-full shadow-lg border border-[#8E9B6D]">
                <span className="text-xs font-bold text-[#406008]">TS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
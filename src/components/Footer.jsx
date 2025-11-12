import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#406008] text-white py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold">Muhammed Faheem</p>
            <p className="text-[#8E9B6D]">MERN Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/faheemismail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8E9B6D] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fayeemismail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8E9B6D] transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/faheem_ismail_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8E9B6D] transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919562062494"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8E9B6D] transition-colors duration-300"
            >
              WhatsApp
            </a>
            <a
              href="mailto:faheemmuhammed703@gmail.com"
              className="text-white hover:text-[#8E9B6D] transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#8E9B6D] mt-6 pt-6 text-center text-sm text-[#8E9B6D]">
          <p>&copy; {new Date().getFullYear()} Muhammed Faheem. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
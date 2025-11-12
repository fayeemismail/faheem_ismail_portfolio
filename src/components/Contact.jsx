import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS Configuration - REPLACE WITH YOUR ACTUAL CREDENTIALS
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_wfgju4t', // Replace with your Service ID
    TEMPLATE_ID: 'template_m959yg8', // Replace with your Template ID
    PUBLIC_KEY: '6yo1uIgC59ZgvfsUu' // Replace with your Public Key
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Muhammed Faheem'
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Show success alert with your color theme
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thanks for reaching out! I will get back to you soon.',
        icon: 'success',
        confirmButtonColor: '#406008',
        background: '#F5EEDC',
        color: '#000000',
        confirmButtonText: 'Great!',
        customClass: {
          popup: 'rounded-xl',
          title: 'text-[#406008]',
          confirmButton: 'bg-[#406008] hover:bg-[#345006] text-white px-6 py-2 rounded-lg'
        }
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error alert
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again or email me directly.',
        icon: 'error',
        confirmButtonColor: '#406008',
        background: '#F5EEDC',
        color: '#000000',
        confirmButtonText: 'Try Again'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#406008] mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#406008] mb-6">Let's Connect</h3>
            <p className="text-[#000000] mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#406008] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#406008]">Email</p>
                  <a href="mailto:faheemmuhammed703@gmail.com" className="text-[#000000] hover:text-[#406008]">
                    faheemmuhammed703@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#406008] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#406008]">Phone</p>
                  <a href="tel:+919562062494" className="text-[#000000] hover:text-[#406008]">
                    +91 9562062494
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-[#406008] mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/faheemismail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#406008] rounded-full flex items-center justify-center text-white hover:bg-[#345006] transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/fayeemismail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#406008] rounded-full flex items-center justify-center text-white hover:bg-[#345006] transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#406008] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#8E9B6D] rounded-lg focus:ring-2 focus:ring-[#406008] focus:border-transparent bg-[#F5EEDC] text-[#000000]"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#406008] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#8E9B6D] rounded-lg focus:ring-2 focus:ring-[#406008] focus:border-transparent bg-[#F5EEDC] text-[#000000]"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#406008] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-[#8E9B6D] rounded-lg focus:ring-2 focus:ring-[#406008] focus:border-transparent bg-[#F5EEDC] text-[#000000]"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#406008] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#345006] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { FaCode, FaServer, FaShieldAlt, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiHtml5, SiCss3, SiLinux, SiDocker, SiGit } from 'react-icons/si';
import { BsShieldCheck } from 'react-icons/bs';

const Resume = () => {
  // You will need to add your actual resume file to the public folder
  const resumeUrl = '/CV_202504102128051590_12203364.pdf'; 

// ... existing code ...

          <div>
            <h3 className="text-xl uppercase font-semibold mb-6 text-gray-300">INTERNSHIPS</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 text-center flex items-center justify-center relative">
                    <span className="absolute h-full w-0.5 bg-gray-700 bottom-full"></span>
                    <span className="absolute h-full w-0.5 bg-gray-700 top-full"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">CYBERSECURITY INTERN</h4>
                  <p className="text-gray-400 mb-2">LearNex - IIIT Delhi | June 2024 - July 2024</p>
                  <ul className="list-disc pl-5 text-gray-400">
                    <li>Successfully completed a 60-hour internship on Cyber Security at CyFuse IIIT Delhi</li>
                    <li>Gained hands-on experience in cybersecurity principles and practices</li>
                    <li>Developed skills in network security, threat analysis, and vulnerability assessment</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 text-center flex items-center justify-center relative">
                    <span className="absolute h-full w-0.5 bg-gray-700 bottom-full"></span>
                    <span className="absolute h-full w-0.5 bg-gray-700 top-full"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">C++ PROGRAMMING INTERN</h4>
                  <p className="text-gray-400 mb-2">Techvanto Academy | June 2024 - July 2024</p>
                  <ul className="list-disc pl-5 text-gray-400">
                    <li>Implemented C++ software solutions: Created and improved programs using C++ to enhance software functionality and performance</li>
                    <li>Conducted testing and debugging: Participated in testing and debugging to ensure high-quality software development</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl uppercase font-semibold mb-6 mt-12 text-gray-300">CERTIFICATIONS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="certification-card p-6 bg-gray-900 rounded-lg">
                <img 
                  src="/quick-heal-badge.png" 
                  alt="Quick Heal Certification" 
                  className="w-48 h-48 mx-auto mb-4 object-contain"
                />
                <h4 className="text-lg text-center">Quick Heal Certified Digital Forensic Investigator</h4>
                <p className="text-gray-400 text-center">January 2025</p>
              </div>
              
              <div className="certification-card p-6 bg-gray-900 rounded-lg">
                <img 
                  src="/security-plus-badge.png" 
                  alt="CompTIA Security+" 
                  className="w-48 h-48 mx-auto mb-4 object-contain"
                />
                <h4 className="text-lg text-center">CompTIA Security+</h4>
                <p className="text-gray-400 text-center">January 2025</p>
              </div>
              
              <div className="certification-card p-6 bg-gray-900 rounded-lg">
                <img 
                  src="/network-plus-badge.png" 
                  alt="CompTIA Network+" 
                  className="w-48 h-48 mx-auto mb-4 object-contain"
                />
                <h4 className="text-lg text-center">CompTIA Network+</h4>
                <p className="text-gray-400 text-center">July 2024</p>
              </div>
              
              <div className="certification-card p-6 bg-gray-900 rounded-lg">
                <div className="h-48 flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-6xl text-gray-400" />
                </div>
                <h4 className="text-lg text-center">Safeguarding Digital Foot Prints - Quick Heal</h4>
                <p className="text-gray-400 text-center">August 2023</p>
              </div>
            </div>
            
            <h3 className="text-xl uppercase font-semibold mb-6 mt-12 text-gray-300">SOFT SKILLS</h3>
            
            <div className="text-gray-400">
              <p>Problem-Solving Skills · Team Player · Project Management · Adaptability</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20">
          <a 
            href={resumeUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

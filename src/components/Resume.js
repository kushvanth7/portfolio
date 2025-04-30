import React from 'react';
import { FaCode, FaServer, FaShieldAlt, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiHtml5, SiCss3, SiLinux, SiDocker, SiGit } from 'react-icons/si';
import { BsShieldCheck } from 'react-icons/bs';

const Resume = () => {
  // You will need to add your actual resume file to the public folder
  const resumeUrl = '/CV_202504102128051590_12203364.pdf'; 

  return (
    <section id="resume" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">RESUME</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl uppercase font-semibold mb-6 text-gray-300 flex items-center">
              <FaCode className="mr-2" /> TECHNICAL SKILLS
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg mb-2 flex items-center">
                  <FaCode className="mr-2" /> Languages
                </h4>
                <div className="flex items-center space-x-4 text-gray-400">
                  <SiCplusplus className="text-2xl" />
                  <SiPython className="text-2xl" />
                </div>
              </div>
              
              <div>
                <h4 className="text-lg mb-2 flex items-center">
                  <FaServer className="mr-2" /> Web Technologies
                </h4>
                <div className="flex items-center space-x-4 text-gray-400">
                  <SiHtml5 className="text-2xl" />
                  <SiCss3 className="text-2xl" />
                </div>
              </div>
              
              <div>
                <h4 className="text-lg mb-2 flex items-center">
                  <FaShieldAlt className="mr-2" /> Professional Skills
                </h4>
                <div className="flex flex-wrap items-center space-x-4 text-gray-400">
                  <SiLinux className="text-2xl" />
                  <SiGit className="text-2xl" />
                  <SiDocker className="text-2xl" />
                  <BsShieldCheck className="text-2xl" />
                </div>
                <p className="text-gray-400 mt-2">Network Security, Computer Forensics, Malware Analysis, Threat Management, IAM</p>
              </div>
            </div>
            
            <h3 className="text-xl uppercase font-semibold mb-6 mt-12 text-gray-300 flex items-center">
              <FaCertificate className="mr-2" /> CERTIFICATIONS
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCertificate className="text-gray-400 mt-1 mr-3" />
                <div>
                  <h4 className="text-lg">Quick Heal Certified Digital Forensic Investigator</h4>
                  <p className="text-gray-400">January 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaCertificate className="text-gray-400 mt-1 mr-3" />
                <div>
                  <h4 className="text-lg">CompTIA Security+</h4>
                  <p className="text-gray-400">January 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaCertificate className="text-gray-400 mt-1 mr-3" />
                <div>
                  <h4 className="text-lg">CompTIA Network+</h4>
                  <p className="text-gray-400">July 2024</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaCertificate className="text-gray-400 mt-1 mr-3" />
                <div>
                  <h4 className="text-lg">Safeguarding Digital Foot Prints - Quick Heal</h4>
                  <p className="text-gray-400">August 2023</p>
                </div>
              </div>
            </div>
// ... existing code ...

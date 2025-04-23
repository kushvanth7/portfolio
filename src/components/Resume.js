import React from 'react';

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
            <h3 className="text-xl uppercase font-semibold mb-6 text-gray-300">TECHNICAL SKILLS</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg mb-2">Languages</h4>
                <p className="text-gray-400">C++, Python</p>
              </div>
              
              <div>
                <h4 className="text-lg mb-2">Web Technologies</h4>
                <p className="text-gray-400">HTML, CSS</p>
              </div>
              
              <div>
                <h4 className="text-lg mb-2">Professional Skills</h4>
                <p className="text-gray-400">Linux, Network Security, Computer Forensics, Malware Analysis, Threat Management, Git, Docker, IAM</p>
              </div>
            </div>
            
            <h3 className="text-xl uppercase font-semibold mb-6 mt-12 text-gray-300">CERTIFICATIONS</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg">Quick Heal Certified Digital Forensic Investigator</h4>
                <p className="text-gray-400">January 2025</p>
              </div>
              
              <div>
                <h4 className="text-lg">CompTIA Security+</h4>
                <p className="text-gray-400">January 2025</p>
              </div>
              
              <div>
                <h4 className="text-lg">CompTIA Network+</h4>
                <p className="text-gray-400">July 2024</p>
              </div>
              
              <div>
                <h4 className="text-lg">Safeguarding Digital Foot Prints - Quick Heal</h4>
                <p className="text-gray-400">August 2023</p>
              </div>
            </div>
            
            <h3 className="text-xl uppercase font-semibold mb-6 mt-12 text-gray-300">EDUCATION</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium">Lovely Professional University, Punjab</h4>
                <p className="text-gray-400">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-400">2022 - 2026</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium">Sri Chaitanya Junior College</h4>
                <p className="text-gray-400">12th with Science</p>
                <p className="text-gray-400">2020 - 2022</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium">Sri Sai Ganesh Vidyalayam</h4>
                <p className="text-gray-400">10th with Science</p>
                <p className="text-gray-400">2019 - 2020</p>
              </div>
            </div>
          </div>
          
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
            
            <h3 className="text-xl uppercase font-semibold mb-6 mt-12 text-gray-300">PROJECTS</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium">Flask Application using DevOps Tools</h4>
                <p className="text-gray-400 mb-2">Docker, Github, Python | Mar 2025 – Apr 2025</p>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Designed and deployed a Flask-based web application using Docker containers</li>
                  <li>Integrated CI/CD pipeline with GitHub Actions to automate testing and Docker image builds</li>
                  <li>Deployed the containerized app to Render, enabling public access with automatic deployment</li>
                  <li><a href="https://github.com/kushvanth7/flask-devops-app" className="underline">GitHub Repository</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium">Smart Contract for Ether Deposits & Withdrawals</h4>
                <p className="text-gray-400 mb-2">Solidity, Check-Effect-Interaction Pattern | Nov 2024 – Dec 2024</p>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Created a smart contract to handle secure Ether payments and withdrawals</li>
                  <li>Implemented restricted access controls to allow only authorized users to initiate withdrawals</li>
                  <li>Developed a secure and efficient mechanism for managing user balances and transfers</li>
                  <li><a href="https://github.com/kushvanth7/smart-contract-on-payment" className="underline">GitHub Repository</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium">Weather Bot</h4>
                <p className="text-gray-400 mb-2">Python, Open Weather Map API | Mar 2023 – April 2023</p>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>A Python-based Discord bot called Weather Cat, which uses the Open Weather Map API</li>
                  <li>Retrieves and displays weather conditions like temperature, humidity, and AQI</li>
                  <li><a href="https://github.com/kushvanth7/Weather-Cat" className="underline">GitHub Repository</a></li>
                </ul>
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
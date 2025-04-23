import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Flask Application using DevOps Tools',
      image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'devops',
      description: 'Designed and deployed a Flask-based web app using Docker containers with CI/CD pipeline integration.',
      githubLink: 'https://github.com/kushvanth7/flask-devops-app'
    },
    {
      id: 2,
      title: 'Smart Contract for Ether Deposits & Withdrawals',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'blockchain',
      description: 'Created a secure smart contract to handle Ether payments and withdrawals with access controls.',
      githubLink: 'https://github.com/kushvanth7/smart-contract-on-payment'
    },
    {
      id: 3,
      title: 'Weather Bot',
      image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'python',
      description: 'A Python-based Discord bot that retrieves and displays weather conditions using Open Weather Map API.',
      githubLink: 'https://github.com/kushvanth7/Weather-Cat'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">PROJECTS</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in cybersecurity, programming, and blockchain technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`mx-4 px-2 py-1 border-b-2 transition-colors mb-2 ${activeCategory === 'all' ? 'border-white text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveCategory('devops')}
            className={`mx-4 px-2 py-1 border-b-2 transition-colors mb-2 ${activeCategory === 'devops' ? 'border-white text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            DevOps
          </button>
          <button 
            onClick={() => setActiveCategory('blockchain')}
            className={`mx-4 px-2 py-1 border-b-2 transition-colors mb-2 ${activeCategory === 'blockchain' ? 'border-white text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            Blockchain
          </button>
          <button 
            onClick={() => setActiveCategory('python')}
            className={`mx-4 px-2 py-1 border-b-2 transition-colors mb-2 ${activeCategory === 'python' ? 'border-white text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            Python
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="overflow-hidden group relative bg-gray-900 rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-white text-sm text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
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
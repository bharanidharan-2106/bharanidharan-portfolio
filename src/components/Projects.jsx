import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink, FiActivity } from 'react-icons/fi';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('projects');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const projectData = [
        {
            id: 1,
            title: 'E-Shop Java Console Application',
            type: 'Console Application',
            description: [
                'Built a console-based e-commerce system using Java, JDBC, and MySQL',
                'Implemented Admin and Customer role-based access control',
                'Developed modules for Product, Cart, and Order management',
                'Integrated MySQL for persistent data storage'
            ],
            techStack: ['Java', 'JDBC', 'MySQL'],
            githubLink: 'https://github.com/bharanidharan-2106/eShop-Java-Console-Application',
        },
        {
            id: 2,
            title: 'SpringMart — Backend E-Commerce',
            type: 'Backend Project',
            description: [
                'Developed RESTful backend using Spring Boot and Spring MVC',
                'Implemented JWT-based authentication and authorization with Spring Security',
                'Designed APIs for Product, Cart, and Order services',
                'Used Spring Data JPA with MySQL for database operations',
                'Tested endpoints using Postman'
            ],
            techStack: ['Spring Boot', 'Spring Security', 'REST API', 'MySQL'],
            githubLink: 'https://github.com/bharanidharan-2106/springmart-ecommerce-backend',
        },
        {
            id: 3,
            title: 'Cyber Cafe Management System',
            type: 'Full Stack Project',
            description: [
                'Built a full-stack management system using MongoDB, Express, React, Node.js',
                'Implemented Admin and Customer role-based access control',
                'Automated computer terminal allocation based on usage type',
                'Integrated printing services and real-time session tracking'
            ],
            techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
            githubLink: 'https://github.com/bharanidharan-2106/Cyber-Cafe',
        }
    ];

    return (
        <section id="projects" className="section-container">
            <h2 className="section-title">Projects</h2>

            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-card card ${isVisible ? 'fade-in-up' : ''}`}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-type">{project.type}</div>
                            <ul className="project-description-list">
                                {project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            <div className="tech-stack">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="tech-item">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-actions">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-action">
                                <FiGithub /> View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

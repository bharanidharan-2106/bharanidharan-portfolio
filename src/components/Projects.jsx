import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

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
            title: 'SpringMart – Microservices-Based E-Commerce Platform',
            type: 'Full Stack | Microservices Project',
            description: [
                'Built an enterprise-style e-commerce platform using Angular, Spring Boot, and Microservices architecture',
                'Developed independent services for Authentication, Users, Products, Cart, Orders, and Inventory',
                'Implemented API Gateway, Netflix Eureka Service Discovery, OpenFeign, and Spring Cloud Load Balancing for distributed service communication',
                'Secured the application using JWT Authentication and Role-Based Access Control for Customer, Merchant, and Admin roles',
                'Implemented Resilience4j Circuit Breaker and Rate Limiting to improve service reliability and fault tolerance',
                'Used PostgreSQL and MongoDB with service-specific databases for distributed data management'
            ],
            techStack: ['Spring Boot', 'Microservices', 'Angular', 'PostgreSQL', 'MongoDB', 'Spring Cloud', 'JWT', 'OpenFeign', 'Resilience4j'],
            githubLink: 'https://github.com/bharanidharan-2106/springmart-fullstack',
        },
        {
            id: 3,
            title: 'SkyStore – Cloud Storage Platform',
            type: 'Full Stack Project',
            description: [
                'Built a secure cloud storage platform using React.js, Node.js, Express, and MongoDB',
                'Integrated AWS S3 for scalable and reliable cloud-based file storage',
                'Implemented JWT-based authentication for secure user access and session management',
                'Developed file upload, organization, and retrieval features for managing digital files',
                'Implemented secure file sharing using unique, tamper-resistant sharing links',
                'Designed a responsive frontend with a focus on user-friendly file management and accessibility'
            ],
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'JWT'],
            githubLink: 'https://github.com/bharanidharan-2106/skystore',
        },
        {
            id: 4,
            title: 'The Tiny Twirl – Kids Gymnastics Centre',
            type: 'Full Stack | Real-World Client Project',
            description: [
                'Built and deployed a production-ready full-stack website using React, Node.js, Express.js, and MongoDB',
                'Developed a secure admin dashboard/CMS allowing the client to independently manage programs, media, events, offers, and testimonials',
                'Implemented JWT-based authentication, protected admin routes, and bcrypt password hashing for secure administration',
                'Integrated Cloudinary for image/video management and implemented automated cleanup of expired content using Node-Cron',
                'Designed responsive, mobile-first interfaces with Tailwind CSS, React Router, and Framer Motion',
                'Deployed the application using Render, MongoDB Atlas, Cloudinary, and a custom domain, taking the project from development to production'
            ],
            techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT', 'Tailwind CSS', 'Render'],
            githubLink: 'https://github.com/bharanidharan-2106/tinytwirl',
            liveLink: 'https://thetinytwirl.com/'
        },
        {
            id: 5,
            title: 'Finance Data Processing & Access Control Backend',
            type: 'Backend Project',
            description: [
                'Built production-grade RESTful backend using Spring Boot with clean architecture for secure financial record management',
                'Implemented role-based access control (RBAC) with JWT authentication and Spring Security',
                'Developed features for financial record lifecycle, pagination, sorting, and bulk creation',
                'Engineered dashboard analytics including total income/expense, trends, and category aggregations'
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
            githubLink: 'https://github.com/bharanidharan-2106/financeapp'
        }
    ];

    const openModal = (project) => {
        setActiveProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setActiveProject(null);
        document.body.style.overflow = 'unset';
    };

    // Duplicate projectData to ensure the marquee can loop smoothly without gaps
    const marqueeProjects = [...projectData, ...projectData, ...projectData];

    return (
        <section id="projects" className="section-container">
            <h2 className="section-title">Projects</h2>

            <div className={`projects-marquee-container ${isVisible ? 'fade-in' : ''}`}>
                <div className="projects-marquee-track">
                    {marqueeProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="project-marquee-card card"
                            onClick={() => openModal(project)}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-type">{project.type}</div>
                                <p className="project-summary">
                                    {project.description[0]}
                                </p>

                                <div className="tech-stack marquee-tech">
                                    {project.techStack.slice(0, 3).map(tech => (
                                        <span key={tech} className="tech-item">{tech}</span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="tech-item">+{project.techStack.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {activeProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal-content card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                            <FiX />
                        </button>
                        
                        <h3 className="project-title">{activeProject.title}</h3>
                        <div className="project-type">{activeProject.type}</div>
                        
                        <ul className="project-description-list modal-list">
                            {activeProject.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                        <div className="tech-stack modal-tech">
                            {activeProject.techStack.map(tech => (
                                <span key={tech} className="tech-item">{tech}</span>
                            ))}
                        </div>

                        <div className="project-actions modal-actions">
                            <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn-action btn-primary">
                                <FiGithub /> View Code
                            </a>
                            {activeProject.liveLink && (
                                <a href={activeProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn-action btn-outline" style={{ marginLeft: '1rem', backgroundColor: 'transparent', color: 'var(--accent-color)', border: '1px solid var(--accent-color)' }}>
                                    <FiExternalLink /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;

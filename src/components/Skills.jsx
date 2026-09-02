import React, { useEffect, useState } from 'react';
import './Skills.css';
import { 
    FaJava, FaPython, FaAws, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs, FaReact 
} from 'react-icons/fa';
import { 
    SiCplusplus, SiKotlin, SiJavascript, SiC, SiSpringboot, SiSpring, SiHibernate, 
    SiSpringsecurity, SiSwagger, SiMysql, SiPostgresql, SiMongodb, SiPostman, SiApachemaven, SiExpress, SiJsonwebtokens 
} from 'react-icons/si';
import { 
    FiDatabase, FiServer, FiGrid, FiCloud, FiCode, FiCompass, FiShield, FiBox, FiGitPullRequest 
} from 'react-icons/fi';

const Skills = () => {
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

        const element = document.getElementById('skills');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const skillCategories = [
        {
            id: 'languages',
            title: 'Programming Languages',
            skills: [
                { name: 'Java', icon: <FaJava color="#5382a1" /> },
                { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
                { name: 'Kotlin', icon: <SiKotlin color="#7F52FF" /> },
                { name: 'Python', icon: <FaPython color="#3776AB" /> },
                { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
                { name: 'C', icon: <SiC color="#A8B9CC" /> }
            ]
        },
        {
            id: 'backend',
            title: 'Backend Development',
            skills: [
                { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
                { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
                { name: 'Express', icon: <SiExpress color="#000000" /> },
                { name: 'Data JPA', icon: <FiDatabase color="#4299e1" /> },
                { name: 'Hibernate', icon: <SiHibernate color="#59666C" /> },
                { name: 'Spring Security', icon: <SiSpringsecurity color="#6DB33F" /> },
                { name: 'JWT', icon: <SiJsonwebtokens color="#000000" /> },
                { name: 'REST APIs', icon: <FiServer color="#e53e3e" /> }
            ]
        },
        {
            id: 'microservices',
            title: 'Microservices',
            skills: [
                { name: 'Architecture', icon: <FiGrid color="#805ad5" /> },
                { name: 'Spring Cloud', icon: <FiCloud color="#6DB33F" /> },
                { name: 'OpenFeign', icon: <FiCode color="#3182ce" /> },
                { name: 'Eureka', icon: <FiCompass color="#dd6b20" /> },
                { name: 'Resilience4j', icon: <FiShield color="#38a169" /> },
                { name: 'Swagger', icon: <SiSwagger color="#85EA2D" /> }
            ]
        },
        {
            id: 'databases',
            title: 'Databases',
            skills: [
                { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
                { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> }
            ]
        },
        {
            id: 'cloud',
            title: 'Cloud & DevOps',
            skills: [
                { name: 'AWS', icon: <FaAws color="#FF9900" /> },
                { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
                { name: 'Containers', icon: <FiBox color="#3182ce" /> },
                { name: 'CI/CD', icon: <FiGitPullRequest color="#dd6b20" /> }
            ]
        },
        {
            id: 'tools',
            title: 'Tools & Frontend',
            skills: [
                { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
                { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
                { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
                { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
                { name: 'GitHub', icon: <FaGithub color="#181717" /> },
                { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
                { name: 'Maven', icon: <SiApachemaven color="#C71A22" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="bg-alt skills-section">
            <div className="section-container">
                <h2 className="section-title">Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`skill-card ${isVisible ? 'fade-in-up' : ''}`}
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                        >
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-icons-grid">
                                {category.skills.map(skill => (
                                    <div key={skill.name} className="skill-item">
                                        <div className="skill-icon-wrapper">
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;

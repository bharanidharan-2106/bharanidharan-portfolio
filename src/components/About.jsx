import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById('about');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <section id="about" className="section-container">
            <h2 className="section-title">About Me</h2>

            <div className={`about-content ${isVisible ? 'fade-in-up' : ''}`}>

                {/* Java Class Code Block */}
                <div className="code-block-wrapper slide-up-animation">
                    <div className="code-block-header">
                        <span className="file-name">Developer.java</span>
                        <span className="file-icon">☕</span>
                    </div>
                    <pre className="java-class-code">
                        <code>
                            <span className="keyword">public class</span> <span className="class-name">Developer</span> {'{\n'}
                            {'\n'}
                            <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">name</span> = <span className="string">"Bharanidharan M"</span>;{'\n'}
                            {'\n'}
                            <span className="code-tab"></span><span className="keyword">String</span>[] <span className="variable">roles</span> = {'{\n'}
                            <span className="code-tab"></span><span className="code-tab"></span><span className="string">"Java Developer"</span>,{'\n'}
                            <span className="code-tab"></span><span className="code-tab"></span><span className="string">"Backend Developer"</span>,{'\n'}
                            <span className="code-tab"></span><span className="code-tab"></span><span className="string">"Software Engineer"</span>{'\n'}
                            <span className="code-tab"></span><span className="code-tab"></span><span className="string">"Full Stack Developer"</span>{'\n'}
                            <span className="code-tab"></span>{'};\n'}
                            {'\n'}
                            <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">education</span> = <span className="string">"3rd Year CSE @ Kumaraguru College of Technology (CGPA: 7.99)"</span>;{'\n'}
                            <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">focus</span> = <span className="string">"Backend systems, scalable applications, REST APIs"</span>;{'\n'}
                            <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">sports</span> = <span className="string">"Hockey Player - KCT College Team"</span>;{'\n'}
                            {'\n'}
                            <span className="code-tab"></span><span className="keyword">public void</span> <span className="method">buildSystem</span>() {'{\n'}
                            <span className="code-tab"></span><span className="code-tab"></span>System.out.println(<span className="string">"Writing clean, efficient, and scalable code..."</span>);{'\n'}
                            <span className="code-tab"></span>{'}\n'}
                            {'}'}
                        </code>
                    </pre>
                </div>

                {/* Professional Bio */}
                <div className="bio-container">
                    <p className="bio-text">
                        I am a 3rd-year Computer Science Engineering student at Kumaraguru College of Technology and an aspiring Java Full Stack Developer. I have a strong foundation in Object-Oriented Programming, Core Java, DBMS, and Spring Boot, and I enjoy building scalable backend systems and modern web applications.
                    </p>
                    <p className="bio-text">
                        I focus on developing RESTful APIs, efficient database solutions, and responsive web interfaces using modern development practices.
                    </p>
                    <p className="bio-text">
                        Beyond coding, I am an active hockey player representing the KCT college team, where I’ve developed teamwork, discipline, and strategic thinking—qualities that also strengthen my approach to software engineering.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;

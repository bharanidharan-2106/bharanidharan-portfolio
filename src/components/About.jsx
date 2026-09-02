import React, { useEffect, useState } from 'react';
import './About.css';
import { FiBookOpen, FiLayers, FiServer, FiActivity } from 'react-icons/fi';

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
                            <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">education</span> = <span className="string">"4th Year CSE @ Kumaraguru College of Technology (CGPA: 8.01)"</span>;{'\n'}
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

                {/* Premium About Me Section */}
                <div className="premium-about-container">
                    <div className="about-badge">
                        <FiBookOpen className="badge-icon" /> README.md
                    </div>
                    <div className="quote-icon-wrapper">
                        <span className="quote-mark">"</span>
                    </div>

                    <div className="premium-about-content">
                        <p>
                            I am a final-year <span className="highlight-keyword">Computer Science Engineering</span> student at Kumaraguru College of Technology (CGPA: 8.01) and an aspiring Java Full Stack Developer. I have a strong foundation in <span className="highlight-keyword">Object-Oriented Programming, Core Java, DBMS, Spring Boot, and Microservices</span>, and I enjoy building scalable backend systems and modern web applications.
                        </p>
                        <p>
                            I am passionate about <span className="highlight-keyword">Data Structures and Algorithms (DSA)</span> and regularly practice problem-solving to strengthen my coding skills. I have successfully solved <span className="highlight-keyword">180+ problems on LeetCode</span>, covering a range of fundamental data structures and algorithmic concepts.
                        </p>
                        <p>
                            Beyond coding, I am an active hockey player representing the KCT college team, where I’ve developed <span className="highlight-keyword">teamwork, discipline, and strategic thinking</span>—qualities that also strengthen my approach to software engineering.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

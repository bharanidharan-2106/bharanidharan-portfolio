import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { FiArrowRight, FiMail, FiDownload } from 'react-icons/fi';

const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Java Developer", "Software Developer", "Backend Developer", "Full Stack Developer"];

    useEffect(() => {
        let timer = setTimeout(() => {
            handleType();
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, typingSpeed]);

    const handleType = () => {
        const i = loopNum % roles.length;
        const fullText = roles[i];

        setDisplayText(isDeleting
            ? fullText.substring(0, displayText.length - 1)
            : fullText.substring(0, displayText.length + 1)
        );

        setTypingSpeed(isDeleting ? 100 : 150);

        if (!isDeleting && displayText === fullText) {
            setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <section id="home" className="hero-section fade-in">
            <div className="section-container hero-container">

                {/* Left Side: Developer Intro */}
                <div className="hero-content">
                    <p className="hero-greeting animate-text" style={{ animationDelay: '0.1s' }}>Hello, I'm <span className="highlight-text">Bharanidharan M</span></p>
                    <h1 className="hero-role animate-text" style={{ animationDelay: '0.2s' }}>
                        {displayText}<span className="cursor">|</span>
                    </h1>

                    <div className="hero-stack animate-text" style={{ animationDelay: '0.3s' }}>
                        Java | Spring Boot | MySQL
                    </div>

                    <p className="hero-description animate-text" style={{ animationDelay: '0.4s' }}>
                        Computer Science Engineering student passionate about building scalable backend systems with <span className="highlight-text">Java</span> and <span className="highlight-text">Spring Boot</span> and creating modern full-stack web applications. Outside coding, I’m a college hockey team player.
                    </p>

                    <div className="hero-buttons animate-text" style={{ animationDelay: '0.5s' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Projects <FiArrowRight className="btn-icon" />
                        </a>
                        <a href="/Resume_Bharanidharan M.pdf" download="Bharanidharan_M_Resume.pdf" className="btn btn-outline">
                            Resume <FiDownload className="btn-icon" />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me <FiMail className="btn-icon" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Developer Illustration / Dashboard Mockup */}
                <div className="hero-visual">
                    <div className="photo-glass-card animate-photo" style={{ animationDelay: '0.3s' }}>
                        <div className="code-tag">&lt;developer&gt;</div>
                        <div className="hero-profile-photo">
                            <div className="profile-img-inner">
                                <img src="/new_pic.jpeg" alt="Bharanidharan M" className="profile-img" />
                            </div>
                        </div>
                        <div className="code-tag">&lt;/developer&gt;</div>
                    </div>
                    <div className="dashboard-mockup animate-card" style={{ animationDelay: '0.4s' }}>
                        <div className="mockup-header">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <div className="mockup-body">
                            <pre className="code-snippet">
                                <code>
                                    <span className="code-keyword">package</span> dev.portfolio;{'\n'}
                                    <span className="code-annotation">@RestController</span>{'\n'}
                                    <span className="code-annotation">@RequestMapping</span>(<span className="code-string">"/api/dev"</span>){'\n'}
                                    <span className="code-keyword">public class</span> <span className="code-class">PortfolioController</span> {'{'}{'\n'}
                                    {'\n'}
                                    <span className="code-tab"></span><span className="code-annotation">@GetMapping</span>(<span className="code-string">"/skills"</span>){'\n'}
                                    <span className="code-tab"></span><span className="code-keyword">public</span> String <span className="code-method">skills</span>() {'{'}{'\n'}
                                    <span className="code-tab"></span><span className="code-tab"></span><span className="code-keyword">return</span> <span className="code-string">"Java | Spring Boot | MySQL"</span>;{'\n'}
                                    <span className="code-tab"></span>{'}'}{'\n'}
                                    {'}'}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;

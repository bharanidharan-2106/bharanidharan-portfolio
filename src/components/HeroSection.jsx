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
            <div className="hero-bg-shape"></div>
            <div className="section-container hero-container">
                {/* Left Side: Developer Intro */}
                <div className="hero-content">
                    <p className="hero-greeting animate-text" style={{ animationDelay: '0.1s' }}>Hello, I'm <span className="highlight-text">Bharanidharan M</span></p>
                    <h1 className="hero-role animate-text" style={{ animationDelay: '0.2s' }}>
                        {displayText}<span className="cursor">|</span>
                    </h1>

                    <div className="hero-stack animate-text" style={{ animationDelay: '0.3s' }}>
                        Java | Spring Boot
                    </div>

                    <p className="hero-description animate-text" style={{ animationDelay: '0.4s' }}>
                        Computer Science Engineering student passionate about building scalable backend systems with <span className="highlight-text">Java</span> and <span className="highlight-text">Spring Boot</span> and creating modern full-stack web applications.
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
                    <div className="hero-profile-wrapper animate-photo" style={{ animationDelay: '0.3s' }}>
                        <img src="/removebg-preview.png" alt="Bharanidharan M" className="profile-img-organic" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;

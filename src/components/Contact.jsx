import React, { useEffect, useState, useRef } from 'react';
import './Contact.css';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone, FiCopy, FiCheck } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });
    const form = useRef();

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

        const element = document.getElementById('contact');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        showToast(`${label} copied!`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Using environment variables for better security (configured in Vercel)
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setIsSubmitted(true);
                setIsLoading(false);
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                alert("Failed to send message. Please try again or email me directly.");
            });
    };

    return (
        <section id="contact" className="bg-alt contact-section">
            <div className="section-container">
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle">I'm open to backend development opportunities, collaborations, and technical discussions.</p>

                <div className={`contact-wrapper ${isVisible ? 'fade-in-up' : ''}`}>

                    {/* Contact Endpoints */}
                    <div className="contact-info">
                        <h3 className="api-heading">Developer Endpoints</h3>

                        <div className="endpoint-list">
                            <div className="endpoint-card" onClick={() => copyToClipboard('mcbharani2006@gmail.com', 'Email')}>
                                <div className="endpoint-icon"><FiMail /></div>
                                <div className="endpoint-details">
                                    <span className="endpoint-label">Email</span>
                                    <span className="endpoint-value">mcbharani2006@gmail.com</span>
                                </div>
                                <div className="copy-hint"><FiCopy /></div>
                            </div>

                            <div className="endpoint-card"
                                onClick={() => copyToClipboard('+918754642611', 'Phone')}
                                onContextMenu={(e) => {
                                    // Allow long press/right click to actually trigger tel: behavior on mobile if they want
                                    // but we prioritize copy for recruiters
                                }}
                            >
                                <a href="tel:+918754642611" className="mobile-only-call" onClick={(e) => e.stopPropagation()}>
                                    <div className="endpoint-icon"><FiPhone /></div>
                                </a>
                                <div className="endpoint-icon desktop-only"><FiPhone /></div>
                                <div className="endpoint-details">
                                    <span className="endpoint-label">Phone</span>
                                    <span className="endpoint-value">+91 8754642611</span>
                                </div>
                                <div className="copy-hint"><FiCopy /></div>
                            </div>

                            <a href="https://www.linkedin.com/in/bharanidharan21" target="_blank" rel="noopener noreferrer" className="endpoint-card">
                                <div className="endpoint-icon"><FiLinkedin /></div>
                                <div className="endpoint-details">
                                    <span className="endpoint-label">LinkedIn</span>
                                    <span className="endpoint-value">linkedin.com/in/bharanidharan-21</span>
                                </div>
                            </a>

                            <a href="https://github.com/Bharanidharan-21" target="_blank" rel="noopener noreferrer" className="endpoint-card">
                                <div className="endpoint-icon"><FiGithub /></div>
                                <div className="endpoint-details">
                                    <span className="endpoint-label">GitHub</span>
                                    <span className="endpoint-value">github.com/Bharanidharan-21</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container card">
                        <div className="form-header">
                            <span className="method-badge post">POST</span>
                            <span className="endpoint-url">/contact</span>
                        </div>

                        {!isSubmitted ? (
                            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="user_name">"name":</label>
                                    <input type="text" id="user_name" name="from_name" placeholder="Enter your name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="user_email">"email":</label>
                                    <input type="email" id="user_email" name="email" placeholder="Enter your email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">"message":</label>
                                    <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                                </div>

                                <button type="submit" className={`submit-btn btn-primary ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                                    {isLoading ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <><FiSend className="btn-icon" /> Send</>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="form-success-message">
                                <div className="success-code">HTTP/1.1 200 OK</div>
                                <div className="success-json">
                                    <pre>
                                        <code>
                                            {`{
  "status": "success",
  "message": "Message sent successfully.",
  "note": "I'll get back to you soon."
}`}
                                        </code>
                                    </pre>
                                </div>
                                <button className="btn-action" onClick={() => setIsSubmitted(false)}>Send Another Message</button>
                            </div>
                        )}
                    </div>

                </div>

                {/* Toast Notification */}
                <div className={`toast ${toast.show ? 'show' : ''}`}>
                    <FiCheck className="toast-icon" />
                    <span>{toast.message}</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;

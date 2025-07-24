import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";


// --- Import Bootstrap CSS ---
// Make sure you've run 'npm install bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// --- Import Custom CSS ---
// This should come AFTER bootstrap to override styles
import './App.css';

// --- Import Assets ---
import heroImage from './assets/20250724_1128_Modern Minimalist Workspace_simple_compose_01k0xg4j83ejrsxd9zxf56fr2t.png';
import profileImage from './assets/IMG_20250330_233909.jpg'; // Correctly import the profile picture

const skillsData = {
  "Languages & Markup": [
    "Python", 
    "JavaScript (ES6+)", 
    "HTML5", 
    "CSS3", 
    "PHP", 
    "SQL"
  ],
  "Frameworks & Libraries": [
    "React.js", 
    "Node.js", 
    "Express.js", 
    "Flask", 
    "Django", 
    "Bootstrap", 
    "Vite"
  ],
  "Databases": [
    "MongoDB", 
    "MySQL", 
    "PostgreSQL"
  ],
  "Tools & Platforms": [
    "Git & GitHub", 
    "Docker", 
    "AWS", 
    "GCP", 
    "Zscaler", 
    "Google Cloud Console", 
    "VS Code"
  ],
  "AI & Machine Learning": [
    "OpenAI API", 
    "Cohere API", 
    "Scikit-learn", 
    "spaCy", 
    "NLTK", 
    "Pandas", 
    "NumPy", 
    "Explainable AI"
  ]
}


// --- Data for Project Cards ---
const projectsData = [
    {
        id: 1,
        title: 'Kisan Kart',
        description: 'A full-fledged e-commerce platform for farmers to buy and sell products using React, Node.js, and Bootstrap.',
        imageUrl: 'src/assets/20250724_1508_Futuristic Farm e-Commerce UI_simple_compose_01k0xwnkb9ewh914ytx1cv835t.png',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 2,
        title: 'Suraksha Setu',
        description: 'Disaster management platform for quick SOS reporting and live location tracking using AI and real-time alerts.',
        imageUrl: 'src/assets/20250724_1511_Emergency App Interface_simple_compose_01k0xwt7s7f7kvbffvpcy0ex6b.png',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 3,
        title: 'FRIDAY AI Assistant',
        description: 'An AI-powered personal assistant built with Flask, React, and APIs like OpenAI, Cohere, and OpenWeatherMap.',
        imageUrl: 'src/assets/20250724_1513_Futuristic Virtual Interface_simple_compose_01k0xwymd6ejxb9x227q1xncmf.png',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 4,
        title: 'AI Translator',
        description: 'A language translation app using machine learning models and language APIs for seamless multilingual communication.',
        imageUrl: 'src/assets/20250724_1515_Multilingual Communication Design_simple_compose_01k0xx2r85fjh9m04d8epxq8ts.png',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 5,
        title: 'PDF to Text Converter',
        description: 'Convert PDF files into readable text using Python, PyPDF2 and frontend UI built in React.',
        imageUrl: 'src/assets/20250724_1516_Futuristic Document Interface_simple_compose_01k0xx67dxeaz9pxsh0g9048nc.png',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        id: 6,
        title: 'Read Aloud App',
        description: 'Text-to-Speech application that reads aloud documents and webpages using web speech synthesis APIs.',
        imageUrl: 'src/assets/20250724_1518_Audiobook Interface Design_simple_compose_01k0xx8sdtfyysdf44jz26j5yc.png',
        liveUrl: '#',
        codeUrl: '#',
    },
];

// --- Data for Achievements & Certifications ---
const certifications = [
    "Artificial Intelligence Fundamentals - IBM",
    "Advanced Learning Algorithms - Coursera (DeepLearning.ai)",
    "Cloud Computing - NPTEL (IIT-M)",
    "Introduction to IoT - NPTEL",
    "Data Science Foundations - Infosys Springboard",
    "Networking for Cyber Professionals - Zscaler Academy",
    "Google Cloud Skills Boost - Gold League Member along with 25 badges (30,000+ XP)",
    "Micro Certification - ServiceNow",
    "Completed Generative Al-Essential courses"
];

const achievements = [
    "Finalist - SAP Hackfest (National Level)",
    "Runner-up in Python Al Workshop",
    "Top 5 finalist in IEDC CE Thalassery Hacktly",
    "Organized two college tech events: CODE HUNT",
    "Qualified Coding Round of Adobe India Hackthon 2025"
];


// --- Framer Motion Variants ---
const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.2,
        },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


// --- Main App Component ---
export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <HeroSection />
            <main>
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <AchievementsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}

// --- Hero Section Component ---
const HeroSection = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = ['About', 'Skills','Projects', 'Achievements', 'Contact'];

    return (
        <motion.section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="hero-overlay"></div>
            <div className="container text-center text-white position-relative">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                >
                    Sivaji Chinnam
                </motion.h1>
                <motion.p
                    className="subtitle"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                >
                    Visionary Developer | Ethical AI & Sustainable Tech Innovator
                </motion.p>

                <motion.div
                    className="nav-buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {navItems.map(item => (
                        <motion.button
                            key={item}
                            className="nav-button"
                            onClick={() => handleScroll(item.toLowerCase())}
                            whileHover={{ scale: 1.1, backgroundColor: '#00bcd4', borderColor: '#00bcd4' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.button
                    className="scroll-button"
                    onClick={() => handleScroll('about')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ↓ Explore
                </motion.button>
            </div>
        </motion.section>
    );
};

// --- About Section Component ---
const AboutSection = () => (
    <motion.section
        id="about"
        className="about-section py-5"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        <div className="container">
            <motion.h2 variants={itemVariant} className="text-center section-title">About Me</motion.h2>
            <div className="row align-items-center">
                <motion.div className="col-lg-4 text-center" variants={itemVariant}>
                    <motion.img
                        src={profileImage}
                        alt="Profile Pic"
                        className="profile-pic img-fluid"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </motion.div>
                <motion.div className="col-lg-8" variants={itemVariant}>
                    <p className="lead">
                        Hello! I'm a forward-thinking frontend developer with a passion for crafting intuitive, responsive, and high-impact web applications. With expertise in React, Vite, Bootstrap, and animation libraries like Framer Motion, I blend clean code with thoughtful design to create seamless user experiences. My work spans across ethical AI systems, sustainable tech solutions like Solar Paint, and e-commerce platforms such as Kisan Kart. I thrive on innovation, explore emerging technologies, and contribute to open-source with a vision for building a better digital future.
                    </p>
                </motion.div>
            </div>
        </div>
    </motion.section>
);

// --- Skills Section Component ---
const SkillsSection = () => (
    <motion.section 
        id="skills" 
        className="skills-section py-5" 
        variants={sectionVariant} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
    >
        <div className="container">
            <motion.h2 variants={itemVariant} className="text-center section-title">Technical Proficiency</motion.h2>
            <div className="row g-4 justify-content-center">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <motion.div className="col-lg-4 col-md-6" key={category} variants={itemVariant}>
                        <div className="skill-category-card">
                            <h3>{category}</h3>
                            <div className="skills-list">
                                {skills.map(skill => (
                                    <span key={skill} className="skill-item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
);

// --- Projects Section Component ---
const ProjectsSection = () => (
    <motion.section
        id="projects"
        className="projects-section"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
        <div className="container">
            <motion.h2 variants={itemVariant} className="text-center section-title">My Projects</motion.h2>
            <div className="row g-4">
                {projectsData.map((project) => (
                    <div className="col-lg-4 col-md-6" key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    </motion.section>
);

// --- Achievements Section Component ---
const AchievementsSection = () => (
    <motion.section
        id="achievements"
        className="achievements-section py-5"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
        <div className="container">
            <motion.h2 variants={itemVariant} className="text-center section-title">Certifications & Achievements</motion.h2>
            <div className="row">
                <motion.div className="col-md-6" variants={itemVariant}>
                    <div className="achievements-card">
                        <h3 className="text-center">Certifications</h3>
                        <ul className="achievements-list">
                            {certifications.map((cert, index) => (
                                <motion.li key={index} variants={itemVariant}>{cert}</motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
                <motion.div className="col-md-6" variants={itemVariant}>
                     <div className="achievements-card">
                        <h3 className="text-center">Achievements & Activities</h3>
                        <ul className="achievements-list">
                            {achievements.map((ach, index) => (
                                <motion.li key={index} variants={itemVariant}>{ach}</motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
);

// --- Contact Section Component ---
const ContactSection = () => (
  <motion.section
    id="contact"
    className="contact-section py-5 bg-light"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container text-center">
      <motion.h2 variants={itemVariant} className="section-title">Get In Touch</motion.h2>
      <motion.p
        variants={itemVariant}
        className="lead"
        style={{ maxWidth: '600px', margin: '1rem auto' }}
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out!
      </motion.p>
      <motion.div variants={itemVariant} className="mt-4">
        <a
          href="mailto:sivajichinnam2459@gmail.com"
          className="btn btn-primary btn-lg mx-2 rounded-circle"
          aria-label="Send Email"
          title="Send Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://linkedin.com/in/chowdary369"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-lg mx-2 rounded-circle"
          aria-label="LinkedIn Profile"
          title="Visit LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
         {/* GitHub Button */}
  <a
    href="https://github.com/sivaji4829"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-dark btn-lg mx-2 rounded-circle"
    aria-label="GitHub Profile"
    title="View GitHub"
  >
    <i className="fab fa-github"></i>
  </a>
      </motion.div>
    </div>
  </motion.section>
);

// --- Project Card Component ---
const ProjectCard = ({ project }) => (
    <motion.div
        className="card h-100 project-card"
        variants={itemVariant}
        whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(0,0,0,0.15)" }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <img src={project.imageUrl} alt={project.title} className="card-img-top" />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <div className="mt-auto">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                    Live Demo
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                    View Code
                </a>
            </div>
        </div>
    </motion.div>
);

// --- Footer Component ---
const Footer = () => (
    <footer className="footer bg-dark text-white text-center py-3">
        <div className="container">
            <p className="mb-0">&copy; {new Date().getFullYear()} Sivaji Chinnam. All Rights Reserved.</p>
        </div>
    </footer>
);
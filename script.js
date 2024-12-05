document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Skills Section
    const skillsContainer = document.getElementById('skills-container');
    const skills = [
        {
            name: 'Backend Development', icon: 'fa-server',
            details: ['Python', 'Django', 'Flask', 'FastAPI', 'SocketIO', 'Asyncio', 'FastAPI', 'PyTest', 'Numpy', 'Pandas']
        },
        {
            name: 'AI & Machine Learning', icon: 'fa-brain',
            details: ['TensorFlow', 'Scikit-learn', 'LangChain', 'LangServe', 'LangSmith', 'OpenAI']
        },
        {
            name: 'AI Tools', icon: 'fa-robot',
            details: ['ChatGPT', 'Gemini', 'Anthropic', 'Mistral', 'Github Copilot', 'Flowise', 'Cursor AI', 'Windsurf']
        },
        {
            name: 'Databases', icon: 'fa-database',
            details: ['MSSQL', 'SQLite', 'PostgreSQL', 'ChromaDB', 'Pinecone']
        },
        {
            name: 'DevOps & Tools', icon: 'fa-tools',
            details: ['Git', 'Github', 'Gitlab', 'Docker', 'WSL', 'Oracle VM', 'Airflow', 'Postman', 'Jira']
        },
        {
            name: 'Frontend & Design', icon: 'fa-code',
            details: ['HTML', 'CSS', 'JavaScript', 'Figma']
        },
        {
            name: 'Operating Systems', icon: 'fa-laptop-code',
            details: ['Windows', 'Linux (Ubuntu, Fedora)']
        }
    ];

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'col-md-6 col-lg-4 mb-4';
        skillCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body text-center">
                    <i class="fas ${skill.icon} fa-3x mb-3"></i>
                    <h5 class="card-title">${skill.name}</h5>
                    <div class="skill-details">
                        ${skill.details.map(detail => `<span class="badge bg-secondary m-1">${detail}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Dynamic Projects Section
    const projectsContainer = document.getElementById('projects-container');
    const projects = [
        {
            name: 'AI-Powered Customer Service Platform',
            description: 'Developed a chatbot at Position Green enabling customers to query environmental data using OpenAI API, Langchain, and ChromaDB with FastAPI. Implemented a RAG solution for efficient data retrieval, transitioned from Streamlit to React for improved user experience, and integrated streaming responses for real-time interaction. The system allowed customers to analyze and understand their environmental data through natural language queries.',
            technologies: ['Python', 'FastAPI', 'OpenAI API', 'ChromaDB', 'React'],
            link: '#'
        },
        {
            name: "Web-Based Interface for SYSCTL's 'DataLock' with Secure Integration",
            description: "Developed a web application for SYSCTL's 'DataLock' using Django and HTML. The app securely connected to their Linux- based IT - security systems via custom API modules, utilized a SQLite database as both a data storage solution and an intermediate layer for cross - module communication, provided secure file upload and storage for unique customers, tracked and logged scan results, and presented data in a clear interface. Automated script execution via Linux systemd path units and ensured quality through extensive unit and integration testing.",
            technologies: ['Django', 'SQLite', 'Python', 'HTML/CSS', 'Linux'],
            link: '#'
        },
        {
            name: 'WorkHub - An Automated Email Management System',
            description: 'A Flask-based application integrating Google OAuth and OpenAI API to streamline job searching, email management, and data organization. Features include multiple GPT assistants tailored for specific tasks such as automated email drafting, content generation, and contextual processing. The platform allows web scraping and storage of job postings, with options to save listings and related applications locally. Users can also manage a database for job applications, track saved job postings, and organize company information with automated naming and data extraction. Designed as a unified solution to enhance and automate the job application process. Currently a work-in-progress.',
            technologies: ['Flask', 'SQLAlchemy', 'Google OAuth', 'OpenAI API'],
            link: 'https://github.com/CharlieRosander/WorkHub/tree/38382636e4352f62c7adb122750ca935b75b2d35'
        },
        {
            name: 'Image Recognition CNN',
            description: 'Image recognition project (cats & dogs), programmed and trained my own model to recognize and classify cats & dogs using CNN. I later improved upon this project using transfer learning with a pretrained model.',
            technologies: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning'],
            link: 'https://github.com/CharlieRosander/Exam-DL/tree/3bb159bf1831a3d1719b870c70cffb21bac33a35'
        },
        {
            name: 'Classification Model Trainer',
            description: 'A tool that simplifies the process of training machine learning models on custom image data. Through a graphical interface, users can easily load their own training images and quickly train powerful image classification models without writing any code. The application supports both binary and categorical classification, while providing instant visualization of training results and model performance through graphs. Users can save their trained models for future use.',
            technologies: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning'],
            link: 'https://github.com/CharlieRosander/ClassificationModelTrainer/tree/ff7c42eb4e6c51adda00a431e2d79ac199ad58ea'
        },
        {
            name: 'Analytics Dashboard',
            description: 'Built a Flask-based dashboard for tracking customer and internal data at SYSCTL AB.',
            technologies: ['Flask', 'SQLite', 'Python', 'HTML/CSS'],
            link: '#'
        },

    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-6 mb-4';
        projectCard.innerHTML = `
            <div class="card project-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="badge-container mb-2">
                        ${project.technologies.map(tech => `<span class="badge bg-primary me-1 mb-1">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Contact Form Submission (Client-side only)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

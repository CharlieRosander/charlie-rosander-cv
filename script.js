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
                        ${skill.details.map(detail => `<span class="badge bg-primary m-1">${detail}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Dynamic Soft Skills Section
    const softSkillsContainer = document.getElementById('soft-skills-container');
    const softSkills = [
        {
            title: 'Communication',
            description: 'The ability to adapt communication to different audiences and explain complex ideas in an understandable way.',
            icon: 'fa-comments'
        },
        {
            title: 'Empathy',
            description: 'The ability to understand and show compassion for others\' needs and challenges.',
            icon: 'fa-heart'
        },
        {
            title: 'Problem-solving',
            description: 'Identifying problems and developing solutions, particularly in hectic and fast-changing environments.',
            icon: 'fa-lightbulb'
        },
        {
            title: 'Collaboration',
            description: 'The ability to work effectively with others and collaborate across different roles and departments.',
            icon: 'fa-users'
        },
        {
            title: 'Leadership',
            description: 'Experience in leading and mentoring others, particularly in helping them develop and solve problems.',
            icon: 'fa-star'
        },
        {
            title: 'Adaptability',
            description: 'The ability to adjust to new situations and changing demands.',
            icon: 'fa-sync-alt'
        },
        {
            title: 'Conflict resolution',
            description: 'The ability to identify and manage conflicts within a team, finding solutions that satisfy all parties.',
            icon: 'fa-balance-scale'
        },
        {
            title: 'Patience',
            description: 'Managing challenging or slow processes without losing focus or becoming frustrated.',
            icon: 'fa-clock'
        }
    ];

    softSkills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'col-md-6 col-lg-3 mb-4';
        skillCard.innerHTML = `
            <div class="card h-100 soft-skill-card">
                <div class="card-body text-center">
                    <i class="fas ${skill.icon} fa-2x mb-3 text-primary"></i>
                    <h5 class="card-title">${skill.title}</h5>
                    <p class="card-text">${skill.description}</p>
                </div>
            </div>
        `;
        softSkillsContainer.appendChild(skillCard);
    });

    // Dynamic Projects Section
    const projectsContainer = document.getElementById('projects-container');
    const projects = [
        {
            name: 'AI-Powered Customer Service Platform',
            description: 'Developed a chatbot that enabled customers to query their environmental data,integrating FastAPI, LangChain agents, vector databases, and a React frontend. The chatbot handled two primary use cases: Database Queries – Customers could retrieve structured environmental data stored in an MSSQL database, leveraging pre-defined queries for precise and controlled responses. Document Retrieval – Users could extract relevant insights from uploaded sustainability reports stored in ChromaDB, using a Retrieval-Augmented Generation (RAG) approach to fetch relevant document excerpts based on their queries. Developed a REST API to manage requests and queries, enabling seamless communication between the frontend and backend. The system employed true streaming (async processing & yielding each chunk) responses, providing real-time feedback to users as they interacted with the chatbot.',
            technologies: ['Python', 'FastAPI', 'OpenAI API', 'ChromaDB', 'React'],
            link: ''
        },
        {
            name: "Web-Based Interface for SYSCTL's 'DataLock'",
            description: "Developed a web application for SYSCTL's 'DataLock' using Django and HTML. The app securely connected to their Linux- based IT - security systems via custom API modules, utilized a SQLite database as both a data storage solution and an intermediate layer for cross - module communication, provided secure file upload and storage for unique customers, tracked and logged scan results, and presented data in a clear interface. Automated script execution via Linux systemd path units and ensured quality through extensive unit and integration testing.",
            technologies: ['Django', 'SQLite', 'Python', 'HTML/CSS', 'Linux'],
            link: ''
        },
        {
            name: 'WorkHub - An Automated Email Management System',
            description: 'A Flask-based application integrating Google OAuth and OpenAI API to streamline job searching, email management, and data organization. Features include multiple GPT assistants tailored for specific tasks such as automated email drafting, content generation, and contextual processing. The platform allows web scraping and storage of job postings, with options to save listings and related applications locally. Users can also manage a database for job applications, track saved job postings, and organize company information with automated naming and data extraction. Designed as a unified solution to enhance and automate the job application process. Currently a work-in-progress.',
            technologies: ['Flask', 'SQLAlchemy', 'Google OAuth', 'OpenAI API'],
            link: 'https://github.com/CharlieRosander/WorkHub/tree/38382636e4352f62c7adb122750ca935b75b2d35'
        },
        {
            name: 'Image Recognition CNN',
            description: 'Developed and trained custom CNN models for image and character recognition, including enhancement with transfer learning for classifying cats, dogs, and handwritten characters.',
            technologies: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'Matplotlib'],
            link: 'https://github.com/CharlieRosander/Exam-DL/tree/3bb159bf1831a3d1719b870c70cffb21bac33a35'
        },
        {
            name: 'Machine Learning EDA',
            description: 'Built a machine learning model in Python to predict the Happiness Index of countries, using EDA, data preprocessing, and models like RandomForest and K-Nearest Neighbors.',
            technologies: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'LinearRegression', 'RandomForestClassifier', 'KNeighborsClassifier'],
            link: 'https://github.com/CharlieRosander/ML_Exam/tree/a908278d1b15d7ff348fda1bc15ee8049e884ce3'
        },
        {
            name: 'Classification Model Trainer',
            description: 'A tool that simplifies the process of training machine learning models on custom image data. Through a graphical interface, users can easily load their own training images and quickly train powerful image classification models without writing any code. The application supports both binary and categorical classification, while providing instant visualization of training results and model performance through graphs. Users can save their trained models for future use.',
            technologies: ['Python', 'TensorFlow', 'TKInter', 'Keras', 'CNN', 'Transfer Learning', 'Matplotlib'],
            link: 'https://github.com/CharlieRosander/ClassificationModelTrainer/tree/ff7c42eb4e6c51adda00a431e2d79ac199ad58ea'
        },
        {
            name: 'Analytics Dashboard',
            description: 'Developed a monitoring dashboard app in Flask to track customer software versions and antivirus engines, providing clear insights into outdated installations and helping identify systems in need of updates.',
            technologies: ['Flask', 'SQLite', 'Python', 'HTML/CSS'],
            link: ''
        }

    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-6 mb-4';
        projectCard.innerHTML = `
            <div class="card project-card h-100">
                <div class="card-body">
                    <h5 class="card-title">
                        ${project.link ? `<a href="${project.link}" target="_blank" style="text-decoration: none; color: inherit;">
                            ${project.name}
                            <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
                        </a>` : project.name}
                    </h5>
                    <p class="card-text">${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join('')}
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

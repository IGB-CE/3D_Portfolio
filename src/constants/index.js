const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    }
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Igli’s work on Localweb’s PHP-based web applications kept our existing projects stable and evolving. He reliably handled bug fixes, small features and performance improvements across the full stack using PHP, MySQL, HTML/CSS, JavaScript and Git.",
        imgPath: "/images/localweb_logo_exp.jpeg",
        logoPath: "/images/localweb_logo.jpeg",
        title: "Web Developer (PHP) Intern",
        date: "Internship at Localweb",
        responsibilities: [
            "Maintained and updated existing PHP-based web applications, fixing bugs and implementing small feature improvements according to client and internal requests.",
            "Debugged issues in legacy PHP code (forms, authentication, CRUD operations) and optimized queries to improve page load time and reliability.",
            "Worked with MySQL databases to update, query and migrate data, ensuring data integrity across different modules of the applications.",
            "Collaborated with senior developers to understand project requirements, propose technical solutions, and implement changes following coding standards.",
            "Updated front-end components (HTML/CSS/JavaScript) to correct layout issues, improve usability and align with the existing design.",
            "Used Git for version control to commit changes, create branches and resolve simple merge conflicts in a team environment.",
            "Wrote and updated basic technical documentation for new features and modified modules to help future maintenance.",
        ],
    },
    {
        review:
            "Igli quickly became a productive member of the Dominusoft team, delivering a full-stack MERN project from design to deployment. He worked confidently across frontend, backend and collaboration tools like Figma, Trello and GitHub.",
        imgPath: "/images/dominusoft_logo_exp.jpeg",
        logoPath: "/images/dominusoft_logo.jpeg",
        title: "Full-Stack Developer (MERN) – Intern",
        date: "Course & Internship at Dominusoft",
        responsibilities: [
            "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js), from database design to front-end UI.",
            "Built reusable React components and implemented REST API endpoints in Node.js/Express to handle authentication, CRUD operations and core business logic.",
            "Designed responsive user interfaces and user flows in Figma, then translated them into clean, maintainable React code.",
            "Integrated the frontend with MongoDB through Express/Node, ensuring data validation, error handling and secure access to resources.",
            "Managed project tasks and milestones using Trello, breaking down features into smaller tickets and tracking progress.",
            "Used GitHub for version control: creating branches, making pull requests and collaborating through code reviews.",
            "Worked closely with mentors and teammates to review code, refactor modules and improve performance and readability.",
        ],
    },
];

const expLogos = [
    {
        name: "localweb-logo",
        imgPath: "/images/localweb_logo.png",
    },
    {
        name: "dominusoft-logo",
        imgPath: "/images/dominusoft_logo.jpeg",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Khoi",
  middleName: "",
  lastName: "Vu",
  message: " I am a Full-Stack Developer. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ekhoivu",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/khoivu/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/khoivu.jpg"),
  imageSize: 375,
  message:
    "As a young man, I ignored the family's tech gene and pursued the business world, choosing Marketing and Finance as my future. This decision led me on a decade-long journey through more than ten cities, four countries, and three continents. It was the trip of a lifetime, filled with so many ups and downs, twists and turns, unforgettable memories, and the many wonderful people I met along the way. Years later, I am now finding my way back to my roots, pursuing my childhood dream and becoming the person I have always been destined to be. A tech man.",
  resume: "https://drive.google.com/file/d/16mMVsN7QBTi9ppGrzsQbyB7CAG4q3sU8/view?usp=sharing",
};

const project = {
  show: true,
  heading: "Projects",
  data: [
    {
      name: "Portfolio",
      description: "My portfolio website.",
      image: require("../assets/img/portoflio.jpg"),
      github: "https://github.com/ekhoivu/portfolio",
    },
    {
      name: "Website App",
      description: "A client – server site using MongoDB to store user’s info and performs user auth.",
      image: require("../assets/img/database.png"),
      github: "https://github.com/ekhoivu/SampleWebApp",
    },
    {
      name: "C++ Project",
      description: "A program that mimics an assembly line to process orders and items.",
      image: require("../assets/img/cpp.jpg"),
      github: "https://github.com/ekhoivu/SampleCppProject",
    },
    {
      name: "Mongo App",
      description: "A simple Cpp program to access an Oracle database and query, edit, and remove records.",
      image: require("../assets/img/mongo.png"),
      github: "https://github.com/ekhoivu/MongoApp",
    },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Vue3, Vuetify", value: 90 },
    { name: "Node.js", value: 90 },
    { name: "Rest API, Koa", value: 80 },
    { name: "Vitest, Playwright", value: 80 },
    { name: "HTML/CSS", value: 75 },
    { name: "TypeScript/JavaScript", value: 80 },
    { name: "Python", value: 80 },
    { name: "C, C++, C#, .Net", value: 40 },
    { name: "Angular", value: 40 },
    { name: "PHP/Twig", value: 40 },
  ],
  toolSkills: [
    { name: "Git/GitHub", value: 80 },
    { name: "VS, VS Code", value: 90 },
    { name: "Heroku/Cyclic/Replit", value: 80 },
    { name: "MySQL/PostGreSQL", value: 70 },
    { name: "MongoDB/NoSQL", value: 60 },
    { name: "BeyondCompare", value: 70 },
    { name: "Adobe Photoshop", value: 60 },
    { name: "MS Office", value: 80 },
    { name: "Windows", value: 90 },
    { name: "MacOS", value: 60 },
  ],
  softSkills: [
    { name: "Positive Attitude", value: 100 },
    { name: "Get it done", value: 80 },
    { name: "Work Ethic", value: 90 },
    { name: "Problem Solving", value: 80 },
    { name: "Creativity", value: 70 },
    { name: "Self Motivated", value: 100 },
    { name: "Leadership", value: 80 },
    { name: "Teamwork", value: 70 },
    { name: "Communications", value: 80 },
    { name: "Adatability", value: 80 },
  ],
};

const hobbies = {
  show: true,
  heading: "Hobbies",
  data: [
    { name: "Guitar", image: require("../assets/img/guitar1.jpg") },
    { name: "Worship", image: require("../assets/img/guitar2.jpg") },
    { name: "Football", image: require("../assets/img/football.jpg") },
    { name: "Tennis", image: require("../assets/img/tennis2.jpg") },
    { name: "Classic Novels", image: require("../assets/img/novel.jpg") },
    { name: "Video Games", image: require("../assets/img/tlou2.jpg") },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ekhoivu@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Full-Stack Developer",
      company: "Royal Bank of Canada",
      image: require("../assets/img/rbc.jpg"),
      date: "Jan 2023 – Present",
    },
    {
      role: "Registration Manager",
      company: "Blyth Academy",
      image: require("../assets/img/blyth.jpg"),
      date: "Sep 2019 – Nov 2021",
    },
    {
      role: "Universal Queue Banker",
      company: "ATB Financial",
      image: require("../assets/img/atb.jpg"),
      date: "Nov 2018 – Jul 2019",
    },
    {
      role: "Project Finance Manager",
      company: "Ericsson Vietnam & Myanmar",
      image: require("../assets/img/ericsson.jpg"),
      date: "Jul 2014 – Jul 2018",
    },
    {
      role: "Sales and Marketing Manager",
      company: "Family Business",
      image: require("../assets/img/anta.png"),
      date: "Aug 2015 – Jul 2018",
    },
    {
      role: "Project Management Associate",
      company: "Beacon Funding Corporation",
      image: require("../assets/img/beacon.jpg"),
      date: "Jun 2013 – Sep 2013",
    },
    {
      role: "Marketing Intern",
      company: "Tencent America",
      image: require("../assets/img/tencent.png"),
      date: "May 2012 – Aug 2012",
    },
    {
      role: "Consultant",
      company: "Illinois Business Consultant",
      image: require("../assets/img/ibc.png"),
      date: "Sep 2011 – May 2012",
    },
    {
      role: "President of Finance Club",
      company: "SUNY Brockport",
      image: require("../assets/img/brockport.jpg"),
      date: "Aug 2010 – May 2011",
    },
    {
      role: "Finance Intern",
      company: "AXA Advisors",
      image: require("../assets/img/axa.png"),
      date: "Jun 2009 – Jul 2009",
    },
    {
      role: "Marketing Intern",
      company: "IBM Vietnam",
      image: require("../assets/img/ibm.jpg"),
      date: "Jun 2008 – Aug 2008",
    },
  ],
};

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      school: "Seneca College",
      program: "Computer Programming and Analysis, GPA 4.0",
      scholarship: "",
      image: require("../assets/img/seneca.jpg"),
    },
    {
      school: "University of Illinois at Urbana Champaign",
      program: "Master of Business Administration, GPA 3.66",
      scholarship: "Scholarship, 30k",
      image: require("../assets/img/uiuc.jpeg"),
    },
    {
      school: "State University of New York at Brockport",
      program: "Bachelor, Finance and Marketing, GPA 3.67",
      scholarship: "Scholarship, Full Tuition and Half Board",
      image: require("../assets/img/brockport2.jpg"),
    },
  ],
};

export { navBar, mainBody, about, skills, getInTouch, experiences, education, project, hobbies };

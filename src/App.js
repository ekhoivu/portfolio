import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navBar, mainBody, about, skills, getInTouch, experiences, education, project, hobbies } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience";
import Education from "./components/home/Education.jsx";
import Hobbies from "./components/home/Hobbies.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody gradient={mainBody.gradientColors} title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`} message={mainBody.message} icons={mainBody.icons} ref={ref} />
      {about.show && <AboutMe heading={about.heading} message={about.message} link={about.imageLink} imgSize={about.imageSize} resume={about.resume} />}
      {skills.show && <Skills heading={skills.heading} hardSkills={skills.hardSkills} toolSkills={skills.toolSkills} softSkills={skills.softSkills} />}
      {education.show && <Education heading={education.heading} education={education} />}
      {experiences.show && <Experience heading={experiences.heading} experiences={experiences} />}
      {project.show && <Project heading={project.heading} project={project} />}
      {hobbies.show && <Hobbies heading={hobbies.heading} hobbies={hobbies} />}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>{getInTouch.show && <GetInTouch heading={getInTouch.heading} message={getInTouch.message} email={getInTouch.email} />}</Footer>
    </BrowserRouter>
  );
};

export default App;
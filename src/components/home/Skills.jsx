import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, toolSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <h2 ref={skillsTabRef} className="display-4 pb-4 text-center">
        {heading}
      </h2>
      <Tabs className="skills-tabs" defaultActiveKey="hard-skills" id="skills-tabs" fill>
        <Tab tabClassName="skills-tab lead" eventKey="hard-skills" title="Languages and Frameworks">
          <Row className="pt-3 px-1">
            <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
          </Row>
        </Tab>
        <Tab tabClassName="skills-tab lead" eventKey="tool-skills" title="Databases and Tools">
          <Row className="pt-3 px-1">
            <SkillsTab skills={toolSkills} isScrolled={isScrolled} />
          </Row>
        </Tab>
        <Tab tabClassName="skills-tab lead" eventKey="soft-skills" title="Personal skills">
          <Row className="pt-3 px-1">
            <SkillsTab skills={softSkills} isScrolled={isScrolled} />
          </Row>
        </Tab>
      </Tabs>
    </Jumbotron>
  );
});

export default Skills;

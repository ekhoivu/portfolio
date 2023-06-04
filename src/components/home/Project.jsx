import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row } from "react-bootstrap";

const Project = ({ project }) => {
  return (
    <section className="section">
      <Container id="project" fluid className="py-3 background3">
        <div className="container-fluid px-5 py-5">
          <h2 className="display-4 mb-5 text-center">{project.heading}</h2>
          <Row>
            {project.data.map((data, index) => {
              return <ProjectCard key={index} data={data} />;
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Project;

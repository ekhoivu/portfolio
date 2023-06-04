import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Container, Row } from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container id="experiences" fluid className="py-3 background2">
        <div className="container-fluid px-5 py-5">
          <h2 className="display-4 mb-5 text-center">{experiences.heading}</h2>
          <Row>
            {experiences.data.map((data, index) => {
              return <ExperienceCard key={index} data={data} />;
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;

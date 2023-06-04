import React from "react";
import EducationCard from "./EducationCard";
import { Container, Row } from "react-bootstrap";

const Education = ({ education }) => {
  return (
    <section className="section">
      <Container id="education" fluid className="py-3 background1">
        <div className="container-fluid px-5 py-5">
          <h2 className="display-4 mb-5 text-center">{education.heading}</h2>
          <Row>
            {education.data.map((data, index) => {
              return <EducationCard key={index} data={data} />;
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Education;

import React from "react";
import { Container, Row } from "react-bootstrap";
import HobbiesCard from "./HobbiesCard";

const Hobbies = ({ hobbies }) => {
  return (
    <section className="section">
      <Container id="hobbies" fluid className="py-3 background4">
        <div className="container-fluid px-5 py-5">
          <h2 className="display-4 mb-5 text-center">{hobbies.heading}</h2>
          <Row>
            {hobbies.data.map((data, index) => {
              return <HobbiesCard key={index} data={data} />;
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Hobbies;

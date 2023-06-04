import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col md={4}>
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3 img-fluid rounded" src={data.image} alt="" />
        <p className="lead">
          <b>{data.role}</b>
          <br />
          {data.company}
          <br />
          <i>{data.date}</i>
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;

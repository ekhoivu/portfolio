import React from "react";

import { Col } from "react-bootstrap";

const HobbiesCard = ({ data }) => {
  return (
    <Col md={3}>
      <div className="pb-5 text-center">
        <img className="mb-3 img-fluid rounded" src={data.image} alt="" />
        <p className="lead">
          <b>{data.name}</b>
        </p>
      </div>
    </Col>
  );
};

export default HobbiesCard;

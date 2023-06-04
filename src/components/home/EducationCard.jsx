import React from "react";

import { Col } from "react-bootstrap";

const EducationCard = ({ data }) => {
  return (
    <Col md={4}>
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3 img-fluid rounded" src={data.image} alt="" />
        <p className="lead">
          <b>{data.school}</b>
          <br />
          {data.program}
          <br />
          <i>{data.scholarship}</i>
        </p>
      </div>
    </Col>
  );
};

export default EducationCard;

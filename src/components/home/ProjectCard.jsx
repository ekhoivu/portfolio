import React from "react";

import { Col } from "react-bootstrap";

const ProjectCard = ({ data }) => {
  return (
    <Col md={3}>
      <div className="pb-5 text-center">
        <img className="mb-3 img-fluid rounded" src={data.image} alt="" />
        <p className="lead">
          <b>{data.name}</b>
          <br />
          {data.description}
          <br />
          <i className="fab fa-github" href={data.github} />
          <a href={data.github}>Link</a>
        </p>
      </div>
    </Col>
  );
};

export default ProjectCard;

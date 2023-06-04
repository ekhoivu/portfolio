import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container id="getintouch">
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a rel="noopener" href="https://github.com/ekhoivu" aria-label="My GitHub">
          {" "}
          <span className="badge bg-dark">Khoi Vu</span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">Template by Hashir Shoaeb. Thank you.</small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

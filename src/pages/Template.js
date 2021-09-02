import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Template = () => {
  return (
    <Container>
      <h1 className="text-center py-4">All Resume Template</h1>
      <div className="templateWrapper">
        <Row>
          <Col lg={2}>
            <img
              src="https://www.cvtemplatemaster.com/securecontent/uploads/2018/12/personal-attributes-cv.jpg"
              alt="person"
              className="resumeImg"
              width="100%"
            />
          </Col>
          <Col lg={10}>
            <h3>Jane Doe</h3>
            <h4 className="text-muted">Busness Development Manager</h4>
            <p className="">
              Professional Business Developer with more than four year of
              experience in the business development processes. Involved in
              product testing, management and new business opportunities
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Template;

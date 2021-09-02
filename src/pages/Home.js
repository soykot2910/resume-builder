import React from "react";
import { Container } from "react-bootstrap";
import Procedure from "../components/Procedure";

const Home = () => {
  return (
    <div className="home">
      <Container className="text-center " style={{ padding: "5rem 0rem" }}>
        <h1 className="heading">Build Your Dream Resume</h1>
        <p className="text-muted sub-heading ">
          Careating a Professional Resume and Cover Letter Easily
        </p>
        <a href="/editor" className="btn-custom">
          Build My Resume
        </a>
      </Container>
      <Procedure />
    </div>
  );
};

export default Home;

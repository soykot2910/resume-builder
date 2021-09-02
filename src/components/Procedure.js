import React from "react";
import { Container } from "react-bootstrap";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EditIcon from "@material-ui/icons/Edit";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const Procedure = () => {
  return (
    <div className="procedure text-center">
      <Container>
        <h1 className="text-start">How it works</h1>
        <div
          id="carouselExampleCaptions"
          class="carousel slide text-center"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <FileCopyIcon className="svg_icons" />
              <h3>Choose a resume Layout</h3>
              <p>
                You get to choose between several design options with our
                selection of free resume templates. This helps you match your
                resume to the type of company and position you want.
              </p>
            </div>
            <div class="carousel-item  ">
              <EditIcon className="svg_icons" />
              <h3>Develop and Optimize Your Content</h3>
              <p>
                Each resume template is organized into major content sections
                that you fill in while optimization tools guide you through the
                process. And adding or removing a specific section based on your
                needs is no problem and you get layout and content suggestions
                so that your resume looks perfect.
              </p>
            </div>
            <div class="carousel-item  ">
              <PictureAsPdfIcon className="svg_icons" />
              <h3>Export and Send</h3>
              <p>
                Once your content is finished, you can export your resume in PDF
                from the free resume builder. Your latest version is saved and
                you can always go back to make edits.
              </p>
            </div>
          </div>
        </div>
        <a href="/editor" className="btn-custom mt-3 ">
          Build My Resume
        </a>
      </Container>
    </div>
  );
};

export default Procedure;

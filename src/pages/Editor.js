import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Extras from "../components/Extras";

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: "2rem 0",
    background: theme.palette.background.paper,
  },
  formWrapper: {
    marginTop: "1rem",
    padding: "2rem 0",
    background: theme.palette.background.paper,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal Details",
    "Education Details",
    "Project Developed",
    "Experience Details",
    "Extras Details",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Personal Details";
    case 1:
      return "Education Details";
    case 2:
      return "Projects Developed";
    case 3:
      return "Experience Details";
    default:
      return "Extra Details";
  }
}

function getStepComponent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Profile />;
    case 1:
      return <Education />;
    case 2:
      return <Project />;
    case 3:
      return <Experience />;
    default:
      return <Extras />;
  }
}

export default function Editor() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div className={classes.stepper}>
        <Container>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </div>
      <div className={classes.formWrapper}>
        <Container>
          <Paper className="text-center pb-5">
            {getStepComponent(activeStep)}
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <Row>
                  <Col lg={3} xs={0} />
                  <Col lg={3} xs={5}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      color="secondary"
                      variant="contained"
                      className={classes.backButton}
                      startIcon={<NavigateBeforeIcon />}
                    >
                      Back
                    </Button>
                  </Col>
                  <Col lg={3} xs={5}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      endIcon={<NavigateNextIcon />}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          </Paper>
        </Container>
      </div>
    </>
  );
}

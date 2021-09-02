import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import BusinessIcon from "@material-ui/icons/Business";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Experience() {
  return (
    <>
      <Card>
        <CardHeader title="Experience Details" />
      </Card>
      <Grid container spacing={2} className="mt-2" alignItems="center" lg={12}>
        <Grid item xs={12} lg={4} alignItems="flex-end" alignContent="flex-end">
          <h5>
            <CheckCircleIcon />
            <span className="pl-3">Experience 1</span>
          </h5>
        </Grid>
        <Grid item xs={0} lg={8} />

        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="institute1"
            label="Institue/Organisation"
            style={{ width: "90%" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="position1"
            label="Position"
            style={{ width: "90%" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EventSeatIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="duration1"
            label="Duration"
            style={{ width: "90%" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TimelapseIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            label="Description"
            variant="outlined"
            style={{ width: "97%" }}
            name="experienceDescription1"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container spacing={2} alignItems="flex-start" lg={12}>
        <Grid item xs={12} lg={4} alignItems="flex-end" alignContent="flex-end">
          <h5>
            <CheckCircleIcon />
            <span className="pl-3">Experience 2</span>
          </h5>
        </Grid>
        <Grid item xs={0} lg={8} />
        <br />
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="institute2"
            label="Institue/Organisation"
            style={{ width: "90%" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="position2"
            label="Position"
            style={{ width: "90%" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <EventSeatIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="duration2"
            label="Duration"
            style={{ width: "90%" }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TimelapseIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            label="Description"
            variant="outlined"
            style={{ width: "97%" }}
            rows={3}
            name="experienceDescription2"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

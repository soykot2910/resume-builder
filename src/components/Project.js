import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import TitleIcon from "@material-ui/icons/Title";
import LinkIcon from "@material-ui/icons/Link";
import DescriptionIcon from "@material-ui/icons/Description";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Project() {
  return (
    <>
      <Card>
        <CardHeader title="Projects Developed" />
      </Card>
      <CardContent>
        <Card container spacing={2} alignItems="center" lg={12}>
          <Grid item xs={12} lg={12}>
            <h5>Project 1</h5>
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <TextField
              margin="dense"
              variant="outlined"
              name="title1"
              label="Title"
              style={{ width: "80%" }}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={12}>
            <TextField
              margin="dense"
              variant="outlined"
              name="link1"
              label="Link"
              style={{ width: "80%" }}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <TextField
              margin="dense"
              variant="outlined"
              name="projectDescription1"
              label="Description"
              style={{ width: "80%" }}
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
          <Grid item xs={12} lg={12}>
            <h5>Project 2</h5>
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <TextField
              margin="dense"
              variant="outlined"
              name="title2"
              label="Title"
              style={{ width: "80%" }}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={12}>
            <TextField
              margin="dense"
              variant="outlined"
              name="link2"
              label="Link"
              style={{ width: "80%" }}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <TextField
              margin="dense"
              variant="outlined"
              name="projectDescription2"
              label="Description"
              style={{ width: "80%" }}
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
          <br />
          <Divider />
          <br />
        </Card>
      </CardContent>
    </>
  );
}

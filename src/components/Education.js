import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import DateRangeIcon from "@material-ui/icons/DateRange";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Education() {
  return (
    <>
      <Card>
        <CardHeader title="Education Details" />
      </Card>
      <CardContent>
        <div>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="college"
                label="College/Unviersity"
                style={{ width: "80%" }}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="fromyear1"
                type="date"
                style={{ width: "80%" }}
                required
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="toyear1"
                type="date"
                style={{ width: "80%" }}
                required
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                label="Qualification"
                variant="outlined"
                style={{ width: "80%" }}
                name="qualification1"
                required
              />
            </Grid>

            <Grid item md={8} sm={12} xs={12} lg={8}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "90%" }}
                name="description1"
                required
              />
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="school"
                label="School"
                style={{ width: "80%" }}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="fromyear2"
                type="date"
                style={{ width: "80%" }}
                required
              />
            </Grid>

            <Grid item md={4} sm={6} xs={12} lg={4}>
              <TextField
                margin="dense"
                variant="outlined"
                name="toyear2"
                type="date"
                style={{ width: "80%" }}
                required
              />
            </Grid>

            <Grid item md={4} sm={12} xs={12} lg={4}>
              <TextField
                margin="dense"
                label="Qualification"
                variant="outlined"
                style={{ width: "80%" }}
                name="qualification2"
                required
              />
            </Grid>

            <Grid item md={8} sm={8} xs={8} lg={8}>
              <TextField
                margin="dense"
                label="Description"
                variant="outlined"
                style={{ width: "90%" }}
                name="description2"
                required
              />
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </>
  );
}

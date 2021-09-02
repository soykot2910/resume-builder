import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import GetAppIcon from "@material-ui/icons/GetApp";

export default function Extras() {
  return (
    <>
      <Card>
        <CardHeader title="Extras Details" />
      </Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center" lg={12}>
          <Grid
            item
            xs={12}
            lg={4}
            alignItems="flex-end"
            alignContent="flex-end"
          >
            <h5>
              <CheckCircleIcon />
              <span className="pl-3">Skills/Languages</span>
            </h5>
          </Grid>
          <Grid item xs={0} lg={8} />
          <br />
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="skill1"
              label="Skill 1"
              style={{ width: "90%" }}
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="skill2"
              label="Skill 2"
              style={{ width: "90%" }}
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="skill3"
              label="Skill 3"
              style={{ width: "90%" }}
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="skill4"
              label="Skill 4"
              style={{ width: "90%" }}
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="skill5"
              label="Skill 5"
              style={{ width: "90%" }}
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="skill6"
              label="Skill 6"
              style={{ width: "90%" }}
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container spacing={2} alignItems="flex-start" lg={12}>
          <Grid
            item
            xs={12}
            lg={4}
            alignItems="flex-end"
            alignContent="flex-end"
          >
            <h5>
              <CheckCircleIcon />
              <span className="pl-3">Interest</span>
            </h5>
          </Grid>
          <Grid item xs={0} lg={8} />
          <br />
          <Grid item md={12} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Interest 1"
              variant="outlined"
              style={{ width: "90%" }}
              name="interest1"
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Interest 2"
              variant="outlined"
              style={{ width: "90%" }}
              name="interest2"
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Interest 3"
              variant="outlined"
              style={{ width: "90%" }}
              name="interest3"
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Interest 4"
              variant="outlined"
              style={{ width: "90%" }}
              name="interest4"
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Interest 5"
              variant="outlined"
              style={{ width: "90%" }}
              name="interest5"
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Interest 6"
              variant="outlined"
              style={{ width: "90%" }}
              name="interest6"
              InputProps={{
                endAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
}

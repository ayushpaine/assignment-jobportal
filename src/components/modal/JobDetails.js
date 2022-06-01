import React from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { FilledInput } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Chip } from "@mui/material";

const JobDetails = (props) => {
  return (
    <>
      <Dialog open={!!Object.keys(props.job).length} fullWidth>
        <DialogTitle>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flex: "1",
              alignItems: "center",
              paddingY: "10px",
            }}
          >
            <Grid item>
              <Typography variant="h4">Details</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={props.closeModal}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography>Company Name: {props.job.companyName}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Title: {props.job.jobTitle}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Location: {props.job.location}</Typography>
            </Grid>
            <Grid
              item
              container
              sx={{
                display: "flex",
                flex: "1",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              {
                <Box
                  marginTop={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Skills required:</Typography>
                  {props.job.skills &&
                    props.job.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        color="primary"
                        label={skill}
                        sx={{
                          padding: "4px",
                          margin: "2px",
                        }}
                      />
                    ))}
                </Box>
              }
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Duration: {props.job.duration}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Description: {props.job.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Minimum and Maximum Years of Experience Required:{" "}
                {props.job.minYrsExp} years, {props.job.maxYrsExp} years
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Minimum and Maximum Years of Graduation Required:{" "}
                {props.job.minGradBatch} , {props.job.maxGradBatch}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Functional Area: {props.job.functionalArea}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Category: {props.job.category}</Typography>
            </Grid>
            <Grid
              item
              container
              sx={{
                display: "flex",
                flex: "1",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              {
                <Grid
                  item
                  container
                  marginTop={1}
                  sx={{
                    display: "flex",
                    flex: "1",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item xs={2}>
                    <Typography>Job Tags:</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    {props.job.jobTags ? (
                      props.job.jobTags.map((skill, i) => (
                        <Chip
                          key={i}
                          color="primary"
                          label={skill}
                          sx={{
                            padding: "4px",
                            margin: "2px",
                          }}
                        />
                      ))
                    ) : (
                      <Typography>No tags</Typography>
                    )}
                  </Grid>
                </Grid>
              }
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobDetails;

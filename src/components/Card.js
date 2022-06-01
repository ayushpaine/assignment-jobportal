import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Chip } from "@mui/material";
import { useState } from "react";

const Card = (props) => {
  const skills = ["Lund", "Wund", "bund"];

  const [search, setSearch] = useState({
    type: "",
  });

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#ffb8cd",
          width: "100%",
          marginX: "10%",
          marginY: "4%",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            item
            container
            sx={{
              display: "flex",
              flex: "1",
            }}
          >
            <Grid item>
              <Chip
                label={props.companyName}
                sx={{
                  fontSize: "1rem",
                }}
              />

              <Typography variant="h6">{props.jobTitle}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              display: "flex",
              flex: "1",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {
              <Box
                marginTop={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {props.skills.map((skill, i) => (
                  <Chip
                    color="secondary"
                    key={i}
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
          <Grid
            item
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              alignItems: "flex-end",
            }}
          >
            <Grid item>
              <Typography variant="h6">{props.duration}</Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={props.open}
                variant="outline"
                sx={{
                  color: "black",
                  border: "1px solid black",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                <Typography>View Details</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Card;

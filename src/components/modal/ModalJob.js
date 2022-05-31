import React from "react";
import ModalJobBasic from "./ModalJobBasic";
import { Button, Dialog, IconButton, Typography } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogTitle } from "@mui/material";
import ModalTargetting from "./ModalTargetting";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const ModalJob = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Post Job
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <ModalJobBasic />
          <ModalTargetting />
        </DialogContent>
        <DialogActions>
          <Grid
            container
            sx={{
              color: "red",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingX: "16px",
            }}
          >
            <Typography variant="caption">*Required Fields</Typography>
            <Button variant="contained" disableElevation color="primary">
              Post Job
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalJob;

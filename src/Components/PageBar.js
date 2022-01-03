import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@material-ui/core";

const PageBar = ({ rightComponent }) => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Typography variant="h5" color="inherit" style={{ fontSize: 24 }}>
            BREWERIES APP
          </Typography>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {rightComponent}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default PageBar;

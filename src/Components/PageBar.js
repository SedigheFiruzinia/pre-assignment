import React from "react";
import {
  Link,
  Box,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@material-ui/core";

const rightLink = {
  fontSize: 16,
  color: "commonWhite",
};

const PageBar = ({ rightComponent }) => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Typography variant="h6" color="inherit" style={{ fontSize: 24 }}>
            ABOUT BREWERIES
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

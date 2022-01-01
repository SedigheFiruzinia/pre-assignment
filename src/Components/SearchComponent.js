import React from "react";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

export default function CustomizedInputBase() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBlock: "40px",
      }}
    >
      <Paper variant="outlined">
        <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          placeholder="Search for a user"
          inputProps={{ "aria-label": "search for a user" }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon color="primary" />
        </IconButton>
      </Paper>
    </div>
  );
}

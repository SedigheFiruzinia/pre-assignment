import React, { useState } from "react";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import _ from "lodash";

const SearchComponent = ({ breweries, setFiltered }) => {
  const [value, setValue] = useState("");

  const find = (e) => {
    e.preventDefault();
    const arr = _.map(breweries, (b) => _.pickBy(b, _.identity));
    const result = arr.filter((obj) =>
      Object.values(obj).some((val) =>
        val.toLowerCase().includes(value.toLowerCase())
      )
    );
    setFiltered(result);
  };

  const clearFilter = () => {
    setValue("");
    setFiltered(breweries);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper variant="outlined" component="form" onSubmit={find}>
        <InputBase
          onChange={(event) => setValue(event.target.value)}
          style={{ marginLeft: "8px" }}
          value={value}
          placeholder="Search Brewery"
          inputProps={{ "aria-label": "search brewery" }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon color="primary" />
        </IconButton>
        <IconButton onClick={() => clearFilter()} aria-label="clear">
          <ClearIcon color="primary" />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchComponent;

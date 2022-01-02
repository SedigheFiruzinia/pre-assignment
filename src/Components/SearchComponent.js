import React, { useState } from "react";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import _ from "lodash";

const SearchComponent = ({ breweries, setFiltered, filtered }) => {
  const [value, setValue] = useState("");

  const find = (e) => {
    e.preventDefault();

    const arr = _.map(breweries, (b) => _.pickBy(b, _.identity));
    console.log(arr);

    const result = arr.filter((obj) =>
      Object.values(obj).some((val) =>
        val.toLowerCase().includes(value.toLowerCase())
      )
    );

    setFiltered(result);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBlock: "40px",
      }}
    >
      <Paper variant="outlined" component="form" onSubmit={find}>
        <InputBase
          onChange={(event) => setValue(event.target.value)}
          style={{ marginLeft: "8px" }}
          placeholder="Search Brewery"
          inputProps={{ "aria-label": "search brewery" }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon color="primary" />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchComponent;

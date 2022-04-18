import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MainContext } from "../Main";

const Search = () => {
  const { handleSearch, handleSubmit, searchTrem } = useContext(MainContext);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTrem}
        onChange={(e) => handleSearch(e)}
      />
      <button type="submit">
        <i className="material-icons">
          <SearchIcon />
        </i>
      </button>
    </form>
  );
};

export default Search;

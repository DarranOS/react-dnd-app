import React from "react";
import { useState } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useState("Searching..");

  const changeHandler = (e) => {
    setSearchParams(e.target.value);
  };

  const submitHandler = (e, string) => {
    e.preventDefault();
    console.log(string);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e, searchParams);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            changeHandler(e);
          }}
          value={searchParams}
        />
        <p>Searching for {searchParams}</p>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;

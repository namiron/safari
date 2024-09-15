import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import searchStyle from "../../modules/search.module.scss";
import "../../wrapper.scss";

const Search = ({ productList, handleSearchList }) => {
  const [search, setSearch] = useState("");

  const handleSearchForTitles = (e) => {
    setSearch(e.target.value);
  };
  const filterProductList = (array = []) => {
    const newProductList = array.filter((el) => el.title.includes(search));
    handleSearchList(newProductList);
    setSearch("");
  };
  return (
    <div className={searchStyle.search}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleSearchForTitles}
        className={searchStyle.searchInput}
        placeholder="Search..."
      />
      <button
        onClick={() => filterProductList(productList)}
        className={searchStyle.searchIcon}
      >
        <IoSearchSharp className="iconSearch" />
      </button>
    </div>
  );
};

export default Search;

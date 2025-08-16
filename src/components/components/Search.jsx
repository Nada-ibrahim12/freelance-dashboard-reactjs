import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className="search-bar flex">
        <input
          type="text"
          placeholder="Search..."
          className="search-input border-2 border-gray-800 p-1 pl-3 rounded border-r-0 rounded-r-none placeholder:text-gray-900 placeholder:opacity-50"
        />
        <button className="search-button bg-gray-800 text-white font-thin p-1 rounded rounded-l-none">
          Search
        </button>
      </div>
    );
  }
}

export default Search;

import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";

function SearchInput({
  handleSearchInput,
  searchInput,
}: {
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchInput: string;
}) {
  return (
    <div className="relative w-[370px]">
      <span className="absolute top-4 left-4">
        <ICONS.SearchIcon />
      </span>
      <input
        value={searchInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleSearchInput(event)
        }
        type="text"
        placeholder="Search..."
        className="w-full outline-none font-semibold input-radius border-2 border-gray-300 focus:border-primary h-14 duration-500 pl-11"
      />
    </div>
  );
}

export default SearchInput;

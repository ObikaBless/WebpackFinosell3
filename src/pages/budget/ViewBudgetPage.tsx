import React from "react";
import SearchInput from "../../components/inputs/SearchInput";
import { ICONS } from "../../assets/svgs/ICONS";
import BudgetTable, { IcreateData } from "../../components/table/Table";
import { Link } from "react-router-dom";

function ViewBudgetPage({
  searchInput,
  handleSearchInput,
  budgetData,
}: {
  searchInput: string;
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  budgetData: IcreateData[];
}) {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <SearchInput
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
        <div className="button-group flex items-center gap-x-4">
          <button className="h-14 px-7 border-2 text-md border-gray-300 flex items-center gap-x-2 font-semibold button-radius">
            Filter <ICONS.CaretDownIcon />
          </button>
          <Link to={"#add-budget"} className="h-14 bg-primary text-white text-md px-6 border-2 border-primary flex items-center gap-x-2 font-semibold button-radius">
            Add Budget
          </Link>
        </div>
      </div>
      <div className="container w-full py-6">
        <BudgetTable budgetData={budgetData} />
      </div>
    </div>
  );
}

export default ViewBudgetPage;

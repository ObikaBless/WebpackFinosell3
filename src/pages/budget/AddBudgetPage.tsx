import React from "react";
import { useMutation } from "@tanstack/react-query";
import  axios from "axios";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/svgs/ICONS";
import TabOne from "./add-budget-tab/TabOne";
import TabThree from "./add-budget-tab/TabThree";
import TabTwo from "./add-budget-tab/TabTwo";
import { addBudget } from "../../components/APIs/Mutate";

function AddBudgetPage() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const onchange=(num:number):void=>{
    setActiveTabIndex(num)
  }
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useMutation(addBudget,
  {

    
  })



  return (
    <div className="">
      <div className="top w-full flex flex-col">
        <Link to={"/dashboard/budget"} className="flex items-center gap-x-2">
          <ICONS.CaretArrowLeftIcon />
          <p className="font-semibold text-md text-gray-600">Back</p>
        </Link>
        <h5 className="font-bold text-gray-800 text-md my-4">
          What type of Budget Do you Need 3
        </h5>
        <div className="tab-container flex items-center gap-x-2 mt-4">
          <button
            onClick={onchange.bind(null,0)}
            className={`h-9 text-sm px-2 font-semibold flex items-start border-b-2 ${
              activeTabIndex === 0
                ? "border-primary text-primary"
                : "text-gray-600 border-transparent"
            } `}
          >
            Select type of Spend
          </button>

          <button
            onClick={onchange.bind(null,1)}
            className={`h-9 text-sm px-2 font-semibold flex items-start border-b-2 ${
              activeTabIndex === 1
                ? "border-primary text-primary"
                : "text-gray-600 border-transparent"
            } `}
          >
            Budget Details
          </button>
          <button
            onClick={onchange.bind(null,2)}
            className={`h-9 text-sm px-2 font-semibold flex items-start border-b-2 ${
              activeTabIndex === 2
                ? "border-primary text-primary"
                : "text-gray-600 border-transparent"
            } `}
          >
            Review
          </button>
        </div>
      </div>
      <div className="tab-container py-5">
        {activeTabIndex === 0 && <TabOne onchange={onchange}/>}
        {activeTabIndex === 1 && <TabTwo />}
        {activeTabIndex === 2 && <TabThree />}
      </div>
    </div>
  );
}

export default AddBudgetPage;

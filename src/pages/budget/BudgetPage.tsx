import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { IcreateData } from "../../components/table/Table";
import AddBudgetPage from "./AddBudgetPage";
import ViewBudgetPage from "./ViewBudgetPage";

function BudgetPage() {
  const [budgetData, setBudgetData] = React.useState<IcreateData[]>([]);
  const [budgetDataBackup, setBudgetDataBackup] = React.useState<IcreateData[]>(
    []
  );
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [setPageName] = useOutletContext<any>();
  const location = useLocation();

  React.useEffect(() => {
    const data = [
      {
        budgetName: "Human Resources",
        dateCreated: "",
        spent: "",
        status: "",
        limit: "",
        subBudget: [
          {
            budgetName: "Human Resources",
            dateCreated: "June 25,2023",
            spent: "7200.00",
            status: "active",
            limit: "25",
          },
          {
            budgetName: "Human Resources",
            dateCreated: "June 25,2023",
            spent: "10000.00",
            status: "active",
            limit: "0",
          },
        ],
      },
    ];
    setBudgetData(data);
    setBudgetDataBackup(data);
  }, []);

  React.useEffect(() => {
    setPageName("Budget");
  }, [setPageName]);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInput(value);
    if (value.length > 3) {
      console.log(value);
      let matchedResult: any = [];
      budgetDataBackup.forEach((eachBudget) => {
        const result = eachBudget.subBudget.filter(
          (eachSub) =>
            eachSub.budgetName.toLowerCase().includes(value.toLowerCase()) ||
            eachSub.dateCreated.toLowerCase().includes(value.toLowerCase()) ||
            eachSub.limit.toLowerCase().includes(value.toLowerCase()) ||
            eachSub.spent.toLowerCase().includes(value.toLowerCase()) ||
            eachSub.status.toLowerCase().includes(value.toLowerCase())
        );
        if (result.length > 0) {
          matchedResult.push(eachBudget);
        }
      });
      console.log(matchedResult);
      setBudgetData(matchedResult);
    } else {
      setBudgetData(budgetDataBackup);
    }
  };
  return (
    <React.Fragment>
      {location.hash === "#add-budget" ? (
        <AddBudgetPage />
      ) : (
        <ViewBudgetPage
          budgetData={budgetData}
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
        />
      )}
    </React.Fragment>
  );
}

export default BudgetPage;
